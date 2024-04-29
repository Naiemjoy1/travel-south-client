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
import { WiDayCloudyWindy } from "react-icons/wi";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { BsClock } from "react-icons/bs";
import { useMediaQuery } from "@react-hook/media-query";

const SpotDetails = () => {
  const spot = useLoaderData();
  const [spotsData, setSpotsData] = useState([]);

  const isMobile = useMediaQuery("(max-width: 767px)");
  const isMedium = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");

  useEffect(() => {
    document.title = "Spot Details";
  }, []);

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

  const getSlidesPerView = () => {
    if (isMobile) return 1;
    if (isMedium) return 2;
    return 3;
  };

  return (
    <div className=" mb-10">
      <div className=" w-full ">
        <img className=" w-full lg:h-[500px]" src={image} alt="" />
        <div className=" h-52 bg-gray-100 flex items-center lg:px-10 md:px-10 px-5 mb-14">
          <div className=" lg:w-2/5 md:w-2/5">
            <p className=" text-4xl font-poppins font-semibold mb-2">
              {tourists_spot_name}
            </p>
            <p className=" flex items-center gap-2">
              <span className=" text-primary text-lg">
                <FaLocationDot />
              </span>
              {country_Name}
            </p>
          </div>
          <div className=" lg:flex md:flex grid grid-cols-1 items-center lg:gap-14 md:gap-5">
            <div className="flex items-center gap-4">
              <span className=" text-5xl text-primary">
                <BsClock />
              </span>
              <div>
                <p className="">Durations</p>
                <p className=" text-xl font-poppins font-semibold">
                  {travel_time} Days
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className=" text-5xl text-primary">
                <WiDayCloudyWindy />
              </span>
              <div>
                <p className="">Season</p>
                <p className=" text-xl font-poppins font-semibold">
                  {seasonality}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className=" text-5xl text-primary">
                <MdOutlinePeopleAlt />
              </span>
              <div>
                <p className="">Visitors Per Year</p>
                <p className=" text-xl font-poppins font-semibold">
                  {total_visitors_per_year}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" lg:flex  gap-10 px-10">
          <div className="  lg:w-3/5">
            <div>
              <p className=" mb-4 text-2xl font-poppins font-semibold">
                Enjoy the Adventure
              </p>
              <p className=" font-poppins ">{short_description}</p>
            </div>
            <div className="divider"></div>
            <div>
              <p className=" mb-4 text-2xl font-poppins font-semibold">
                Included/Excluded
              </p>
              <p className=" font-poppins ">
                To help you plan your trip, we have put together a list of
                what's included and what's not included in your tour package.
                This will give you a clear understanding of what to expect and
                help you make any necessary arrangements before your journey
                begins.
              </p>
              <div className="flex gap-10 items-center mt-10">
                <div className=" gap-10">
                  <p className=" flex items-center gap-2">
                    <span className="text-primary">
                      <GiCheckMark />
                    </span>
                    Train tickets and Bus transportation
                  </p>
                  <p className=" flex items-center gap-2">
                    <span className="text-primary">
                      <GiCheckMark />
                    </span>
                    Breakfast, lunch, and dinner.
                  </p>
                  <p className=" flex items-center gap-2">
                    <span className="text-primary">
                      <GiCheckMark />
                    </span>
                    Accommodation at hotel
                  </p>
                  <p className=" flex items-center gap-2">
                    <span className="text-primary">
                      <GiCheckMark />
                    </span>
                    Train tickets and Bus transportation
                  </p>
                </div>
                <div className=" gap-10">
                  <p className=" flex items-center gap-2">
                    <span className="text-primary">
                      <GiCheckMark />
                    </span>
                    Professional tour guide
                  </p>
                  <p className=" flex items-center gap-2">
                    <span className="text-primary">
                      <GiCheckMark />
                    </span>
                    Transfers between destinations
                  </p>
                  <p className=" flex items-center gap-2">
                    <span className="text-primary">
                      <IoClose />
                    </span>
                    Entrance fees to museums
                  </p>
                  <p className=" flex items-center gap-2">
                    <span className="text-primary">
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
              <p className=" font-poppins ">
                This comprehensive map is designed to guide you through an
                exciting journey filled with remarkable destinations and
                captivating experiences.
              </p>
            </div>
          </div>
          <div className="  lg:w-2/5">
            <div className="card  bg-base-100 shadow-xl">
              <div className="card-body">
                <div className=" flex items-center justify-between">
                  <div className=" font-poppins">
                    <p className=" text-lg ">Price</p>
                    <p className=" text-xl font-semibold">From</p>
                  </div>
                  <div>
                    <p className=" font-bold text-3xl">$ {average_cost}</p>
                  </div>
                </div>
                <div className="divider"></div>
                <div className=" font-poppins">
                  <p className=" text-lg font-semibold">Date</p>
                  <p className="">Date</p>
                </div>
                <div className="divider"></div>
                <div className=" flex justify-between items-center">
                  <div className=" font-poppins">
                    <p className=" text-lg font-semibold">Adults</p>
                    <p className="">Over 18 ($ {average_cost})</p>
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
                    <p className="">under 18 ($ {average_cost})</p>
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
                  <p className="">Add extra services on your reservation</p>
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
                <button className="btn bg-primary text-white">
                  BOOK BOW FOR $ 000
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-10 p-10">
        <div className=" text-center">
          <p className=" font-reenie text-primary text-3xl">Check All</p>
          <p className=" font-poppins font-bold text-5xl">Packages</p>
        </div>
        {/* <div className=" mt-10 grid grid-cols-3 gap-5 justify-between items-center ">
          {spotsData.map((spot, index) => (
            <PackageSlider key={spot._id} spot={spot}></PackageSlider>
          ))}
        </div> */}
        <div className=" mt-10 mb-10">
          <Swiper
            spaceBetween={20}
            slidesPerView={getSlidesPerView()}
            navigation={isMobile ? true : false}
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
