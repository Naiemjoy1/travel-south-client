import { FaLocationDot } from "react-icons/fa6";
import { TbClockFilled } from "react-icons/tb";
import { Link } from "react-router-dom";

const SpotsCard = ({ spot }) => {
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

  // Extract the first 20 words of the short description
  const shortDescriptionPreview = short_description
    .split(" ")
    .slice(0, 10)
    .join(" ");

  return (
    <div className="">
      <div className="card shadow-lg bg-neutral text-white">
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
          <h2 className=" font-poppins font-bold text-xl">
            {tourists_spot_name}
          </h2>
          <p className=" flex items-center gap-2">
            <span className=" text-primary text-lg">
              <FaLocationDot />
            </span>
            {country_Name}
          </p>
          <div className="flex items-center w-full my-4">
            <hr className="w-full " />
          </div>
          <p>{shortDescriptionPreview}</p> {/* Display the first 20 words */}
          <div className="flex items-center w-full my-4">
            <hr className="w-full " />
          </div>
          <div className=" flex justify-between items-center">
            <Link to={`/spot/${_id}`}>
              <button className="btn border-none bg-primary hover:bg-secondary text-white">
                Details
              </button>
            </Link>
            <div className=" text-right">
              <p className="">From</p>
              <p className=" font-poppins font-bold text-xl">
                $ {average_cost}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotsCard;
