// src/layouts/MainLayout.jsx
import Header from "../components/Header";
import Sidebar from "../components/sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <>
            <Header />
            <div className="flex min-h-screen bg-gray-100">
                <Sidebar />
                <div className="ml-64 p-8 w-full">
                    <div className="bg-white rounded-lg shadow-md p-6 min-h-[calc(100vh-4rem)]">
                        <Outlet /> {/* This renders current route page */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainLayout;
