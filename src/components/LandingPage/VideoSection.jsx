import React from "react";

const VideoSection = () => {
  return (
    <section className="max-page-width md:px-8 px-4 md:py-16 py-10">
      <h3 className="text-center text-[#1A1A1A] font-bold xl:text-[38px] lg:text-[26px] text-[20px]">Watch How Chronox Works</h3>
      <div className="w-full h-full overflow-hidden md:pt-4 pt-2">
        <iframe
          src="https://www.youtube.com/embed/fx35Mq0pp8osefs"
          allowFullScreen
          className="w-full xl:h-[650px] lg:h-[600px] md:h-[550px] max-md:h-[300px] sm:rounded-[25px]"
          title="Project Video"
        ></iframe>
      </div>
    </section>
  );
};

export default VideoSection;
