import React, { useEffect } from "react";
import { useLoaderData, useLocation, useParams } from "react-router-dom";
import CountryCard from "./CountryCard";
import { FaPaperPlane } from "react-icons/fa6";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const CountryDetails = () => {
  const spots = useLoaderData();
  const location = useLocation();
  const { countryName } = useParams();

  useEffect(() => {
    document.title = "Country Details";
  }, []);

  let backgroundImageURL = "";
  if (countryName === "Bangladesh") {
    backgroundImageURL = "https://i.ibb.co/3Np4b4v/7488236572-def1c8d2a9-b.jpg";
  } else if (countryName === "Thailand") {
    backgroundImageURL =
      "https://i.ibb.co/X4N68jP/fc0453c0-e10c-4c4b-b31e-2a95179ddca3.jpg";
  } else if (countryName === "Indonesia") {
    backgroundImageURL =
      "https://i.ibb.co/pbjbh8k/indonesia-best-islands-bali.jpg";
  } else if (countryName === "Malaysia") {
    backgroundImageURL =
      "https://i.ibb.co/Jn9gNsP/240-petronas-twin-towersjpg.jpg";
  } else if (countryName === "Vietnam") {
    backgroundImageURL = "https://i.ibb.co/2PCPWT5/halongbay-quangninh.jpg";
  } else if (countryName === "Cambodia") {
    backgroundImageURL =
      "https://i.ibb.co/0KTRyjC/angkor-wat-main-temple-reflected-water-beautiful-summer-sunrisesd-2-1024x636.jpg";
  } else {
    backgroundImageURL =
      "https://i.ibb.co/10GQbjQ/pexels-asad-photo-maldives-1266831.jpg";
  }

  return (
    <div className=" font-poppins my-10">
      <div
        className="hero h-[500px] relative"
        style={{
          backgroundImage: `url(${backgroundImageURL})`,
        }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-white">
              {countryName}
            </h1>
          </div>
        </div>
        <div className=" lg:flex md:flex items-center justify-between gap-4 bg-white p-10 w-4/5 mx-auto rounded-xl shadow-xl absolute inset-x-0 -bottom-16">
          <div className=" flex items-center gap-5">
            <a className=" text-[#5c98f2] text-4xl" href="">
              <FaPaperPlane />
            </a>
            <div>
              <p>Package</p>
              <p className=" lg:text-xl font-semibold">
                {spots.length} Available
              </p>
            </div>
          </div>
          <div className=" flex items-center gap-5">
            <a className=" text-[#5c98f2] text-4xl" href="">
              <FaPhoneSquareAlt />
            </a>
            <div>
              <p>Call Us</p>
              <p className=" lg:text-xl font-semibold">+485 257 294</p>
            </div>
          </div>
          <div className=" flex items-center gap-5">
            <a className=" text-[#5c98f2] text-4xl" href="">
              <MdEmail />
            </a>
            <div>
              <p>Email Us</p>
              <p className=" lg:text-xl font-semibold">southtravel@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" lg:flex items-center gap-10 justify-center mt-36 lg:px-10 px-5">
        <div className="lg:flex md:flex items-center justify-center gap-10 lg:w-2/4">
          <img
            className="lg:w-[300px] md:w-[300px] h-[450px]"
            src="https://i.ibb.co/nP29gtV/pexels-mickyiaia34-709478.jpg"
            alt=""
          />
          <img
            className="lg:w-[255px] md:w-[255px] h-[550px] mt-4 lg:mt-0"
            src="https://i.ibb.co/hBzrP03/pexels-elletakesphotos-1680173.jpg"
            alt=""
          />
        </div>
        <div className="mt-5 text-center lg:w-2/4">
          <h2 className=" font-reenie text-[#5c98f2] font-bold text-3xl mb-4">
            A Guide to Your Next Adventure
          </h2>
          <h2 className=" font-poppins font-bold text-5xl mb-4">
            Discover Your Dream Destination
          </h2>
          <h2 className=" mb-4 text-gray-500">
            To find good deals on flights and accommodations, there are several
            tips and tricks that can be followed. Firstly, it is important to
            know the typical prices for flights and hotels for the desired
            destinations.
          </h2>
          <button className=" btn  bg-[#5c98f2] text-white">Contact Us</button>
        </div>
      </div>
      <div className=" mt-16 text-center px-5 lg:px-10">
        <h2 className=" font-reenie text-[#5c98f2] font-bold text-3xl mb-4">
          Check All
        </h2>
        <h2 className=" font-poppins font-bold text-5xl mb-4">Package</h2>
      </div>
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 justify-center items-center gap-5 mt-14 px-5 lg:px-10">
        {spots.map((spot) => (
          <CountryCard key={spot._id} spot={spot}></CountryCard>
        ))}
      </div>
    </div>
  );
};

export default CountryDetails;
