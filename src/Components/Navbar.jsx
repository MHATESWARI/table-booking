import { useState } from "react";
import logo from "../assets/tablebooking-logo.png";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
    <div className="">
            <div className="container flex justify-center mt-5">
            <nav className=" w-full  bg-green-50 shadow-md rounded-4xl lg:w-[56rem] z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <a href="#" className="text-2xl font-semibold">
                            <img src={logo} alt="Logo" className="w-34 lg:w-36" />
                        </a>
                    </div>
                    <div className="hidden md:flex space-x-7 font-semibold text-xl text-red-600">
                        <a href="#" className="hover:underline">Home</a>
                        <a href="#" className="hover:underline">About</a>
                        <a href="#" className="hover:underline">Services</a>
                   
                        <button className="w-30 mt-[-3px] ml-9 bg-red-100 hover:bg-red-300 text-black font-medium py-2 rounded-3xl transition focus:outline-none focus:ring-2 focus:ring-red-300 active:bg-red-400">
            LogIn
          </button>
                    </div>
                    <div className="flex items-center space-x-4">
                        {/* <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="focus:outline-none">
                            <i className="fas fa-search text-xl"></i>
                        </button> */}
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden focus:outline-none">
                            <i className="fas fa-bars text-xl"></i>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className=" w-full bg-white shadow-md md:hidden">
                    <div className="flex flex-col space-y-2 py-4">
                        <a href="#" className="py-2 px-4 hover:bg-gray-200">Home</a>
                        <a href="#" className="py-2 px-4 hover:bg-gray-200">About</a>
                        <a href="#" className="py-2 px-4 hover:bg-gray-200">Services</a>
                        
                        <a href="#" className="py-2 px-4 hover:bg-gray-200">Login</a>
                    </div>
                </div>
            )}
            {/* Search Bar */}
            {isSearchOpen && (
                <div className="w-full bg-white p-2">
                    <div className="flex items-center border border-gray-300 rounded-3xl px-4 py-2">
                        <input type="text" className="w-full text-gray-700 outline-none" placeholder="Search..." />
                        <i className="fas fa-search text-gray-500"></i>
                    </div>
                </div>
            )}
        </nav>
        </div>
    </div>
    );
};

export default Navbar;

