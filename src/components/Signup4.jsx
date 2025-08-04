import React, { useState } from 'react';
import { FaDollarSign } from 'react-icons/fa';

const Signup4 = ({ onNextStep }) => {
  const [amount, setAmount] = useState(999);

  const handleAmountChange = (value) => {
    const numericValue = parseInt(value);
    if (!isNaN(numericValue) && numericValue >= 0) {
      setAmount(numericValue);
    }
  };

  const handlePaymentMethod = (method) => {
    if (onNextStep) {
      onNextStep({ method, amount });
    } else {
      alert(`Selected: ${method} with $${amount}`);
    }
  };

  return (
    <div className="w-full h-[80vh] bg-white flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-black text-center">
            Select Payment Method
          </h2>
        </div>

        {/* Amount Field */}
        <div>
          <label className="block text-sm font-medium text-black mb-1">Amount ($)</label>
          <div className="flex items-center bg-gray-100 px-4 py-3 rounded-xl w-full">
            <FaDollarSign className="text-gray-400 mr-2" />
            <input
              type="number"
              value={amount}
              onChange={(e) => handleAmountChange(e.target.value)}
              min={0}
              className="w-full bg-transparent outline-none text-base text-black"
            />
          </div>
        </div>

        {/* Payment Buttons */}
        <div className="space-y-4">
          <button
            onClick={() => handlePaymentMethod('TRC20')}
            className="w-full bg-[#53C53F] hover:bg-green-600 text-white font-semibold py-3 rounded-xl transition"
          >
            TRC20 (USDT)
          </button>
          <button
            onClick={() => handlePaymentMethod('BEP20')}
            className="w-full bg-[#FFA500] hover:bg-yellow-600 text-white font-semibold py-3 rounded-xl transition"
          >
            BEP20 (USDT)
          </button>
          <button
            onClick={() => handlePaymentMethod('Binance Transfer')}
            className="w-full bg-[#FF7A00] hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition"
          >
            Binance Transfer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup4;
