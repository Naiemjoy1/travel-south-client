import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import TouristsSpotCard from "./TouristsSpotCard";
import useAuth from "../hooks/useAuth";
import MyListCard from "./MyListCard";

const MyList = () => {
  const { user } = useAuth();
  const spots = useLoaderData();
  const [sortOrder, setSortOrder] = useState("");

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
  return (
    <div className=" mt-10 mb-10">
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 px-5 lg:px-10">
        {sortedSpots.map((spot) => (
          <MyListCard key={spot._id} spot={spot}></MyListCard>
        ))}
      </div>
    </div>
  );
};

export default MyList;
