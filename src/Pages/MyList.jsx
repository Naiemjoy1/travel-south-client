import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import TouristsSpotCard from "./TouristsSpotCard";
import useAuth from "../hooks/useAuth";
import MyListCard from "./MyListCard";

const MyList = () => {
  const { user } = useAuth();
  const [sortOrder, setSortOrder] = useState("");
  const [sortByCountry, setSortByCountry] = useState("");
  const [spots, setSpots] = useState([]);
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "My List";
  }, []);

  const handleSort = (order) => {
    setSortOrder(order);
  };

  const handleSortByCountry = (country) => {
    setSortByCountry(country);
  };

  const filteredSpots = user
    ? spots.filter((spot) => spot.user_email === user.email)
    : [];

  let sortedSpots = filteredSpots.slice();

  if (sortOrder === "ascending") {
    sortedSpots = sortedSpots.sort((a, b) => a.average_cost - b.average_cost);
  } else if (sortOrder === "descending") {
    sortedSpots = sortedSpots.sort((a, b) => b.average_cost - a.average_cost);
  }

  if (sortByCountry) {
    sortedSpots = sortedSpots.filter(
      (spot) => spot.country_Name === sortByCountry
    );
  }

  useEffect(() => {
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
        setCards(data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDeleteSpot = (deletedSpotId) => {
    setSpots(spots.filter((spot) => spot._id !== deletedSpotId));
    setCards(cards.filter((card) => card._id !== deletedSpotId));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div>
          <span className="loading loading-spinner loading-lg text-2xl text-primary"></span>
        </div>
      </div>
    );
  }

  const countries = [
    "Bangladesh",
    "Thailand",
    "Indonesia",
    "Malaysia",
    "Vietnam",
    "Cambodia",
  ];

  // Shuffle the sortedSpots array randomly
  const shuffledSpots = sortedSpots.sort(() => Math.random() - 0.5);

  return (
    <div className=" mt-10 mb-10 min-h-[calc(100vh-564px)]">
      <div className="flex justify-center mb-5">
        <select
          onChange={(e) => handleSortByCountry(e.target.value)}
          value={sortByCountry}
          className="ml-3"
        >
          <option value="">Sort by Country</option>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
      {shuffledSpots.length === 0 ? (
        <p className="text-center text-gray-500">
          You have no data to show{" "}
          <span className=" text-primary">
            <Link to="/addspot">add tourists spot</Link>
          </span>
          .
        </p>
      ) : (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 px-5 lg:px-10">
          {shuffledSpots.map((spot) => (
            <MyListCard
              key={spot._id}
              spot={spot}
              cards={cards}
              setCards={setCards}
              onDelete={handleDeleteSpot}
            ></MyListCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyList;
