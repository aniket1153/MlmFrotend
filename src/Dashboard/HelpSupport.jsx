import React, { useContext, useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import HelpIcon from "../icon/HelpIcon";
import FaqAccordion from "../DashboardComponets/FaqAccordion";
import { ThemeContext } from "../context/ThemeContext";

const HelpSupport = () => {
  const context = useContext(ThemeContext);
  console.log("Full Context:", context);
  const { darkMode } = context || {};
  console.log("Dark Mode:", darkMode);

  const [formData, setFormData] = useState({
    name: "",
    userId: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      userId: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className={`min-h-screen w-full ${darkMode ? "bg-gray-900" : "bg-white"} px-4 py-10`}>
      {/* ⚡ Container */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-10">
        
        {/* 🔵 Left - Contact Info */}
        <div className={`w-full max-w-sm sm:h-auto md:h-[422px] p-6 pt-16 rounded-xl mx-auto ${darkMode ? "bg-gray-800" : "bg-[#F5F5F5] "}`}>
          <div className="space-y-6">
            <div className={`flex items-center gap-4 border border-blue-500 rounded-xl px-4 py-3 ${darkMode ? "bg-gray-700" : "bg-white"}`}>
              <div className="bg-[#4361EE] text-white p-3 rounded-xl">
                <HelpIcon />
              </div>
              <div>
                <p className={`text-sm font-semibold ${darkMode ? "text-gray-300" : "text-gray-700"}`}>Phone</p>
                <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>+91 0022006633</p>
              </div>
            </div>

            <div className={`flex items-center gap-4 border border-blue-500 rounded-xl px-4 py-3 ${darkMode ? "bg-gray-700" : "bg-white"}`}>
              <div className="bg-[#4361EE] text-white p-3 rounded-xl">
                <MdOutlineMail size={26} />
              </div>
              <div>
                <p className={`text-sm font-semibold ${darkMode ? "text-gray-300" : "text-gray-700"}`}>Email</p>
                <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>yourmail@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* 🟢 Right - Contact Form */}
        <div className="w-full max-w-xl mx-auto">
          <h2 className={`text-2xl font-semibold mb-6 text-center lg:text-left ${darkMode ? "text-gray-200" : "text-gray-800"}`}>
            Contact Us
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className={`w-full p-4 border border-gray-300 rounded-xl text-sm ${darkMode ? "bg-gray-800 text-gray-300" : "bg-white text-gray-700"}`}
            />

            <input
              type="text"
              name="userId"
              placeholder="User ID"
              value={formData.userId}
              onChange={handleChange}
              required
              className={`w-full p-4 border border-gray-300 rounded-xl text-sm ${darkMode ? "bg-gray-800 text-gray-300" : "bg-white text-gray-700"}`}
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`w-full p-4 border border-gray-300 rounded-xl text-sm ${darkMode ? "bg-gray-800 text-gray-300" : "bg-white text-gray-700"}`}
            />

            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className={`w-full p-4 border border-gray-300 rounded-xl text-sm resize-none ${darkMode ? "bg-gray-800 text-gray-300" : "bg-white text-gray-1000"}`}
            ></textarea>

            <div className="flex justify-center lg:justify-start">
              <button
                type="submit"
                className={`${darkMode ? "bg-[#4361EE] text-white" : "bg-[#3a53cc] text-white"} px-6 py-2 rounded-full hover:bg-[#3a53cc] transition`}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* ⚡ FAQ Section */}
      <div className="mt-20 px-2 lg:px-0">
        <FaqAccordion />
      </div>
    </div>
  );
};

export default HelpSupport;
