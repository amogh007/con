import React from "react";
import vc from "./vc.svg";
import { motion } from "framer-motion";

const Preface = () => {
    
  return (
    
    <div className="text-white bg-gray-900 py-16 px-4 md:h-[100vh]">
      <div className="max-w-[1024px] mx-auto grid ">
        <div className="px-1">
          <motion.img
            src={vc}
            className="w-[200px] mx-auto my-4 "
            alt="/"
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6,ease: [0.17, 0.67, 0.83, 0.67] }}
            
          ></motion.img>
          <motion.h3 className="text-xs font-bold text-white text-center"
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6,ease: [0.17, 0.67, 0.83, 0.67] }}>
            {" "}
            Dr.N. Rangaswamy{" "}
          </motion.h3>
          <motion.p className="text-xs font-light py-2 text-white text-center"
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 ,ease: [0.17, 0.67, 0.83, 0.67]}}>
            Professor Dept of Economics (Rtd) Vice-Chancellor (Actg) Bangalore
            University Bangalore -560056 And Director, International Conference
            Ambedkar Economics Foundation Bangalore.
          </motion.p>
        </div>
        <div className="px-1 flex flex-col justify-center text-center">
          <motion.p className="text-base font-light py-2  "
           initial={{ y: 10, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           transition={{ duration: 0.6,ease: [0.17, 0.67, 0.83, 0.67] }}>
            It gives me immense pleasure to invite you to a one-day
            International Conference on{" "}
            <span className="text-[#8470FF] font-bold">
              “Economic Thoughts and Contributions of Dr. B.R.Ambedkar”
            </span>{" "}
            organized Jointly in collaboration with Rural Cultural Foundation
            and Ambedkar Economics Foundation, Bangalore, proposed to be held
            during the month of January on the eve of commemorating 100 th year
            of the book published by Dr.B.R.Ambedkar on “The Problem of The
            Rupee”.
          </motion.p>
          <motion.p className="text-base font-light  "
           initial={{ y: 10, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           transition={{ duration: 0.6,ease: [0.17, 0.67, 0.83, 0.67] }}>
            The book focused on the Problem of the Rupee and its Solution in the
            then period. While doing so, it examined a number of issues involved
            in the stability of the rupee, in terms of currency standards during
            British India. The prevalent standard was Double Standard to a
            Silver Standard and converted to Gold Standard, Gold Exchange
            Standard. During its implementation, the major problem was its
            Stability.
          </motion.p>
          <motion.button className="bg-[#8470FF] my-4 px-3 rounded-md font-medium my-3 mx-auto text-white py-3 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6,ease: [0.17, 0.67, 0.83, 0.67] }}>
            <a href="https://sudhanmagas-organization.gitbook.io/untitled/">
              Read More
            </a>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Preface;
