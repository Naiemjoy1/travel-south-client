import React from "react";

const SpotsHome = () => {
  return (
    <div className=" my-10 ">
      <div className=" w-3/6 pl-5">
        <h2 className=" font-reenie text-[#5c98f2] font-bold text-3xl mb-4">
          Dream Vacation Destination
        </h2>
        <h2 className=" font-poppins font-bold text-5xl mb-4">
          Plan the Trip of a Lifetime <br />
          with Ease
        </h2>
        <h2 className=" mb-4 text-gray-500">
          Whether you're looking for a romantic getaway, a family-friendly
          adventure, or a solo journey to explore the world, a travel agency can
          provide you with a custom-tailored itinerary that exceeds your
          expectations.
        </h2>
        <button className=" btn  bg-[#5c98f2] text-white">More Info</button>
      </div>
      <div className=" grid grid-cols-3 gap-4 mt-10">
        <div
          className="h-[120px] rounded-xl flex items-center p-10"
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
          className="h-[120px] rounded-xl flex items-center p-10"
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
    </div>
  );
};

export default SpotsHome;
