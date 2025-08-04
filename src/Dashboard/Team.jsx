import React, { useState } from 'react';
import {
  FaEye,
  FaEdit,
  FaTrash,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa';
import { IoMdSearch } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";

import img1 from '../assets/TableImg.jpg';
import TableIcon from '../icon/TableIcon';
import TableIcon2 from '../icon/TableIcon2';

const sampleData = new Array(10).fill({
  image: img1,
  team: 'Team05KL',
  userId: 'UI446633',
  email: 'ex@gmail.com',
  mobile: '+914422336677',
  referralId: 'Rlgg5566',
  directReferral: '05',
  ipAddress: '192.168.0.1',
  status: true,
  levels: Array(15).fill('05'),
  joinDate: '24/07/25 - 04:30 PM',
});

const Team = () => {
  const [data, setData] = useState(sampleData);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10); 
  const [enabled, setEnabled] = useState('Enabled');
  const [showSearch, setShowSearch] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
const [fromDate, setFromDate] = useState("2025-07-24");
const [toDate, setToDate] = useState("2025-07-25");


  const indexOfLastRow = currentPage * rowsPerPage;
const indexOfFirstRow = indexOfLastRow - rowsPerPage;
const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

const totalPages = Math.ceil(data.length / rowsPerPage);


  return (
    <div className="w-full px-4 py-5 bg-white rounded-2xl overflow-x-auto">
      
      {/* Filter Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-4 mb-4">
        {/* Left Controls */}
        <div className="flex flex-wrap items-center gap-3 ">
          {/* TableIcon Button */}
<button
  className="bg-gray-100 p-2 rounded-md"
  onClick={() => setShowPopup((prev) => !prev)}
>
  <TableIcon />
</button>

{/* Filter Popup Panel */}
{showPopup && (
  <div className="bg-white shadow-lg border rounded-lg p-4 w-full sm:w-auto mt-2 z-50">
    {/* Top Row Buttons */}
    <div className="flex flex-wrap gap-3 mb-4">
  {['Today', 'This Week', 'This Month', 'Clear'].map((label) => {
    const isClear = label === 'Clear';
    return (
      <button
        key={label}
        className={`px-4 py-2 rounded-xl text-sm font-medium border ${
          isClear
            ? 'bg-red-600 text-white hover:bg-red-700 border-transparent'
            : 'bg-white text-gray-700 hover:bg-gray-200 border-gray-400'
        }`}
        onClick={() => {
          const today = new Date();
          let from = '';
          let to = '';

          if (label === 'Today') {
            from = to = today.toISOString().split('T')[0];
          } else if (label === 'This Week') {
            const first = today.getDate() - today.getDay();
            const last = first + 6;
            const firstDay = new Date(today.setDate(first));
            const lastDay = new Date(today.setDate(last));
            from = firstDay.toISOString().split('T')[0];
            to = lastDay.toISOString().split('T')[0];
          } else if (label === 'This Month') {
            const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
            const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);
            from = firstDay.toISOString().split('T')[0];
            to = lastDay.toISOString().split('T')[0];
          } else if (label === 'Clear') {
            from = '';
            to = '';
          }

          setFromDate(from);
          setToDate(to);
        }}
      >
        {label}
      </button>
    );
  })}
</div>


    {/* Date Pickers */}
    <div className="flex flex-wrap items-center gap-4 mb-4">
      <div className="flex items-center gap-2">
        <FaCalendarAlt />
        <span className="text-sm">From:</span>
        <input
          type="date"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
          className="border rounded px-2 py-1 text-sm"
        />
      </div>

      <div className="flex items-center gap-2">
        <FaCalendarAlt />
        <span className="text-sm">To:</span>
        <input
          type="date"
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
          className="border rounded px-2 py-1 text-sm"
        />
      </div>
         <div className="text-right">
      <button
        className="bg-blue-600 text-white px-5 py-2 rounded text-sm hover:bg-blue-700"
        onClick={() => {
          console.log("Apply filter from:", fromDate, "to:", toDate);
          // You can filter the data here based on fromDate and toDate
        }}
      >
        Apply
      </button>
    </div>
    </div>

    {/* Apply Button */}
 
  </div>
)}


          <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-md text-sm">
            <TableIcon2 />
            <span>|</span>
            <select className="bg-transparent outline-none">
              <option>Team Score: Low To High</option>
            </select>
          </div>

          <div className="bg-gray-100 px-3 py-2 rounded-md">
            <select
              value={enabled}
              onChange={(e) => setEnabled(e.target.value)}
              className="bg-transparent text-sm outline-none"
            >
              <option>Enabled</option>
              <option>Disabled</option>
            </select>
          </div>
        </div>

        {/* Right Controls */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowSearch((prev) => !prev)}
              className="bg-gray-100 p-2 rounded-md"
            >
              <IoMdSearch size={18} />
            </button>
            {showSearch && (
              <input
                type="text"
                placeholder="Search..."
                className="px-3 py-2 border rounded-md text-sm w-full sm:w-auto"
              />
            )}
          </div>
          <div className="bg-gray-100 px-3 py-2 rounded-md">
            <select className="text-sm bg-transparent outline-none">
              <option>All Levels</option>
            </select>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto rounded-xl bg-white shadow-sm">
        <table className="min-w-[1200px] w-full text-sm text-left font-inter">
          <thead className="bg-[#F9FAFB] text-[#6B7280] text-xs uppercase sticky top-0 z-10">
            <tr>
              <th className="px-4 py-3">Image</th>
              <th className="px-4 py-3">Team</th>
              <th className="px-4 py-3">User Id</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Mobile</th>
              <th className="px-4 py-3">Referral ID</th>
              <th className="px-4 py-3">Direct Referral</th>
              <th className="px-4 py-3">IP Address</th>
              <th className="px-4 py-3">Status</th>
              {[...Array(15)].map((_, i) => (
                <th key={i} className="px-4 py-3 text-center">L{i + 1}</th>
              ))}
              <th className="px-4 py-3 whitespace-nowrap">Join Date</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
         <tbody className="text-black">
  {currentRows.map((row, i) => (
    <tr key={i} className="hover:bg-[#F9FAFB]">
      <td className="px-4 py-2">
        <img
          src={row.image}
          alt="Profile"
          className="h-8 w-8 object-cover rounded-full"
        />
      </td>
      <td className="px-4 py-2 font-semibold">{row.team}</td>
      <td className="px-4 py-2 font-semibold">{row.userId}</td>
      <td className="px-4 py-2 font-semibold">{row.email}</td>
      <td className="px-4 py-2 font-semibold">{row.mobile}</td>
      <td className="px-4 py-2 font-semibold">{row.referralId}</td>
      <td className="px-4 py-2 font-semibold">{row.directReferral}</td>
      <td className="px-4 py-2 font-semibold">{row.ipAddress}</td>
      <td className="px-4 py-2 font-semibold">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={row.status}
            onChange={() => {
              const newData = [...data];
              const actualIndex = indexOfFirstRow + i;
              newData[actualIndex] = {
                ...newData[actualIndex],
                status: !newData[actualIndex].status,
              };
              setData(newData);
            }}
            className="sr-only peer"
          />
          <div className="w-10 h-5 bg-gray-300 rounded-full peer-checked:bg-green-500"></div>
          <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-5"></div>
        </label>
      </td>
      {row.levels.map((level, idx) => (
        <td key={idx} className="px-2 py-2 text-center font-semibold">{level}</td>
      ))}
      <td className="px-4 py-2 whitespace-nowrap font-semibold">{row.joinDate}</td>
      <td className="px-4 py-2">
        <div className="flex gap-2">
          <button className="bg-blue-600 p-1 rounded-sm text-white">
            <FaEye size={18} />
          </button>
          <button className="bg-amber-400 p-1 rounded-sm text-white">
            <FaEdit size={18} />
          </button>
          <button className="bg-red-500 p-1 rounded-sm text-white">
            <FaTrash size={13} />
          </button>
        </div>
      </td>
    </tr>
  ))}
</tbody>

        </table>
      </div>

      {/* Pagination */}
      {/* Pagination */}
<div className="flex justify-center items-center mt-6 space-x-2">
  {/* Previous Button */}
  <button
    className="border rounded-full p-2 disabled:opacity-50"
    onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
    disabled={currentPage === 1}
  >
    <FaChevronLeft />
  </button>

  {/* Dynamic Page Numbers */}
  {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
    <button
      key={num}
      onClick={() => setCurrentPage(num)}
      className={`w-8 h-8 rounded-md text-sm font-medium ${
        currentPage === num
          ? 'bg-blue-500 text-white'
          : 'bg-gray-200 text-gray-700'
      }`}
    >
      {num}
    </button>
  ))}

  {/* Next Button */}
  <button
    className="border rounded-full p-2 disabled:opacity-50"
    onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
    disabled={currentPage === totalPages}
  >
    <FaChevronRight />
  </button>
</div>

    </div>
  );
};

export default Team;
