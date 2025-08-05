import React, { useContext, useState } from "react";
import { FaWallet, FaMoneyBillWave, FaShoppingCart, FaGift } from "react-icons/fa";
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
    icon: <PaymentIcon3/>,
    color: "#60A5FA",
    label: "Total Earnings",
    amount: "$9999",
  },
  {
    icon: <PaymentIcon4/>,
    color: "#A78BFA",
    label: "Total Withdrawn",
    amount: "$9999",
  },
];

const TransferWallet = () => {
  const [selectedOption, setSelectedOption] = useState("");
    const context = useContext(ThemeContext);
    console.log("Full Context:", context); // Check if context exists at all
    const { darkMode } = context || {};
    console.log("Dark Mode:", darkMode);
  return (
    <div className={`p-6 ${darkMode ? "bg-gray-900" : "bg-white"} min-h-[86vh] rounded-md transition-colors duration-200`}>
      <h2 className={`text-2xl font-bold mb-6 ${
          darkMode ? "text-gray-200" : "text-gray-800"
        }`}>Wallet Overview</h2>

      {/* Wallet Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`p-4 border border-gray-200 rounded-lg shadow-sm ${darkMode ? "bg-gray-800" : "bg-gray-100"} flex flex-col items-start gap-2`}
          >
            <div
              className={`p-3 rounded-full text-white text-xl ${darkMode ? "bg-gray-800" : "bg-gray-300"}`}
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

      {/* Transfer Wallet Section */}
      <div
        className={`bg-gray-100 mx-[3px] p-6 rounded-lg shadow-inner ${
          darkMode ? "bg-gray-800" : "bg-gray-100"
        }`}
      >
        <h2 className={`text-2xl font-bold text-center mb-6 ${
          darkMode ? "text-gray-200" : "text-gray-800"
        }`}>Transfer Wallet</h2>

        <div className="max-w-3xl mx-auto text-left">
          {/* Amount Buttons */}
       

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
  value={selectedOption}
  onChange={(e) => setSelectedOption(e.target.value)}
  className={`w-full p-2 ${
    darkMode
      ? "bg-gray-700 border-gray-600 text-gray-200"
      : "bg-white border-gray-300 text-gray-700"
  } border rounded-md mb-6 transition-colors duration-200`}
>
  <option value="" disabled className={darkMode ? "bg-gray-700" : ""}>
    Select
  </option>
  <option value="wallet" className={darkMode ? "bg-gray-700" : ""}>
    Own Account
  </option>
  <option value="bank" className={darkMode ? "bg-gray-700" : ""}>
    Others Users Account
  </option>
</select>

{selectedOption === "bank" && (
  <div className="mb-6">
    <label
      htmlFor="targetUsername"
           className={`block text-sm font-medium mb-1 ${darkMode ?"text-gray-300":"text-gray-800"}`}
    >
      Target Username
    </label>
    <input
      type="text"
      id="targetUsername"
      name="targetUsername"
      placeholder="Enter username"
      className={`w-full px-4 py-2 rounded-md border text-sm
        ${
          darkMode
            ? "bg-gray-800 text-white  "
            : "bg-white text-black border-gray-300 focus:ring-blue-500"
        }
        focus:outline-none focus:ring-2 transition duration-200`}
    />
  </div>
)}



          {/* Summary */}
          <p className={`text-md font-medium mb-2 ${
            darkMode ? "text-gray-400" : "text-gray-700"
          }`}>Summary</p>
          <textarea
            className={`w-full p-3 border border-gray-300 rounded-md mb-6 text-md ${
              darkMode ? "text-gray-400 bg-gray-700" : "text-gray-700 bg-white"
            }  resize-none h-24`}
            readOnly={false}
            defaultValue={`Transaction Charge (10%): $0.00\nTotal Deducted: $100.00`}
          />

          {/* Remarks */}
          <p className={`text-md font-medium mb-2 ${
            darkMode ? "text-gray-400" : "text-gray-700"
          }`}>Remarks</p>
          <input
            type="text"
            placeholder="Reference / Note"
            className={`w-full p-2 border border-gray-300 rounded-md mb-6 ${
              darkMode ? "bg-gray-700 text-gray-400" : "bg-white text-gray-700"
            }`}
          />

          {/* Continue Button */}
          <div className="text-center">
            <button 
            className={`sm:w-auto md:w-3xl bg-blue-600 text-white px-8 py-2 rounded-lg hover:bg-blue-700 transition ${
              darkMode ? "bg-blue-700" : "bg-blue-600"
            }`}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferWallet;
