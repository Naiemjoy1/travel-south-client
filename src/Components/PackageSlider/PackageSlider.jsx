import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const PackageSlider = () => {
  return (
    <div className="min-h-[calc(100vh-246px)]">
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

export default PackageSlider;
