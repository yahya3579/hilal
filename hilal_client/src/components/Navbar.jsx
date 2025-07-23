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
import useAuthStore from '../utils/store';



const socialIcons = [
    { Icon: Facebook, href: "#" },
    { Icon: Youtube, href: "#" },
    { Icon: Music2, href: "#" },
    { Icon: Instagram, href: "#" },
];
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const accessToken = useAuthStore((state) => state.accessToken);
    const clearTokens = useAuthStore((state) => state.clearTokens);
    const navigate = useNavigate();
    const userRole = useAuthStore((state) => state.userRole);
    console.log("User Role:", userRole);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleCategory = () => {
        setIsCategoryOpen((prev) => !prev);
    };

    const handleLogout = () => {
        clearTokens();
        navigate("/login");

    };

    return (
        <nav className="relative bg-[#DF1600] text-white shadow-md z-10">
            <div className="px-4 flex justify-between items-center  h-[75px] py-3 relative">
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
                    className="lg:hidden absolute right-4 ml-auto z-20 text-white"
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
                <div className="hidden lg:flex  items-center space-x-3 xl:space-x-6 ml-56 xl:ml-60">
                    <ul className="flex space-x-2 xl:space-x-6 text-[16px] xl:text-[18px] font-medium">
                        <Link to="/">
                            <li className="hover:underline cursor-pointer">Home</li>
                        </Link>
                        <li className="relative group cursor-pointer" onClick={toggleCategory}>
                            Category <FaChevronDown className="inline ml-1" />
                            {isCategoryOpen && (
                                <ul className="absolute left-0 mt-2 w-48 bg-white text-black rounded shadow-lg z-50 border border-gray-200">
                                    <li className="block px-4 py-2 text-sm hover:bg-gray-100 flex items-center">
                                        <Link to={`/category/national-and-International-news`} className="w-full">
                                            National-International-Issues
                                        </Link>
                                    </li>
                                    <li className="block px-4 py-2 text-sm hover:bg-gray-100 flex items-center">
                                        <Link to={`/category/war-on-terror`} className="w-full">
                                            War on Terror
                                        </Link>
                                    </li>
                                    <li className="block px-4 py-2 text-sm hover:bg-gray-100 flex items-center">
                                        <Link to={`/category/special-reports`} className="w-full">
                                            Special Reports
                                        </Link>
                                    </li>
                                    <li className="block px-4 py-2 text-sm hover:bg-gray-100 flex items-center">
                                        <Link to={`/category/in-focus`} className="w-full">
                                            In Focus
                                        </Link>
                                    </li>
                                    <li className="block px-4 py-2 text-sm hover:bg-gray-100 flex items-center">
                                        <Link to={`/category/armed-forces-news`} className="w-full">
                                            Armed Forces News
                                        </Link>
                                    </li>
                                    <li className="block px-4 py-2 text-sm hover:bg-gray-100 flex items-center">
                                        <Link to={`/category/misc`} className="w-full">
                                            Misc
                                        </Link>
                                    </li>



                                    {/* Add more dropdown items here if needed */}
                                </ul>
                            )}
                        </li>
                        <li className="relative group cursor-pointer">
                            Magazines <FaChevronDown className="inline" />
                        </li>
                        <li className="relative group cursor-pointer">
                            <Link to="/ebooks">E-Book</Link>  <FaChevronDown className="inline" />
                        </li>
                        <li className="relative group cursor-pointer">
                            <Link to="/archives">Archives</Link>
                        </li>
                        <li className="relative group cursor-pointer">
                            <Link to="/contributors">Advertise</Link>

                        </li>
                        <li className="hover:underline cursor-pointer">
                            <Link to="/ourcontributors">Our Contributors</Link>
                        </li>
                    </ul>
                </div>

                <div className="flex items-center space-x-2 xl:space-x-4 ml-auto">
                    {/* Desktop Action Buttons */}
                    {/* <div className="flex items-center space-x-2 xl:space-x-4 ml-auto">
                        {socialIcons.map(({ Icon, href }, idx) => (
                            <a
                                key={idx}
                                href={href}
                                className="p-3 xl:p-4 rounded hover:bg-red-700 transition-colors"
                            >
                                <Icon className="w-4 h-4 xl:w-5 xl:h-5" />
                            </a>
                        ))}
                    </div> */}
                    <div className="hidden lg:flex ml-auto space-x-2 xl:space-x-4 text-[14px] xl:text-[16px]">
                        {accessToken ? (
                            <>
                                <button
                                    onClick={handleLogout}
                                    className="w-28 xl:w-32 bg-white text-[#DF1600] p-2 xl:p-3 font-bold border border-white cursor-pointer"
                                >
                                    Logout
                                </button>
                                {userRole === "admin" ? (
                                    <Link to="/admin/dashboard">
                                        <button className="w-28 xl:w-32 bg-white text-[#DF1600] p-2 xl:p-3 font-bold border border-white cursor-pointer">
                                            Admin
                                        </button>
                                    </Link>
                                ) : (
                                    <Link to="/admin/dashboard">
                                        <button className="w-28 xl:w-32 bg-white text-[#DF1600] p-2 xl:p-3 font-bold border border-white cursor-pointer">
                                            Author
                                        </button>
                                    </Link>
                                )}
                            </>
                        ) : (
                            <>
                                <Link to="/login">
                                    <button className="w-28 xl:w-32 bg-white text-[#DF1600] p-2 xl:p-3 font-bold border border-white cursor-pointer">
                                        Login
                                    </button>
                                </Link>
                                <Link to="/admin/dashboard">
                                    <button className="w-28 xl:w-32 bg-white text-[#DF1600] p-2 xl:p-3 font-bold border border-white cursor-pointer">
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
                        <Link to="/archives">Archives</Link>
                    </li>
                    <li className="py-3 border-b border-red-400 hover:bg-red-700 px-2">
                        Advertise
                    </li>

                    <li className="py-3 border-b border-red-400 hover:bg-red-700 px-2">
                        <Link to="/ourcontributors">Our Contributors</Link>
                    </li>

                </ul>

                <div className="flex flex-col space-y-2 p-4">
                    {accessToken ? (
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
                            {userRole == "admin" ? <Link to="/admin/dashboard" className="w-full">
                                <button className="w-full bg-white text-[#DF1600] p-2 font-bold border border-white cursor-pointer">
                                    Admin
                                </button>
                            </Link> : <Link to="/admin/dashboard" className="w-full">
                                <button className="w-full bg-white text-[#DF1600] p-2 font-bold border border-white cursor-pointer">
                                    Author
                                </button>
                            </Link>}
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
