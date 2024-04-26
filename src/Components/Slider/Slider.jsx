// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Slider = () => {
  return (
    <div className="min-h-[calc(100vh-246px)]">
      <Swiper
        spaceBetween={10}
        slidesPerView={2}
        navigation={true}
        loop={true}
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        className="mySwiper"
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <img
            className=" rounded-xl"
            src="https://i.ibb.co/TWLMm6d/5.jpg"
            alt=""
            style={{ width: "100%", height: "533px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" rounded-xl"
            src="https://i.ibb.co/ry5xP8x/2.webp"
            alt=""
            style={{ width: "100%", height: "533px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" rounded-xl"
            src="https://i.ibb.co/Vvpc78Y/1.webp"
            alt=""
            style={{ width: "100%", height: "533px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" rounded-xl"
            src="https://i.ibb.co/wC2QwGp/3.jpg"
            alt=""
            style={{ width: "100%", height: "533px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" rounded-xl"
            src="https://i.ibb.co/gTg0xJy/4.jpg"
            alt=""
            style={{ width: "100%", height: "533px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" rounded-xl"
            src="https://i.ibb.co/NKRpz7N/9.jpg"
            alt=""
            style={{ width: "100%", height: "533px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" rounded-xl"
            src="https://i.ibb.co/DYF7pxQ/8.jpg"
            alt=""
            style={{ width: "100%", height: "533px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" rounded-xl"
            src="https://i.ibb.co/TWLMm6d/5.jpg"
            alt=""
            style={{ width: "100%", height: "533px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" rounded-xl"
            src="https://i.ibb.co/0mFjS0Z/1.webp"
            alt=""
            style={{ width: "100%", height: "533px" }}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
