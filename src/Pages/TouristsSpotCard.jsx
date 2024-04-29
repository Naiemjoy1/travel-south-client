import { FaLocationDot } from "react-icons/fa6";
import { TbClockFilled } from "react-icons/tb";
import { Link } from "react-router-dom";

const TouristsSpotCard = ({ spot }) => {
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
    .slice(0, 20)
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
          <p className=" flex items-center gap-2 ">
            <span className=" text-primary text-lg">
              <FaLocationDot />
            </span>
            {country_Name}
          </p>
          <div className="flex items-center w-full my-4">
            <hr className="w-full " />
          </div>
          <div className=" flex justify-between items-center">
            <div className=" font-poppins">
              <p className=" grid grid-cols-1">
                Visitors Per Year:{" "}
                <span className="  font-bold">{total_visitors_per_year}</span>
              </p>
              {/* <p>{total_visitors_per_year}</p> */}
            </div>
            <div>
              <p className=" grid grid-cols-1">
                Season: <span className="  font-bold">{seasonality}</span>
              </p>
              {/* <p>{seasonality}</p> */}
            </div>
          </div>
          <div className="flex items-center w-full my-4">
            <hr className="w-full " />
          </div>
          <div className=" flex justify-between items-center">
            <Link to={`/spot/${_id}`}>
              <button className="btn border-none hover:bg-secondary bg-primary text-white">
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

export default TouristsSpotCard;
