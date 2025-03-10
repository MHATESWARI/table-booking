import React from "react";

const StickyNavbar = () => {
  return (
    <div className="container flex justify-center items-center pt-6">
      <nav className="bg-white w-[56rem] rounded-3xl">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center md:justify-center md:space-x-8">
          {/* Location Input */}
          <div className="flex items-center space-x-2 bg-gray-100 px-3 py-2 rounded-lg shadow-sm w-full max-w-xs">
            <i className="fa-solid fa-location-dot text-gray-500"></i>
            <input
              type="text"
              placeholder="Enter location"
              className="bg-transparent outline-none w-full text-gray-700 placeholder-gray-400"
            />
          </div>

          {/* Filters Button */}
          <button className="flex items-center space-x-2 bg-gray-400 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-500 transition">
            <i className="fa-solid fa-filter"></i>&nbsp;
            Filters
          </button>
        </div>
      </nav>
    </div>
  );
};

export default StickyNavbar;
