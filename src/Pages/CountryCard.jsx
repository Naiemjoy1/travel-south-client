import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { TbClockFilled } from "react-icons/tb";
import { Link } from "react-router-dom";

const CountryCard = ({ spot }) => {
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

  // Split short_description into words and take the first 20 words
  const shortDescriptionWords = short_description.split(" ").slice(0, 20);
  const shortenedDescription = shortDescriptionWords.join(" ");

  return (
    <div>
      <div className="card bg-neutral shadow-lg text-white">
        <figure className="h-[250px] relative">
          <img className="object-cover w-full h-full" src={image} alt="image" />
        </figure>
        <a className=" bg-secondary text-white absolute top-4 right-6 flex justify-between items-center gap-2 px-4 py-1 rounded-badge">
          <span>
            <TbClockFilled />
          </span>
          {travel_time} Days
        </a>
        <div className="card-body">
          <h2 className="font-poppins font-bold text-xl">
            {tourists_spot_name}
          </h2>
          <p className="flex items-center gap-2 ">
            <span className="text-primary text-lg">
              <FaLocationDot />
            </span>
            {country_Name}
          </p>
          <div className="flex items-center w-full my-4">
            <hr className="w-full " />
          </div>
          <p>{shortenedDescription}</p>
          <div className="flex items-center w-full my-4">
            <hr className="w-full " />
          </div>
          <div className="flex justify-between items-center">
            <Link to={`/spot/${_id}`}>
              <button className="btn bg-primary border-none text-white">
                Details
              </button>
            </Link>
            <div className="text-right">
              <p className="">From</p>
              <p className="font-poppins font-bold text-xl">$ {average_cost}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
