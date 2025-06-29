import React from "react";
import Sidebar from "../../components/Coach/Sidebar.jsx";
import Healthcoach from "../../components/Coach/Healthcoach.jsx";
import firstimage from "../../assets/Dashboard/Coach/firstimage.png";
import secondimage from "../../assets/Dashboard/Coach/secondimage.png";
import thirdimage from "../../assets/Dashboard/Coach/thirdimage.png";
import fourthimage from "../../assets/Dashboard/Coach/fourthimage.png";
import FeedbackCard from "../../components/Coach/FeedbackCard.jsx";
import PremiumBanner from "../../components/Coach/PremiumBanner.jsx";
import LearnmoreBanner from "../../components/Coach/LearnmoreBanner.jsx";
import ChatCoach from "../../components/Coach/ChatCoach.jsx";
import drnike from "../../assets/Dashboard/Coach/drnike.png";
import man from "../../assets/Dashboard/man.jpg";
import notification from "../../assets/Dashboard/Coach/notification.png";
import Upcoming from "../../components/Coach/Upcoming.jsx";
import Welcome from "../../components/Coach/Welcome.jsx";
import FirstLine from "../../components/Coach/FirstLine.jsx";

const Coach = () => {
  return (
    <div className="bg-[#E8F2F1] min-h-[100svh]">
      <div className="flex flex-col lg:flex-row gap-0 lg:gap-4">
        {/* Sidebar: hidden on mobile, visible on lg+ */}
        <div className="hidden lg:block lg:w-auto">
          <Sidebar />
        </div>
        {/* Main Content */}
        <div className="flex-1 pr-0">
          <div className="font-[600] pl-2 sm:pl-4 m-2">
            {/* Top Bar: Good Morning Paul and notification, only on mobile */}
            <div className="block lg:hidden mb-4">
              <div className="flex items-center justify-between px-2 pt-2 gap-2">
                <img src={man} alt="User" className="w-10 h-10 rounded-full object-cover" />
                <div className="flex-1 ml-2">
                  <h2 className="font-bold text-base text-[#232323]">Good Morning Paul</h2>
                  <p className="text-xs text-[#232323]">Let's pick up where you left off with your health journey</p>
                </div>
                <button className="bg-[#23D1B4]/10 p-2 rounded-full">
                  <img src={notification} alt="notification" className="w-6 h-6" />
                </button>
              </div>
            </div>
            {/* Input/Search Bar */}
            <div className="block lg:hidden mb-4 px-2">
              <FirstLine />
            </div>
            <div className=" block lg:hidden mb-4 px-2 ">
              <PremiumBanner />
            </div>
            {/* Desktop Welcome and Input */}
            <div className="hidden lg:block">
              <FirstLine />
              <Welcome />
            </div>
            {/* Last contacted and Upcoming */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-2 sm:px-4 py-4 mb-6">
              <div className="Healthcoach bg-[#fff]  rounded-[30px] p-4 w-full">
                <h1 className="text-base sm:text-lg mb-2">Last contacted health coach</h1>
                <ChatCoach name="Dr. Nike Shimawa" role="Health Coach" image={drnike} rating={5} buttonText="Continue Chat" />
              </div>
              <div>
                <Upcoming />
              </div>
            </div>
            {/* Health Coaches and Feedback */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-2 sm:px-4">
              <div className=" bg-[#fff] rounded-[30px] p-4 col-span-2">
                <h2 className="text-[20px] sm:text-[24px] font-[600] pl-2 sm:pl-4 m-2">Health Coach</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  <Healthcoach image={firstimage} name="Dr. Mark Odoma" description="Health Coach" rating={5} buttonText="Message" />
                  <Healthcoach image={secondimage} name="Dr. Niyi Olominu " description="Health Coach" rating={5} buttonText="Message" />
                  <Healthcoach image={thirdimage} name="Dr. Gbemi Esho" description="Health Coach" rating={3} buttonText="Message" />
                  <Healthcoach image={fourthimage} name="Dr. Mary Taiwo" description="Health Coach" rating={2} buttonText="Message" />
                </div>
              </div>
              <FeedbackCard />
            </div>
            {/* Footer Banners */}
            <footer className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 px-2 sm:px-4">
              <PremiumBanner />
              <LearnmoreBanner />
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coach;
