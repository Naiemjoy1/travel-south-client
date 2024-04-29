import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import TouristsSpotCard from "./TouristsSpotCard";
import useAuth from "../hooks/useAuth";

const TouristsSpot = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("");
  const [sortByCountry, setSortByCountry] = useState("");

  useEffect(() => {
    document.title = "Tourists Spot";
    const delay = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(delay);
  }, []);

  const spots = useLoaderData();

  const handleSort = (order) => {
    setSortOrder(order);
  };

  const handleSortByCountry = (country) => {
    setSortByCountry(country);
  };

  const shuffleArray = (array) => {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  let sortedSpots = spots.slice();

  if (sortOrder === "ascending") {
    sortedSpots = sortedSpots.sort((a, b) => a.average_cost - b.average_cost);
  } else if (sortOrder === "descending") {
    sortedSpots = sortedSpots.sort((a, b) => b.average_cost - a.average_cost);
  }

  if (sortByCountry !== "") {
    sortedSpots = sortedSpots.filter(
      (spot) => spot.country_Name === sortByCountry
    );
  }

  sortedSpots = shuffleArray(sortedSpots);

  const countryOptions = [
    "Bangladesh",
    "Thailand",
    "Indonesia",
    "Malaysia",
    "Vietnam",
    "Cambodia",
  ];

  return (
    <div className="mt-10 mb-10">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div>
            <span className="loading loading-spinner loading-lg text-primary text-2xl"></span>
          </div>
        </div>
      ) : (
        <>
          <div className="text-center flex justify-center items-center gap-40 mb-10">
            <select
              onChange={(e) => handleSort(e.target.value)}
              value={sortOrder}
            >
              <option value="">Sort by Cost</option>
              <option value="ascending">Lowest to Highest</option>
              <option value="descending">Highest to Lowest</option>
            </select>
            <select
              onChange={(e) => handleSortByCountry(e.target.value)}
              value={sortByCountry}
              className="ml-3"
            >
              <option value="">Sort by Country</option>
              {countryOptions.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 px-5 lg:px-10">
            {sortedSpots.map((spot) => (
              <TouristsSpotCard key={spot._id} spot={spot} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default TouristsSpot;
