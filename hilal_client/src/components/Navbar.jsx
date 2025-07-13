import React, { useState, useEffect } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/hilal-logo.svg";
import {
    Facebook,
    Youtube,
    Music2,
    Instagram,
    ChevronRight,

} from "lucide-react";



const socialIcons = [
    { Icon: Facebook, href: "#" },
    { Icon: Youtube, href: "#" },
    { Icon: Music2, href: "#" },
    { Icon: Instagram, href: "#" },
];
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Check if access token exists in local storage
        const accessToken = localStorage.getItem("access");
        setIsLoggedIn(!!accessToken);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        setIsLoggedIn(false);
        navigate("/login");

    };

    return (
        <nav className="relative bg-[#DF1600] text-white shadow-md z-10">
            <div className="px-4 flex justify-between items-center h-[75px] py-3 relative">
                {/* Logo Section */}
                <div className="absolute -bottom-3 left-4 top-0 flex items-center bg-white p-4 shadow-lg z-20">
                    <img
                        src={Logo}
                        alt="Hilal Publications"
                        className="h-14 w-auto"
                    />
                </div>
                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden ml-auto z-20 text-white"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        <FaTimes className="h-6 w-6" />
                    ) : (
                        <FaBars className="h-6 w-6" />
                    )}
                </button>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center space-x-3 ml-60">
                    <ul className="flex space-x-5 text-[18px] font-medium">
                        <Link to="/">
                            <li className="hover:underline cursor-pointer">Home</li>
                        </Link>

                        <li className="relative group cursor-pointer">
                            Category <FaChevronDown className="inline ml-1" />
                        </li>
                        <li className="relative group cursor-pointer">
                            Magazines <FaChevronDown className="inline ml-1" />
                        </li>
                        <li className="relative group cursor-pointer">
                            E-Book <FaChevronDown className="inline ml-1" />
                        </li>
                        <li className="hover:underline cursor-pointer">
                            Our Contributors
                        </li>
                    </ul>
                </div>

                <div className="flex items-center space-x-2  ml-auto">
                    {/* Desktop Action Buttons */}
                    <div className="flex items-center space-x-2  ml-auto">
                        {socialIcons.map(({ Icon, href }, idx) => (
                            <a
                                key={idx}
                                href={href}
                                className=" p-3 rounded hover:bg-red-700 transition-colors"
                            >
                                <Icon className="w-4 h-4" />
                            </a>
                        ))}
                    </div>
                    <div className="hidden lg:flex ml-auto space-x-2 text-[16px]">
                        {isLoggedIn ? (
                            <>  <button
                                onClick={handleLogout}
                                className="w-32 bg-white text-[#DF1600] p-3 font-bold border border-white cursor-pointer"
                            >
                                Logout
                            </button>
                                <Link to="/admin/dashboard">
                                    <button className="w-32 bg-white text-[#DF1600] p-3 font-bold border border-white cursor-pointer">
                                        Admin
                                    </button>
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link to="/login">
                                    <button className="w-32 bg-white text-[#DF1600] p-3 font-bold border border-white cursor-pointer">
                                        Login
                                    </button>
                                </Link>
                                <Link to="/admin/dashboard">
                                    <button className="w-32 bg-white text-[#DF1600] p-3 font-bold border border-white cursor-pointer">
                                        Admin
                                    </button>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden ${isMenuOpen ? "block" : "hidden"
                    } bg-[#DF1600] absolute top-[75px] left-0 right-0 z-50 shadow-lg transition-all duration-300`}
            >
                <ul className="flex flex-col px-4 py-2 text-[16px] font-medium">
                    <li className="py-3 border-b border-red-400 hover:bg-red-700 px-2">
                        Home
                    </li>
                    <li className="py-3 border-b border-red-400 hover:bg-red-700 px-2 flex justify-between items-center">
                        <span>Category</span>
                        <FaChevronDown className="ml-1" />
                    </li>
                    <li className="py-3 border-b border-red-400 hover:bg-red-700 px-2 flex justify-between items-center">
                        <span>Magazines</span>
                        <FaChevronDown className="ml-1" />
                    </li>
                    <li className="py-3 border-b border-red-400 hover:bg-red-700 px-2 flex justify-between items-center">
                        <span>E-Book</span>
                        <FaChevronDown className="ml-1" />
                    </li>
                    <li className="py-3 border-b border-red-400 hover:bg-red-700 px-2">
                        Our Contributors
                    </li>
                </ul>

                <div className="flex flex-col space-y-2 p-4">
                    {isLoggedIn ? (
                        <button
                            onClick={handleLogout}
                            className="w-full bg-white text-[#DF1600] p-2 font-bold border border-white cursor-pointer"
                        >
                            Logout
                        </button>
                    ) : (
                        <>
                            <Link to="/login" className="w-full">
                                <button className="w-full bg-white text-[#DF1600] p-2 font-bold border border-white cursor-pointer">
                                    Login
                                </button>
                            </Link>
                            <Link to="/admin/dashboard" className="w-full">
                                <button className="w-full bg-white text-[#DF1600] p-2 font-bold border border-white cursor-pointer">
                                    Admin
                                </button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
