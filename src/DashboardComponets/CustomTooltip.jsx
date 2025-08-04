import React, { useContext } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { FiSettings } from "react-icons/fi";
import { ThemeContext } from "../context/ThemeContext";

const data = [
  { name: "Ja", value: 1000 },
  { name: "Fe", value: 10000 },
  { name: "Ma", value: 5000 },
  { name: "Ap", value: 8000 },
  { name: "My", value: 20000 },
  { name: "Ju", value: 1000 },
  { name: "Jl", value: 25000 },
  { name: "Au", value: 5000 },
  { name: "Se", value: 15000 },
  { name: "Oc", value: 18000 },
  { name: "No", value: 22000 },
  { name: "De", value: 1000 },
];

// Custom tooltip for Area Chart
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-gray-700 shadow-lg rounded-md p-2 text-xs text-black dark:text-white transition-colors duration-200">
        <p className="font-medium">May 2025</p>
        <p className="font-bold">${payload[0].value.toLocaleString()}</p>
      </div>
    );
  }
  return null;
};

const getAxisColor = () => {
  return document.documentElement.classList.contains("dark")
    ? "#D1D5DB"
    : "#6B7280";
};

// ✅ FIXED: useContext placed inside component
const EarningsChart = () => {
  const context = useContext(ThemeContext);
  const { darkMode } = context || {};
  console.log("Dark Mode:", darkMode);

  return (
    <div
      className={`${
        darkMode ? "bg-gray-800" : "bg-white"
      } rounded-2xl p-4 shadow-sm dark:shadow-gray-700/10 w-full h-full transition-colors duration-200`}
    >
      <div className="flex justify-between items-center mb-2">
        <h2
          className={`${
            darkMode ? "text-gray-200" : "text-gray-800"
          } text-sm font-semibold transition-colors duration-200`}
        >
          Earnings
        </h2>
        <FiSettings
          size={16}
          className={`${
            darkMode ? "text-gray-400" : "text-gray-400"
          } transition-colors duration-200`}
        />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <AreaChart data={data}>
          <XAxis
            dataKey="name"
            tick={{ fontSize: 10, fill: getAxisColor() }}
            stroke={getAxisColor()}
          />
          <YAxis
            tick={{ fontSize: 10, fill: getAxisColor() }}
            stroke={getAxisColor()}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#3366FF"
            fill="url(#colorUv)"
            strokeWidth={2}
            dot={{ fill: "#3366FF", r: 4 }}
            activeDot={{
              r: 6,
              strokeWidth: 2,
              fill: "#3366FF",
              stroke: "#fff",
            }}
          />
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3366FF" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#3366FF" stopOpacity={0.02} />
            </linearGradient>
          </defs>
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EarningsChart;
