import React, { useState } from 'react'; 
import { FaDollarSign, FaTag } from 'react-icons/fa';

const Signup3 = ({ onNextStep }) => {
  const [amount, setAmount] = useState(999);
  const [referralId, setReferralId] = useState('');
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState({});

  const handleAmountChange = (value) => {
    const numericValue = parseInt(value);
    if (!isNaN(numericValue) && numericValue >= 0) {
      setAmount(numericValue);
    }
  };

  const validate = () => {
    const newErrors = {};
    if (amount <= 0) newErrors.amount = 'Amount must be greater than 0';
    if (!agree) newErrors.agree = 'You must agree to the terms';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      if (onNextStep) {
        onNextStep({ amount, referralId });
      }
    }
  };

  return (
    <div className="w-full min-h-[70vh] flex flex-col justify-start px-4 sm:px-6 md:px-[60px] lg:px-[100px] sm:py-0 md:py-11  bg-white">
      <div className="max-w-md w-full space-y-8 py-10 mx-auto">
        <div>
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-900">
            Sign Up
          </h2>
          <p className="mt-2 text-center text-sm sm:text-base text-gray-500">
            Join us to access your dashboard.
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Amount */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Amount ($) <span className="text-red-500">*</span>
            </label>
            <div className="flex flex-wrap sm:flex-nowrap items-center">
              <div className="flex items-center flex-grow border border-gray-300 rounded-l-xl px-3 py-3 bg-white">
                <FaDollarSign className="text-gray-400 mr-2 mt-1" />
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => handleAmountChange(e.target.value)}
                  className="w-full outline-none bg-transparent text-sm sm:text-base"
                  min={0}
                />
              </div>
              <div className="flex w-full sm:w-auto mt-2 sm:mt-0 sm:ml-0">
                <button
                  type="button"
                  onClick={() => setAmount((prev) => Math.max(prev - 1, 0))}
                  className="w-1/2 sm:w-auto border border-l-0 border-gray-300 sm:px-15 sm:py-3 md:px-18 md:py-3 bg-gray-100 hover:bg-gray-200"
                >
                  –
                </button>
                <button
                  type="button"
                  onClick={() => setAmount((prev) => prev + 1)}
                  className="w-1/2 sm:w-auto border border-l-0 border-gray-300 sm:px-15 sm:py-4 md:px-18 md:py-3 bg-gray-100 hover:bg-gray-200 rounded-r-xl"
                >
                  +
                </button>
              </div>
            </div>
            {errors.amount && (
              <p className="text-red-600 text-sm mt-1">{errors.amount}</p>
            )}
          </div>

          {/* Referral ID */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Referral ID
            </label>
            <div className="flex items-center border border-gray-300 rounded-xl px-3 py-3 bg-white">
              <FaTag className="text-gray-400 mr-2" />
              <input
                type="text"
                value={referralId}
                onChange={(e) => setReferralId(e.target.value)}
                placeholder="RE80085642"
                className="w-full outline-none bg-transparent text-sm sm:text-base"
              />
            </div>
          </div>

          {/* Terms & Conditions */}
          <div className="flex items-start space-x-2">
            <input
              type="checkbox"
              id="agree"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              className="mt-1"
            />
            <label htmlFor="agree" className="text-sm text-gray-700">
              I agree to the <span className="underline">Terms & Conditions</span> and{' '}
              <span className="underline">Privacy Policy</span>
            </label>
          </div>
          {errors.agree && (
            <p className="text-red-600 text-sm mt-1">{errors.agree}</p>
          )}

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition text-sm sm:text-base font-medium"
            >
              Proceed to Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup3;
