import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { RiTeamFill } from "react-icons/ri";
import { AiOutlineWallet } from "react-icons/ai";
import { ThemeContext } from "../context/ThemeContext";
import {
  FaTachometerAlt,
  FaSitemap,
  FaUsers,
  FaDollarSign,
  FaWallet,
  FaMoneyCheckAlt,
  FaQuestionCircle,
  FaUserCog,
} from "react-icons/fa";
import DashboardIcon1 from "../icon/DashboardIcon1";
import DashboardIcon2 from "../icon/DashboardIcon2";
import DashboardIcon3 from "../icon/DashboardIcon3";
import { LuSquareUserRound } from "react-icons/lu";
import DashboardIcon4 from "../icon/DashboardIcon4";
import DashboardIcon5 from "../icon/DashboardIcon5";
import DashboardIcon6 from "../icon/DashboardIcon6";
import { FaCreditCard } from "react-icons/fa";


const menuItems = [
  { label: "Dashboard", icon: <DashboardIcon1 />, path: "/dashboard" },
  { label: "Referral", icon: <DashboardIcon2 />, path: "/referral" },
  { label: "Team", icon: <RiTeamFill />, path: "/team" },
{
  label: "Earnings",
  icon: <FaDollarSign />,
  path: "/earnings",
  children: [
    {
      label: "Earnings",
      icon: <FaCreditCard size={24} />,
      path: "/earnings",
    },
    {
      label: "Live Earnings",
      icon: <FaMoneyCheckAlt size={24} />,
      path: "/earnings/live", // ✅ updated
    },
  ],
},


  {
    label: "Wallet Management",
    icon: <AiOutlineWallet size={24} />,
    children: [
      { label: "Add Wallet", icon: <DashboardIcon4 />, path: "/wallet/add" },
      {
        label: "Transfer Wallet",
        icon: <DashboardIcon5 />,
        path: "/wallet/transfer",
      },
      {
        label: "Withdrawl Request",
        icon: <DashboardIcon6 />,
        path: "/wallet/withdraw",
      },
    ],
  },
  {
    label: "Payout History",
    icon: <DashboardIcon3 />,
    path: "/payout-history",
  },
  {
    label: "Help & Support",
    icon: <FaQuestionCircle />,
    path: "/help-support",
  },
  {
    label: "Profile Management",
    icon: <LuSquareUserRound size={25} />,
    path: "/profile",
  },
];

const Sidebar = () => {
  const location = useLocation();
  const [openMenus, setOpenMenus] = useState({});
  const { darkMode } = useContext(ThemeContext);

  const isActive = (path) => location.pathname === path;

  // Auto-open menu if child is active
  useEffect(() => {
    menuItems.forEach((item) => {
      if (item.children) {
        const activeChild = item.children.find((child) => isActive(child.path));
        if (activeChild) {
          setOpenMenus((prev) => ({ ...prev, [item.label]: true }));
        }
      }
    });
  }, [location]);

  return (
    <div
      className={`h-screen w-64 ${
        darkMode ? "bg-gray-800" : "bg-white"
      } shadow-md p-4 overflow-y-auto`}
    >
      <div
        className={`text-3xl font-bold text-center mb-6 ${
          darkMode ? "text-white" : "text-gray-800"
        }`}
      >
        LOGO
      </div>
      <ul className="space-y-5">
        {menuItems.map((item, index) => {
          const hasChildren = item.children && item.children.length > 0;
          const isMenuOpen = openMenus[item.label];
          const isParentActive =
            hasChildren && item.children.some((child) => isActive(child.path));

          return (
            <li key={index}>
              {item.path && !hasChildren ? (
                // Regular menu item
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-2 rounded-md transition duration-200 ${
                    isActive(item.path)
                      ? "bg-blue-600 text-white"
                      : darkMode
                      ? "text-gray-300 hover:bg-gray-700"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-md">{item.label}</span>
                </Link>
              ) : (
                // Parent with submenu
                <>
                  <div
                    onClick={() =>
                      setOpenMenus((prev) => ({
                        ...prev,
                        [item.label]: !prev[item.label],
                      }))
                    }
                    className={`flex items-center gap-3 px-4 py-2 rounded-md transition duration-200 cursor-pointer ${
                      isParentActive
                        ? "bg-blue-600 text-white"
                        : darkMode
                        ? "text-gray-300 hover:bg-gray-700"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-sm ">{item.label}</span>
                  </div>

                  {/* Submenu items */}
                  {isMenuOpen && (
                    <ul
                      className={`ml-4 mt-1.5 space-y-3 ${
                        darkMode ? "bg-gray-700" : "bg-gray-100"
                      } rounded-md p-2`}
                    >
                      {item.children.map((child, idx) => (
                        <li key={idx}>
                          <Link
                            to={child.path}
                            className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition duration-150 ${
                              isActive(child.path)
                                ? "bg-blue-600 text-white"
                                : darkMode
                                ? "text-gray-300 hover:bg-gray-600"
                                : "text-gray-600 hover:bg-gray-200"
                            }`}
                          >
                            <span className="text-lg">{child.icon}</span>
                            <span>{child.label}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
