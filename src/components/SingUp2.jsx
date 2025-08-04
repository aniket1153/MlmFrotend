import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Navigate, useNavigate } from "react-router-dom";

const SignUp2 = ({ onNextStep }) => {

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

 const handleSubmit = (e) => {
  e.preventDefault();

  if (!password || !confirmPassword) {
    setError("Please fill in both fields.");
    return;
  }

  if (password.length < 8) {
    setError("Password must be at least 8 characters long.");
    return;
  }

  if (password !== confirmPassword) {
    setError("Passwords do not match.");
    return;
  }

  setError("");

  console.log("Password set successfully");

  if (onNextStep) {
    onNextStep({ password });
  }

  // 👈 Navigate to signup page
};


  return (
    <div className="w-full h-[70vh] flex flex-col justify-start px-6 md:px-[60px] lg:px-[100px] py-10 bg-white">
      <div className="max-w-md w-full space-y-8 py-10">
        <div>
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-900">
            Create Password
          </h2>
          <p className="mt-2 text-center text-sm sm:text-base text-gray-500">
            Set a strong password to secure your account.
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Error Message */}
          {error && (
            <div className="text-red-600 text-sm font-medium text-center">{error}</div>
          )}

          {/* Create Password */}
          <div>
            <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-700">
              Create Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
              />
              <span
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <AiOutlineEye size={20} /> : <AiOutlineEyeInvisible size={20} /> }
              </span>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor="confirmPassword" className="block mb-1 text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Re-enter your password"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
              />
              <span
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <AiOutlineEye size={20} /> : <AiOutlineEyeInvisible size={20} /> }
              </span>
            </div>
          </div>

          {/* Continue Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition text-sm sm:text-base font-medium"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp2;
