import { Link } from "react-router-dom";

const CountrySlider = ({ spot }) => {
  const { _id, image, country_Name } = spot;

  const backgroundImageStyle = {
    backgroundImage: `url(${image})`,
    backgroundPosition: "center",
  };

  return (
    <div className=" p-5">
      <div
        className="h-[400px] rounded-xl p-10 flex justify-center items-center relative"
        style={backgroundImageStyle}
        onMouseEnter={(e) => {
          e.currentTarget.querySelector("#text2").style.display = "block";
          e.currentTarget.querySelector("#text1").style.display = "none";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.querySelector("#text2").style.display = "none";
          e.currentTarget.querySelector("#text1").style.display = "block";
        }}
      >
        <div
          id="text1"
          className="text-white text-center font-poppins absolute inset-x-0 bottom-3"
          style={{ display: "none" }}
        >
          <p className="font-semibold text-xl">{country_Name}</p>
          <p>Here is filled with diverse cultures & cities</p>
        </div>
        <div id="text2" className="text-white text-center font-poppins">
          <p className="font-semibold text-xl">{country_Name}</p>
          <p>Here is filled with diverse cultures & cities</p>
          <Link to={`/country/${encodeURIComponent(country_Name)}`}>
            <button className="bg-[#5c98f2] px-4 py-2 rounded-lg mt-4">
              All Packages
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CountrySlider;
