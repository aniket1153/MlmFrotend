import React, { useContext } from "react";
import {
  FaWallet,
  FaPiggyBank,
  FaMoneyBillWave,
  FaHandHoldingUsd,
  FaUsers,
  FaUserPlus,
  FaChartLine,
  FaUserFriends,
  FaPrint,
  FaDownload,
} from "react-icons/fa";
import EarningsBarChart from "../DashboardComponets/EarningsBarChart";
import { ThemeContext } from "../context/ThemeContext";

const cardData = [
  {
    icon: <FaWallet />,
    color: "#FFC457",
    label: "Wallet Balance",
    amount: "$999",
  },
  {
    icon: <FaPiggyBank />,
    color: "#57C4FF",
    label: "Total Deposit",
    amount: "$1999",
  },
  {
    icon: <FaMoneyBillWave />,
    color: "#FF579A",
    label: "Total Earnings",
    amount: "$9999",
  },
  {
    icon: <FaHandHoldingUsd />,
    color: "#2ED275",
    label: "Total Withdrawn",
    amount: "$999",
  },
  {
    icon: <FaUserPlus />,
    color: "#FFC457",
    label: "Direct Referral Bonus",
    amount: "$1000",
  },
  {
    icon: <FaUsers />,
    color: "#57C4FF",
    label: "Team Bonus",
    amount: "$1000",
  },
  {
    icon: <FaChartLine />,
    color: "#FF579A",
    label: "Monthly Profit",
    amount: "$10",
  },
  {
    icon: <FaUserFriends />,
    color: "#2ED275",
    label: "Total Team Size",
    amount: "999",
  },
];

const levelData = Array.from({ length: 15 }, (_, i) => ({
  level: `Level ${i + 1}`,
  members: Math.floor(Math.random() * 100) + 1,
  earnings: `$${Math.floor(Math.random() * 1000) + 100}`,
}));

const Earnings = () => {
    const context = useContext(ThemeContext);
    console.log("Full Context:", context);
    const { darkMode } = context || {};
    console.log("Dark Mode:", darkMode);
  return (
    <div className={`min-h-screen p-4 sm:p-6 rounded-xl ${darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"}`}>
      {/* Header */}
      <div 
      className={`${ darkMode ? "flex flex-col md:flex-row justify-between items-start md:items-center pb-4 border-b border-gray-300 mb-6 gap-4" : "flex flex-col md:flex-row justify-between items-start md:items-center pb-4 border-b border-gray-300 mb-6 gap-4"}`}>
        <div 
        className={`${
          darkMode ? "flex items-center gap-2 text-[#3B5AFE] font-semibold text-lg" : "flex items-center gap-2 text-[#3B5AFE] font-semibold text-lg"
        }`}>
          <FaWallet />
          <span>Earnings</span>
        </div>

        <div className="flex flex-wrap gap-2">
          <button 
          className={`${ darkMode ? "bg-[#3B5AFE] text-white px-4 py-2 rounded-md flex items-center gap-2 text-sm" : "bg-[#3B5AFE] text-white px-4 py-2 rounded-md flex items-center gap-2 text-sm"}`}>
            <FaDownload /> Export CSV
          </button>
          <button className={`${darkMode ? "border border-[#3B5AFE] text-[#3B5AFE] px-4 py-2 rounded-md flex items-center gap-2 text-sm" : "border border-[#3B5AFE] text-[#3B5AFE] px-4 py-2 rounded-md flex items-center gap-2 text-sm"}`}>
            <FaPrint /> Print Report
          </button>
        </div>
      </div>

      {/* Cards */}
      <h2 className="text-xl font-semibold mb-4">Wallet Overview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`${
              darkMode ? "p-4 border border-gray-600 rounded-lg shadow-sm bg-gray-800 flex flex-col items-start gap-2" : "p-4 border border-gray-200 rounded-lg shadow-sm bg-white flex flex-col items-start gap-2"
            }`}
          >
            <div
              className={`${
                darkMode ? "p-3 rounded-full text-white text-xl" : "p-3 rounded-full text-white text-xl"
              }`}
              style={{ backgroundColor: card.color }}
            >
              {card.icon}
            </div>
            <div className={`text-gray-100 font-medium text-sm ${darkMode ? "text-gray-100" : "text-gray-600"}`}>
              {card.label}
            </div>
            <div className={`text-xl font-bold ${darkMode ? "text-gray-100" : "text-gray-800"}`}>
              {card.amount}
            </div>
          </div>
        ))}
      </div>

      {/* Table */}
      <h2 className="text-xl font-semibold mb-4">Referral & Team Performance</h2>
      <div className={`overflow-x-auto rounded-md border mb-6 ${darkMode ? "bg-gray-800 border-gray-600" : "bg-white border-gray-200"}`}>
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-2 text-left">Level</th>
              <th className="px-4 py-2 text-center">Members</th>
              <th className="px-4 py-2 text-right">Earnings</th>
            </tr>
          </thead>
          <tbody>
            {levelData.map((row, index) => (
              <tr key={index} className={` ${darkMode ? "bg-gray-800 hover:bg-gray-50 hover:text-black" : "bg-white hover:bg-gray-50"}`}>
                <td className="px-4 py-2 border-b border-gray-200 text-left">{row.level}</td>
                <td className="px-4 py-2 border-b border-gray-200  text-center">{row.members}</td>
                <td className="px-4 py-2 border-b border-gray-200  text-right">{row.earnings}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Buttons Section */}
      <div className="flex flex-wrap gap-3 justify-start mb-10">
        <button className="bg-[#4361EE] text-white px-4 py-2 rounded-xl text-sm">
          Recharge Wallet
        </button>
        <button className="bg-[#01BA7F] text-white px-4 py-2 rounded-xl text-sm">
          Transfer
        </button>
        <button className="bg-[#89BA01] text-white px-4 py-2 rounded-xl text-sm">
          Withdrawal
        </button>
        <button className="px-4 py-2 rounded-xl text-[#89BA01] border border-[#89BA01] text-sm">
          Withdrawal History
        </button>
        <button className="px-4 py-2 rounded-xl text-[#01BA7F] border border-[#01BA7F] text-sm">
          Invite Via WhatsApp
        </button>
        <button className="px-4 py-2 rounded-xl text-[#4361EE] border border-[#4361EE] text-sm">
          Download Report
        </button>
      </div>

      {/* Chart */}
      <EarningsBarChart />
    </div>
  );
};

export default Earnings;
