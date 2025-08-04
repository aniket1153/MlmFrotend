import React, { useContext } from "react";
import { FaWallet, FaDollarSign, FaRedo } from "react-icons/fa";
import ChartComponent from "../DashboardComponets/ChartComponent";
import EarningsChart from "../DashboardComponets/CustomTooltip";
import { ThemeContext } from "../context/ThemeContext";

const Dashboard = () => {
 const context = useContext(ThemeContext);
    console.log("Full Context:", context);
    const { darkMode } = context || {};
    console.log("Dark Mode:", darkMode);

  
  const stats = [
    {
      title: "Wallet Balance",
      amount: "$0000",
      icon: <FaWallet size={23} />,
      iconBg: "bg-yellow-500",
      iconBgDark: "bg-yellow-500",
      circleBg: "bg-yellow-100",
      circleBgDark: "bg-yellow-900/30", // Darker shade for better contrast
    },
    {
      title: "Total Earnings",
      amount: "$0000",
      icon: <FaDollarSign size={23} />,
      iconBg: "bg-pink-600",
      iconBgDark: "bg-pink-600",
      circleBg: "bg-pink-100",
      circleBgDark: "bg-pink-900/30", // Darker shade
    },
    {
      title: "Referral Count",
      amount: "0000",
      icon: <FaRedo size={23} />,
      iconBg: "bg-purple-700",
      iconBgDark: "bg-purple-700",
      circleBg: "bg-purple-100",
      circleBgDark: "bg-purple-900/30", // Darker shade
    },
  ];

  return (
    <div className={`${darkMode ? "p-3 dark:bg-gray-900" : "p-3 bg-white"} transition-colors duration-200`}>
      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`rounded-xl shadow-sm p-4 flex items-center justify-between h-44 relative overflow-hidden transition-colors duration-200 ${
              darkMode ? "bg-gray-800 dark:shadow-gray-700/10" : "bg-white"
            }`}
          >
            <div className="flex flex-col space-y-2.5">
              <div
                className={`${
                  darkMode ? item.iconBgDark : item.iconBg
                } text-white p-4 rounded-xl w-fit transition-colors duration-200`}
              >
                {item.icon}
              </div>
              <p className={`text-sm pt-1 transition-colors duration-200 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                {item.title}
              </p>
              <p className={`text-xl font-bold transition-colors duration-200 ${darkMode ? "text-white" : "text-black"}`}>
                {item.amount}
              </p>
            </div>
            <div
              className={`absolute right-0 bottom-0 w-20 h-20 ${
                darkMode ? item.circleBgDark : item.circleBg
              } rounded-full transform translate-x-1/2 translate-y-1/2 transition-colors duration-200`}
            />
          </div>
        ))}
      </div>

      {/* Charts section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className={`w-full h-[440px] p-4 rounded-xl shadow-sm transition-colors duration-200 ${darkMode ? "bg-gray-800 dark:shadow-gray-700/10" : "bg-white"}`}>
          <ChartComponent />
        </div>
        <div className={`w-full h-[440px] p-4 rounded-xl shadow-sm transition-colors duration-200 ${darkMode ? "bg-gray-800 dark:shadow-gray-700/10" : "bg-white"}`}>
          <EarningsChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
