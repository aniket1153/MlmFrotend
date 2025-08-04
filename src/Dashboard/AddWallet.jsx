import React, { useContext } from "react";
import PaymentIcon1 from "../icon/PaymentIcon1";
import PaymentIcon2 from "../icon/PaymentIcon2";
import PaymentIcon3 from "../icon/PaymentIcon3";
import PaymentIcon4 from "../icon/PaymentIcon4";
import { ThemeContext } from "../context/ThemeContext";

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

const AddWallet = () => {
  const context = useContext(ThemeContext);
  console.log("Full Context:", context); // Check if context exists at all
  const { darkMode } = context || {};
  console.log("Dark Mode:", darkMode);

  return (
    <div
      className={`p-6 ${
        darkMode ? "bg-gray-900" : "bg-white"
      } min-h-[86vh] rounded-md transition-colors duration-200`}
    >
      <h2
        className={`text-2xl font-bold mb-6 ${
          darkMode ? "text-gray-200" : "text-gray-800"
        }`}
      >
        Wallet Overview
      </h2>

      {/* Wallet Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`p-4 border ${
              darkMode
                ? "border-gray-700 bg-gray-800"
                : "border-gray-200 bg-gray-100"
            } rounded-lg shadow-sm flex flex-col items-start gap-2 transition-colors duration-200`}
          >
            <div
              className="p-3 rounded-full text-white text-xl"
              style={{ backgroundColor: card.color }}
            >
              {card.icon}
            </div>
            <div
              className={`${
                darkMode ? "text-gray-400" : "text-gray-600"
              } font-medium text-sm`}
            >
              {card.label}
            </div>
            <div
              className={`text-xl font-bold ${
                darkMode ? "text-gray-100" : "text-gray-800"
              }`}
            >
              {card.amount}
            </div>
          </div>
        ))}
      </div>

      {/* Recharge Wallet Section */}
      <div
        className={`${
          darkMode ? "bg-gray-800 shadow-gray-900" : "bg-gray-100"
        } mx-[3px] p-6 rounded-lg shadow-inner transition-colors duration-200`}
      >
        <h2
          className={`text-2xl font-bold text-center mb-6 ${
            darkMode ? "text-gray-200" : "text-gray-800"
          }`}
        >
          Recharge Wallet
        </h2>

        <div className="max-w-3xl mx-auto text-left">
          {/* Amount Buttons */}
          <p
            className={`text-md font-medium mb-4 -mt-2 ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Select Amount ($USD)
          </p>

          <div className="flex flex-wrap gap-4 mb-6">
            {["$10", "$50", "$100", "Custom"].map((amount, index) => (
              <button
                key={index}
                className={`${
                  darkMode
                    ? "bg-gray-700 text-blue-400 border-blue-400 hover:bg-gray-600"
                    : "bg-white text-blue-600 border-blue-600 hover:bg-gray-200"
                } px-6 py-2 rounded-full shadow border transition-colors duration-200`}
              >
                {amount}
              </button>
            ))}
          </div>

          {/* Select Amount Input */}
          <p
            className={`text-md font-medium mb-2 ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Select Amount ($USD)
          </p>
          <input
            type="number"
            placeholder="Enter amount"
            className={`w-full p-2 ${
              darkMode
                ? "bg-gray-700 border-gray-600 text-gray-200"
                : "bg-white border-gray-300 text-gray-800"
            } border rounded-md mb-6 transition-colors duration-200`}
            min="0"
          />

          {/* Transfer Type */}
          <p
            className={`text-md font-medium mb-2 ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Transfer Type
          </p>
          <select
            className={`w-full p-2 ${
              darkMode
                ? "bg-gray-700 border-gray-600 text-gray-200"
                : "bg-white border-gray-300 text-gray-700"
            } border rounded-md mb-6 transition-colors duration-200`}
            defaultValue=""
          >
            <option value="" disabled className={darkMode ? "bg-gray-700" : ""}>
              Select transfer type
            </option>
            <option value="wallet" className={darkMode ? "bg-gray-700" : ""}>
              Wallet Transfer
            </option>
            <option value="bank" className={darkMode ? "bg-gray-700" : ""}>
              Bank Transfer
            </option>
            <option value="upi" className={darkMode ? "bg-gray-700" : ""}>
              UPI Transfer
            </option>
            <option value="crypto" className={darkMode ? "bg-gray-700" : ""}>
              Crypto Transfer
            </option>
          </select>

          {/* Summary */}
          <p
            className={`text-md font-medium mb-2 ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Summary
          </p>
          <textarea
            className={`w-full p-3 border ${
              darkMode
                ? "border-gray-600 text-gray-200 bg-gray-700"
                : "border-gray-300 text-gray-700 bg-white"
            } rounded-md mb-6 text-sm resize-none h-24 transition-colors duration-200`}
            readOnly={false}
            defaultValue={`Transaction Charge: $0.00\nTotal Payable: $100.00\nYou will receive: $100.00`}
          />

          {/* Payment Method */}
          <p
            className={`text-md font-medium mb-2 ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Payment Method
          </p>
          <input
            type="text"
            placeholder="Choose a network"
            className={`w-full p-2 ${
              darkMode
                ? "bg-gray-700 border-gray-600 text-gray-200"
                : "bg-white border-gray-300 text-gray-800"
            } border rounded-md mb-6 transition-colors duration-200`}
          />

          {/* Remarks */}
          <p
            className={`text-md font-medium mb-2 ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Remarks
          </p>
          <input
            type="text"
            placeholder="Reference / Note"
            className={`w-full p-2 ${
              darkMode
                ? "bg-gray-700 border-gray-600 text-gray-200"
                : "bg-white border-gray-300 text-gray-800"
            } border rounded-md mb-6 transition-colors duration-200`}
          />

          {/* Continue Button */}
          <div className="text-center">
            <button
              className={`${
                darkMode
                  ? "bg-blue-700 hover:bg-blue-800"
                  : "bg-blue-600 hover:bg-blue-700"
              } text-white px-8 py-2 rounded-full transition-colors duration-200`}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddWallet;
