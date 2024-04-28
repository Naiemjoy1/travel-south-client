import { useEffect, useState } from "react";
import { AiFillClockCircle } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { GiCheckMark } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { LuMinus, LuPlus } from "react-icons/lu";
import { useLoaderData } from "react-router-dom";
import SpotsCard from "./SpotsCard";
import PackageSlider from "../Components/PackageSlider/PackageSlider";
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

const SpotDetails = () => {
  const spot = useLoaderData();
  const [spotsData, setSpotsData] = useState([]);

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

  //   console.log(spot);
  const {
    _id,
    image,
    tourists_spot_name,
    country_Name,
    location,
    short_description,
    average_cost,
    seasonality,
    travel_time,
    total_visitors_per_year,
    user_email,
    user_name,
  } = spot;
  return (
    <div className=" mb-10">
      <div className=" w-full ">
        <img className=" w-full h-[500px]" src={image} alt="" />
        <div className=" h-52 bg-gray-100 flex items-center p-10 mb-14">
          <div className=" w-2/5">
            <p className=" text-4xl font-poppins font-semibold mb-2">
              {tourists_spot_name}
            </p>
            <p className=" flex items-center gap-2 text-gray-500">
              <span className=" text-[#5c98f2] text-lg">
                <FaLocationDot />
              </span>
              {country_Name}
            </p>
          </div>
          <div className=" flex items-center gap-14">
            <div className="flex items-center gap-4">
              <span className=" text-5xl text-[#5c98f2]">
                <AiFillClockCircle />
              </span>
              <div>
                <p className="text-gray-500">Durations</p>
                <p className=" text-xl font-poppins font-semibold">
                  {travel_time} Days
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className=" text-5xl text-[#5c98f2]">
                <AiFillClockCircle />
              </span>
              <div>
                <p className="text-gray-500">Season</p>
                <p className=" text-xl font-poppins font-semibold">
                  {seasonality}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className=" text-5xl text-[#5c98f2]">
                <AiFillClockCircle />
              </span>
              <div>
                <p className="text-gray-500">Visitors Per Year</p>
                <p className=" text-xl font-poppins font-semibold">
                  {total_visitors_per_year}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex  gap-10 px-10">
          <div className="  w-3/5">
            <div>
              <p className=" mb-4 text-2xl font-poppins font-semibold">
                Enjoy the Adventure
              </p>
              <p className=" font-poppins text-gray-500">{short_description}</p>
            </div>
            <div className="divider"></div>
            <div>
              <p className=" mb-4 text-2xl font-poppins font-semibold">
                Included/Excluded
              </p>
              <p className=" font-poppins text-gray-500">
                To help you plan your trip, we have put together a list of
                what's included and what's not included in your tour package.
                This will give you a clear understanding of what to expect and
                help you make any necessary arrangements before your journey
                begins.
              </p>
              <div className="flex gap-10 items-center mt-10">
                <div className=" gap-10">
                  <p className=" flex items-center gap-2">
                    <span className="text-[#5c98f2]">
                      <GiCheckMark />
                    </span>
                    Train tickets and Bus transportation
                  </p>
                  <p className=" flex items-center gap-2">
                    <span className="text-[#5c98f2]">
                      <GiCheckMark />
                    </span>
                    Breakfast, lunch, and dinner.
                  </p>
                  <p className=" flex items-center gap-2">
                    <span className="text-[#5c98f2]">
                      <GiCheckMark />
                    </span>
                    Accommodation at hotel
                  </p>
                  <p className=" flex items-center gap-2">
                    <span className="text-[#5c98f2]">
                      <GiCheckMark />
                    </span>
                    Train tickets and Bus transportation
                  </p>
                </div>
                <div className=" gap-10">
                  <p className=" flex items-center gap-2">
                    <span className="text-[#5c98f2]">
                      <GiCheckMark />
                    </span>
                    Professional tour guide
                  </p>
                  <p className=" flex items-center gap-2">
                    <span className="text-[#5c98f2]">
                      <GiCheckMark />
                    </span>
                    Transfers between destinations
                  </p>
                  <p className=" flex items-center gap-2">
                    <span className="text-[#5c98f2]">
                      <IoClose />
                    </span>
                    Entrance fees to museums
                  </p>
                  <p className=" flex items-center gap-2">
                    <span className="text-[#5c98f2]">
                      <IoClose />
                    </span>
                    Custom itinerary
                  </p>
                </div>
              </div>
            </div>
            <div className="divider"></div>
            <div>
              <p className=" mb-4 text-2xl font-poppins font-semibold">
                Tour Location: {location}
              </p>
              <p className=" font-poppins text-gray-500">
                This comprehensive map is designed to guide you through an
                exciting journey filled with remarkable destinations and
                captivating experiences.
              </p>
            </div>
          </div>
          <div className="  w-2/5">
            <div className="card  bg-base-100 shadow-xl">
              <div className="card-body">
                <div className=" flex items-center justify-between">
                  <div className=" font-poppins">
                    <p className=" text-lg text-gray-500">Price</p>
                    <p className=" text-xl font-semibold">From</p>
                  </div>
                  <div>
                    <p className=" font-bold text-3xl">$ {average_cost}</p>
                  </div>
                </div>
                <div className="divider"></div>
                <div className=" font-poppins">
                  <p className=" text-lg font-semibold">Date</p>
                  <p className="text-gray-500">Date</p>
                </div>
                <div className="divider"></div>
                <div className=" flex justify-between items-center">
                  <div className=" font-poppins">
                    <p className=" text-lg font-semibold">Adults</p>
                    <p className="text-gray-500">Over 18 ($ {average_cost})</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <a href="">
                      <LuMinus />
                    </a>
                    <p className=" font-poppins font-semibold text-xl">1</p>
                    <a href="">
                      <LuPlus />
                    </a>
                  </div>
                </div>
                <div className="divider"></div>
                <div className=" flex justify-between items-center">
                  <div className=" font-poppins">
                    <p className=" text-lg font-semibold">children</p>
                    <p className="text-gray-500">under 18 ($ {average_cost})</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <a href="">
                      <LuMinus />
                    </a>
                    <p className=" font-poppins font-semibold text-xl">0</p>
                    <a href="">
                      <LuPlus />
                    </a>
                  </div>
                </div>
                <div className="divider"></div>
                <div className=" font-poppins">
                  <p className=" text-lg font-semibold">Extra Services</p>
                  <p className="text-gray-500">
                    Add extra services on your reservation
                  </p>
                </div>
                <div className=" mb-5">
                  <p className=" flex gap-5 items-center">
                    <span>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="checkbox w-3 h-3"
                      />
                    </span>
                    Health Insurance ( $ 220 )
                  </p>
                  <p className=" flex gap-5 items-center">
                    <span>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="checkbox w-3 h-3"
                      />
                    </span>
                    Medical Insurance ( $ 45 )
                  </p>
                </div>
                <button className="btn bg-[#5c98f2] text-white">
                  BOOK BOW FOR $ 000
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-10 p-10">
        <div className=" text-center">
          <p className=" font-reenie text-[#5c98f2] text-3xl">Check All</p>
          <p className=" font-poppins font-bold text-5xl">Packages</p>
        </div>
        {/* <div className=" mt-10 grid grid-cols-3 gap-5 justify-between items-center ">
          {spotsData.map((spot, index) => (
            <PackageSlider key={spot._id} spot={spot}></PackageSlider>
          ))}
        </div> */}
        <div className=" mt-10 mb-10">
          <Swiper
            spaceBetween={10}
            slidesPerView={3}
            // navigation={true}
            autoplay={{ delay: 3000 }}
            loop={true}
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            className="mySwiper"
          >
            {spotsData.map((spot) => (
              <SwiperSlide key={spot._id}>
                <SpotsCard spot={spot} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SpotDetails;
