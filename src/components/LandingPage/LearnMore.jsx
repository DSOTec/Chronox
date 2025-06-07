import React from "react";
import Doctor from "../../assets/images/Doctor.jpg";
import TabletMan from "../../assets/images/TabletMan.jpg"; // Update with actual image paths
import WavingMan from "../../assets/images/WavingMan.jpg"; // Update with actual image paths

const HealthManagementSection = () => {
  return (
    <section className="max-page-width bg-white p-8 flex-col items-center justify-between">
      <div className="max-w-[750px] flex flex-col mx-auto w-full text-[#636363] xl:text-[18px] lg:text-[16px] text-[14px] mb-6">
        <h2 className="text-lg mb-4">
          At Chronox, we believe that managing chronic health conditions shouldn’t feel like a full-time job but to simplify and personalize healthcare for individuals
          living with chronic conditions.
        </h2>
        <a
          href="/learn-more"
          className="mx-auto bg-[#fff] font-semibold text-[#00BFAE] border border-[#00BFAE] px-8 py-2 rounded-full hover:bg-[#00BFAE] hover:text-white transition"
        >
          Learn more
        </a>
      </div>
      <div className="mx-auto w-full flex justify-between items-center gap-4 mt-10">
        <img src={Doctor} alt="User 1" className="self-start max-md:object-center object-cover rounded-lg" />
        <img src={TabletMan} alt="User 2" className="max-md:object-center object-cover rounded-lg" />
        <img src={WavingMan} alt="User 3" className="self-end max-md:object-center object-cover rounded-lg" />
      </div>
    </section>
  );
};

export default HealthManagementSection;
