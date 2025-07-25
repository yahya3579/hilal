// import React, { useState, useEffect } from "react";
// import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom";
// import Logo from "../assets/hilal-logo.svg";
// import {
//     Facebook,
//     Youtube,
//     Music2,
//     Instagram,
//     ChevronRight,

// } from "lucide-react";
// import useAuthStore from '../utils/store';



// const socialIcons = [
//     { Icon: Facebook, href: "#" },
//     { Icon: Youtube, href: "#" },
//     { Icon: Music2, href: "#" },
//     { Icon: Instagram, href: "#" },
// ];
// const Navbar = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [isCategoryOpen, setIsCategoryOpen] = useState(false);
//     const accessToken = useAuthStore((state) => state.accessToken);
//     const clearTokens = useAuthStore((state) => state.clearTokens);
//     const navigate = useNavigate();
//     const userRole = useAuthStore((state) => state.userRole);
//     console.log("User Role:", userRole);

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     const toggleCategory = () => {
//         setIsCategoryOpen((prev) => !prev);
//     };

//     const handleLogout = () => {
//         clearTokens();
//         navigate("/login");

//     };

//     return (
//         <nav className="relative bg-[#DF1600] text-white shadow-md z-10">
//             <div className="px-4 flex justify-between items-center  h-[75px] py-3 relative">
//                 {/* Logo Section */}
//                 <div className="absolute -bottom-3 left-4 top-0 flex items-center bg-white p-4 shadow-lg z-20">
//                     <img
//                         src={Logo}
//                         alt="Hilal Publications"
//                         className="h-14 w-auto"
//                     />
//                 </div>
//                 {/* Mobile Menu Button */}
//                 <button
//                     className="lg:hidden absolute right-4 ml-auto z-20 text-white"
//                     onClick={toggleMenu}
//                     aria-label="Toggle menu"
//                 >
//                     {isMenuOpen ? (
//                         <FaTimes className="h-6 w-6" />
//                     ) : (
//                         <FaBars className="h-6 w-6" />
//                     )}
//                 </button>

//                 {/* Desktop Navigation */}
//                 <div className="hidden lg:flex  items-center space-x-3 xl:space-x-6 ml-56 xl:ml-60">
//                     <ul className="flex space-x-2 xl:space-x-6 text-[16px] xl:text-[18px] font-medium">
//                         <Link to="/">
//                             <li className="hover:underline cursor-pointer">Home</li>
//                         </Link>
//                         <li className="relative group cursor-pointer" onClick={toggleCategory}>
//                             Category <FaChevronDown className="inline ml-1" />
//                             {isCategoryOpen && (
//                                 <ul className="absolute left-0 mt-2 w-48 bg-white text-black rounded shadow-lg z-50 border border-gray-200">
//                                     <li className="block px-4 py-2 text-sm hover:bg-gray-100 flex items-center">
//                                         <Link to={`/category/national-and-International-news`} className="w-full">
//                                             National-International-Issues
//                                         </Link>
//                                     </li>
//                                     <li className="block px-4 py-2 text-sm hover:bg-gray-100 flex items-center">
//                                         <Link to={`/category/war-on-terror`} className="w-full">
//                                             War on Terror
//                                         </Link>
//                                     </li>
//                                     <li className="block px-4 py-2 text-sm hover:bg-gray-100 flex items-center">
//                                         <Link to={`/category/special-reports`} className="w-full">
//                                             Special Reports
//                                         </Link>
//                                     </li>
//                                     <li className="block px-4 py-2 text-sm hover:bg-gray-100 flex items-center">
//                                         <Link to={`/category/in-focus`} className="w-full">
//                                             In Focus
//                                         </Link>
//                                     </li>
//                                     <li className="block px-4 py-2 text-sm hover:bg-gray-100 flex items-center">
//                                         <Link to={`/category/armed-forces-news`} className="w-full">
//                                             Armed Forces News
//                                         </Link>
//                                     </li>
//                                     <li className="block px-4 py-2 text-sm hover:bg-gray-100 flex items-center">
//                                         <Link to={`/category/misc`} className="w-full">
//                                             Misc
//                                         </Link>
//                                     </li>



//                                     {/* Add more dropdown items here if needed */}
//                                 </ul>
//                             )}
//                         </li>
//                         <li className="relative group cursor-pointer">
//                             Magazines <FaChevronDown className="inline" />
//                         </li>
//                         <li className="relative group cursor-pointer">
//                             <Link to="/ebooks">E-Book</Link>  <FaChevronDown className="inline" />
//                         </li>
//                         <li className="relative group cursor-pointer">
//                             <Link to="/archives">Archives</Link>
//                         </li>
//                         <li className="relative group cursor-pointer">
//                             <Link to="/advertise">Advertise</Link>

//                         </li>
//                         <li className="hover:underline cursor-pointer">
//                             <Link to="/ourcontributors">Our Contributors</Link>
//                         </li>
//                     </ul>
//                 </div>

//                 <div className="flex items-center space-x-2 xl:space-x-4 ml-auto">
//                     {/* Desktop Action Buttons */}
//                     {/* <div className="flex items-center space-x-2 xl:space-x-4 ml-auto">
//                         {socialIcons.map(({ Icon, href }, idx) => (
//                             <a
//                                 key={idx}
//                                 href={href}
//                                 className="p-3 xl:p-4 rounded hover:bg-red-700 transition-colors"
//                             >
//                                 <Icon className="w-4 h-4 xl:w-5 xl:h-5" />
//                             </a>
//                         ))}
//                     </div> */}
//                     <div className="hidden lg:flex ml-auto space-x-2 xl:space-x-4 text-[14px] xl:text-[16px]">
//                         {accessToken ? (
//                             <>
//                                 <button
//                                     onClick={handleLogout}
//                                     className="w-28 xl:w-32 bg-white text-[#DF1600] p-2 xl:p-3 font-bold border border-white cursor-pointer"
//                                 >
//                                     Logout
//                                 </button>
//                                 {userRole === "admin" ? (
//                                     <Link to="/admin/dashboard">
//                                         <button className="w-28 xl:w-32 bg-white text-[#DF1600] p-2 xl:p-3 font-bold border border-white cursor-pointer">
//                                             Admin
//                                         </button>
//                                     </Link>
//                                 ) : (
//                                     <Link to="/admin/dashboard">
//                                         <button className="w-28 xl:w-32 bg-white text-[#DF1600] p-2 xl:p-3 font-bold border border-white cursor-pointer">
//                                             Author
//                                         </button>
//                                     </Link>
//                                 )}
//                             </>
//                         ) : (
//                             <>
//                                 <Link to="/login">
//                                     <button className="w-28 xl:w-32 bg-white text-[#DF1600] p-2 xl:p-3 font-bold border border-white cursor-pointer">
//                                         Login
//                                     </button>
//                                 </Link>
//                                 <Link to="/admin/dashboard">
//                                     <button className="w-28 xl:w-32 bg-white text-[#DF1600] p-2 xl:p-3 font-bold border border-white cursor-pointer">
//                                         Admin
//                                     </button>
//                                 </Link>
//                             </>
//                         )}
//                     </div>
//                 </div>
//             </div>

//             {/* Mobile Menu */}
//             <div
//                 className={`lg:hidden ${isMenuOpen ? "block" : "hidden"
//                     } bg-[#DF1600] absolute top-[75px] left-0 right-0 z-50 shadow-lg transition-all duration-300`}
//             >
//                 <ul className="flex flex-col px-4 py-2 text-[16px] font-medium">
//                     <li className="py-3 border-b border-red-400 hover:bg-red-700 px-2">
//                         Home
//                     </li>
//                     <li className="py-3 border-b border-red-400 hover:bg-red-700 px-2 flex justify-between items-center">
//                         <span>Category</span>
//                         <FaChevronDown className="ml-1" />
//                     </li>
//                     <li className="py-3 border-b border-red-400 hover:bg-red-700 px-2 flex justify-between items-center">
//                         <span>Magazines</span>
//                         <FaChevronDown className="ml-1" />
//                     </li>
//                     <li className="py-3 border-b border-red-400 hover:bg-red-700 px-2 flex justify-between items-center">
//                         <span>E-Book</span>
//                         <FaChevronDown className="ml-1" />
//                     </li>
//                     <li className="py-3 border-b border-red-400 hover:bg-red-700 px-2">
//                         <Link to="/archives">Archives</Link>
//                     </li>
//                     <li className="py-3 border-b border-red-400 hover:bg-red-700 px-2">
//                     <Link to="/advertise">Advertise</Link>
//                     </li>

//                     <li className="py-3 border-b border-red-400 hover:bg-red-700 px-2">
//                         <Link to="/ourcontributors">Our Contributors</Link>
//                     </li>

//                 </ul>

//                 <div className="flex flex-col space-y-2 p-4">
//                     {accessToken ? (
//                         <button
//                             onClick={handleLogout}
//                             className="w-full bg-white text-[#DF1600] p-2 font-bold border border-white cursor-pointer"
//                         >
//                             Logout
//                         </button>
//                     ) : (
//                         <>
//                             <Link to="/login" className="w-full">
//                                 <button className="w-full bg-white text-[#DF1600] p-2 font-bold border border-white cursor-pointer">
//                                     Login
//                                 </button>
//                             </Link>
//                             {userRole == "admin" ? <Link to="/admin/dashboard" className="w-full">
//                                 <button className="w-full bg-white text-[#DF1600] p-2 font-bold border border-white cursor-pointer">
//                                     Admin
//                                 </button>
//                             </Link> : <Link to="/admin/dashboard" className="w-full">
//                                 <button className="w-full bg-white text-[#DF1600] p-2 font-bold border border-white cursor-pointer">
//                                     Author
//                                 </button>
//                             </Link>}
//                         </>
//                     )}
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;




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

    // Backend integration from second navbar
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

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        // Reset mobile dropdowns when closing menu
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

    // Backend logout function
    const handleLogout = () => {
        clearTokens();
        navigate("/login");
    };

    // Enhanced desktop click handlers - dropdowns stay open until clicking elsewhere
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

    // Close dropdown when clicking on a link inside it
    const handleDropdownLinkClick = () => {
        setIsCategoryOpen(false);
        setIsMagazinesOpen(false);
        setIsEbookOpen(false);
    };

    return (
        <nav className="relative bg-[#DF1600] text-white shadow-lg z-10">
            <div className="px-4 flex justify-between items-center h-20 py-3 relative">
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
                    {isMenuOpen ? (
                        <X
                            size={22}
                            className="transition-all duration-300 transform rotate-0"
                        />
                    ) : (
                        <Menu
                            size={22}
                            className="transition-all duration-300 transform rotate-0"
                        />
                    )}
                </button>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center space-x-3 xl:space-x-6 ml-56 xl:ml-60">
                    <ul className="flex space-x-2 xl:space-x-6 text-base xl:text-lg font-medium">
                        <Link to="/">
                            <li className="hover:underline cursor-pointer transition-all duration-200 hover:text-red-200">
                                Home
                            </li>
                        </Link>

                        {/* Category Dropdown - Click to Open/Close with backend categories */}
                        <li className="relative group cursor-pointer" ref={categoryRef}>
                            <div
                                className="flex items-center hover:underline transition-all duration-200 hover:text-red-200"
                                onClick={handleCategoryClick}
                            >
                                Category
                                <FaChevronDown
                                    className={`inline ml-1 transition-transform duration-300 ${
                                        isCategoryOpen ? "rotate-180" : "rotate-0"
                                    }`}
                                />
                            </div>
                            <div
                                className={`absolute left-0 mt-2 w-72 bg-white text-black rounded-lg shadow-2xl z-50 transition-all duration-300 transform origin-top ${
                                    isCategoryOpen
                                        ? "opacity-100 scale-y-100 translate-y-0 visible"
                                        : "opacity-0 scale-y-0 -translate-y-2 invisible"
                                }`}
                            >
                                <ul className="py-2">
                                    <li>
                                        <Link
                                            to={`/category/national-and-International-news`}
                                            className="block px-4 py-3 hover:bg-red-50 hover:text-red-600 transition-all duration-200 text-sm font-medium"
                                            onClick={handleDropdownLinkClick}
                                        >
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
{/* Magazines Dropdown - Click to Open/Close */}
<li className="relative group cursor-pointer" ref={magazinesRef}>
    <div
        className="flex items-center hover:underline transition-all duration-200 hover:text-red-200"
        onClick={handleMagazinesClick}
    >
        Magazines
        <FaChevronDown
            className={`inline ml-1 transition-transform duration-300 ${
                isMagazinesOpen ? "rotate-180" : "rotate-0"
            }`}
        />
    </div>
    {/* Removed the empty dropdown container entirely */}
</li>

{/* E-Book Dropdown - Click to Open/Close */}
<li className="relative group cursor-pointer" ref={ebookRef}>
    <div
        className="flex items-center hover:underline transition-all duration-200 hover:text-red-200"
        onClick={handleEbookClick}
    >
        <Link
            to="/ebooks"
            className="mr-1"
            onClick={handleDropdownLinkClick}
        >
            E-Book
        </Link>
        <FaChevronDown
            className={`inline transition-transform duration-300 ${
                isEbookOpen ? "rotate-180" : "rotate-0"
            }`}
        />
    </div>
    {/* Removed the empty dropdown container entirely */}
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
                            <Link
                                to="/advertise"
                                className="hover:underline transition-all duration-200 hover:text-red-200"
                            >
                                Advertise
                            </Link>
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
                                <Link to="/admin/dashboard">
                                    <button className="w-28 xl:w-32 bg-white text-[#DF1600] p-2 xl:p-3 font-bold border border-white cursor-pointer hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 active:scale-95 ">
                                        Admin
                                    </button>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>

            {/* Enhanced Mobile Menu with Modern Clean Design */}
            <div
                className={`lg:hidden absolute top-20 left-0 right-0 z-50 transition-all duration-500 ease-in-out transform ${
                    isMenuOpen
                        ? "opacity-100 translate-y-0 max-h-screen visible"
                        : "opacity-0 -translate-y-4 max-h-0 overflow-hidden invisible"
                }`}
            >
                {/* Modern backdrop with subtle gradient */}
                <div className="bg-gradient-to-b from-white via-gray-50 to-gray-100 shadow-2xl border-t-4 border-red-500">
                    {/* Clean separator line */}
                    <div className="h-1 bg-gradient-to-r from-red-500 via-red-400 to-red-500"></div>

                    <ul className="flex flex-col px-6 py-4 text-base font-medium">
                        <li
                            className={`py-4 border-b border-gray-200/60 hover:bg-gradient-to-r hover:from-red-50 hover:to-red-25 px-4 rounded-xl transition-all duration-300 transform ${
                                isMenuOpen
                                    ? "translate-x-0 opacity-100"
                                    : "-translate-x-4 opacity-0"
                            }`}
                            style={{ transitionDelay: "0.1s" }}
                        >
                            <Link
                                to="/"
                                onClick={closeMobileMenu}
                                className="block w-full text-gray-700 hover:text-red-600 font-semibold text-lg"
                            >
                                Home
                            </Link>
                        </li>

                        {/* Mobile Category Dropdown with Modern Clean Design */}
                        <li
                            className={`py-4 border-b border-gray-200/60 hover:bg-gradient-to-r hover:from-red-50 hover:to-red-25 px-4 rounded-xl transition-all duration-300 transform ${
                                isMenuOpen
                                    ? "translate-x-0 opacity-100"
                                    : "-translate-x-4 opacity-0"
                            }`}
                            style={{ transitionDelay: "0.2s" }}
                        >
                            <div
                                className="flex justify-between items-center cursor-pointer w-full text-gray-700 hover:text-red-600 font-semibold text-lg"
                                onClick={() => setMobileCategoryOpen(!mobileCategoryOpen)}
                            >
                                <span>Category</span>
                                <FaChevronDown
                                    className={`ml-2 transition-transform duration-300 text-red-500 ${
                                        mobileCategoryOpen ? "rotate-180" : "rotate-0"
                                    }`}
                                />
                            </div>
                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                    mobileCategoryOpen
                                        ? "max-h-96 opacity-100 mt-4"
                                        : "max-h-0 opacity-0 mt-0"
                                }`}
                            >
                                <ul className="ml-6 space-y-2 bg-gradient-to-r from-red-25 to-red-50 border-l-3 border-red-300 pl-4 py-3 rounded-r-lg">
                                    <li className="py-2 transform transition-all duration-300 hover:translate-x-2">
                                        <Link
                                            to={`/category/national-and-International-news`}
                                            className="text-base hover:underline hover:text-red-600 block text-gray-600 font-medium"
                                            onClick={closeMobileMenu}
                                        >
                                            National-International-Issues
                                        </Link>
                                    </li>
                                    <li className="py-2 transform transition-all duration-300 hover:translate-x-2">
                                        <Link
                                            to={`/category/war-on-terror`}
                                            className="text-base hover:underline hover:text-red-600 block text-gray-600 font-medium"
                                            onClick={closeMobileMenu}
                                        >
                                            War on Terror
                                        </Link>
                                    </li>
                                    <li className="py-2 transform transition-all duration-300 hover:translate-x-2">
                                        <Link
                                            to={`/category/special-reports`}
                                            className="text-base hover:underline hover:text-red-600 block text-gray-600 font-medium"
                                            onClick={closeMobileMenu}
                                        >
                                            Special Reports
                                        </Link>
                                    </li>
                                    <li className="py-2 transform transition-all duration-300 hover:translate-x-2">
                                        <Link
                                            to={`/category/in-focus`}
                                            className="text-base hover:underline hover:text-red-600 block text-gray-600 font-medium"
                                            onClick={closeMobileMenu}
                                        >
                                            In Focus
                                        </Link>
                                    </li>
                                    <li className="py-2 transform transition-all duration-300 hover:translate-x-2">
                                        <Link
                                            to={`/category/armed-forces-news`}
                                            className="text-base hover:underline hover:text-red-600 block text-gray-600 font-medium"
                                            onClick={closeMobileMenu}
                                        >
                                            Armed Forces News
                                        </Link>
                                    </li>
                                    <li className="py-2 transform transition-all duration-300 hover:translate-x-2">
                                        <Link
                                            to={`/category/misc`}
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
                            className={`py-4 border-b border-gray-200/60 hover:bg-gradient-to-r hover:from-red-50 hover:to-red-25 px-4 rounded-xl transition-all duration-300 transform ${
                                isMenuOpen
                                    ? "translate-x-0 opacity-100"
                                    : "-translate-x-4 opacity-0"
                            }`}
                            style={{ transitionDelay: "0.3s" }}
                        >
                            <div
                                className="flex justify-between items-center cursor-pointer w-full text-gray-700 hover:text-red-600 font-semibold text-lg"
                                onClick={() => setMobileMagazinesOpen(!mobileMagazinesOpen)}
                            >
                                <span>Magazines</span>
                                <FaChevronDown
                                    className={`ml-2 transition-transform duration-300 text-red-500 ${
                                        mobileMagazinesOpen ? "rotate-180" : "rotate-0"
                                    }`}
                                />
                            </div>
                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                    mobileMagazinesOpen
                                        ? "max-h-40 opacity-100 mt-4"
                                        : "max-h-0 opacity-0 mt-0"
                                }`}
                            >
                                <ul className="ml-6 space-y-2 bg-gradient-to-r from-red-25 to-red-50 border-l-3 border-red-300 pl-4 py-3 rounded-r-lg">
                                    {/* No options for now - will be added in future */}
                                </ul>
                            </div>
                        </li>

                        {/* Mobile E-Book Dropdown */}
                        <li
                            className={`py-4 border-b border-gray-200/60 hover:bg-gradient-to-r hover:from-red-50 hover:to-red-25 px-4 rounded-xl transition-all duration-300 transform ${
                                isMenuOpen
                                    ? "translate-x-0 opacity-100"
                                    : "-translate-x-4 opacity-0"
                            }`}
                            style={{ transitionDelay: "0.4s" }}
                        >
                            <div
                                className="flex justify-between items-center cursor-pointer w-full text-gray-700 hover:text-red-600 font-semibold text-lg"
                                onClick={() => setMobileEbookOpen(!mobileEbookOpen)}
                            >
                                <Link
                                    to="/ebooks"
                                    onClick={closeMobileMenu}
                                    className="flex-1 hover:text-red-600"
                                >
                                    E-Book
                                </Link>
                                <FaChevronDown
                                    className={`ml-2 transition-transform duration-300 text-red-500 ${
                                        mobileEbookOpen ? "rotate-180" : "rotate-0"
                                    }`}
                                />
                            </div>
                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                    mobileEbookOpen
                                        ? "max-h-40 opacity-100 mt-4"
                                        : "max-h-0 opacity-0 mt-0"
                                }`}
                            >
                                <ul className="ml-6 space-y-2 bg-gradient-to-r from-red-25 to-red-50 border-l-3 border-red-300 pl-4 py-3 rounded-r-lg">
                                    {/* No options - removed as requested */}
                                </ul>
                            </div>
                        </li>

                        <li
                            className={`py-4 border-b border-gray-200/60 hover:bg-gradient-to-r hover:from-red-50 hover:to-red-25 px-4 rounded-xl transition-all duration-300 transform ${
                                isMenuOpen
                                    ? "translate-x-0 opacity-100"
                                    : "-translate-x-4 opacity-0"
                            }`}
                            style={{ transitionDelay: "0.5s" }}
                        >
                            <Link
                                to="/archives"
                                onClick={closeMobileMenu}
                                className="block w-full text-gray-700 hover:text-red-600 font-semibold text-lg"
                            >
                                Archives
                            </Link>
                        </li>
                        <li
                            className={`py-4 border-b border-gray-200/60 hover:bg-gradient-to-r hover:from-red-50 hover:to-red-25 px-4 rounded-xl transition-all duration-300 transform ${
                                isMenuOpen
                                    ? "translate-x-0 opacity-100"
                                    : "-translate-x-4 opacity-0"
                            }`}
                            style={{ transitionDelay: "0.6s" }}
                        >
                            <Link
                                to="/advertise"
                                onClick={closeMobileMenu}
                                className="block w-full text-gray-700 hover:text-red-600 font-semibold text-lg"
                            >
                                Advertise
                            </Link>
                        </li>
                        <li
                            className={`py-4 border-b border-gray-200/60 hover:bg-gradient-to-r hover:from-red-50 hover:to-red-25 px-4 rounded-xl transition-all duration-300 transform ${
                                isMenuOpen
                                    ? "translate-x-0 opacity-100"
                                    : "-translate-x-4 opacity-0"
                            }`}
                            style={{ transitionDelay: "0.7s" }}
                        >
                            <Link
                                to="/ourcontributors"
                                onClick={closeMobileMenu}
                                className="block w-full text-gray-700 hover:text-red-600 font-semibold text-lg"
                            >
                                Our Contributors
                            </Link>
                        </li>
                    </ul>

                    <div
                        className={`flex flex-col space-y-4 p-6 transition-all duration-500 transform ${
                            isMenuOpen
                                ? "translate-y-0 opacity-100"
                                : "translate-y-4 opacity-0"
                        }`}
                        style={{ transitionDelay: "0.8s" }}
                    >
                        {accessToken ? (
                            <button
                                onClick={() => {
                                    handleLogout();
                                    closeMobileMenu();
                                }}
                                className="w-full bg-gradient-to-r from-[#DF1600] to-red-700 text-white p-4 font-bold border-2 border-[#DF1600] cursor-pointer  transition-all duration-300 transform hover:scale-105 active:scale-95 hover:shadow-2xl hover:from-red-700 hover:to-red-800 text-lg"
                            >
                                Logout
                            </button>
                        ) : (
                            <>
                                <Link to="/login" className="w-full" onClick={closeMobileMenu}>
                                    <button className="w-full bg-gradient-to-r from-[#DF1600] to-red-700 text-white p-4 font-bold border-2 border-[#DF1600] cursor-pointer  transition-all duration-300 transform hover:scale-105 active:scale-95 hover:shadow-2xl hover:from-red-700 hover:to-red-800 text-lg">
                                        Login
                                    </button>
                                </Link>
                                {userRole === "admin" ? (
                                    <Link
                                        to="/admin/dashboard"
                                        className="w-full"
                                        onClick={closeMobileMenu}
                                    >
                                        <button className="w-full bg-gradient-to-r from-[#DF1600] to-red-700 text-white p-4 font-bold border-2 border-[#DF1600] cursor-pointer  transition-all duration-300 transform hover:scale-105 active:scale-95 hover:shadow-2xl hover:from-red-700 hover:to-red-800 text-lg">
                                            Admin
                                        </button>
                                    </Link>
                                ) : (
                                    <Link
                                        to="/admin/dashboard"
                                        className="w-full"
                                        onClick={closeMobileMenu}
                                    >
                                        <button className="w-full bg-gradient-to-r from-[#DF1600] to-red-700 text-white p-4 font-bold border-2 border-[#DF1600] cursor-pointer r transition-all duration-300 transform hover:scale-105 active:scale-95 hover:shadow-2xl hover:from-red-700 hover:to-red-800 text-lg">
                                            Author
                                        </button>
                                    </Link>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;