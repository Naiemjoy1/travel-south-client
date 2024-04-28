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
        autoplay={{ delay: 1000 }}
        loop={true}
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        className="mySwiper"
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <img
            className=" rounded-xl "
            src="https://i.ibb.co/X4N68jP/fc0453c0-e10c-4c4b-b31e-2a95179ddca3.jpg"
            alt=""
            style={{ width: "100%", height: "533px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" rounded-xl"
            src="https://i.ibb.co/mNyvMg8/krabi-thailand-best-things-to-do.jpg"
            alt=""
            style={{ width: "100%", height: "533px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" rounded-xl"
            src="https://i.ibb.co/b7yPrgL/visit-phuket-this-year.jpg"
            alt=""
            style={{ width: "100%", height: "533px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" rounded-xl"
            src="https://i.ibb.co/6RsvBx8/177c3b8cf7d5dff0d971e202274668f0.jpg"
            alt=""
            style={{ width: "100%", height: "533px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" rounded-xl"
            src="https://i.ibb.co/nsBvpF0/Ayutthaya-Shutterstock.webp"
            alt=""
            style={{ width: "100%", height: "533px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" rounded-xl"
            src="https://i.ibb.co/LYXYhrJ/Bangkok.jpg"
            alt=""
            style={{ width: "100%", height: "533px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" rounded-xl"
            src="https://i.ibb.co/GVdnkdV/Chiang-Mai-Take-Me-Tour-3-e1525774746926.jpg"
            alt=""
            style={{ width: "100%", height: "533px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" rounded-xl"
            src="https://i.ibb.co/f0gsqxr/istockphoto-588618834-612x612.jpg"
            alt=""
            style={{ width: "100%", height: "533px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" rounded-xl"
            src="https://i.ibb.co/sbfJv5Z/phuket-thailand-karst-formation-phuket0327-92bd3ce9266148dba74cba5e36c711e2.jpg"
            alt=""
            style={{ width: "100%", height: "533px" }}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
