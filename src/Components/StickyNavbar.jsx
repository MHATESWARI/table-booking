import React from "react";

const StickyNavbar = () => {
  //  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  //   const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  return (
    <div className="container flex justify-center items-center pt-6">
      <nav className="bg-white w-[56rem] rounded-3xl">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center md:justify-center md:space-x-8">
          {/* Location Input */}
          <div className="flex items-center space-x-2 bg-gray-100 px-3 py-2 lg-rounded shadow  w-full max-w-xs">
            <i className="fa-solid fa-location-dot text-gray-500"></i>
            <input
              type="text"
              placeholder="Enter location"
              className="bg-transparent outline-none w-full text-gray-700 placeholder-gray-400"
            />
          </div>

          {/* Filters Button */}
          <button className="flex items-center space-x-2  bg-gray-400 text-white px-4 py-2 lg-rounded md-shadow hover:bg-gray-500 transition">
            <i className="fa-solid fa-filter"></i>&nbsp;
            Filters
          </button>/
          <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="focus:outline-none">
                            <i className="fas fa-search text-xl"></i>
                        </button>
{/* 
                        {isSearchOpen && (
                <div className="w-full bg-white p-2">
                    <div className="flex items-center border border-gray-300 rounded-3xl px-4 py-2">
                        <input type="text" className="w-full text-gray-700 outline-none" placeholder="Search..." />
                        <i className="fas fa-search text-gray-500"></i>
                    </div>
                </div>
            )} */}

                        
          
          
        </div>
      </nav>
    </div>
  );
};

export default StickyNavbar;
