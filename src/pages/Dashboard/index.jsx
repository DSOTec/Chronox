import React from "react";
import logo from "../../assets/Dashboard/logo.png";
import { MdHome, MdFavorite, MdPerson, MdMedicalServices, MdSettings, MdNotifications } from "react-icons/md";
import logout from "../../assets/Dashboard/logout.png";
import metric from "../../assets/Dashboard/metrics.png";
import heart from "../../assets/Dashboard/heart.png";
import heartrate from "../../assets/Dashboard/heartrate.png";
import medication from "../../assets/Dashboard/medication.png";
import checkbox from "../../assets/Dashboard/checkbox.png";
import mood from "../../assets/Dashboard/mood.png";
import glucose from "../../assets/Dashboard/glucose.png";
import pressure from "../../assets/Dashboard/pressure.png";
import abnormal from "../../assets/Dashboard/Abnormal.png";
import heartprogress from "../../assets/Dashboard/heartprogress.png";
import glucoselevel from "../../assets/Dashboard/glucoselevel.png";
import glucoseicon from "../../assets/Dashboard/glucloseicon.png";
import cancelicon from "../../assets/Dashboard/cancelicon.png";
import medicationicon from "../../assets/Dashboard/medicationicon.png";
import yoga from "../../assets/Dashboard/yoga.png"
import { Link } from "react-router-dom";
import man from "../../assets/Dashboard/man.jpg";
import Coach from "./Coach";  

