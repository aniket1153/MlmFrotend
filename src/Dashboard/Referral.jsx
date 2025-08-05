import React, { useContext, useState } from 'react';
import { FaCopy } from 'react-icons/fa';
import referralImg from '../assets/Group 2.png'; // Make sure this path is correct
import { ThemeContext } from '../context/ThemeContext';

const Referral = () => {
  const [referralCode, setReferralCode] = useState("RE956622");
  const [copied, setCopied] = useState(false);
   const context = useContext(ThemeContext);
      console.log("Full Context:", context);
      const { darkMode } = context || {};
      console.log("Dark Mode:", darkMode);

  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`p-6 rounded-lg shadow-md w-full h-full transition-colors duration-300 ${darkMode ?" bg-gray-800 ":"bg-white"}`}>
      <h2 className={`text-3xl font-semibold mb-2   ${darkMode ?" text-white":"text-gray-900"}`}>Referral</h2>
      <p className={` mb-4 text-lg ${darkMode ?"text-gray-300":"text-gray-700"}`}>
        Share Your Unique Referral Code.
      </p>

      <div className="flex flex-wrap md:flex-nowrap items-center gap-2 mb-4">
        <input
          type="text"
          value={referralCode}
          onChange={(e) => setReferralCode(e.target.value)}
          className={`border   px-4 py-2 rounded-full text-base md:text-lg font-mono w-full sm:w-64 transition-colors duration-300 ${darkMode ?"border-gray-600 bg-gray-700 text-white": "border-gray-300 bg-white text-black"}`}
        />
        <button
          onClick={handleCopy}
          className={`bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full flex items-center gap-2 transition`}
        >
          <FaCopy /> {copied ? "Copied" : "Copy"}
        </button>
      </div>

      <div className={`mb-6 text-lg  ${darkMode ?"text-gray-300" :"text-gray-600"}`}>
        <span className="mr-2">Share The Link On:</span>
        <a href="#" className="text-blue-600 hover:underline mx-1">WhatsApp <span className='text-gray-400'>|</span></a>
        <a href="#" className="text-blue-600 hover:underline mx-1">Facebook <span className='text-gray-400'>|</span></a>
        <a href="#" className="text-blue-600 hover:underline mx-1">Telegram <span className='text-gray-400'>|</span></a>
        <a href="#" className="text-blue-600 hover:underline mx-1">Email</a>
      </div>

      <div className="flex justify-center md:justify-end">
        <img
          src={referralImg}
          alt="Referral illustration"
          className="max-w-full md:w-96"
        />
      </div>
    </div>
  );
};

export default Referral;
