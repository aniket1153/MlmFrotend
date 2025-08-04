import { useState, useContext } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { FiMenu } from "react-icons/fi";
import { Outlet, useLocation } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const menuItems = [
  { label: "Dashboard", path: "/dashboard" },
  { label: "Referral", path: "/referral" },
  { label: "Team", path: "/team" },
  { label: "Earnings", path: "/earnings" },
  { label: "Add Wallet", path: "/wallet/add" },
  { label: "Transfer Wallet", path: "/wallet/transfer" },
  { label: "Withdrawl Request", path: "/wallet/withdraw" },
  { label: "Wallet Management", path: "/wallet" }, // fallback/default
  { label: "Payout History", path: "/payout-history" },
  { label: "Help & Support", path: "/help-support" },
  { label: "Profile Management", path: "/profile" },
];
const Layout = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { darkMode } = useContext(ThemeContext);

  console.log("====================",darkMode);

  // Match exact or prefix of the path to find best match
  const currentPage =
    menuItems.find((item) => location.pathname.startsWith(item.path))?.label ||
    "Dashboard";

  return (
    <div className={`h-screen flex ${darkMode ? "bg-gray-900" : "bg-gray-100"} overflow-hidden`}>
      {/* Sidebar - Desktop */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Sidebar - Mobile */}
      <div
        className={`fixed inset-y-0 left-0 z-50 ${darkMode ? "bg-gray-800" : "bg-white"} w-64 shadow-lg transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <Sidebar />
      </div>

      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-transparent bg-opacity-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex flex-col flex-1 w-full overflow-hidden">
        {/* Topbar */}
        <div className={`sticky top-0 z-20 ${darkMode ? "bg-gray-800" : "bg-white"} shadow md:block hidden`}>
          <Topbar />
        </div>

        {/* Mobile Topbar */}
        <div className={`md:hidden flex justify-between items-center px-5 py-3 ${darkMode ? "bg-gray-800" : "bg-white"} shadow z-30`}>
          <button onClick={() => setOpen(!open)}>
            <FiMenu className={`text-3xl ${darkMode ? "text-white" : "text-gray-800"}`} />
          </button>
          <span className={`text-lg font-semibold ${darkMode ? "text-white" : "text-gray-800"}`}>{currentPage}</span>
        </div>

        {/* Scrollable Page Content */}
        <div className={`flex-1 overflow-y-auto ${darkMode ? "bg-gray-900" : "bg-gray-100"}`}>
          <main className="p-4 min-h-full">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
