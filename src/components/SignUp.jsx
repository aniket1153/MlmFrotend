import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";
import Signup1 from "../icon/Signup1";
import Email from "../icon/Email";

// Country list
const countries = [
  { code: "+91", name: "India", flag: "https://flagcdn.com/w40/in.png", regex: /^\d{10}$/ },
  { code: "+1", name: "USA", flag: "https://flagcdn.com/w40/us.png", regex: /^\d{10}$/ },
  { code: "+44", name: "UK", flag: "https://flagcdn.com/w40/gb.png", regex: /^\d{10}$/ },
  { code: "+61", name: "Australia", flag: "https://flagcdn.com/w40/au.png", regex: /^\d{9}$/ },
  { code: "+81", name: "Japan", flag: "https://flagcdn.com/w40/jp.png", regex: /^\d{10}$/ },
];

const SignUp = ({ onNextStep }) => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [errors, setErrors] = useState({ fullName: "", email: "", phone: "" });
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [isPhNoVerified, setIsPhNoVerified] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const emailData = JSON.parse(localStorage.getItem("isEmailVerified"));
    const phoneData = JSON.parse(localStorage.getItem("isPhNoVerified"));
    if (emailData?.value) {
      setEmail(emailData.value);
      setIsEmailVerified(true);
    }
    if (phoneData?.value) {
      const matchedCountry = countries.find(c => phoneData.value.startsWith(c.code));
      if (matchedCountry) {
        setSelectedCountry(matchedCountry);
        const rawPhone = phoneData.value.slice(matchedCountry.code.length);
        setPhone(rawPhone);
        setIsPhNoVerified(true);
      }
    }
  }, []);

  const validateEmail = (email) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const validatePhone = (phone, country) => country.regex.test(phone);

  const handleEmailVerify = () => {
    if (!validateEmail(email)) {
      setErrors((prev) => ({ ...prev, email: "Enter a valid email address" }));
      return;
    }
    setErrors((prev) => ({ ...prev, email: "" }));
    navigate("/verify-otp", { state: { type: "email", value: email } });
  };

  const handlePhoneVerify = () => {
    if (!validatePhone(phone, selectedCountry)) {
      setErrors((prev) => ({ ...prev, phone: "Enter a valid phone number" }));
      return;
    }
    setErrors((prev) => ({ ...prev, phone: "" }));
    navigate("/verify-otp", {
      state: { type: "phone", value: selectedCountry.code + phone },
    });
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let hasError = false;
    const newErrors = { fullName: "", email: "", phone: "" };

    if (!fullName.trim()) {
      newErrors.fullName = "Full Name is required";
      hasError = true;
    }
    if (!isEmailVerified) {
      newErrors.email = "Please verify your email";
      hasError = true;
    }
    if (!isPhNoVerified) {
      newErrors.phone = "Please verify your phone number";
      hasError = true;
    }

    setErrors(newErrors);

    if (!hasError) {
      onNextStep({
        fullName,
        email,
        phone: selectedCountry.code + phone,
      });
    }
  };

  return (
    <div className="w-full  md:h-[80vh] px-4 sm:px-6 md:px-12 sm:py-0 md:py-10 bg-white flex flex-col items-center">
      <div className="mb-8 w-full max-w-lg">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-2">Sign Up</h2>
        <p className="text-gray-500 text-center text-base sm:text-lg">Join us to access your dashboard.</p>
      </div>

      <form className="w-full max-w-lg space-y-6" onSubmit={handleSubmit}>
        {/* Full Name */}
        <div>
          <label htmlFor="fullname" className="block mb-1 text-sm font-medium">
            Full Name <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center border border-[#C3D4E9] rounded-xl px-3 bg-white">
            <div className="flex items-center gap-2">
              <Signup1 />
              <span className="text-gray-400">|</span>
            </div>
            <input
              type="text"
              id="fullname"
              placeholder="Bikram Kumar"
              className="w-full p-3 outline-none bg-transparent text-sm"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          {errors.fullName && <p className="text-sm text-red-500 mt-1">{errors.fullName}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block mb-1 text-sm font-medium">
            Email Address <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center border border-[#C3D4E9] rounded-xl px-3 bg-white">
            <div className="flex items-center gap-2">
              <Email />
              <span className="text-gray-400">|</span>
            </div>
            <input
              type="email"
              id="email"
              placeholder="yourmail123@gmail.com"
              className="w-full p-3 outline-none bg-transparent text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {isEmailVerified ? (
              <FaCheckCircle className="text-green-500 ml-2" size={18} />
            ) : (
              <button
                type="button"
                className="text-[#4361EE] font-medium text-sm px-3"
                onClick={handleEmailVerify}
              >
                Verify
              </button>
            )}
          </div>
          {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block mb-1 text-sm font-medium">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <div className="flex flex-col sm:flex-row gap-2 w-full">
            {/* Dropdown */}
            <div className="relative w-full sm:w-40" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center justify-between gap-2 px-4 py-3 border border-[#C3D4E9] bg-white rounded-xl w-full"
              >
                <div className="flex items-center gap-2">
                  <img src={selectedCountry.flag} alt={selectedCountry.name} className="w-5 h-4" />
                  <span className="text-sm">{selectedCountry.code}</span>
                </div>
                <FiChevronDown className="w-4 h-4 text-gray-400" />
              </button>
              {dropdownOpen && (
                <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto">
                  {countries.map((country) => (
                    <button
                      key={country.code}
                      type="button"
                      onClick={() => {
                        setSelectedCountry(country);
                        setDropdownOpen(false);
                      }}
                      className={`flex items-center gap-2 px-3 py-2 w-full text-sm hover:bg-gray-100 ${
                        selectedCountry.code === country.code ? "bg-gray-100" : ""
                      }`}
                    >
                      <img src={country.flag} alt={country.name} className="w-5 h-4" />
                      <span>{country.code}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Phone Input */}
            <div className="flex items-center border border-[#C3D4E9] rounded-xl px-3 py-3 w-full bg-white">
              <input
                type="text"
                id="phone"
                placeholder="Phone Number"
                className="w-full outline-none bg-transparent text-sm"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              {isPhNoVerified ? (
                <FaCheckCircle className="text-green-500 ml-2" size={18} />
              ) : (
                <button
                  type="button"
                  className="text-[#4361EE] font-medium text-sm px-3"
                  onClick={handlePhoneVerify}
                >
                  Verify
                </button>
              )}
            </div>
          </div>
          {errors.phone && <p className="text-sm text-red-500 mt-1">{errors.phone}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#4361EE] hover:bg-[#354ac0] text-white font-medium py-3 rounded-xl"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default SignUp;
