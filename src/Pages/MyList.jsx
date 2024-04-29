import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import TouristsSpotCard from "./TouristsSpotCard";
import useAuth from "../hooks/useAuth";
import MyListCard from "./MyListCard";

const MyList = () => {
  const { user } = useAuth();
  const [sortOrder, setSortOrder] = useState("");
  const [spots, setSpots] = useState([]);
  const [cards, setCards] = useState([]);

  const handleSort = (order) => {
    setSortOrder(order);
  };

  // Check if user exists before accessing its properties
  const filteredSpots = user
    ? spots.filter((spot) => spot.user_email === user.email)
    : [];

  const sortedSpots = filteredSpots.slice().sort((a, b) => {
    if (sortOrder === "ascending") {
      return a.average_cost - b.average_cost;
    } else if (sortOrder === "descending") {
      return b.average_cost - a.average_cost;
    }
    return 0;
  });

  useEffect(() => {
    // Fetch data from server and set it to state
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://assaignment-server.vercel.app/spot"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setSpots(data);
        setCards(data); // Initialize cards state with fetched data
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  const handleDeleteSpot = (deletedSpotId) => {
    setSpots(spots.filter((spot) => spot._id !== deletedSpotId));
    setCards(cards.filter((card) => card._id !== deletedSpotId)); // Update cards state
  };

  return (
    <div className=" mt-10 mb-10">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 px-5 lg:px-10">
        {sortedSpots.map((spot) => (
          <MyListCard
            key={spot._id}
            spot={spot}
            cards={cards}
            setCards={setCards}
            onDelete={handleDeleteSpot}
          ></MyListCard>
        ))}
      </div>
    </div>
  );
};

export default MyList;
