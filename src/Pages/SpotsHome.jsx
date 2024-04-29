import React, { useEffect, useState } from "react";
import SpotsCard from "./SpotsCard";
import { Fade } from "react-awesome-reveal";

const SpotsHome = () => {
  const [spotsData, setSpotsData] = useState([]);

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
        setSpotsData(data);
        console.log(data); // Set the fetched data in state
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  // Function to shuffle array elements randomly
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const shuffleSpots = (spots) => {
    const spotsByCountry = {};
    spots.forEach((spot) => {
      if (!spotsByCountry[spot.countryName]) {
        spotsByCountry[spot.countryName] = [];
      }
      spotsByCountry[spot.countryName].push(spot);
    });

    const shuffledSpots = [];
    const countryNames = Object.keys(spotsByCountry);
    while (countryNames.length > 0) {
      const randomCountryIndex = Math.floor(
        Math.random() * countryNames.length
      );
      const randomCountryName = countryNames[randomCountryIndex];
      const randomCountrySpots = spotsByCountry[randomCountryName];
      const randomSpotIndex = Math.floor(
        Math.random() * randomCountrySpots.length
      );
      shuffledSpots.push(randomCountrySpots[randomSpotIndex]);
      randomCountrySpots.splice(randomSpotIndex, 1);
      if (randomCountrySpots.length === 0) {
        delete spotsByCountry[randomCountryName];
        countryNames.splice(randomCountryIndex, 1);
      }
    }

    return shuffledSpots;
  };

  return (
    <div className="my-10 mx-10">
      <div className="lg:w-3/6 text-center lg:text-left">
        <h2 className="font-reenie text-[#5c98f2] font-bold text-3xl mb-4">
          Dream Vacation Destination
        </h2>
        <h2 className="font-poppins font-bold text-5xl mb-4">
          Plan the Trip of a Lifetime <br />
          with Ease
        </h2>
        <h2 className="mb-4 text-gray-500">
          Whether you're looking for a romantic getaway, a family-friendly
          adventure, or a solo journey to explore the world, a travel agency can
          provide you with a custom-tailored itinerary that exceeds your
          expectations.
        </h2>
        <button className="btn bg-[#5c98f2] text-white">More Info</button>
      </div>
      <Fade delay={1e2}>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 mt-10">
          <div
            className="h-[120px] rounded-xl flex items-center lg:px-10 md:px-10 px-5"
            style={{
              backgroundImage: "url(https://i.ibb.co/KKpb3bn/banner-01.jpg)",
              backgroundSize: "cover", // Add this line
              backgroundPosition: "center", // Optionally, to center the background image
            }}
          >
            <img
              className=" w-20 h-20"
              src="https://i.ibb.co/XFswypP/icon-001.gif"
              alt=""
            />
            <h2 className=" text-2xl font-poppins font-bold text-white w-3/5 text-right">
              Electric Bikes
            </h2>
          </div>
          <div
            className="h-[120px] rounded-xl flex items-center p-10"
            style={{
              backgroundImage: "url(https://i.ibb.co/kQ9HfcQ/banner-02.jpg)",
              backgroundSize: "cover", // Add this line
              backgroundPosition: "center", // Optionally, to center the background image
            }}
          >
            <img
              className=" w-20 h-20"
              src="https://i.ibb.co/N7LcJVQ/icon-002.gif"
              alt=""
            />
            <h2 className=" text-2xl font-poppins font-bold text-white w-3/5 text-right">
              Electric Bikes
            </h2>
          </div>
          <div
            className="h-[120px] rounded-xl flex items-center lg:px-10 md:px-10 px-5"
            style={{
              backgroundImage: "url(https://i.ibb.co/yQWVTwT/banner-05.jpg)",
              backgroundSize: "cover", // Add this line
              backgroundPosition: "center", // Optionally, to center the background image
            }}
          >
            <img
              className=" w-20 h-20"
              src="https://i.ibb.co/TMWhw7v/icon-003.gif"
              alt=""
            />
            <h2 className=" text-2xl font-poppins font-bold text-white w-3/5 text-right">
              Skyscrapers View
            </h2>
          </div>
        </div>
      </Fade>
      <Fade delay={1e2}>
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 items-center justify-between mt-10">
          {shuffleArray(shuffleSpots(spotsData))
            .slice(0, 6)
            .map((spot, index) => (
              <SpotsCard key={spot._id} spot={spot}></SpotsCard>
            ))}
        </div>
      </Fade>
    </div>
  );
};

export default SpotsHome;
