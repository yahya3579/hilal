import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/hilal-logo.svg";
import {
    Facebook,
    Youtube,
    Music2,
    Instagram,
    ChevronRight,
    Menu,
    X,
    ChevronDown,
} from "lucide-react";
import useAuthStore from '../utils/store';
import axios from "axios";



const socialIcons = [
    { Icon: Facebook, href: "#" },
    { Icon: Youtube, href: "#" },
    { Icon: Music2, href: "#" },
    { Icon: Instagram, href: "#" },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [isMagazinesOpen, setIsMagazinesOpen] = useState(false);
    const [isEbookOpen, setIsEbookOpen] = useState(false);
    const [mobileCategoryOpen, setMobileCategoryOpen] = useState(false);
    const [mobileMagazinesOpen, setMobileMagazinesOpen] = useState(false);
    const [mobileEbookOpen, setMobileEbookOpen] = useState(false);

    const categoryRef = useRef(null);
    const magazinesRef = useRef(null);
    const ebookRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            const navbar = document.querySelector("nav");
            if (navbar && !navbar.contains(event.target)) {
                setIsCategoryOpen(false);
                setIsMagazinesOpen(false);
                setIsEbookOpen(false);
            }
            if (categoryRef.current && !categoryRef.current.contains(event.target)) {
                setIsCategoryOpen(false);
            }
            if (magazinesRef.current && !magazinesRef.current.contains(event.target)) {
                setIsMagazinesOpen(false);
            }
            if (ebookRef.current && !ebookRef.current.contains(event.target)) {
                setIsEbookOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (isMenuOpen) {
            setMobileCategoryOpen(false);
            setMobileMagazinesOpen(false);
            setMobileEbookOpen(false);
        }
    };

    const closeMobileMenu = () => {
        setIsMenuOpen(false);
        setMobileCategoryOpen(false);
        setMobileMagazinesOpen(false);
        setMobileEbookOpen(false);
    };

    const handleCategoryClick = (e) => {
        e.stopPropagation();
        setIsCategoryOpen((prev) => !prev);
        setIsMagazinesOpen(false);
        setIsEbookOpen(false);
    };

    const handleMagazinesClick = (e) => {
        e.stopPropagation();
        setIsMagazinesOpen((prev) => !prev);
        setIsCategoryOpen(false);
        setIsEbookOpen(false);
    };

    const handleEbookClick = (e) => {
        e.stopPropagation();
        setIsEbookOpen((prev) => !prev);
        setIsCategoryOpen(false);
        setIsMagazinesOpen(false);
    };

    const handleDropdownLinkClick = () => {
        setIsCategoryOpen(false);
        setIsMagazinesOpen(false);
        setIsEbookOpen(false);
    };

    const accessToken = useAuthStore((state) => state.accessToken);
    const clearTokens = useAuthStore((state) => state.clearTokens);
    const navigate = useNavigate();
    const userRole = useAuthStore((state) => state.userRole);
    console.log("User Role:", userRole);

    const categoryRef = useRef(null);
    const magazinesRef = useRef(null);
    const ebookRef = useRef(null);

    // Enhanced click outside handler - only closes dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Only close if clicking completely outside the navbar area
            const navbar = document.querySelector("nav");
            if (navbar && !navbar.contains(event.target)) {
                setIsCategoryOpen(false);
                setIsMagazinesOpen(false);
                setIsEbookOpen(false);
            }

            // Individual dropdown close logic
            if (categoryRef.current && !categoryRef.current.contains(event.target)) {
                setIsCategoryOpen(false);
            }
            if (
                magazinesRef.current &&
                !magazinesRef.current.contains(event.target)
            ) {
                setIsMagazinesOpen(false);
            }
            if (ebookRef.current && !ebookRef.current.contains(event.target)) {
                setIsEbookOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleLogout = async () => {
        try {
            await axios.post("http://localhost:8000/api/logout/", {}, { withCredentials: true });

            clearTokens();
            navigate("/login");
        } catch (error) {
            console.error("Error during logout:", error?.response?.data || error.message);
        }
    };

    return (
        <nav className="relative bg-[#DF1600] text-white shadow-lg z-10">
            <div className="px-4 flex justify-between items-center  h-[75px] py-3 relative">
                {/* Logo Section */}
                <div className="absolute -bottom-3 left-4 top-0 flex items-center bg-white p-4 shadow-lg z-20">
                    <img src={Logo} alt="Hilal Publications" className="h-14 w-auto" />
                </div>

                {/* Enhanced Mobile Menu Button - Premium White Design */}
                <button
                    className="lg:hidden absolute right-4 ml-auto z-30 bg-white text-[#DF1600] p-3 rounded-2xl hover:bg-red-50 active:bg-red-100 transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-red-300 focus:ring-opacity-30 shadow-2xl border-2 border-red-100 backdrop-blur-sm"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center space-x-3 xl:space-x-6 ml-56 xl:ml-60">
                    <ul className="flex space-x-2 xl:space-x-6 text-base xl:text-lg font-medium">
                        <Link to="/">
                            <li className="hover:underline cursor-pointer transition-all duration-200 hover:text-red-200">
                                Home
                            </li>
                        </Link>
                        <li className="relative group cursor-pointer" onClick={handleCategoryClick}>
                            Category <FaChevronDown className="inline ml-1" />
                            {isCategoryOpen && (
                                <ul className="absolute left-0 mt-2 w-48 bg-white text-black rounded shadow-lg z-50 border border-gray-200">
                                    <li className="block px-4 py-2 text-sm hover:bg-gray-100 flex items-center">
                                        <Link to={`/category/national-and-International-news`} className="w-full">
                                            National-International-Issues
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to={`/category/war-on-terror`}
                                            className="block px-4 py-3 hover:bg-red-50 hover:text-red-600 transition-all duration-200 text-sm font-medium"
                                            onClick={handleDropdownLinkClick}
                                        >
                                            War on Terror
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to={`/category/special-reports`}
                                            className="block px-4 py-3 hover:bg-red-50 hover:text-red-600 transition-all duration-200 text-sm font-medium"
                                            onClick={handleDropdownLinkClick}
                                        >
                                            Special Reports
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to={`/category/in-focus`}
                                            className="block px-4 py-3 hover:bg-red-50 hover:text-red-600 transition-all duration-200 text-sm font-medium"
                                            onClick={handleDropdownLinkClick}
                                        >
                                            In Focus
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to={`/category/armed-forces-news`}
                                            className="block px-4 py-3 hover:bg-red-50 hover:text-red-600 transition-all duration-200 text-sm font-medium"
                                            onClick={handleDropdownLinkClick}
                                        >
                                            Armed Forces News
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to={`/category/misc`}
                                            className="block px-4 py-3 hover:bg-red-50 hover:text-red-600 transition-all duration-200 text-sm font-medium"
                                            onClick={handleDropdownLinkClick}
                                        >
                                            Misc
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="relative group cursor-pointer" onClick={handleMagazinesClick}>
                            Magazines <FaChevronDown className="inline" />
                            {isMagazinesOpen && (
                                <ul className="absolute left-0 mt-2 w-48 bg-white text-black rounded shadow-lg z-50 border border-gray-200">
                                    <li className="block px-4 py-2 text-sm hover:bg-gray-100 flex items-center">
                                        <Link to={`/magazine/defense-and-security`} className="w-full">
                                            Defense and Security
                                        </Link>
                                    </li>
                                    <li className="block px-4 py-2 text-sm hover:bg-gray-100 flex items-center">
                                        <Link to={`/magazine/economy-and-business`} className="w-full">
                                            Economy and Business
                                        </Link>
                                    </li>
                                    <li className="block px-4 py-2 text-sm hover:bg-gray-100 flex items-center">
                                        <Link to={`/magazine/science-and-technology`} className="w-full">
                                            Science and Technology
                                        </Link>
                                    </li>
                                    <li className="block px-4 py-2 text-sm hover:bg-gray-100 flex items-center">
                                        <Link to={`/magazine/culture-and-society`} className="w-full">
                                            Culture and Society
                                        </Link>
                                    </li>
                                    <li className="block px-4 py-2 text-sm hover:bg-gray-100 flex items-center">
                                        <Link to={`/magazine/misc`} className="w-full">
                                            Misc
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li className="relative group cursor-pointer" onClick={handleEbookClick}>
                            <Link to="/ebooks">E-Book</Link>  <FaChevronDown className="inline" />
                            {isEbookOpen && (
                                <ul className="absolute left-0 mt-2 w-48 bg-white text-black rounded shadow-lg z-50 border border-gray-200">
                                    <li className="block px-4 py-2 text-sm hover:bg-gray-100 flex items-center">
                                        <Link to={`/ebooks/latest-releases`} className="w-full">
                                            Latest Releases
                                        </Link>
                                    </li>
                                    <li className="block px-4 py-2 text-sm hover:bg-gray-100 flex items-center">
                                        <Link to={`/ebooks/best-sellers`} className="w-full">
                                            Best Sellers
                                        </Link>
                                    </li>
                                    <li className="block px-4 py-2 text-sm hover:bg-gray-100 flex items-center">
                                        <Link to={`/ebooks/genre-fiction`} className="w-full">
                                            Genre Fiction
                                        </Link>
                                    </li>
                                    <li className="block px-4 py-2 text-sm hover:bg-gray-100 flex items-center">
                                        <Link to={`/ebooks/genre-non-fiction`} className="w-full">
                                            Genre Non-Fiction
                                        </Link>
                                    </li>
                                    <li className="block px-4 py-2 text-sm hover:bg-gray-100 flex items-center">
                                        <Link to={`/ebooks/misc`} className="w-full">
                                            Misc
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li className="relative group cursor-pointer">
                            <Link
                                to="/archives"
                                className="hover:underline transition-all duration-200 hover:text-red-200"
                            >
                                Archives
                            </Link>
                        </li>
                        <li className="relative group cursor-pointer">
                            <Link to="/advertise">Advertise</Link>

                        </li>
                        <li className="hover:underline cursor-pointer">
                            <Link
                                to="/ourcontributors"
                                className="hover:underline transition-all duration-200 hover:text-red-200"
                            >
                                Our Contributors
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="flex items-center space-x-2 xl:space-x-4 ml-auto">
                    <div className="hidden lg:flex ml-auto space-x-2 xl:space-x-4 text-sm xl:text-base">
                        {accessToken ? (
                            <>
                                <button
                                    onClick={handleLogout}
                                    className="w-28 xl:w-32 bg-white text-[#DF1600] p-2 xl:p-3 font-bold border border-white cursor-pointer hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 active:scale-95 "
                                >
                                    Logout
                                </button>
                                {userRole === "admin" ? (
                                    <Link to="/admin/dashboard">
                                        <button className="w-28 xl:w-32 bg-white text-[#DF1600] p-2 xl:p-3 font-bold border border-white cursor-pointer hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 active:scale-95 ">
                                            Admin
                                        </button>
                                    </Link>
                                ) : (
                                    <Link to="/admin/dashboard">
                                        <button className="w-28 xl:w-32 bg-white text-[#DF1600] p-2 xl:p-3 font-bold border border-white cursor-pointer hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 active:scale-95 ">
                                            Author
                                        </button>
                                    </Link>
                                )}
                            </>
                        ) : (
                            <>
                                <Link to="/login">
                                    <button className="w-28 xl:w-32 bg-white text-[#DF1600] p-2 xl:p-3 font-bold border border-white cursor-pointer hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 active:scale-95 ">
                                        Login
                                    </button>
                                </Link>
                                <Link to="/subscribe">
                                    <button className="w-28 xl:w-32 bg-white text-[#DF1600] p-2 xl:p-3 font-bold border border-white cursor-pointer">
                                        Subscribe
                                    </button>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>

            {/* Enhanced Mobile Menu with Modern Clean Design */}
            <div
                className={`lg:hidden absolute top-20 left-0 right-0 z-50 transition-all duration-500 ease-in-out transform ${isMenuOpen ? "opacity-100 translate-y-0 max-h-screen visible" : "opacity-0 -translate-y-4 max-h-0 overflow-hidden invisible"
                    }`}
            >
                <div className="bg-gradient-to-b from-white via-gray-50 to-gray-100 shadow-2xl border-t-4 border-red-500">
                    <div className="h-1 bg-gradient-to-r from-red-500 via-red-400 to-red-500"></div>
                    <ul className="flex flex-col px-6 py-4 text-base font-medium">
                        {/* Mobile Category Dropdown */}
                        <li
                            className={`py-4 border-b border-gray-200/60 hover:bg-gradient-to-r hover:from-red-50 hover:to-red-25 px-4 rounded-xl transition-all duration-300 transform ${isMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                                }`}
                        >
                            <div
                                className="flex justify-between items-center cursor-pointer w-full text-gray-700 hover:text-red-600 font-semibold text-lg"
                                onClick={() => setMobileCategoryOpen(!mobileCategoryOpen)}
                            >
                                <span>Category</span>
                                <FaChevronDown className={`ml-2 transition-transform duration-300 text-red-500 ${mobileCategoryOpen ? "rotate-180" : "rotate-0"}`} />
                            </div>
                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${mobileCategoryOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"
                                    }`}
                            >
                                <ul className="ml-6 space-y-2 bg-gradient-to-r from-red-25 to-red-50 border-l-3 border-red-300 pl-4 py-3 rounded-r-lg">
                                    <li className="py-2 transform transition-all duration-300 hover:translate-x-2">
                                        <Link
                                            to="/category/national-and-International-news"
                                            className="text-base hover:underline hover:text-red-600 block text-gray-600 font-medium"
                                            onClick={closeMobileMenu}
                                        >
                                            National-International-Issues
                                        </Link>
                                    </li>
                                    <li className="py-2 transform transition-all duration-300 hover:translate-x-2">
                                        <Link
                                            to="/category/war-on-terror"
                                            className="text-base hover:underline hover:text-red-600 block text-gray-600 font-medium"
                                            onClick={closeMobileMenu}
                                        >
                                            War on Terror
                                        </Link>
                                    </li>
                                    <li className="py-2 transform transition-all duration-300 hover:translate-x-2">
                                        <Link
                                            to="/category/special-reports"
                                            className="text-base hover:underline hover:text-red-600 block text-gray-600 font-medium"
                                            onClick={closeMobileMenu}
                                        >
                                            Special Reports
                                        </Link>
                                    </li>
                                    <li className="py-2 transform transition-all duration-300 hover:translate-x-2">
                                        <Link
                                            to="/category/in-focus"
                                            className="text-base hover:underline hover:text-red-600 block text-gray-600 font-medium"
                                            onClick={closeMobileMenu}
                                        >
                                            In Focus
                                        </Link>
                                    </li>
                                    <li className="py-2 transform transition-all duration-300 hover:translate-x-2">
                                        <Link
                                            to="/category/armed-forces-news"
                                            className="text-base hover:underline hover:text-red-600 block text-gray-600 font-medium"
                                            onClick={closeMobileMenu}
                                        >
                                            Armed Forces News
                                        </Link>
                                    </li>
                                    <li className="py-2 transform transition-all duration-300 hover:translate-x-2">
                                        <Link
                                            to="/category/misc"
                                            className="text-base hover:underline hover:text-red-600 block text-gray-600 font-medium"
                                            onClick={closeMobileMenu}
                                        >
                                            Misc
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        {/* Mobile Magazines Dropdown */}
                        <li
                            className={`py-4 border-b border-gray-200/60 hover:bg-gradient-to-r hover:from-red-50 hover:to-red-25 px-4 rounded-xl transition-all duration-300 transform ${isMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                                }`}
                        >
                            <div
                                className="flex justify-between items-center cursor-pointer w-full text-gray-700 hover:text-red-600 font-semibold text-lg"
                                onClick={() => setMobileMagazinesOpen(!mobileMagazinesOpen)}
                            >
                                <span>Magazines</span>
                                <FaChevronDown className={`ml-2 transition-transform duration-300 text-red-500 ${mobileMagazinesOpen ? "rotate-180" : "rotate-0"}`} />
                            </div>
                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${mobileMagazinesOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"
                                    }`}
                            >
                                <ul className="ml-6 space-y-2 bg-gradient-to-r from-red-25 to-red-50 border-l-3 border-red-300 pl-4 py-3 rounded-r-lg">
                                    <li className="py-2 transform transition-all duration-300 hover:translate-x-2">
                                        <Link
                                            to="/magazine/defense-and-security"
                                            className="text-base hover:underline hover:text-red-600 block text-gray-600 font-medium"
                                            onClick={closeMobileMenu}
                                        >
                                            Defense and Security
                                        </Link>
                                    </li>
                                    <li className="py-2 transform transition-all duration-300 hover:translate-x-2">
                                        <Link
                                            to="/magazine/economy-and-business"
                                            className="text-base hover:underline hover:text-red-600 block text-gray-600 font-medium"
                                            onClick={closeMobileMenu}
                                        >
                                            Economy and Business
                                        </Link>
                                    </li>
                                    <li className="py-2 transform transition-all duration-300 hover:translate-x-2">
                                        <Link
                                            to="/magazine/science-and-technology"
                                            className="text-base hover:underline hover:text-red-600 block text-gray-600 font-medium"
                                            onClick={closeMobileMenu}
                                        >
                                            Science and Technology
                                        </Link>
                                    </li>
                                    <li className="py-2 transform transition-all duration-300 hover:translate-x-2">
                                        <Link
                                            to="/magazine/culture-and-society"
                                            className="text-base hover:underline hover:text-red-600 block text-gray-600 font-medium"
                                            onClick={closeMobileMenu}
                                        >
                                            Culture and Society
                                        </Link>
                                    </li>
                                    <li className="py-2 transform transition-all duration-300 hover:translate-x-2">
                                        <Link
                                            to="/magazine/misc"
                                            className="text-base hover:underline hover:text-red-600 block text-gray-600 font-medium"
                                            onClick={closeMobileMenu}
                                        >
                                            Misc
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        {/* Mobile E-Book Dropdown */}
                        <li
                            className={`py-4 border-b border-gray-200/60 hover:bg-gradient-to-r hover:from-red-50 hover:to-red-25 px-4 rounded-xl transition-all duration-300 transform ${isMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                                }`}
                        >
                            <div
                                className="flex justify-between items-center cursor-pointer w-full text-gray-700 hover:text-red-600 font-semibold text-lg"
                                onClick={() => setMobileEbookOpen(!mobileEbookOpen)}
                            >
                                <span>E-Book</span>
                                <FaChevronDown className={`ml-2 transition-transform duration-300 text-red-500 ${mobileEbookOpen ? "rotate-180" : "rotate-0"}`} />
                            </div>
                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${mobileEbookOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"
                                    }`}
                            >
                                <ul className="ml-6 space-y-2 bg-gradient-to-r from-red-25 to-red-50 border-l-3 border-red-300 pl-4 py-3 rounded-r-lg">
                                    <li className="py-2 transform transition-all duration-300 hover:translate-x-2">
                                        <Link
                                            to="/ebooks/latest-releases"
                                            className="text-base hover:underline hover:text-red-600 block text-gray-600 font-medium"
                                            onClick={closeMobileMenu}
                                        >
                                            Latest Releases
                                        </Link>
                                    </li>
                                    <li className="py-2 transform transition-all duration-300 hover:translate-x-2">
                                        <Link
                                            to="/ebooks/best-sellers"
                                            className="text-base hover:underline hover:text-red-600 block text-gray-600 font-medium"
                                            onClick={closeMobileMenu}
                                        >
                                            Best Sellers
                                        </Link>
                                    </li>
                                    <li className="py-2 transform transition-all duration-300 hover:translate-x-2">
                                        <Link
                                            to="/ebooks/genre-fiction"
                                            className="text-base hover:underline hover:text-red-600 block text-gray-600 font-medium"
                                            onClick={closeMobileMenu}
                                        >
                                            Genre Fiction
                                        </Link>
                                    </li>
                                    <li className="py-2 transform transition-all duration-300 hover:translate-x-2">
                                        <Link
                                            to="/ebooks/genre-non-fiction"
                                            className="text-base hover:underline hover:text-red-600 block text-gray-600 font-medium"
                                            onClick={closeMobileMenu}
                                        >
                                            Genre Non-Fiction
                                        </Link>
                                    </li>
                                    <li className="py-2 transform transition-all duration-300 hover:translate-x-2">
                                        <Link
                                            to="/ebooks/misc"
                                            className="text-base hover:underline hover:text-red-600 block text-gray-600 font-medium"
                                            onClick={closeMobileMenu}
                                        >
                                            Misc
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li className="py-4 border-b border-gray-200 hover:bg-red-50 px-4 rounded-xl transition-all duration-300">
                            <Link to="/archives" className="block text-gray-700 hover:text-red-600 font-semibold text-lg" onClick={closeMobileMenu}>
                                Archives
                            </Link>
                        </li>
                        <li className="py-4 border-b border-gray-200 hover:bg-red-50 px-4 rounded-xl transition-all duration-300">
                            <Link to="/advertise" className="block text-gray-700 hover:text-red-600 font-semibold text-lg" onClick={closeMobileMenu}>
                                Advertise
                            </Link>
                        </li>
                        <li className="py-4 border-b border-gray-200 hover:bg-red-50 px-4 rounded-xl transition-all duration-300">
                            <Link to="/ourcontributors" className="block text-gray-700 hover:text-red-600 font-semibold text-lg" onClick={closeMobileMenu}>
                                Our Contributors
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

{/* 
this is commenrt */}