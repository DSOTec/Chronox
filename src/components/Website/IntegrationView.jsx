import React from "react";
import { motion } from "framer-motion";
import CTAButton from "./CTAButton";

const slideIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const DeviceSection = ({ title = "", subTitle = "", sideImage, isImageLeft, btnText = "Get Started" }) => {
  return (
    <section className="md:mt-8 mt-4">
      <div
        className={`max-page-width flex flex-col ${
          isImageLeft ? "lg:flex-row-reverse" : "lg:flex-row"
        } justify-between items-center gap-4 md:p-10 p-8 sm:px-10 lg:px-16 2xl:px-20`}
      >
        <div className="flex flex-col lg:items-start items-center max-md:text-center max-w-[600px]">
          <motion.h2
            variants={slideIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="xl:text-[38px] lg:text-[26px] text-[20px] font-bold text-[#1A1A1A] leading-[1.1]"
          >
            {title}
          </motion.h2>
          <motion.p
            variants={slideIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="mt-2 text-start text-[#636363] xl:text-[18px] lg:text-[16px] text-[14px] max-w-[600px]"
          >
            {subTitle}
          </motion.p>
          <motion.div variants={slideIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.7 }} className="md:mt-8 mt-4">
            <CTAButton btnText={btnText} />
          </motion.div>
        </div>
        <motion.img
          src={sideImage}
          alt="Feature"
          className="lg:w-[40%] max-lg:max-w-[400px] w-full rounded-xl transition duration-300 hover:scale-[1.05]"
          variants={slideIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
        />
      </div>
    </section>
  );
};

export default DeviceSection;
