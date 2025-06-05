import React from "react";

const Navbar = () => {
    return (
        <nav className="bg-[#d71900] text-white shadow-md">
            <div className="container mx-auto px-4 flex justify-between items-center py-2">
                {/* Logo */}
                <div className="flex items-center space-x-4">
                    <img
                        src="/hilal-logo.png" // replace with actual logo path
                        alt="Hilal Publications"
                        className="h-10 w-auto bg-white px-2 py-1"
                    />
                    <ul className="flex space-x-4 text-sm">
                        <li className="hover:underline cursor-pointer">Home</li>
                        <li className="relative group cursor-pointer">
                            Category
                            <span className="ml-1">▼</span>
                            {/* Dropdown (optional) */}
                            {/* <ul className="absolute hidden group-hover:block bg-white text-black mt-2 p-2 shadow rounded">
                <li>Option 1</li>
                <li>Option 2</li>
              </ul> */}
                        </li>
                        <li className="relative group cursor-pointer">
                            Magazines
                            <span className="ml-1">▼</span>
                        </li>
                        <li className="relative group cursor-pointer">
                            E-Book
                            <span className="ml-1">▼</span>
                        </li>
                        <li className="hover:underline cursor-pointer">
                            Our Contributors
                        </li>
                    </ul>
                </div>

                {/* Buttons */}
                <div className="flex space-x-2">
                    <button className="bg-white text-[#d71900] px-3 py-1 text-sm font-semibold border border-white hover:bg-gray-100">
                        SIGN IN
                    </button>
                    <button className="bg-white text-[#d71900] px-3 py-1 text-sm font-semibold border border-white hover:bg-gray-100">
                        SUBSCRIBE
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
