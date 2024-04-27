import Slider from "../Components/Slider/Slider";
import Typewriter from "../Components/Typewriter/Typewriter";
import SpotsHome from "./SpotsHome";

const Home = () => {
  return (
    <div>
      <div className=" flex justify-center items-center my-10">
        <div className=" w-2/5 flex  p-5">
          <Typewriter></Typewriter>
        </div>
        <div className=" w-3/5 ">
          <Slider></Slider>
        </div>
      </div>
      <SpotsHome></SpotsHome>
    </div>
  );
};

export default Home;
