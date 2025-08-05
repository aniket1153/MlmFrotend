import { FaArrowLeft, FaSun, FaMoon } from "react-icons/fa";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

// Use a flat version of all menu paths including children
const menuItems = [
  { label: "Dashboard", path: "/dashboard" },
  { label: "Referral", path: "/referral" },
  { label: "Team", path: "/team" },
  { label: "Earnings", path: "/earnings" },
   { label: "Live Earnings", path: "/earnings/live" },
  { label: "Add Wallet", path: "/wallet/add" },
  { label: "Transfer Wallet", path: "/wallet/transfer" },
  { label: "Withdrawl Request", path: "/wallet/withdraw" },
  { label: "Wallet Management", path: "/wallet" }, // fallback/default
  { label: "Payout History", path: "/payout-history" },
  { label: "Help & Support", path: "/help-support" },
  { label: "Profile Management", path: "/profile" },
];

const Topbar = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const location = useLocation();

  // Match exact or prefix of the path to find best match
  const currentPage =
    menuItems.find((item) => location.pathname.startsWith(item.path))?.label ||
    "Dashboard";

  return (
    <div
      className={`w-full px-6 py-4 flex justify-between items-center ${
        darkMode
          ? "bg-gray-800 border-b border-gray-700"
          : "bg-white border-b border-gray-200"
      } shadow-sm transition-colors duration-200`}
    >
      {/* Left Section */}
      <div className="flex items-center space-x-3">
        <FaArrowLeft
          className={`text-lg ${
            darkMode
              ? "text-gray-300 hover:text-white"
              : "text-gray-600 hover:text-gray-800"
          } transition-colors duration-200 cursor-pointer`}
        />
        <h1
          className={`text-xl font-semibold ${
            darkMode ? "text-white" : "text-gray-800"
          } transition-colors duration-200`}
        >
          {currentPage}
        </h1>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-5">
        <div className="flex items-center space-x-2">
          <img
            src="https://i.pravatar.cc/32"
            alt="avatar"
            className="w-8 h-8 rounded-full border-2 border-transparent hover:border-blue-500 transition-colors duration-200"
          />
          <span
            className={`hidden sm:block font-medium ${
              darkMode ? "text-gray-200" : "text-gray-700"
            } transition-colors duration-200`}
          >
            Hi, Bikram
          </span>
        </div>

        {/* Enhanced Dark Mode Toggle */}
     <button 
  onClick={toggleTheme}
  aria-label="Toggle dark mode"
  className={`relative flex items-center justify-between w-20 h-10 px-1 py-1 rounded-full transition duration-300 focus:outline-none ${
    darkMode ? "bg-gray-700" : "bg-gray-200"
  }`}
>
  <span
    className={`absolute w-8 h-8 rounded-full shadow-md transform transition-all duration-300 flex items-center justify-center ${
      darkMode
        ? "translate-x-9 bg-gray-800 text-yellow-300"
        : "translate-x-1 bg-white text-yellow-500"
    }`}
  >
    {darkMode ? (
      <FaMoon className="text-xs" />
    ) : (
      <FaSun className="text-xs" />
    )}
  </span>
  <span
    className={`absolute text-xs font-medium ${
      darkMode ? "left-2 text-gray-300" : "right-2 text-gray-600"
    }`}
  >
    {darkMode ? "Dark" : "Light"}
  </span>
</button>

      </div>
    </div>
  );
};

export default Topbar;
