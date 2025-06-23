import React from "react";
import premiumbanner from '../../assets/Dashboard/Coach/premiumbanner.png';

function PremiumBanner() {
  return (
    <div className="bg-[#23D1B4] rounded-2xl flex flex-col md:flex-row items-center justify-between p-8 w-full min-h-[200px] relative overflow-hidden">
      {/* Left: Text and Button */}
      <div className="flex flex-col items-start z-10">
        <h2 className="text-white text-2xl md:text-3xl font-semibold mb-6">
          Use our premium<br />features now
        </h2>
        <button className="bg-white text-[#23D1B4] text-lg font-semibold rounded-full px-8 py-3 shadow">
          Get premium
        </button>
      </div>
      {/* Right: Image */}
      <img
        src={premiumbanner}
        alt="Premium"
        className="w-[260px] md:w-[340px] object-contain absolute right-4 bottom-0 md:static md:ml-8"
        style={{ maxHeight: "180px" }}
      />
    </div>
  );
}

export default PremiumBanner;