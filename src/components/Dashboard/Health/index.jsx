import React, { useState } from "react";
import {
  IoChevronDown,
  IoNotifications,
  IoHome,
  IoHeart,
  IoPerson,
  IoPeople,
  IoSettings,
  IoAdd,
  IoEllipsisHorizontal,
  IoChevronForward,
  IoGrid,
  IoBody,
  IoBarbell,
  IoWalk,
  IoMedical,
  IoWater,
  IoPulse,
  IoPencil,
} from "react-icons/io5";
import { GiBrain } from "react-icons/gi";
import { GrYoga } from "react-icons/gr";
import { MdHealthAndSafety } from "react-icons/md";

import ChronoxLogo from "../../../assets/logos/ChronoxLogo.svg";
import LineChart from "../../../assets/images/lineChart.png";
import glucoseChart from "../../../assets/images/redChart.png";
import heartChart from "../../../assets/images/yellowChart.png";
import { Link } from "react-router-dom";

// Sidebar Component
const Sidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: "/dashboard", icon: IoHome, label: "Home" },
    { id: "/health", icon: IoHeart, label: "Health" },
    { id: "/coach", icon: IoPerson, label: "Coach" },
    { id: "/specialist", icon: IoPeople, label: "Specialist" },
    { id: "/settings", icon: IoSettings, label: "Settings" },
  ];

  return (
    <div className="hidden md:flex flex-col bg-[#24CDAF] xl:w-[120px] lg:w-[100px] w-[80px] xl:p-5 p-3 border-r border-gray-200">
      <div className="flex items-center justify-center h-16 mb-[100px]">
        <div className="md:h-[50px] md:w-[50px] h-[40px] w-[40px] flex justify-center items-center bg-white rounded-full border border-[#86ebd8]">
          <img src={ChronoxLogo} alt="Chronox Logo" className="w-[32px] max-md:w-[24px]" />
        </div>
      </div>

      <nav className="py-10 space-y-2 bg-white rounded-[40px] overflow-hidden">
        {menuItems.map((item) => (
          <Link
            to={item.id}
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex flex-col items-center justify-center lg:py-4 py-6 xl:text-[12px] md:text-[11px] text-[10px] transition-colors ${
              activeTab === item.id ? "text-teal-500 bg-teal-50" : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <item.icon className="w-6 h-6 mb-1" />
            <span className="max-lg:hidden">{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="mt-6 p-4">
        <button className="w-full flex flex-col items-center justify-center py-2 xl:text-[12px] md:text-[11px] text-[10px] text-white cursor-pointer">
          <MdHealthAndSafety className="text-red-500 bg-white w-6 h-6 rounded-full mb-1" />
          <span className="max-lg:hidden font-medium tracking-wide">Emergency</span>
        </button>
      </div>
    </div>
  );
};

// Mobile Bottom Navigation
const MobileBottomNav = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: "home", icon: IoHome, label: "Home" },
    { id: "health", icon: IoHeart, label: "Health" },
    { id: "coach", icon: IoPerson, label: "Coach" },
    { id: "specialist", icon: IoPeople, label: "Specialist" },
    { id: "settings", icon: IoSettings, label: "Settings" },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <nav className="flex">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex-1 flex flex-col items-center justify-center py-2 xl:text-[12px] md:text-[11px] text-[10px] transition-colors ${
              activeTab === item.id ? "text-[#24CDAF]" : "text-gray-500"
            }`}
          >
            <item.icon className="w-5 h-5 mb-1" />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

// Header Component
const Header = () => (
  <div className="bg-gradient-to-r from-teal-100 to-[#47e3c6] sm:px-6 px-4 sm:pt-12 pt-8 sm:pb-4 pb-2 text-white">
    <div className="flex max-md:flex-col-reverse md:items-center justify-between gap-6 mb-4">
      <div>
        <h1 className="xl:text-[24px] lg:text-[22px] text-[20px] text-[#24B39A] font-bold">Overall Health Data</h1>
        <p className="text-[#373737] xl:text-[16px] md:text-[14px] text-[13px] ">Check out all your health info, neatly in one spot</p>
      </div>
      <div className="flex max-sm:justify-between items-center gap-4">
        <button className="bg-teal-600 hover:bg-teal-700 px-4 py-2 rounded-full xl:text-[14px] md:text-[13px] text-[12px] font-medium transition-colors">
          Upgrade to Premium
        </button>
        <button className="relative">
          <IoNotifications className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
        </button>
      </div>
    </div>

    <div className="flex max-sm:flex-row-reverse items-center justify-between">
      <button className="flex items-center gap-2 text-[#24CDAF] bg-white hover:bg-[#24B39A] px-4 py-2 rounded-full cursor-pointer">
        <span className="xl:text-[16px] md:text-[14px] text-[13px] font-medium">This Week</span>
        <IoChevronDown className="w-4 h-4" />
      </button>
      <span className="text-teal-700 xl:text-[14px] md:text-[13px] text-[12px]">30 min ago</span>
    </div>
  </div>
);

// Chart Card Component
const ChartCard = ({ title, isActive, children }) => (
  <div className={`bg-white rounded-lg border-2 p-6 transition-colors ${isActive ? "border-teal-500" : "border-transparent shadow-sm"}`}>
    <h3 className={`font-semibold mb-4 pb-2 ${isActive ? "text-teal-600 border-teal-500" : "text-gray-600 border-transparent"}`}>{title}</h3>
    {children}
  </div>
);

// Health Metric Card
const HealthMetricCard = ({ icon, title, value, unit, status, color, chart }) => (
  <div className="w-full max-w-[400px] mx-auto bg-white rounded-lg shadow-sm p-4">
    <div className="flex items-center gap-3 mb-3">
      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${color}`}>{icon}</div>
      <div>
        <h3 className="font-semibold text-gray-900">{title}</h3>
      </div>
    </div>

    <div className="mb-3">
      <div className="flex items-baseline gap-2">
        <span className="xl:text-[24px] lg:text-[20px] text-[18px] font-bold text-gray-900">{value}</span>
        <span className="text-gray-500 xl:text-[14px] md:text-[13px] text-[12px]">{unit}</span>
      </div>
      <span
        className={`xl:text-[12px] md:text-[11px] text-[10px] px-2 py-1 rounded-full ${
          status === "Normal" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
        }`}
      >
        {status}
      </span>
    </div>

    <div className="h-16 mb-3 border-b border-gray-200">{chart}</div>

    <button className="max-lg:mx-auto w-full max-lg:max-w-[200px] bg-teal-500 hover:bg-teal-600 text-white mt-8 px-4 py-2 rounded-full xl:text-[14px] md:text-[13px] text-[12px] font-medium transition-colors flex items-center justify-center gap-2">
      View more info
      <IoChevronForward className="w-4 h-4" />
    </button>
  </div>
);

// Activity Item Component
const ActivityItem = ({ icon, title, duration, progress }) => (
  <div className="flex items-center gap-4 py-3">
    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">{icon}</div>
    <div className="flex-1">
      <div className="flex items-center justify-between mb-1">
        <h4 className="font-medium text-gray-900">{title}</h4>
        <span className="xl:text-[14px] md:text-[13px] text-[12px] text-gray-500">{duration}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div className="bg-gray-800 h-2 rounded-full transition-all duration-300" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  </div>
);

// Recent Log Item
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

// Health Category Icon
const HealthCategoryIcon = ({ icon, isActive }) => (
  <button
    className={`sm:w-12 sm:h-12 w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
      isActive ? "bg-teal-500 text-white" : "bg-gray-100 text-gray-600 hover:text-teal-600 hover:bg-teal-50"
    }`}
  >
    {icon}
  </button>
);

// Main Dashboard Component
const HealthPage = () => {
  const [activeTab, setActiveTab] = useState("health");
  const [activeChart, setActiveChart] = useState("Heart Rate");

  // Mock chart components (replace with actual chart library)
  const HeartRateChart = () => (
    <div className="relative bg-gradient-to-b from-slate- to-transparent rounded-lg">
      <div className="w-full max-w-[500px] mx-auto sm:py-10 py-4 flex items-end justify-center">
        <img src={LineChart} alt="Line Chart" className="w-full " />
      </div>
      {/* <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded xl:text-[12px] md:text-[11px] text-[10px]">65 bpm</div> */}
    </div>
  );

  const GlucoseChart = () => (
    <div className="w-full h-16 rounded-lg relative overflow-hidden">
      <img src={glucoseChart} alt="Glucose chart" className="w-full h-full" />
    </div>
  );
  const HeartChart = () => (
    <div className="w-full h-16 rounded-lg relative overflow-hidden">
      <img src={heartChart} alt="Heart chart" className="w-full h-full" />
    </div>
  );

  return (
    <div className="flex min-h-screen bg-[#E8F2F1]">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="flex-1 flex flex-col lg:pb-0 pb-20">
        <Header />

        <div className="flex-1 sm:p-6 p-4">
          {/* Desktop Layout */}
          <div className="hidden lg:flex gap-6">
            {/* Left Column - Charts */}
            <div className="w-full flex flex-col">
              <div className="flex gap-4 mb-6">
                {["Heart Rate", "Glucose", "Sleep"].map((chart) => (
                  <button
                    key={chart}
                    onClick={() => setActiveChart(chart)}
                    className={`w-full max-w-[100px] p-2 xl:text-[14px] md:text-[13px] text-[12px] font-medium border-b-3 transition-colors ${
                      activeChart === chart ? "border-teal-500 text-teal-600" : "hover:text-black border-transparent text-gray-500"
                    }`}
                  >
                    {chart}
                  </button>
                ))}
                <button className="p-3 bg-white rounded-lg text-gray-400">
                  <IoEllipsisHorizontal className="w-5 h-5 mx-auto" />
                </button>
              </div>

              <ChartCard title={activeChart} isActive={true}>
                <HeartRateChart />
                <div className="flex justify-between mx-auto w-full max-w-[700px] gap-10 mt-4 text-center">
                  <div>
                    <div className="xl:text-[14px] md:text-[13px] text-[12px] text-gray-500">Min</div>
                    <div className="font-semibold">60 bpm</div>
                  </div>
                  <div>
                    <div className="xl:text-[14px] md:text-[13px] text-[12px] text-gray-500">Max</div>
                    <div className="font-semibold">100 bpm</div>
                  </div>
                  <div>
                    <div className="xl:text-[14px] md:text-[13px] text-[12px] text-gray-500">Average</div>
                    <div className="font-semibold">75 bpm</div>
                  </div>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg mt-4 flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <IoHeart className="w-4 h-4 text-white" />
                  </div>
                  <p className="xl:text-[14px] md:text-[13px] text-[12px] text-gray-700">Your resting heart rate has been normal in the past week</p>
                </div>
              </ChartCard>

              {/* Recent Logs */}
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
            </div>

            {/* Right Column */}
            <div className="w-full flex flex-col gap-6">
              {/* Current Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <HealthMetricCard
                  icon={<IoHeart className="w-4 h-4 text-white" />}
                  title="Current Heart Rate"
                  value="72"
                  unit="bpm"
                  status="Normal"
                  color="bg-red-500"
                  chart={<GlucoseChart />}
                />
                <HealthMetricCard
                  icon={<IoWater className="w-4 h-4 text-white" />}
                  title="Current Glucose"
                  value="80"
                  unit="mg / dL"
                  status="Normal"
                  color="bg-yellow-500"
                  chart={<HeartChart />}
                />
              </div>

              {/* Recent Activities */}
              <div className="bg-white rounded-lg shadow-sm sm:p-6 p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900">Recent Activities</h3>
                  <button className="text-teal-500 xl:text-[14px] md:text-[13px] text-[12px] hover:text-teal-600">See all</button>
                </div>

                <ActivityItem icon={<GrYoga className="w-5 h-5 text-blue-600" />} title="Yoga" duration="40 min / 1hr" progress={67} />
                <ActivityItem icon={<IoBarbell className="w-5 h-5 text-blue-600" />} title="Workouts" duration="50 min / 1hr" progress={83} />
                <ActivityItem icon={<IoWalk className="w-5 h-5 text-blue-600" />} title="Walking" duration="1.2 km / 3km" progress={40} />
              </div>

              {/* Health Categories */}
              <div className="bg-white rounded-lg shadow-sm sm:p-6 p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900">Health Categories</h3>
                  <IoGrid className="w-5 h-5 text-teal-500" />
                </div>

                <div className="flex items-center gap-3">
                  <HealthCategoryIcon icon={<GiBrain className="w-5 h-5" />} isActive={true} />
                  <HealthCategoryIcon icon={<IoPulse className="w-5 h-5" />} isActive={false} />
                  <HealthCategoryIcon icon={<IoBarbell className="w-5 h-5" />} isActive={false} />
                  <HealthCategoryIcon icon={<IoBody className="w-5 h-5" />} isActive={false} />
                  <HealthCategoryIcon icon={<IoHeart className="w-5 h-5" />} isActive={false} />
                  <button className="w-12 h-12 rounded-xl bg-gray-100 text-gray-400 flex items-center justify-center">
                    <IoChevronForward className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden space-y-6">
            {/* Chart Section */}
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex flex-wrap gap-2 mb-4">
                {["Heart Rate", "Glucose", "Sleep"].map((chart) => (
                  <button
                    key={chart}
                    onClick={() => setActiveChart(chart)}
                    className={`sm:px-6 px-4 sm:py-2 py-[6px] rounded-full xl:text-[14px] md:text-[13px] text-[12px] font-medium text-nowrap transition-colors ${
                      activeChart === chart ? "bg-teal-500 text-white" : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {chart}
                  </button>
                ))}
              </div>

              <HeartRateChart />

              <div className="grid grid-cols-3 gap-4 mt-4 text-center xl:text-[14px] md:text-[13px] text-[12px]">
                <div>
                  <div className="text-gray-500">Min</div>
                  <div className="font-semibold">60 bpm</div>
                </div>
                <div>
                  <div className="text-gray-500">Max</div>
                  <div className="font-semibold">100 bpm</div>
                </div>
                <div>
                  <div className="text-gray-500">Average</div>
                  <div className="font-semibold">75 bpm</div>
                </div>
              </div>

              <div className="bg-blue-50 p-3 rounded-lg mt-4 flex items-center gap-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <IoHeart className="w-3 h-3 text-white" />
                </div>
                <p className="xl:text-[12px] md:text-[11px] text-[10px] text-gray-700">Your resting heart rate has been normal in the past week</p>
              </div>
            </div>

            {/* Recent Logs */}
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">Recent Logs</h3>
                <button className="text-teal-500 xl:text-[14px] md:text-[13px] text-[12px]">See all</button>
              </div>

              <div className="space-y-3">
                <RecentLogItem type="Symptoms" value="Today" description="Fatigue" color="bg-orange-400" />
                <RecentLogItem type="75 bpm" value="Post walk" time="01 May 7:00AM" description="" color="bg-red-400" />
                <RecentLogItem type="Medication Refill" value="Yesterday" description="Lisinopril 10mg" color="bg-blue-400" />
              </div>

              <button className="w-full bg-teal-500 text-white py-2 rounded-full mt-4 xl:text-[14px] md:text-[13px] text-[12px] font-medium">Upgrade to premium</button>
            </div>

            {/* Trends */}
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">Trends</h3>
                <span className="xl:text-[14px] md:text-[13px] text-[12px] text-gray-500">50 min ago</span>
              </div>

              <div className="space-y-4">
                <HealthMetricCard
                  icon={<IoHeart className="w-4 h-4 text-white" />}
                  title="Current Heart Rate"
                  value="72"
                  unit="bpm"
                  status="Normal"
                  color="bg-red-500"
                  chart={<HeartChart />}
                />
                <HealthMetricCard
                  icon={<IoWater className="w-4 h-4 text-white" />}
                  title="Current Glucose"
                  value="80"
                  unit="mg / dL"
                  status="Normal"
                  color="bg-yellow-500"
                  chart={<GlucoseChart />}
                />
              </div>
            </div>

            {/* Health Categories */}
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">Health Categories</h3>
                <IoGrid className="w-5 h-5 text-teal-500" />
              </div>

              <div className="flex flex-wrap items-center sm:gap-3 gap-2 overflow-x-auto pb-2">
                <HealthCategoryIcon icon={<GrYoga className="w-5 h-5" />} isActive={true} />
                <HealthCategoryIcon icon={<IoPulse className="w-5 h-5" />} isActive={false} />
                <HealthCategoryIcon icon={<IoBarbell className="w-5 h-5" />} isActive={false} />
                <HealthCategoryIcon icon={<IoBody className="w-5 h-5" />} isActive={false} />
                <button className="sm:w-12 sm:h-12 w-10 h-10 rounded-xl bg-gray-100 text-gray-400 flex items-center justify-center flex-shrink-0">
                  <IoChevronForward className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Recent Activities */}
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">Recent Activities</h3>
                <button className="text-teal-500 xl:text-[14px] md:text-[13px] text-[12px]">See all</button>
              </div>

              <div className="space-y-3">
                <ActivityItem icon={<GrYoga className="w-5 h-5 text-blue-600" />} title="Yoga" duration="40 min / 1hr" progress={67} />
                <ActivityItem icon={<IoBarbell className="w-5 h-5 text-blue-600" />} title="Workouts" duration="50 min / 1hr" progress={83} />
                <ActivityItem icon={<IoWalk className="w-5 h-5 text-blue-600" />} title="Walking" duration="1.2 km / 3km" progress={40} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <MobileBottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default HealthPage;
