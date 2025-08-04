import React, { useContext } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { FiSettings } from "react-icons/fi";
import { ThemeContext } from "../context/ThemeContext";

const data = [
  { name: "Ja", value: 1000 },
  { name: "Fe", value: 20000 },
  { name: "Ma", value: 10000 },
  { name: "Ap", value: 50000 },
  { name: "My", value: 100000 },
  { name: "Ju", value: 2000 },
  { name: "Jl", value: 30000 },
  { name: "Au", value: 15000 },
  { name: "Se", value: 25000 },
  { name: "Oc", value: 60000 },
  { name: "No", value: 20000 },
  { name: "De", value: 30000 },
];

// Custom tooltip
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-gray-900 shadow-lg rounded-md p-2 text-xs text-black dark:text-white">
        <p className="font-medium">{label} 2025</p>
        <p className="font-bold">{(payload[0].value / 1000).toFixed(0)}k</p>
      </div>
    );
  }
  return null;
};

const ChartComponent = () => {
  const { darkMode } = useContext(ThemeContext);

  const axisColor = darkMode ? "#D1D5DB" : "#6B7280";
  const tooltipBg = darkMode ? "#1F2937" : "#fff";
  const tooltipColor = darkMode ? "#F3F4F6" : "#000";

  return (
    <div className={`${darkMode ? "bg-gray-800" : "bg-white"}  p-4  w-full h-full transition-colors duration-200`}>
      <div className="flex justify-between items-center mb-2">
        <h2 className={`${darkMode ? "text-gray-200" : "text-gray-800"} text-sm font-semibold transition-colors duration-200`}>
          Referral Activity
        </h2>
        <FiSettings
          size={16}
          className={`${
            darkMode ? "text-gray-400" : "text-gray-400"
          } transition-colors duration-200`}
        />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart data={data}>
          <XAxis
            dataKey="name"
            tick={{ fontSize: 10, fill: axisColor }}
            stroke={axisColor}
          />
          <YAxis
            tick={{ fontSize: 10, fill: axisColor }}
            stroke={axisColor}
          />
          <Tooltip
            content={<CustomTooltip />}
            wrapperStyle={{
              backgroundColor: tooltipBg,
              color: tooltipColor,
              border: "none",
              borderRadius: "0.5rem",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          />
          <Bar dataKey="value" radius={[10, 10, 0, 0]} barSize={10}>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={
                  entry.name === "My"
                    ? "#3366FF"
                    : darkMode
                    ? "#4B5563"
                    : "#6B7280"
                }
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartComponent;
