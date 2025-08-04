import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Login = ({onForgotPassword}) => {
  const [showPassword, setShowPassword] = useState(false);
 const navigate = useNavigate();
  return (
 <div className="w-full h-[80vh] flex flex-col justify-start px-6 md:px-[60px] lg:px-[100px] py-10 bg-white ">
      <h2 className="text-[41px] text-center font-semibold mb-2">Login</h2>
      <p className="text-[17px] text-center text-gray-500 mb-6">
        Welcome back! Please login to your Account  Now.
      </p>

      <form className="space-y-5">
        <div>
          <label htmlFor="email" className="block mb-1 text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="youremail123@gmail.com"
            className="w-full p-[14px] border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="password" className="block mb-1 text-sm font-medium">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter Password"
              className="w-full p-[14px] border border-gray-300 rounded-xl pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
            </span>
          </div>
          
        </div>
   <div className="flex justify-end">
  <h1
    className="text-md text-blue-600 font-medium cursor-pointer hover:underline"
    onClick={onForgotPassword}
  >
    Forget Password?
  </h1>
</div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-[14px] rounded-2xl hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
