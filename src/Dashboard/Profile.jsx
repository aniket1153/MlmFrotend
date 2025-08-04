import React, { useContext, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { ThemeContext } from "../context/ThemeContext";

const countries = [
  { name: "India", code: "+91", flag: "https://flagcdn.com/w40/in.png" },
  { name: "United States", code: "+1", flag: "https://flagcdn.com/w40/us.png" },
  { name: "United Kingdom", code: "+44", flag: "https://flagcdn.com/w40/gb.png" },
];

const Profile = () => {
  const [formData, setFormData] = useState({
    name: "Bikram Das",
    id: "ID16523694",
    email: "bikram123@gmail.com",
    phone: "6523694423",
    password: "P16523694",
    confirmPassword: "P16523694",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setShowDropdown(false);
  };
  const context = useContext(ThemeContext);
  console.log("Full Context:", context);
  const { darkMode } = context || {};
  console.log("Dark Mode:", darkMode);
  return (
    <div
      className={`min-h-[86vh] flex justify-center rounded-xl items-center px-4 py-4 ${
        darkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div 
  className={`rounded-2xl w-full max-w-2xl relative ${
    darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
  }`}
>
  {/* Profile Picture */}
  <div className="flex flex-col items-center">
    <div className="relative">
      <img
        src="https://i.pravatar.cc/150?img=7"
        alt="Profile"
        className={`w-24 h-24 rounded-full border-4 ${
          darkMode ? "border-gray-700 bg-gray-800" : "border-white bg-white"
        }`}
      />
      <div
        className={`absolute -top-2 -right-2 p-1.5 rounded-full shadow-md ${
          darkMode ? "bg-gray-700" : "bg-blue-700"
        }`}
      >
        <FaRegEdit className={`text-xs ${darkMode ? "text-gray-200" : "text-white"}`} />
      </div>
    </div>
    <h2 className="mt-2 text-lg font-semibold">{formData.name}</h2>
  </div>

  {/* Form */}
  <form className="mt-3 space-y-1">
    {/* Name */}
    <div className="relative">
      <label className={`text-sm mb-1 block ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
        Name
      </label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className={`w-full rounded-xl px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          darkMode ? "bg-gray-800 text-white border-gray-600" : "bg-white border"
        }`}
      />
      <FaRegEdit className="absolute right-3 top-9 text-[#3b82f6]" />
    </div>

    {/* ID */}
    <div className="relative">
      <label className={`text-sm mb-1 block ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
        ID
      </label>
      <input
        type="text"
        name="id"
        value={formData.id}
        onChange={handleChange}
        className={`w-full rounded-xl px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          darkMode ? "bg-gray-800 text-white border-gray-600" : "bg-white border"
        }`}
      />
      <FaRegEdit className="absolute right-3 top-9 text-[#3b82f6]" />
    </div>

    {/* Email */}
    <div className="relative">
      <label className={`text-sm mb-1 block ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
        Email
      </label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className={`w-full rounded-xl px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          darkMode ? "bg-gray-800 text-white border-gray-600" : "bg-white border"
        }`}
      />
      <FaRegEdit className="absolute right-3 top-9 text-[#3b82f6]" />
    </div>

    {/* Phone */}
    <div className="relative">
      <label className={`text-sm mb-1 block ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
        Phone
      </label>
      <div
        className={`relative flex items-center rounded-xl px-4 py-2 ${
          darkMode ? "bg-gray-800 border-gray-600" : "bg-white border"
        }`}
      >
        {/* Country Code Selector */}
        <div
          className={`flex items-center gap-1 text-sm pr-2 border-r cursor-pointer relative ${
            darkMode ? "text-gray-200 border-gray-600" : "text-gray-700 border-gray-300"
          }`}
          onClick={() => setShowDropdown((prev) => !prev)}
        >
          <img
            src={selectedCountry.flag}
            alt={selectedCountry.name}
            className="w-5 h-4 rounded-sm"
          />
          {selectedCountry.code}
          <MdOutlineArrowDropDown />
        </div>

        {/* Country Dropdown */}
        {showDropdown && (
          <div
            className={`absolute top-14 left-4 z-10 shadow-lg rounded-md overflow-hidden w-48 border ${
              darkMode ? "bg-gray-800 text-white border-gray-600" : "bg-white text-black border"
            }`}
          >
            {countries.map((country, index) => (
              <div
                key={index}
                className={`flex items-center gap-2 px-3 py-2 cursor-pointer ${
                  darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
                }`}
                onClick={() => handleCountrySelect(country)}
              >
                <img src={country.flag} alt={country.name} className="w-5 h-4 rounded-sm" />
                <span className="text-sm">
                  {country.name} ({country.code})
                </span>
              </div>
            ))}
          </div>
        )}

        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`flex-1 px-2 outline-none text-sm ${
            darkMode ? "text-white bg-transparent" : "text-black bg-transparent"
          }`}
          placeholder="Enter your phone number"
        />
      </div>
      <FaRegEdit className="absolute right-3 top-9 text-[#3b82f6]" />
    </div>

    {/* Password */}
    <div className="relative">
      <label className={`text-sm mb-1 block ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
        Password
      </label>
      <input
        type={showPassword ? "text" : "password"}
        name="password"
        value={formData.password}
        onChange={handleChange}
        className={`w-full rounded-xl px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          darkMode ? "bg-gray-800 text-white border-gray-600" : "bg-white border"
        }`}
      />
      <FaRegEdit
        className="absolute right-3 top-9 text-[#3b82f6] cursor-pointer"
        onClick={() => setShowPassword(!showPassword)}
      />
    </div>

    {/* Confirm Password */}
    <div className="relative">
      <label className={`text-sm mb-1 block ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
        Confirm Password
      </label>
      <input
        type={showConfirmPassword ? "text" : "password"}
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        className={`w-full rounded-xl px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          darkMode ? "bg-gray-800 text-white border-gray-600" : "bg-white border"
        }`}
      />
      <FaRegEdit
        className="absolute right-3 top-9 text-[#3b82f6] cursor-pointer"
        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
      />
    </div>

    {/* Save Button */}
    <button
      type="submit"
      className={`w-full font-medium py-2 rounded-full mt-4 transition duration-200 ${
        darkMode ? "bg-blue-600 hover:bg-blue-500 text-white" : "bg-[#3b82f6] hover:bg-blue-700 text-white"
      }`}
    >
      Save
    </button>
  </form>
</div>

    </div>
  );
};

export default Profile;
