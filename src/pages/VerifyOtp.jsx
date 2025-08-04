import React, { useRef, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import img1 from "../assets/img1.png";

const VerifyOtp = ({ showVerifyOtp }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const inputsRef = useRef([]);
  const [target, setTarget] = useState("");
  const [type, setType] = useState(""); // 'email' or 'phone'
  const [from, setFrom] = useState(""); // 'signup' or 'forget-password'
const [otp, setOtp] = useState(["", "", "", ""]);

  useEffect(() => {
    if (location.state && location.state.type && location.state.value) {
      setTarget(location.state.value);
      setType(location.state.type);
      setFrom(location.state.from || ""); // <== capture origin
    } else {
      navigate("/signup"); // fallback if no data passed
    }
  }, [location, navigate]);

 const handleChange = (e, idx) => {
  const val = e.target.value;

  if (!/^\d?$/.test(val)) return; // ✅ Allow only digits or empty string

  const updatedOtp = [...otp];
  updatedOtp[idx] = val;
  setOtp(updatedOtp);

  if (val && idx < 3) {
    inputsRef.current[idx + 1].focus();
  } else if (!val && idx > 0) {
    inputsRef.current[idx - 1].focus();
  }
};


const handleVerifyClick = () => {
  const enteredOtp = otp.join("");
  if (enteredOtp.length < 4) {
    alert("Please enter all 4 digits of the OTP.");
    return;
  }

  if (type === "email") {
    localStorage.setItem(
      "isEmailVerified",
      JSON.stringify({ value: target, verified: true })
    );
  } else if (type === "phone") {
    localStorage.setItem(
      "isPhNoVerified",
      JSON.stringify({ value: target, verified: true })
    );
  }

  if (from === "signup") {
    navigate("/signup", { state: { fromVerify: true } });
  } else if (from === "forget-password") {
    navigate("/reset-password", { state: { fromVerify: true } });
  } else {
    navigate("/", { state: { fromVerify: true } });
  }
};


  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 py-10 md:px-16 lg:px-24">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-2">Verify OTP</h2>
          <p className="text-gray-500 text-base md:text-lg">
            We sent a code to{" "}
            <span className="font-semibold text-black">{target}</span>
          </p>
        </div>

        {/* OTP Input */}
        <form className="w-full max-w-md mx-auto space-y-6">
          <div className="flex justify-center gap-6">
           {[...Array(4)].map((_, i) => (
  <input
    key={i}
    ref={(el) => (inputsRef.current[i] = el)}
    type="text"
    inputMode="numeric"
    maxLength={1}
    value={otp[i]}
    autoComplete="one-time-code"
    className="w-12 h-12 border border-[#C3D4E9] rounded-xl text-center text-xl focus:outline-none focus:border-[#4361EE]"
    onChange={(e) => handleChange(e, i)}
  />
))}

          </div>

          {/* Continue Button */}
          <button
            type="button"
            onClick={handleVerifyClick}
            className="w-full bg-[#4361EE] text-white py-3 rounded-2xl font-medium"
          >
            Continue
          </button>

          {/* Resend Link */}
          <div className="text-sm text-gray-500 text-center md:text-end">
            Didn’t receive the code?{" "}
            <button type="button" className="text-[#4361EE] font-medium">
              Resend
            </button>
          </div>
        </form>
      </div>

      {/* Right Section */}
      <div
        className="hidden md:flex w-full md:w-1/2 h-[300px] md:h-screen items-center justify-center bg-[#4361EE] bg-cover bg-center"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <h1 className="text-white text-5xl lg:text-7xl font-bold">MLM</h1>
      </div>
    </div>
  );
};

export default VerifyOtp;
