import React from "react";

const RecentLogItem = ({ type, value, time, description, color }) => (
  <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
    <div className="flex items-center gap-3">
      <div className={`w-2 h-2 rounded-full ${color}`}></div>
      <div>
        <div className="font-medium xl:text-[16px] md:text-[15px] text-[14px] text-gray-900">{type}</div>
        <div className="xl:text-[14px] md:text-[13px] text-[12px] text-gray-500">{description}</div>
      </div>
    </div>
    <div className="text-right">
      <div className="font-medium xl:text-[16px] md:text-[15px] text-[14px] text-gray-900">{value}</div>
      <div className="xl:text-[14px] md:text-[13px] text-[12px] text-gray-500">{time}</div>
    </div>
  </div>
);

export default RecentLogItem;
