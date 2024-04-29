import React, { useEffect, useState } from "react";
import CountrySlider from "../Components/CountrySlider/CountrySlider";
import SpotsCard from "./SpotsCard";
import { Fade } from "react-awesome-reveal";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { useMediaQuery } from "@react-hook/media-query";

const Countries = () => {
  const [spotsData, setSpotsData] = useState([]);
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isMedium = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5001/spot");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setSpotsData(data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  const uniqueCountryNames = [
    ...new Set(spotsData.map((spot) => spot.country_Name)),
  ];

  const getSlidesPerView = () => {
    if (isMobile) return 1;
    if (isMedium) return 3;
    return 4;
  };

  const getNavigation = () => {
    if (isMobile) return true;
    if (isMedium) return true;
    return false;
  };

  return (
    <div className=" lg:px-10 md:px-10 px-5">
      <Fade delay={1e2}>
        <div className=" lg:w-3/6 text-center lg:text-left">
          <h2 className=" font-reenie text-[#5c98f2] font-bold text-3xl mb-4">
            Next Adventure
          </h2>
          <h2 className=" font-poppins font-bold text-5xl mb-4">
            Travel Destinations Available Worldwide
          </h2>
          <h2 className=" mb-4 text-gray-500">
            We have compiled a list of top destinations across the globe,
            scoured the world for the most alluring and fascinating places to
            visit. From the beautiful beaches of the Caribbean to the majestic
            mountains of Europe and the vibrant cities of Asia, our destination
            list has something for everyone.
          </h2>
          <button className=" btn  bg-[#5c98f2] text-white">More Info</button>
        </div>
      </Fade>
      <Fade delay={1e2}>
        <div className=" mt-10 mb-10">
          <Swiper
            spaceBetween={20}
            slidesPerView={getSlidesPerView()}
            navigation={getNavigation()}
            autoplay={{ delay: 3000 }}
            loop={true}
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            className="mySwiper"
          >
            {uniqueCountryNames.map((countryName, index) => {
              // Find the first spot with the current country name
              const spot = spotsData.find(
                (spot) => spot.country_Name === countryName
              );
              return (
                <SwiperSlide key={index}>
                  <CountrySlider spot={spot}></CountrySlider>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </Fade>
    </div>
  );
};

export default Countries;
