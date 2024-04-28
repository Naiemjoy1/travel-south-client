import React from "react";
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

const Feedback = () => {
  return (
    <div className="py-10 relative">
      <div
        className="absolute inset-0 bg-[rgba(0,0,0,0.8)]"
        style={{
          backgroundImage: `url(https://i.ibb.co/yysBVm0/para-24.jpg)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          //   opacity: 0.8,
        }}
      ></div>
      <div className="relative z-10 w-3/6 text-white bg-op">
        <h2 className="font-poppins font-bold text-5xl mb-4">
          Unforgettable Travel Experiences
        </h2>
        <h2 className="mb-4">
          Our customer's feedback is essential in building a great reputation
          and maintaining excellent service. By listening to our customer's
          needs, we can improve our offerings and provide an exceptional travel
          experience.
        </h2>
      </div>
      <div className="mt-10">
        <Swiper
          spaceBetween={20}
          slidesPerView={2}
          autoplay={{ delay: 4000 }}
          loop={true}
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className=" bg-[#5c98f2] rounded-xl p-10 text-white font-poppins">
              <p className=" font-light text-2xl">
                This travel agency made my dream trip to Europe a reality. They
                worked with me every step of the way to plan the itinerary.
              </p>
              <div className=" flex items-center gap-5 mt-5">
                <div className="avatar w-14 h-14">
                  <div className="w-24 rounded-full">
                    <img src="https://i.ibb.co/7vGtCNt/istockphoto-1126057647-612x612.jpg" />
                  </div>
                </div>
                <div>
                  <p className=" font-semibold">Dylan and Emily</p>
                  <p className=" font-light text-sm ">Miami</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" bg-[#5c98f2] rounded-xl p-10 text-white font-poppins">
              <p className=" font-light text-2xl">
                I recently booked a trip to Thailand with this travel agency and
                I couldn't have been happier with my experience.
              </p>
              <div className=" flex items-center gap-5 mt-5">
                <div className="avatar w-14 h-14">
                  <div className="w-24 rounded-full">
                    <img src="https://i.ibb.co/QPhrWq2/happy-tourists-sightseeing-city-map-600nw-145171495.webp" />
                  </div>
                </div>
                <div>
                  <p className=" font-semibold">Sarah and Rick</p>
                  <p className=" font-light text-sm ">New York</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" bg-[#5c98f2] rounded-xl p-10 text-white font-poppins">
              <p className=" font-light text-2xl">
                My husband and I have been using this travel agency for years
                and they have never disappointed us.
              </p>
              <div className=" flex items-center gap-5 mt-5">
                <div className="avatar w-14 h-14">
                  <div className="w-24 rounded-full">
                    <img src="https://i.ibb.co/BnmCDW6/istockphoto-1162291446-612x612.jpg" />
                  </div>
                </div>
                <div>
                  <p className=" font-semibold">Jennifer and Mark</p>
                  <p className=" font-light text-sm ">San Francisco</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Feedback;
