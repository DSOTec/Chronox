import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import MobileBottomNav from "./MobileBottomNav";
import RecentLogs from "./RecentLogs";
import MainChart from "./MainChart/MainChart";
import Trends from "./Trends";
import RecentActivity from "./RecentActivity/RecentActivity";
import HealthCategories from "./HealthCategories";

// Main Dashboard Component
const HealthPage = () => {
  const activeTabName = "Health";

  return (
    <div className="flex min-h-screen bg-[#E8F2F1]">
      <Sidebar activeTabName={activeTabName} />

      <main className="flex-1 flex flex-col lg:pb-0 pb-20">
        <Header />
        <div className="flex-1 flex max-lg:flex-col gap-6 sm:p-6 p-4">
          {/* Left Column - Charts */}
          <div className="w-full flex flex-col">
            <MainChart />
            <RecentLogs />
          </div>

          {/* Right Column */}
          <div className="w-full flex flex-col gap-6">
            <Trends />
            <RecentActivity />
            <HealthCategories />
          </div>
        </div>
      </main>

      <MobileBottomNav activeTabName={activeTabName} />
    </div>
  );
};

export default HealthPage;
