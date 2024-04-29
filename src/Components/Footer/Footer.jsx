import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaGithub, FaRegCopyright } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io";

const Footer = () => {
  return (
    <div>
      <div
        className=" lg:flex justify-center items-center bg-primary lg:py-24 py-16 px-10 gap-20 font-poppins"
        // style={{
        //   backgroundImage:
        //     "url(https://i.ibb.co/5G06kfd/73404-landmark-horizon-metropolis-skyline-night-2560x1440.jpg)",
        //   backgroundPosition: "center",
        //   backgroundSize: "cover",
        // }}
      >
        <p className=" lg:w-2/4 lg:text-5xl text-2xl text-center lg:text-left text-white font-poppins font-bold">
          Travel beyond your imagination, with our Travel Agency!
        </p>

        <div className=" grid lg:grid-cols-3 grid-cols-2 justify-center items-center mt-5 lg:mt-0 lg:w-2/4 text-white">
          <ul className="grid grid-cols-1 gap-4">
            <li className=" text-xl font-semibold">Address</li>
            <li>1080 Brickell Ave</li>
            <li>Miami - Florida</li>
            <li>U.S of America</li>
            <li className=" flex items-center gap-5 text-2xl">
              <a href="">
                <IoLogoFacebook />
              </a>
              <a href="">
                <AiFillTwitterCircle />
              </a>
              <a href="">
                <FaGithub />
              </a>
            </li>
          </ul>
          <div className="grid grid-cols-1 gap-4">
            <p className=" font-semibold text-2xl">Contact</p>
            <button className=" btn bg-neutral hover:bg-secondary border-none text-white">
              info@southtravel.com
            </button>
            <p className=" font-semibold lg:text-2xl">+01 483 593 284</p>
            <p className=" text-white flex items-center gap-4">
              <span>
                <FaRegCopyright />
              </span>{" "}
              South Travel All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
