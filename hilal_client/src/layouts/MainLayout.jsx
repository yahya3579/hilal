// src/layouts/MainLayout.jsx
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <>
            {/* <Header /> */}
            <Navbar />
            <Outlet />
            {/* <div className="flex min-h-screen bg-gray-100">
                <Sidebar />
                <div className="ml-64 p-8 w-full">
                    <div className="bg-white rounded-lg shadow-md p-6 min-h-[calc(100vh-4rem)]">
                      
                    </div>
                </div>
            </div> */}
            <Footer />
        </>
    );
};

export default MainLayout;
