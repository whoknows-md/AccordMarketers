import React from "react";
import { useTheme } from "../context/ThemeContext";

const Alliances = () => {
  const { isDark } = useTheme();

  return (
    <section
      className={`py-16 overflow-hidden transition-colors duration-500 ${
        isDark ? "bg-[#060f23]" : "bg-gray-50"
      }`}
    >
      
      {/* Title */}
      <div className="text-center mb-10">
        <p
          className={`text-xs tracking-[4px] uppercase ${
            isDark ? "text-gray-400" : "text-gray-500"
          }`}
        >
          OUR PARTNERSHIPS
        </p>
      </div>

      {/* Scrolling */}
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-16 animate-scroll whitespace-nowrap">

          <span className={`text-2xl font-semibold transition ${
            isDark ? "text-blue-400 hover:text-blue-300" : "text-blue-500 hover:text-blue-600"
          }`}>
            Meta
          </span>

          <span className={`text-2xl font-semibold transition ${
            isDark ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-black"
          }`}>
            Google Ads
          </span>

          <span className={`text-2xl font-semibold transition ${
            isDark ? "text-blue-300 hover:text-white" : "text-blue-600 hover:text-blue-700"
          }`}>
            LinkedIn
          </span>

          <span className={`text-2xl font-semibold transition ${
            isDark ? "text-gray-200 hover:text-white" : "text-gray-900 hover:text-black"
          }`}>
            OpenAI
          </span>

          <span className={`text-2xl font-semibold transition ${
            isDark ? "text-orange-300 hover:text-orange-200" : "text-orange-500 hover:text-orange-600"
          }`}>
            HubSpot
          </span>

          {/* Duplicate */}

          <span className={`text-2xl font-semibold transition ${
            isDark ? "text-blue-400 hover:text-blue-300" : "text-blue-500 hover:text-blue-600"
          }`}>
            Meta
          </span>

          <span className={`text-2xl font-semibold transition ${
            isDark ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-black"
          }`}>
            Google Ads
          </span>

          <span className={`text-2xl font-semibold transition ${
            isDark ? "text-blue-300 hover:text-white" : "text-blue-600 hover:text-blue-700"
          }`}>
            LinkedIn
          </span>

          <span className={`text-2xl font-semibold transition ${
            isDark ? "text-gray-200 hover:text-white" : "text-gray-900 hover:text-black"
          }`}>
            OpenAI
          </span>

          <span className={`text-2xl font-semibold transition ${
            isDark ? "text-orange-300 hover:text-orange-200" : "text-orange-500 hover:text-orange-600"
          }`}>
            HubSpot
          </span>

        </div>

        {/* Fade edges */}
        <div className={`absolute left-0 top-0 h-full w-20 pointer-events-none ${
          isDark
            ? "bg-gradient-to-r from-[#060f23] to-transparent"
            : "bg-gradient-to-r from-gray-50 to-transparent"
        }`}></div>

        <div className={`absolute right-0 top-0 h-full w-20 pointer-events-none ${
          isDark
            ? "bg-gradient-to-l from-[#060f23] to-transparent"
            : "bg-gradient-to-l from-gray-50 to-transparent"
        }`}></div>

      </div>

    </section>
  );
};

export default Alliances;