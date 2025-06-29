import React from "react";
import { IoPencil } from "react-icons/io5";
import RecentLogItem from "./RecentLogItem";

const RecentLogs = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm sm:p-6 p-4 mt-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-900">Recent Logs</h3>
        <button className="text-teal-500 hover:text-teal-600">
          <IoPencil className="w-5 h-5" />
        </button>
      </div>

      <RecentLogItem type="Symptoms" value="Today" description="Fatigue" color="bg-orange-400" />
      <RecentLogItem type="75 bpm" value="Post walk" time="01 May 7:00AM" description="" color="bg-red-400" />
      <RecentLogItem type="Medication Refill" value="Yesterday" description="Lisinopril 10mg" color="bg-blue-400" />
    </div>
  );
};

export default RecentLogs;
