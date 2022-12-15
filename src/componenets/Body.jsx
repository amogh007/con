import React from "react";
import { motion } from "framer-motion";

import Countdown from "react-countdown";
import Typed from "react-typed";

const Body = () => {
  let amg = new Date("2023-01-11");
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    return (
      <div className="flex flex-row justify-between items-center">
        <p className="px-2 text-white font-custom1 text-2xl">{days}</p>
        <p className="px-1.5 text-white font-custom1 text-2xl">:</p>
        <p className="px-2 text-white font-custom1 text-2xl">{hours}</p>
        <p className="px-1.5 text-white font-custom1 text-2xl">:</p>
        <p className="px-2 text-white font-custom1 text-2xl">{minutes}</p>
        <p className="px-1.5 text-white font-custom1 text-2xl">:</p>
        <p className="px-2 text-white font-custom1 text-2xl">{seconds}</p>
      </div>
    );
  };

  return (
    <div
      className="text-black sm:h-[87vh] h-[78vh] bg-no-repeat sm:bg-hero bg-herosm bg-bottom bg-contain bg-scroll  bg-blend-multiply  relative"
      
    >
      <div className="max-w-[800px] sm:mt-[40px] mt-[150px] pb-[300px]   text-center flex flex-col justiy-center mx-auto">
        <motion.p className="text-black font-light p-2"
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.17, 0.67, 0.83, 0.67] }}>
          International Economics Conference
        </motion.p>
        <motion.h1 className=" text-black md:text-3xl sm:text-2xl text-xl font-light py-1"
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.17, 0.67, 0.83, 0.67] }}>
          “Economic thoughts and contributions of Dr.B.R.Ambedkar”
        </motion.h1>
        <motion.div
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.17, 0.67, 0.83, 0.67] }}>
          <Typed
            className=" text-[#374062] md:text-2xl sm:text-xl text-xl font-light  "
            strings={["venue-Jnanajyothi Auditorium", "On 25 th February 2023"]}
            typeSpeed={120}
            backSpeed={100}
            loop
          />
        </motion.div>
        <div className="text-gray-900 p-4">
          <motion.p className="text-xs "
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.17, 0.67, 0.83, 0.67] }}>
            International Conference on “Economic Thoughts and Contributions of
            Dr. B.R.Ambedkar” organized Jointly in collaboration with Rural
            Cultural Foundation and Ambedkar Economics Foundation
          </motion.p>
          <motion.button className="bg-[#374062] px-3 rounded-md font-medium my-3 px-auto text-white py-3 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.17, 0.67, 0.83, 0.67] }}>
            <a href="https://goo.gl/maps/8UN7wnHf8YesRgGe7">Venue</a>
          </motion.button>
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center justify-between absolute bottom-0 left-0 right-0 p-0">
          <Countdown date={amg} renderer={renderer} />
          <div className="flex flex-row justify-between  ">
            <p className="text-xs px-2 text-white">Days</p>
            <p className="text-xs px-2 text-white">Hours</p>
            <p className="text-xs px-2 text-white">Minutes</p>
            <p className="text-xs px-2 text-white">Seconds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
