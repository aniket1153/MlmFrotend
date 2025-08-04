import React, { useContext } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { ThemeContext } from '../context/ThemeContext';

const EarningsBarChart = () => {
  const levelData = [
    { level: 'L1', earnings: 500 },
    { level: 'L2', earnings: 900 },
    { level: 'L3', earnings: 1200 },
    { level: 'L4', earnings: 1800 },
    { level: 'L5', earnings: 2400 },
    { level: 'L6', earnings: 3000 },
    { level: 'L7', earnings: 3400 },
    { level: 'L8', earnings: 4000 },
    { level: 'L9', earnings: 4500 },
    { level: 'L10', earnings: 5000 },
  ];
    const context = useContext(ThemeContext);
    console.log("Full Context:", context);
    const { darkMode } = context || {};
    console.log("Dark Mode:", darkMode);

  return (
    <div
      className={`mt-10 p-6 rounded-xl shadow-md ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      <h2 className="text-lg font-semibold mb-4">Referral Earnings Chart</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={levelData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="level" />
          <YAxis domain={[0, 6000]} tickCount={7} />
          <Tooltip />
          <Bar dataKey="earnings" fill="#3B82F6" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EarningsBarChart;
