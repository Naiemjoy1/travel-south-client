import { Link } from "react-router-dom";

const CountrySlider = ({ spot }) => {
  const { _id, image, country_Name } = spot;

  const backgroundImageURLs = {
    Bangladesh: "https://i.ibb.co/3Np4b4v/7488236572-def1c8d2a9-b.jpg",
    Thailand:
      "https://i.ibb.co/X4N68jP/fc0453c0-e10c-4c4b-b31e-2a95179ddca3.jpg",
    Indonesia: "https://i.ibb.co/pbjbh8k/indonesia-best-islands-bali.jpg",
    Malaysia: "https://i.ibb.co/Jn9gNsP/240-petronas-twin-towersjpg.jpg",
    Vietnam: "https://i.ibb.co/2PCPWT5/halongbay-quangninh.jpg",
    Cambodia:
      "https://i.ibb.co/0KTRyjC/angkor-wat-main-temple-reflected-water-beautiful-summer-sunrisesd-2-1024x636.jpg",
  };

  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImageURLs[country_Name]})`,
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
            <button className="bg-primary px-4 py-2 rounded-lg mt-4">
              All Packages
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CountrySlider;
