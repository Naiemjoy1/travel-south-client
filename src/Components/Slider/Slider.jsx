import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const Slider = () => {
  return (
    <div>
      <Swiper
        spaceBetween={10}
        slidesPerView={2}
        navigation={true}
        autoplay={{ delay: 2000 }}
        loop={true}
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        className="mySwiper"
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className="w-full h-32 md:h-56 lg:h-56">
            <img
              className="rounded-xl h-full w-full"
              src="https://i.ibb.co/X4N68jP/fc0453c0-e10c-4c4b-b31e-2a95179ddca3.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-32 md:h-56 lg:h-56">
            <img
              className="rounded-xl h-full w-full"
              src="https://i.ibb.co/f0gsqxr/istockphoto-588618834-612x612.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-32 md:h-56 lg:h-56">
            <img
              className=" rounded-xl h-full w-full"
              src="https://i.ibb.co/LYXYhrJ/Bangkok.jpg"
              alt=""
              // style={{ width: "100%", height: "533px" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-32 md:h-56 lg:h-56">
            <img
              className=" rounded-xl h-full w-full"
              src="https://i.ibb.co/sbfJv5Z/phuket-thailand-karst-formation-phuket0327-92bd3ce9266148dba74cba5e36c711e2.jpg"
              alt=""
              // style={{ width: "100%", height: "533px" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-32 md:h-56 lg:h-56">
            <img
              className=" rounded-xl h-full w-full"
              src="https://i.ibb.co/mCL5BpJ/Buddha-Dhatu-Jadi-06.jpg"
              alt=""
              // style={{ width: "100%", height: "533px" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-32 md:h-56 lg:h-56">
            <img
              className=" rounded-xl h-full w-full"
              src="https://i.ibb.co/3W6M6Hp/Angkor-Wat-temple-complex-Camb.webp"
              alt=""
              // style={{ width: "100%", height: "533px" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-32 md:h-56 lg:h-56">
            <img
              className=" rounded-xl h-full w-full"
              src="https://i.ibb.co/bzbR123/bali-jack.webp"
              alt=""
              // style={{ width: "100%", height: "533px" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-32 md:h-56 lg:h-56">
            <img
              className=" rounded-xl h-full w-full"
              src="https://i.ibb.co/Jn9gNsP/240-petronas-twin-towersjpg.jpg"
              alt=""
              // style={{ width: "100%", height: "533px" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-32 md:h-56 lg:h-56">
            <img
              className=" rounded-xl h-full w-full"
              src="https://i.ibb.co/sbfJv5Z/phuket-thailand-karst-formation-phuket0327-92bd3ce9266148dba74cba5e36c711e2.jpg"
              alt=""
              // style={{ width: "100%", height: "533px" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-32 md:h-56 lg:h-56">
            <img
              className=" rounded-xl h-full w-full"
              src="https://i.ibb.co/yRpfWjS/suspension-bridge-5297744-1280.jpg"
              alt=""
              // style={{ width: "100%", height: "533px" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-32 md:h-56 lg:h-56">
            <img
              className=" rounded-xl h-full w-full"
              src="https://i.ibb.co/2PCPWT5/halongbay-quangninh.jpg"
              alt=""
              // style={{ width: "100%", height: "533px" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-32 md:h-56 lg:h-56">
            <img
              className=" rounded-xl h-full w-full"
              src="https://i.ibb.co/g4yV4cC/Awesome-look-of-Lalbagh-Fort.jpg"
              alt=""
              // style={{ width: "100%", height: "533px" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-32 md:h-56 lg:h-56">
            <img
              className=" rounded-xl h-full w-full"
              src="https://i.ibb.co/pbjbh8k/indonesia-best-islands-bali.jpg"
              alt=""
              // style={{ width: "100%", height: "533px" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-32 md:h-56 lg:h-56">
            <img
              className=" rounded-xl h-full w-full"
              src="https://i.ibb.co/3Np4b4v/7488236572-def1c8d2a9-b.jpg"
              alt=""
              // style={{ width: "100%", height: "533px" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-32 md:h-56 lg:h-56">
            <img
              className=" rounded-xl h-full w-full"
              src="https://i.ibb.co/SrbTPQy/manish-tulaskar-85k0a-As1a94-unsplash.jpg"
              alt=""
              // style={{ width: "100%", height: "533px" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-32 md:h-56 lg:h-56">
            <img
              className=" rounded-xl h-full w-full"
              src="https://i.ibb.co/K93RWCw/495y5x6h2qo8ln8v8etzufhkt5h0-shutterstock-1283102005.webp"
              alt=""
              // style={{ width: "100%", height: "533px" }}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
