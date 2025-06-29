import React from "react";
import Sidebar from "../../components/Dashboard/Sidebar";
import Header from "../../components/Dashboard/Health/Header";
import MobileBottomNav from "../../components/Dashboard/MobileBottomNav";
import RecentLogs from "../../components/Dashboard/Health/RecentLogs";
import MainChart from "../../components/Dashboard/Health/MainChart/MainChart";
import Trends from "../../components/Dashboard/Health/Trends";
import RecentActivity from "../../components/Dashboard/Health/RecentActivity/RecentActivity";
import HealthCategories from "../../components/Dashboard/Health/HealthCategories";

const HealthPage = () => {
  const activeTabName = "Health";

  return (
    <div className="flex min-h-[100svh] bg-[#E8F2F1]">
      <Sidebar activeTabName={activeTabName} />

      <main className="flex-1 flex flex-col xl:ml-[120px] lg:ml-[100px] lg:pb-0 pb-20">
        <Header />
        <div className="flex-1 flex max-lg:flex-col gap-6 lg:p-6 sm:p-4 p-3">
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
