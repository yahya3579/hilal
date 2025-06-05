import React from "react";
import { FaChevronDown } from "react-icons/fa";
import Logo from "../assets/hilal-logo.svg";

const Navbar = () => {
    return (
        <nav className="relative bg-[#DF1600]   text-white shadow-md z-10">
            <div className=" ml-[45px] px-4 flex  h-[75px]  items-center py-3 relative">

                {/* Logo Section */}
                <div className="absolute -bottom-3 left-4 top-0 flex items-center bg-white p-4 shadow-lg z-20">
                    <img
                        src={Logo}
                        alt="Hilal Publications"
                        className="h-14 w-auto"
                    />
                </div>

                {/* Navigation Links */}
                <div className="flex  items-center space-x-3 ml-60">
                    <ul className="flex space-x-5 text-[18px] font-medium">
                        <li className="hover:underline cursor-pointer">Home</li>
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

                {/* Action Buttons */}
                <div className="flex ml-auto space-x-2 text-[16px]">
                    <button className="w-32 bg-white text-[#DF1600] p-3  font-bold border border-white">
                        SIGN IN
                    </button>
                    <button className="w-32 bg-white text-[#DF1600] p-3  font-bold border border-white">
                        SUBSCRIBE
                    </button>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
