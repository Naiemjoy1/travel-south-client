import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { TbClockFilled } from "react-icons/tb";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyListCard = ({ spot, cards, setCards, onDelete }) => {
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

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assaignment-server.vercel.app/spot/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Spot has been deleted.",
                icon: "success",
              });
              // const remaining = cards.filter((card) => card._id !== _id);
              // setCards(remaining);
              // console.log(remaining);
              onDelete(spot._id);
            }
          });
      }
    });
  };

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
            </div>
            <div>
              <p className=" grid grid-cols-1 ">
                Season: <span className="  font-bold">{seasonality}</span>
              </p>
            </div>
          </div>
          <div className="flex items-center w-full my-4">
            <hr className="w-full " />
          </div>
          <div className=" flex justify-between items-center">
            <Link to={`/update/${_id}`}>
              <button className="btn border-none bg-primary hover:bg-secondary text-white">
                Update
              </button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn bg-accent border-none hover:bg-accent text-white"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyListCard;
