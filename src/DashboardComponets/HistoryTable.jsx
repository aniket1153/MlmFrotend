import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

// Dummy data
const dummyData = Array.from({ length: 50 }, (_, i) => ({
  date: "26/7/2025",
  invoiceId: `ID25648${i}`,
  amount: "$999",
  status: i === 1 ? "Pending" : "Completed",
}));

const ITEMS_PER_PAGE = 10;

const HistoryTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(dummyData.length / ITEMS_PER_PAGE);

  const paginatedData = dummyData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
    
  };
    const context  = useContext(ThemeContext);
    console.log("Full Context:", context);
    const{darkMode} = context || {};
    console.log("Dark Mode:", darkMode);

  return (
    <div
      className={`p-6 ${darkMode ? "bg-gray-800" : "bg-white"} rounded-md w-full `}
    >
      <div
       className="flex items-center justify-between mb-4">
        <h2
          className={"text-xl font-semibold " + (darkMode ? "text-gray-200" : "text-gray-900")}
        >
          History
        </h2>
        <button
          className="text-[#3F5BF6] bg-blue-50 px-3 py-1.5 rounded-md text-sm font-medium flex items-center gap-1"
        >
          <span className="text-lg">⚙️</span> {/* Replace with icon if needed */}
        </button>
      </div>

      {/* Table */}
      <div 
      className="overflow-x-auto">
        <table 
        className="min-w-full text-sm text-left border-separate border-spacing-y-2">
          <thead
          className={`${
            darkMode ? "text-gray-400 bg-gray-800" : "text-gray-500 bg-[#F9FAFB]"
          }`}>
            <tr>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Invoice ID</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item, index) => (
              <tr
                key={index}
                className={`${
                  darkMode ? "bg-gray-800 text-gray-400" : "bg-white text-gray-800"
                }`}
              >
                <td className={`px-4 py-3 ${darkMode ? "text-gray-400" : "text-gray-800"}`}>{item.date}</td>
                <td className={`px-4 py-3 ${darkMode ? "text-gray-400" : "text-gray-800"}`}>{item.invoiceId}</td>
                <td className={`px-4 py-3 ${darkMode ? "text-gray-400" : "text-gray-800"}`}>
                  {item.amount}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`${
                      darkMode ? "text-gray-400" : "text-gray-800"
                    } px-3 py-1 rounded-full text-xs font-medium ${
                      item.status === "Completed"
                        ? "text-blue-600 bg-blue-100"
                        : "text-yellow-600 bg-yellow-100"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-6">
        {/* Left Arrow */}
        <button
          onClick={() => goToPage(currentPage - 1)}
          className={`px-2 py-1 ${darkMode ? "text-gray-400" : "text-gray-500"} hover:text-black disabled:text-gray-300`}
          disabled={currentPage === 1}
        >
          ←
        </button>

        {/* Page Numbers */}
        <div className="flex items-center gap-1 text-sm">
          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .slice(
              Math.max(0, currentPage - 2),
              Math.min(totalPages, currentPage + 3)
            )
            .map((page) => (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`${darkMode ? "w-8 h-8 rounded-md bg-gray-800 text-gray-400" : "w-8 h-8 rounded-md bg-gray-100 text-gray-800 hover:bg-gray-200"} ${
                  page === currentPage ? "bg-[#3F5BF6] text-white" : ""
                }`}
              >
                {page}
              </button>
            ))}
          {currentPage + 2 < totalPages && <span>...</span>}
          <button
            onClick={() => goToPage(totalPages)}
            className={`${
              darkMode ? "w-8 h-8 rounded-md bg-gray-800 text-gray-400" : "w-8 h-8 rounded-md bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
          >
            {totalPages}
          </button>
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => goToPage(currentPage + 1)}
          className={`px-2 py-1 ${darkMode ? "text-gray-400" : "text-gray-500"} hover:text-black disabled:text-gray-300`}
          disabled={currentPage === totalPages}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default HistoryTable;
