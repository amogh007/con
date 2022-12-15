import React from "react";
import { motion } from "framer-motion";

const Dody = () => {
  return (
    <div className="w-full py-16 text-black bg-gradient-to-t from-[#d4d4d4] to-[#3d3d3d] px-4">
      <div className="max-w-[1240px] mx-auto flex flex-col items-center text-center">
        <motion.h1 className="md:text-4xl sm:text-3xl text-xl font-bold py-2 "
         initial={{ y: 10, opacity: 0 }}
         whileInView={{ y: 0, opacity: 1 }}
         transition={{ duration: 0.6, ease: [0.17, 0.67, 0.83, 0.67] }}>
          Do you want to submit your paper for{" "}
          <span className="text-indigo-900">paper presentation?</span>{" "}
        </motion.h1>
        <motion.p  initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.17, 0.67, 0.83, 0.67] }}>
          To get to know more about the registration process and format of the
          paper's Important dates go through the complete documentation and
          access the documentation by clicking the docs button below.The
          selection of articles will be based on a number of factors including
          quality of originality and style. The selected papers may be required
          to undergo further review and editing before actual publication in
          ISBN Book{" "}
        </motion.p>
        <motion.button className="bg-indigo-900 px-3 rounded-md font-medium my-3 px-auto text-white py-3 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.17, 0.67, 0.83, 0.67] }}>
            <a href="https://sudhanmagas-organization.gitbook.io/untitled/">Docs</a>
          </motion.button>
      </div>
    </div>
  );
};

export default Dody;
