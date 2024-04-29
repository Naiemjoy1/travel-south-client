import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import TouristsSpotCard from "./TouristsSpotCard";
import useAuth from "../hooks/useAuth";

const TouristsSpot = () => {
  const { user } = useAuth();

  useEffect(() => {
    document.title = "Tourists Spot";
  }, []);

  // console.log(user);
  const spots = useLoaderData();
  const [sortOrder, setSortOrder] = useState("");

  const handleSort = (order) => {
    setSortOrder(order);
  };

  const sortedSpots = spots.slice().sort((a, b) => {
    if (sortOrder === "ascending") {
      return a.average_cost - b.average_cost;
    } else if (sortOrder === "descending") {
      return b.average_cost - a.average_cost;
    }
    return 0;
  });

  return (
    <div className=" mt-10 mb-10">
      <div className=" text-center mb-5">
        <select onChange={(e) => handleSort(e.target.value)} value={sortOrder}>
          <option value="">Sort by Cost</option>
          <option value="ascending">Lowest to Highest</option>
          <option value="descending">Highest to Lowest</option>
        </select>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 px-5 lg:px-10">
        {sortedSpots.map((spot) => (
          <TouristsSpotCard key={spot._id} spot={spot} />
        ))}
      </div>
    </div>
  );
};

export default TouristsSpot;
