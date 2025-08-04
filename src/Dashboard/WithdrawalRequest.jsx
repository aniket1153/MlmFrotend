import React, { useContext } from "react";
import PaymentIcon1 from "../icon/PaymentIcon1";
import PaymentIcon2 from "../icon/PaymentIcon2";
import PaymentIcon3 from "../icon/PaymentIcon3";
import PaymentIcon4 from "../icon/PaymentIcon4";
import HistoryTable from "../DashboardComponets/HistoryTable";
import { ThemeContext } from "../context/ThemeContext";

// Card data
const cardData = [
  {
    icon: <PaymentIcon1 />,
    color: "#FFC457",
    label: "Wallet Balance",
    amount: "$999",
  },
  {
    icon: <PaymentIcon2 />,
    color: "#34D399",
    label: "Total Deposit",
    amount: "$1000",
  },
  {
    icon: <PaymentIcon3 />,
    color: "#60A5FA",
    label: "Total Earnings",
    amount: "$9999",
  },
  {
    icon: <PaymentIcon4 />,
    color: "#A78BFA",
    label: "Total Withdrawn",
    amount: "$9999",
  },
];

const WithdrawalRequest = () => {
  const context  = useContext(ThemeContext);
  console.log("Full Context:", context);
  const{darkMode} = context || {};
  console.log("Dark Mode:", darkMode);
  return (
    <div 
    className={`p-6 ${darkMode ? "bg-gray-900" : "bg-white"} min-h-[86vh] rounded-md transition-colors duration-200`}>
      <h2 className={`text-2xl font-semibold mb-6 ${
          darkMode ? "text-gray-200" : "text-gray-800"
        }`}>Wallet Overview</h2>

      {/* Overview Cards */}
      <div 
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`p-4 border border-gray-200 rounded-lg shadow-sm ${darkMode ? "bg-gray-800" : "bg-gray-100"} flex flex-col items-start gap-2`}
          >
            <div
             className="p-3 rounded-full text-white text-xl"
              style={{ backgroundColor: card.color }}
            >
              {card.icon}
            </div>
            <div 
            className={`text-gray-600 font-medium text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              {card.label}
            </div>
            <div className={`text-xl font-bold ${darkMode ? "text-gray-100" : "text-gray-800"}`}>
              {card.amount}
            </div>
          </div>
        ))}
      </div>
      <div 
      className={`font-medium text-2xl ${darkMode ? "text-gray-200" : "text-gray-800"}`}>Transfer Wallet </div>
      {/* Transfer Wallet Section - Figma Matched */}
      <div 
      className="w-full max-w-full mx-auto mt-8">
        <div
         className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
          {/* Amount Input */}
          <div className="flex flex-col w-full md:w-[23.625rem]">
            <label
             className={`${darkMode ? "text-gray-400" : "text-gray-500"} text-sm font-medium mb-1`}>Select Amount ($USD)</label>
            <input
              type="text"
              defaultValue="100"
              className={`${darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-800"} h-[2.5rem] px-3 rounded-xl border border-gray-300 text-sm focus:outline-none`}
            />
          </div>

          {/* Payment Method */}
          <div
           className="flex flex-col w-full md:w-[23.625rem]">
            <label className={`${darkMode ? "text-gray-400" : "text-gray-500 "} text-sm font-medium mb-2`}>Payment Method</label>
            <select
              defaultValue="100"
              className={`${darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-800"} h-[2.5rem] px-3 rounded-xl border border-gray-300 text-sm focus:outline-none`}
            >
              <option value="100">100</option>
              <option value="upi">UPI</option>
              <option value="paypal">PayPal</option>
              <option value="bank">Bank</option>
            </select>
          </div>

          {/* Continue Button */}
          <button
            type="button"

            className={`h-[2.5rem] sm:w-auto md:md:w-[23.625rem] px-6 mt-5 bg-[#3F5BF6] text-white text-sm font-semibold rounded-xl`}
          >
            Continue
          </button>
        </div>
      </div>

      {/* Optional helper text */}
      <HistoryTable />
    </div>
  );
};

export default WithdrawalRequest;
