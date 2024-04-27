import { FaLocationDot } from "react-icons/fa6";

const SpotsCard = ({ spot }) => {
  const {
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
    <div className="">
      <div className="card shadow-lg">
        <figure className=" h-[250px]">
          <img className=" object-cover" src={image} alt="image" />
        </figure>
        <div className="card-body">
          <h2 className=" font-poppins font-bold text-xl">
            {tourists_spot_name}
          </h2>
          <p className=" flex items-center gap-2 text-gray-500">
            <span className=" text-[#5c98f2] text-lg">
              <FaLocationDot />
            </span>
            {country_Name}
          </p>
          <div className="divider"></div>
          <p>{short_description}</p>
          <div className="divider"></div>
          <div className=" flex justify-between items-center">
            <div>
              <button className="btn  bg-[#5c98f2] text-white">Details</button>
            </div>
            <div className=" text-right">
              <p className="text-gray-500">From</p>
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