const HomeScreen = () => {
  return (
    <div className="bg-[#E8F2F1] min-h-screen">
      <div className="flex flex-col lg:flex-row items-start justify-between bg-[#F5F5F5] min-h-screen">
        {/* Sidebar */}
        <aside className="w-full lg:w-40 h-auto lg:h-[150vh] bg-[#24CDAF] p-4 flex flex-row lg:flex-col items-center justify-between rounded-b-[10px] lg:rounded-l-[10px] lg:rounded-b-none shadow-lg">
          <div className="flex items-center justify-center mt-4 lg:mt-10">
            <img className="bg-white p-[10px] rounded-[40px]" src={logo} alt="Logo" />
          </div>
          <div className="hidden lg:block mt-20 bg-white p-4 rounded-[50px] shadow-lg">
            <nav>
              <ul className="flex flex-col gap-12">
                <li className="flex flex-col items-center">
                <Link to="/">
                  <MdHome size={40} className="text-[#7C7C7C]" />
                  <span className="text-[#7C7C7C] font-medium mt-2">Home</span>
                  </Link>
                </li>
                <li className="flex flex-col items-center">
                <Link to="/">
                  <MdFavorite size={40} className="text-[#7C7C7C]" />
                  <span className="text-[#7C7C7C] font-medium mt-2">Health</span>
                  </Link>
                </li>
                <li className="flex flex-col items-center">
                <Link to="/coach">
                  <MdPerson size={40} className="text-[#7C7C7C]" />
                  <span className="text-[#7C7C7C] font-medium mt-2">Coach</span>
                  </Link>
                </li>
                <li className="flex flex-col items-center">
                <Link to="/">
                  <MdMedicalServices size={40} className="text-[#7C7C7C]" />
                  <span className="text-[#7C7C7C] font-medium mt-2">Specialist</span>
                  </Link>
                </li>
                <li className="flex flex-col items-center">
                <Link to="/">
                  <MdSettings size={40} className="text-[#7C7C7C]" />
                  <span className="text-[#7C7C7C] font-medium mt-2">Settings</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <button className="mt-4 lg:mt-10 bg-white p-4 rounded-[40px] shadow-lg cursor-pointer">
            <img src={logout} alt="Logout" className="w-8 h-8" />
          </button>
        </aside>

        {/* Main Content */}
        <main className="flex-1 w-full p-2 sm:p-4">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white p-4 rounded-[10px] shadow-lg">
            <div>
              <h1 className="text-[22px] sm:text-[24px] font-bold font-[Roboto]">Good morning Paul</h1>
              <p className="text-[16px] sm:text-[18px] font-normal">Your wellness at a glance</p>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-10 mt-4 sm:mt-0 w-full sm:w-auto">
              <button className="p-3 bg-[#23ccb2] text-white text-center rounded-[40px] w-full sm:w-auto">Upgrade to Premium</button>
              <button className="bg-[#23ccb2] p-2 rounded-full">
                <MdNotifications size={28} className="text-white" />
              </button>
            </div>
          </div>

          {/* Health Metrics */}
          <div>
            <div className="flex flex-col sm:flex-row justify-between items-center p-4 mt-4 gap-2">
              <h1 className="text-lg font-semibold">Health Metrics</h1>
              <img src={metric} alt="Health Metrics" className="w-[25px]" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
              {/* Heart Rate */}
              <div className="bg-white rounded-[30px] w-full h-[200px] shadow-lg flex flex-col items-center justify-center">
                <div>
                  <div className="flex gap-6 sm:gap-12 mb-6 sm:mb-10 justify-between">
                    <h1 className="font-bold text-[#373737]">Heart Rate</h1>
                    <img className="w-[20px] h-[20px]" src={heart} alt="heart" />
                  </div>
                  <div className="flex justify-center mb-6 sm:mb-10">
                    <img src={heartrate} alt="heartrate" />
                  </div>
                  <div className="flex justify-between">
                    <p className="text-[#24CDAF] font-medium">71bpm</p>
                    <p className="text-[#373737] font-normal">Normal</p>
                  </div>
                  <div>
                    <p className="text-[#636363] text-[13px]">1 hour ago</p>
                  </div>
                </div>
              </div>
              {/* Medication */}
              <div className="bg-white rounded-[30px] w-full h-[200px] shadow-lg flex flex-col items-center justify-center">
                <div>
                  <div className="font-bold text-[#373737] mb-6 sm:mb-10">Take Medication</div>
                  <div className="flex justify-center">
                    <img className="w-[60px]" src={medication} alt="medication" />
                  </div>
                  <div className="flex justify-between items-center gap-6 sm:gap-10 mt-4">
                    <p>Medication</p>
                    <img src={checkbox} alt="checkbox" className="w-[20px] h-[20px]" />
                  </div>
                  <div>
                    <p className="text-[#636363] text-[13px]">1 hour ago</p>
                  </div>
                </div>
              </div>
              {/* Mood */}
              <div className="bg-white rounded-[30px] w-full h-[200px] shadow-lg flex flex-col items-center justify-center">
                <div>
                  <div className="font-bold text-[#373737] mb-6 sm:mb-10">Mood</div>
                  <div className="flex justify-center">
                    <img className="w-[60px]" src={mood} alt="mood" />
                  </div>
                  <div className="flex justify-between items-center gap-8 sm:gap-12 pt-3 mt-5">
                    <p className="text-[#636363] text-[13px]">Today</p>
                    <p className="text-[#636363] font-bold text-[14px]">Okay</p>
                  </div>
                </div>
              </div>
              {/* Glucose */}
              <div className="bg-white rounded-[30px] w-full h-[200px] shadow-lg flex flex-col items-center justify-center">
                <div>
                  <div className="font-bold text-[#373737] mb-6 sm:mb-10">Glucose</div>
                  <div className="flex justify-center">
                    <img className="w-[60px]" src={glucose} alt="glucose" />
                  </div>
                  <div className="flex justify-between items-center gap-6 sm:gap-10 mt-4">
                    <p className="text-[#24CDAF] font-medium">71bpm</p>
                    <p className="text-[#373737] font-normal">Normal</p>
                  </div>
                  <div>
                    <p className="text-[#636363] text-[13px]">1 hour ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Symptoms */}
          <div className="">
            <div className="flex justify-between -center">
              <div className="mt-2 w-[50%] p-4">
                <div>
                  <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
                    <h1 className="text-lg font-semibold">Symptoms</h1>
                    <p className="text-sm text-gray-400">1 hour ago</p>
                  </div>
                  <div className="bg-white rounded-[24px] px-8 py-6 mt-2 flex flex-col sm:flex-row items-center justify-between">
                    <span className="text-[#232323] font-semibold">No Symptoms</span>
                    <button className="mt-4 sm:mt-0 px-4 py-2 bg-[#23ccb2] text-white rounded-lg font-medium">Track</button>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <h2 className="font-semibold">Upcoming</h2>
                    <button className="ml-2 px-3 py-1 bg-[#23ccb2] text-white rounded-full text-lg">+</button>
                  </div>
                  <div className="mt- text-sm text-gray-500">Today</div>
                  <div className=" ">
                    <div>
                    

                      <div className="bg-white rounded-[24px] px-8 py-6 mt-2 flex flex-col gap-4 shadow">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-[#eaf3f2] rounded">
                            <img className="pl-3 pt-3 " src={medicationicon} alt="" />
                          </div>
                          <h2 className="text- font-semibold text-[#232323]">Medication</h2>
                        </div>
                        <div>
                          <div className="flex items-center mb-2">
                            <span className="w-3 h-3 bg-gray-500 rounded-full mr-3"></span>
                            <span className="text-blue-700 font-medium mr-6">Lisinopril</span>
                            <span className="text-gray-700 mr-6">10mg</span>
                            <span className="text-gray-400">7:30AM</span>
                          </div>
                          <div className="flex items-center">
                            <span className="w-3 h-3 bg-gray-500 rounded-full mr-3"></span>
                            <span className="text-blue-700 font-medium mr-6">Metformin</span>
                            <span className="text-gray-700 mr-6">500mg</span>
                            <span className="text-gray-400">6:30PM</span>
                          </div>
                        </div>
                        <hr className="my-2 border-gray-400" />
                        <div>
                          <p className="text-[#23ccb2] font-medium">Refill needed soon</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="bg-white rounded-[24px] px-7 py-6 mt-2 flex flex-col gap-4 shadow">
                        <div className="flex justify-between items-center">
                          <img src={pressure} alt="symbols" />
                          <h3 className="font-semibold  pr-3 ">Take blood pressure meds</h3>
                          <p className="text-sm text-gray-400">9:00AM</p>
                        </div>
                        <div className="flex gap-2 px-6 mt-2">
                          <button className=" p-[10px] w-[50%]  bg-[#23ccb2] text-white rounded-[30px]">Mark as done</button>
                          <button className=" p-[10px] w-[50%] bg-gray-200 text-[#373737] rounded-[30px]">Snooze</button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-[24px] px-8 py-6 mt-2 flex flex-col gap-4 shadow">
                      <div className="flex justify-between items-center">
                        <div>
                          <img src={abnormal} alt="symbols" />
                        </div>
                        <div>
                          <h2 className="font-semibold">Abnormal heart rate</h2>
                          <p className="text-sm">4:00PM</p>
                        </div>
                        <button className="px-3 py-1 bg-red-500 text-white rounded-lg mt-2">High</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <div className="w-px h-[100vh] border-2 border-[#24CDAF] mx-6 rounded"></div>
              </div>
              {/* Progress */}
              <div className="mt-6">
                <div className="flex justify-between items-center">
                  <h1 className="font-semibold">Progress</h1>
                  <p className="text-[#23ccb2] cursor-pointer">See all</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-4">
                  <div className="bg-white rounded-[20px] p-4  flex flex-col gap-2 w-full">
                    <div className="flex justify-between items-center  ">
                    <div className="flex items-center gap-3">
                      <img src={heart} alt="heart" />
                      <h2 className="font-semibold">Heart Rate</h2>
                    </div>
                    <p className="text-lg font-medium">71bpm</p>
                    </div>
                    <p className="text-sm text-gray-400">Past 7 days</p>
                    <img src={heartprogress} className="w-[320px]" alt="Heart Progress" />
                    <p className="text-sm mt-2">Heart rate has remained stable over the past week</p>
                  </div>
                  <div className="bg-white rounded-[20px] p-4 flex flex-col gap-2 w-full">
                    <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <img src={glucoseicon} alt="glucoseicon" />
                      <h2 className="font-semibold">Glucose</h2>
                    </div>
                    <p className="text-lg font-medium">85mg/dl</p>
                    </div>
                    <p className="text-sm text-gray-400">Past 7 days</p>
                    <img src={glucoselevel} alt="Glucose Level" className="w-[320px]" />
                    <p className="text-sm mt-2">Blood glucose has remained normal over the past week</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Right Aside */}
        <aside className="bg-gradient-to-b from-[#D5EFEA] to-[#24CDAF] w-full lg:w-[25%] h-auto lg:h-[150vh] p-4 rounded-t-[10px] lg:rounded-r-[10px] lg:rounded-t-none shadow-lg mt-4 lg:mt-0">
          <div className="flex items-center gap-4">
            <img src={man} alt="Placeholder" className="w-[50px] h-[50px] rounded-full" />
            <div>
              <h1 className="font-semibold text-black">Paul Dairo</h1>
              <p className="text-black">36 Years</p>
            </div>
          </div>
          <div className="mt-8  flex items-center justify-between">
            <h1 className="text-black font-semibold">My Conditions</h1>
            <button className="ml-2  px-5 py-1 bg-[#24CDAF] text-[#fff] rounded-full text-lg">+</button>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <button className="px-4 py-1 bg-white text-[#000 rounded-full">Diabetes</button>
            <button className="px-4 py-1 bg-white text-[#000] rounded-full">Hypertension</button>
            <img src={cancelicon} alt="Cancel Icon" className="h-[20px] cursor-pointer" />
          </div>
          <div className="mt-6 text-black font-semibold">Your Activity</div>
          <div>
            <div className="bg-white rounded-[20px] p-4 flex flex-col gap-2 w-full mt-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#e8f2f1] rounded-[4px]">
                    <img src={yoga} alt="yoga" className="p-1"  />
                  </div>
                  <span className="font-semibold text-[#373737] text-lg">Yoga</span>
                </div>
                <span className="text-gray-400 text-sm">1 hour ago</span>
              </div>
              <div className="w-full mt-2">
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-[#373737] rounded-full" style={{ width: "80%" }}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-black font-semibold">Appointment</h2>
          </div>
          <div>
            {/* Appointment Card */}
            <div className="bg-white rounded-[20px] p-4 flex flex-col sm:flex-row items-center justify-between w-full mt-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#e8f2f1] rounded-[4px] flex items-center justify-center">
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                    <rect width="20" height="16" x="2" y="5" fill="#2081C3" rx="2" />
                    <rect width="16" height="10" x="4" y="9" fill="#fff" rx="1" />
                    <rect width="2" height="4" x="7" y="13" fill="#2081C3" rx="1" />
                    <rect width="2" height="4" x="11" y="13" fill="#2081C3" rx="1" />
                    <rect width="2" height="4" x="15" y="13" fill="#2081C3" rx="1" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-[#373737]">Dr. Mark Odoma</div>
                  <div className="text-[#454E9E] text-[13px]">Health Coach</div>
                </div>
              </div>
              <div className="flex flex-col items-end gap- mt-2 sm:mt-0">
                <span className="text-gray-400 text-[13px]">Today</span>
                <div className="flex items-center gap-1">
                  <span className="w-4 h-4 bg-[#1AA349] rounded-full flex items-center justify-center">
                    <svg width="12" height="12" fill="none" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" fill="#1AA349" />
                      <path d="M12 7v5l3 3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-[#636363] text-[13px] font-medium ml-1">11:00AM</span>
                </div>
              </div>
            </div>
            {/* Apple Health Card */}
            <div className="bg-white rounded-[20px] p-6 flex items-center flex-col gap-4 w-full mt-4">
              <div className="flex flex-col sm:flex-row w-full justify-between items-center">
                <div className="flex items-start w-full gap-3">
                  <div className="w-10 h-10 bg-[#e8f2f1] rounded-[4px] flex items-center justify-center">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M19.665 12.837c-.02-2.14 1.75-3.163 1.83-3.213-1-1.46-2.56-1.66-3.11-1.68-1.32-.13-2.58.77-3.25.77-.67 0-1.7-.75-2.8-.73-1.44.02-2.77.84-3.51 2.13-1.5 2.6-.39 6.44 1.07 8.55.71 1.03 1.56 2.19 2.67 2.15 1.08-.04 1.49-.69 2.8-.69 1.31 0 1.68.69 2.8.67 1.16-.02 1.89-1.04 2.59-2.07.82-1.19 1.16-2.34 1.18-2.4-.03-.01-2.26-.87-2.28-3.45zm-2.68-6.31c.6-.73 1-1.75.89-2.77-.86.03-1.89.57-2.5 1.3-.55.64-1.04 1.67-.85 2.65.9.07 1.86-.46 2.46-1.18z"
                        fill="#2081C3"
                      />
                    </svg>
                  </div>
                  <div className="w-full">
                    <div className="font-semibold text-[14px] text-[#4F46E5]">Apple Health</div>
                    <div className="text-[#373737] text-[13px]">Last synced</div>
                    <div className="text-[#373737] text-[13px]">Status</div>
                  </div>
                </div>
                <div className="flex flex-col items-end  mt-2 sm:mt-0">
                  <span className="text-gray-400 text-[11px]">Today at 6:15AM</span>
                  <div className="flex items-center gap-1 mt-1 ">
                    <span className="w-4 h-4 bg-[#23ccb2] rounded-[4px] flex items-center justify-center">
                      <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                        <path d="M6.5 11.5l-3-3 1-1 2 2 4-4 1 1-5 5z" fill="#fff" />
                      </svg>
                    </span>
                    <span className="text-[#23ccb2] leading-3 text-[11px]  font-medium">Synced successfully</span>
                  </div>
                </div>
              </div>
              <button className="mt-2 ml-6 bg-[#23ccb2] hover:bg-[#1bb39e] transition-colors text-white font-semibold rounded-lg px-8 py-2 flex items-center gap-2 self-start">
                Refresh
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                  <path d="M17.65 6.35A8 8 0 1 0 20 12h-2a6 6 0 1 1-1.76-4.24l-2.79 2.79H20V4.41l-2.35 2.34z" fill="#fff" />
                </svg>
              </button>
            </div>
            {/* Hydration Card */}
            <div className="mt-6">
            <div className="flex items-center justify-between mt-6">
              <h2 className="text-black font-semibold">Health Tips</h2>
              <p className="text-black font-semibold">See All</p>
            </div>
            <div className="bg-white rounded-[30px] p-6 flex flex-col gap-4 w-full mt-6 ">
              <img
                src="https://images.pexels.com/photos/3768913/pexels-photo-3768913.jpeg"
                alt="Staying hydrated"
                className="w-full h-[140px] object-cover rounded-[24px]"
              />
              <div className="mt-2 font-semibold text-[#4F46E5] text-[16] leading-snug">
                Why staying hydrated is Important
                <br />
                for your health
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span className="w-6 h-6 bg-[#23ccb2] rounded-[4px] flex items-center justify-center">
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" fill="#23ccb2" />
                    <path d="M12 7v5l3 3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-gray-400 text-lg font-medium">2 hours ago</span>
              </div>
            </div>
          </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default HomeScreen;