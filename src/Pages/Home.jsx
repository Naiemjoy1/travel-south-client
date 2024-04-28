import Feedback from "../Components/Feedback/Feedback";
import PackagePrice from "../Components/PackagePrice/PackagePrice";
import Slider from "../Components/Slider/Slider";
import Typewriter from "../Components/Typewriter/Typewriter";
import Countries from "./Countries";
import SpotsHome from "./SpotsHome";

const Home = () => {
  return (
    <div className="">
      <div className=" lg:flex flex-row-reverse justify-center items-center lg:gap-10 my-10 mx-10 ">
        <div className=" lg:w-3/5 ">
          <Slider></Slider>
        </div>
        <div className=" mt-5 lg:mt-0 lg:w-2/5 flex">
          <Typewriter></Typewriter>
        </div>
      </div>
      <div>
        <SpotsHome></SpotsHome>
      </div>
      <div className=" my-10">
        <Countries></Countries>
      </div>
      <div className=" my-10">
        <Feedback></Feedback>
      </div>
      <div className=" my-10">
        <PackagePrice></PackagePrice>
      </div>
    </div>
  );
};

export default Home;
