import React from "react";
import { useLoaderData } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const UpdateSpot = () => {
  const spot = useLoaderData();
  const { user } = useAuth();
  //   console.log(user);

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

  const handleUpdateSpot = (event) => {
    event.preventDefault();
    const form = event.target;

    const image = form.image.value;
    const tourists_spot_name = form.tourists_spot_name.value;
    const country_Name = form.country_Name.value;
    const location = form.location.value;
    const short_description = form.short_description.value;
    const average_cost = form.average_cost.value;
    const seasonality = form.seasonality.value;
    const travel_time = form.travel_time.value;
    const total_visitors_per_year = form.total_visitors_per_year.value;
    const user_email = form.user_email.value;
    const user_name = form.user_name.value;
    form.reset();

    const updatedSpot = {
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
    };

    // console.log(newSpot);

    // send data to server
    fetch(`http://localhost:5001/spot/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success",
            text: "Spot Updated Successfully",
            icon: "success",
            confirmButtonText: "Done",
          });
          form.reset();
        }
      });
  };

  return (
    <div>
      <form onSubmit={handleUpdateSpot} className="card-body">
        <div className=" flex gap-4">
          {/* row 1 */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input
              type="text"
              placeholder="Image Url"
              className="input input-bordered"
              name="image"
              defaultValue={image || ""}
            />
          </div>
        </div>
        <div className=" lg:flex md:flex gap-4">
          {/* row 2 */}
          <div className="form-control lg:w-1/2 w-full">
            <label className="label">
              <span className="label-text">Tourists Spot Name</span>
            </label>
            <input
              type="text"
              placeholder="Tourists Spot Name"
              className="input input-bordered"
              name="tourists_spot_name"
              defaultValue={tourists_spot_name || ""}
            />
          </div>
          <div className="form-control lg:w-1/2 w-full">
            <label className="label">
              <span className="label-text">Country Name</span>
            </label>
            <select
              className="select select-bordered"
              name="country_Name"
              defaultValue={country_Name || ""}
            >
              {/* Add options for dropdown */}
              <option value="">Select Country</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Thailand">Thailand</option>
              <option value="Indonesia">Indonesia</option>
              <option value="Malaysia">Malaysia</option>
              <option value="Vietnam">Vietnam</option>
              <option value="Cambodia">Cambodia</option>
              {/* Add more options as needed */}
            </select>
          </div>
        </div>
        <div className=" lg:flex md:flex gap-4">
          {/* row 3 */}
          <div className="form-control lg:w-1/2 w-full">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <input
              type="text"
              placeholder="Location"
              className="input input-bordered"
              name="location"
              defaultValue={location || ""}
            />
          </div>
          <div className="form-control lg:w-1/2 w-full">
            <label className="label">
              <span className="label-text">Short Description</span>
            </label>
            <input
              type="text"
              placeholder="Short Description"
              className="input input-bordered"
              name="short_description"
              defaultValue={short_description || ""}
            />
          </div>
        </div>
        <div className=" lg:flex md:flex gap-4">
          {/* row 4 */}
          <div className="form-control lg:w-1/2 w-full">
            <label className="label">
              <span className="label-text">Average Cost</span>
            </label>
            <input
              type="number"
              placeholder="Average Cost"
              className="input input-bordered"
              name="average_cost"
              defaultValue={average_cost || ""}
            />
          </div>
          <div className="form-control lg:w-1/2 w-full">
            <label className="label">
              <span className="label-text">Seasonality</span>
            </label>
            <select
              className="select select-bordered"
              name="seasonality"
              defaultValue={seasonality || ""}
            >
              <option value="">Select Seasonality</option>
              <option value="Spring">Spring</option>
              <option value="Summer">Summer</option>
              <option value="Autumn">Autumn</option>
              <option value="Winter">Winter</option>
            </select>
          </div>
        </div>
        <div className=" lg:flex md:flex gap-4">
          {/* row 5 */}
          <div className="form-control lg:w-1/2 w-full">
            <label className="label">
              <span className="label-text">Travel Time</span>
            </label>
            <input
              type="number"
              placeholder="Travel Time"
              className="input input-bordered"
              name="travel_time"
              defaultValue={travel_time || ""}
            />
          </div>
          <div className="form-control lg:w-1/2 w-full">
            <label className="label">
              <span className="label-text">Total Visitors Per Year</span>
            </label>
            <input
              type="number"
              placeholder="Total Visitors Per Year"
              className="input input-bordered"
              name="total_visitors_per_year"
              defaultValue={total_visitors_per_year || ""}
            />
          </div>
        </div>
        <div className=" lg:flex md:flex gap-4">
          {/* row 5 */}
          <div className="form-control lg:w-1/2 w-full">
            <label className="label">
              <span className="label-text">User Email</span>
            </label>
            <input
              type="email"
              placeholder="User email"
              className="input input-bordered"
              name="user_email"
              defaultValue={user_email || ""}
              readOnly
              value={user ? user.email : ""}
              //   value={user?.email} // Display user email here
            />
          </div>
          <div className="form-control lg:w-1/2 w-full">
            <label className="label">
              <span className="label-text">User Name</span>
            </label>
            <input
              type="text"
              placeholder="User Name"
              className="input input-bordered"
              name="user_name"
              defaultValue={user_name || ""}
              readOnly
              value={user ? user.displayName : ""}
            />
          </div>
        </div>

        <div className="form-control mt-6">
          <button className="btn bg-[#5c98f2] text-white">
            Update Tourists Spot
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateSpot;
