import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const AddSpot = () => {
  const { user } = useAuth();
  // console.log(user);

  const handleAddSpot = (event) => {
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

    const newSpot = {
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

    console.log(newSpot);

    // send data to server
    fetch("http://localhost:5001/addspot", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Spot Added Successfully",
            icon: "success",
            confirmButtonText: "Done",
          });
        }
      });
  };
  return (
    <div>
      <form onSubmit={handleAddSpot} className="card-body">
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
            />
          </div>
        </div>
        <div className=" flex gap-4">
          {/* row 2 */}
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Tourists Spot Name</span>
            </label>
            <input
              type="text"
              placeholder="Tourists Spot Name"
              className="input input-bordered"
              name="tourists_spot_name"
            />
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Country Name</span>
            </label>
            <input
              type="text"
              placeholder="Country Name"
              className="input input-bordered"
              name="country_Name"
            />
          </div>
        </div>
        <div className=" flex gap-4">
          {/* row 3 */}
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <input
              type="text"
              placeholder="Location"
              className="input input-bordered"
              name="location"
            />
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Short Description</span>
            </label>
            <input
              type="text"
              placeholder="Short Description"
              className="input input-bordered"
              name="short_description"
            />
          </div>
        </div>
        <div className=" flex gap-4">
          {/* row 4 */}
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Average Cost</span>
            </label>
            <input
              type="text"
              placeholder="Average Cost"
              className="input input-bordered"
              name="average_cost"
            />
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Seasonality</span>
            </label>
            <input
              type="text"
              placeholder="Seasonality"
              className="input input-bordered"
              name="seasonality"
            />
          </div>
        </div>
        <div className=" flex gap-4">
          {/* row 5 */}
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Travel Time</span>
            </label>
            <input
              type="text"
              placeholder="Travel Time"
              className="input input-bordered"
              name="travel_time"
            />
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Total Visitors Per Year</span>
            </label>
            <input
              type="text"
              placeholder="Total Visitors Per Year"
              className="input input-bordered"
              name="total_visitors_per_year"
            />
          </div>
        </div>
        <div className=" flex gap-4">
          {/* row 5 */}
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">User Email</span>
            </label>
            <input
              type="email"
              placeholder="User email"
              className="input input-bordered"
              name="user_email"
            />
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">User Name</span>
            </label>
            <input
              type="text"
              placeholder="User Name"
              className="input input-bordered"
              name="user_name"
            />
          </div>
        </div>

        <div className="form-control mt-6">
          <button className="btn bg-[#5c98f2] text-white">
            Add Tourists Spot
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddSpot;
