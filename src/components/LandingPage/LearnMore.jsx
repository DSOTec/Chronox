import React from "react";
import Doctor from "../../assets/images/Doctor.jpg";
import TabletMan from "../../assets/images/TabletMan.jpg"; // Update with actual image paths
import WavingMan from "../../assets/images/WavingMan.jpg"; // Update with actual image paths

const HealthManagementSection = () => {
  return (
    <section className="max-page-width bg-white md:p-8 p-4 flex-col items-center justify-between">
      <div className="max-w-[750px] flex flex-col mx-auto w-full my-6">
        <h2 className="text-[#636363] xl:text-[18px] md:text-[16px] text-[14px] mb-4">
          <span className="font-medium text-black">At Chronox</span>, we believe that managing chronic health conditions shouldn’t feel like a full-time job but to{" "}
          <span className="font-medium text-black"> simplify and personalize healthcare for individuals living with chronic conditions.</span>
        </h2>
        <a
          href="/learn-more"
          className="mx-auto bg-[#fff] font-semibold text-[#00BFAE] xl:text-[18px] lg:text-[16px] text-[14px] border border-[#00BFAE] px-8 py-2 rounded-full hover:bg-[#00BFAE] hover:text-white transition"
        >
          Learn more
        </a>
      </div>
      <div className="mx-auto w-full max-h-[600px] flex xl:justify-between justify-center items-center gap-4 mt-10 overflow-x-auto">
        <img src={Doctor} alt="User 1" className="max-xl:hidden self-start max-md:object-center object-cover rounded-lg" />
        <img src={TabletMan} alt="User 2" className="max-xl:hidden max-md:object-center object-cover rounded-lg" />
        <div className="flex flex-col items-center xl:max-w-[400px] max-w-[500px]">
          <p className="text-[#636363] xl:text-[18px] md:text-[16px] text-[14px] mb-4 max-xl:text-center">
            With Chronox, users can track vital signs, access certified health coaches and specialists, receive smart medication reminders ...
          </p>
          <img src={WavingMan} alt="User 3" className="max-md:object-center object-cover rounded-lg" />
        </div>
      </div>
    </section>
  );
};

export default HealthManagementSection;
