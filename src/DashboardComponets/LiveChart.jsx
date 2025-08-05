import React, { useContext, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { ThemeContext } from '../context/ThemeContext';

const LiveChart = () => {
  const chartRef = useRef(null);
  const counterRef = useRef(null);
  let chartInstance = useRef(null);
  const baseEarnings = 1000;
  let currentEarnings = baseEarnings;

  const context = useContext(ThemeContext);
  console.log("Full Context:", context);
  const { darkMode } = context || {};
  console.log("Dark Mode:", darkMode);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(34,197,94,0.4)');
    gradient.addColorStop(1, 'rgba(255,255,255,0)');

    chartInstance.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [],
        datasets: [
          {
            label: 'Live Earnings (USD)',
            data: [],
            borderColor: '#10b981',
            backgroundColor: gradient,
            fill: true,
            tension: 0.3,
            pointRadius: 0,
            pointHoverRadius: 4,
            pointBackgroundColor: '#10b981',
            borderWidth: 2
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 800,
          easing: 'easeInOutQuad'
        },
        scales: {
          x: {
            ticks: { color: darkMode ? '#94a3b8' : '#475569' },
            grid: {
              display: true,
              borderDash: [3, 3],
              color: darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.08)'
            }
          },
          y: {
            ticks: {
              color: darkMode ? '#94a3b8' : '#475569',
              callback: (value) => `$${value.toFixed(0)}`
            },
            grid: {
              borderDash: [3, 3],
              color: darkMode ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)'
            }
          }
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            mode: 'index',
            intersect: false,
            backgroundColor: darkMode ? '#1e293b' : '#f1f5f9',
            borderColor: '#10b981',
            borderWidth: 1,
            titleColor: darkMode ? '#10b981' : '#0f766e',
            bodyColor: darkMode ? '#f1f5f9' : '#0f172a',
            callbacks: {
              label: (context) => `Earnings: $${context.parsed.y.toFixed(2)}`
            }
          }
        },
        interaction: {
          mode: 'index',
          intersect: false
        }
      }
    });

    const interval = setInterval(() => updateChart(), 2000);

    return () => {
      clearInterval(interval);
      chartInstance.current.destroy();
    };
  }, [darkMode]);

  const updateChart = () => {
    const now = new Date().toLocaleTimeString();
    const random = Math.random();
    let percentChange;

    if (random < 0.55) {
      percentChange = Math.random() * 4 + 1;
    } else if (random < 0.8) {
      percentChange = -(Math.random() * 2 + 0.5);
    } else {
      percentChange = 0;
    }

    const projected = currentEarnings + currentEarnings * (percentChange / 100);
    const maxLimit = baseEarnings * 1.05;
    const minLimit = baseEarnings * 0.95;

    if (projected >= minLimit && projected <= maxLimit) {
      currentEarnings = parseFloat(projected.toFixed(2));
      updateUI(now, currentEarnings);
    }
  };

  const updateUI = (time, earning) => {
    if (counterRef.current) {
      counterRef.current.innerText = `$${earning.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })}`;
    }

    const chart = chartInstance.current;
    chart.data.labels.push(time);
    chart.data.datasets[0].data.push(earning);

    if (chart.data.labels.length > 50) {
      chart.data.labels.shift();
      chart.data.datasets[0].data.shift();
    }

    chart.update();
  };

  return (
    <div className={`min-h-screen flex items-center justify-center p-6 ${darkMode ? "bg-gradient-to-br from-slate-900 to-slate-800 text-slate-200" : "bg-white text-black"}`}>
      <div className={`w-full max-w-6xl p-8 rounded-2xl shadow-xl ${darkMode ? "bg-slate-900/50 shadow-green-300/10 backdrop-blur-sm" : "bg-gray-200 text-black"}`}>
        <div className="flex flex-col items-center mb-8">
          <h2 className={`text-3xl md:text-4xl font-bold mb-3 text-center ${darkMode ? "text-sky-400 drop-shadow-[0_0_6px_rgba(56,189,248,0.6)]" : "text-black"}`}>
            💸 Live Earnings Dashboard
          </h2>
          <div
            ref={counterRef}
            className={`text-3xl font-bold ${darkMode ? "text-green-400 px-8 py-4 rounded-lg bg-white/5 shadow-lg shadow-green-400/20 backdrop-blur-sm" : "bg-gray-200 text-black p-2 rounded-lg "}`}
          >
            $1000.00
          </div>
        </div>

        <div className="h-[400px] sm:h-[500px] w-full bg-white/5 rounded-xl p-4 shadow-md">
          <canvas ref={chartRef} className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default LiveChart;
