import { useState } from "react";
import logo from "../assets/tablebooking-logo.png";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <div className="container flex justify-center items-center pt-8">
                    <nav className="fixed w-[56rem] bg-white shadow-md z-50 rounded-4xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <a href="#" className="text-2xl font-semibold">
                            <img src={logo} alt="Logo" className="w-36" />
                        </a>
                    </div>
                    <div className="hidden md:flex space-x-7 font-semibold">
                        <a href="#" className="hover:underline">Home</a>
                        <a href="#" className="hover:underline">About</a>
                        <a href="#" className="hover:underline">Services</a>
                        <a href="#" className="hover:underline">Filters</a>
                        <a href="#" className="hover:underline">Login</a>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="focus:outline-none">
                            <i className="fas fa-search text-xl"></i>
                        </button>
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden focus:outline-none">
                            <i className="fas fa-bars text-xl"></i>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
                    <div className="flex flex-col space-y-2 py-4">
                        <a href="#" className="py-2 px-4 hover:bg-gray-200">Home</a>
                        <a href="#" className="py-2 px-4 hover:bg-gray-200">About</a>
                        <a href="#" className="py-2 px-4 hover:bg-gray-200">Services</a>
                        <a href="#" className="py-2 px-4 hover:bg-gray-200">Filters</a>
                        <a href="#" className="py-2 px-4 hover:bg-gray-200">Login</a>
                    </div>
                </div>
            )}
            {/* Search Bar */}
            {isSearchOpen && (
                <div className="absolute top-16 left-0 w-full bg-white p-4 shadow-md">
                    <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2">
                        <input type="text" className="w-full text-gray-700 outline-none" placeholder="Search..." />
                        <i className="fas fa-search text-gray-500"></i>
                    </div>
                </div>
            )}
        </nav>
        </div>
    );
};

export default Navbar;
