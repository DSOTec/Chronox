import React from "react";
import { IoHome, IoHeart, IoPerson, IoPeople, IoSettings } from "react-icons/io5";

const MobileBottomNav = ({ activeTabName }) => {
  const menuItems = [
    { id: "home", icon: IoHome, label: "Home" },
    { id: "health", icon: IoHeart, label: "Health" },
    { id: "coach", icon: IoPerson, label: "Coach" },
    { id: "specialist", icon: IoPeople, label: "Specialist" },
    { id: "settings", icon: IoSettings, label: "Settings" },
  ];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <nav className="flex">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`flex-1 flex flex-col items-center justify-center py-2 xl:text-[12px] md:text-[11px] text-[10px] transition-colors ${
              activeTabName === item.label ? "text-[#24CDAF]" : "text-gray-500"
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

export default MobileBottomNav;
