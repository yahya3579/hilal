import React from "react";
import articleCover from "../../../assets/articles-cover.jpg";
import { Link } from "react-router-dom";

const authors = [
    {
        id: 1,
        authorName: "Ayesha Khan",
        email: "ayesha.khan@example.com",
        contactNo: "0312-4567890",
        noOfArticles: 5,
        status: "Approved",
    },
    {
        id: 2,
        authorName: "Zain Raza",
        email: "zain.raza@example.com",
        contactNo: "0345-1122334",
        noOfArticles: 8,
        status: "Pending",
    },
    {
        id: 3,
        authorName: "Fatima Tariq",
        email: "fatima.tariq@example.com",
        contactNo: "0301-9988776",
        noOfArticles: 3,
        status: "Approved",
    },
    {
        id: 4,
        authorName: "Hamza Ali",
        email: "hamza.ali@example.com",
        contactNo: "0321-5566778",
        noOfArticles: 6,
        status: "Rejected",
    },
    {
        id: 5,
        authorName: "Sarah Imran",
        email: "sarah.imran@example.com",
        contactNo: "0333-6677889",
        noOfArticles: 9,
        status: "Approved",
    },
];

const AuthorsManagement = () => {
    return (
        <div className="p-6 bg-white min-h-screen">
            {/* Header */}
            <div className="relative mb-6">
                <h1 className="font-medium text-[32.21px] leading-[100%] tracking-[-0.03em] uppercase font-poppins text-[#DF1600] text-center mx-auto w-fit">
                    Author Management
                </h1>

                {/* Filter section aligned to the right */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-2">
                    <span className="text-sm text-[#1E1E1E] font-medium leading-[100%] tracking-[-0.01em] font-poppins">
                        Content filter
                    </span>
                    <select className="border border-gray-300 rounded px-3 py-1 text-sm">
                        <option value="">Select filter</option>
                    </select>
                </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr>
                            <th className="text-left py-3 px-4 text-[#DF1600] font-medium text-[15px] capitalize font-poppins">No</th>
                            <th className="text-left py-3 px-4 text-[#DF1600] font-medium text-[15px] capitalize font-poppins">Image</th>
                            <th className="text-left py-3 px-4 text-[#DF1600] font-medium text-[15px] capitalize font-poppins">Author Name</th>
                            <th className="text-left py-3 px-4 text-[#DF1600] font-medium text-[15px] capitalize font-poppins">Email</th>
                            <th className="text-left py-3 px-4 text-[#DF1600] font-medium text-[15px] capitalize font-poppins">Contact No</th>
                            <th className="text-left py-3 px-4 text-[#DF1600] font-medium text-[15px] capitalize font-poppins">No. of Articles</th>
                            <th className="text-left py-3 px-4 text-[#DF1600] font-medium text-[15px] capitalize font-poppins">Status</th>
                            <th className="text-left py-3 px-4 text-[#DF1600] font-medium text-[15px] capitalize font-poppins">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {authors.map((author, index) => (
                            <tr
                                key={author.id}
                                className="border-b-[0.5px] border-[#292D32] hover:bg-gray-50"
                            >
                                <td className="py-4 px-4 text-gray-700">{index + 1}</td>
                                <td className="py-4 px-4 text-gray-700">
                                    <img
                                        src={articleCover}
                                        alt="Author"
                                        className="w-[120px] h-[47px] object-cover rounded"
                                    />
                                </td>
                                <td className="py-4 px-4 text-gray-700">
                                    <span className="font-medium text-[12.7px] font-poppins">{author.authorName}</span>
                                </td>
                                <td className="py-4 px-4 text-gray-700">
                                    <span className="font-medium text-[12.7px] font-poppins">{author.email}</span>
                                </td>
                                <td className="py-4 px-4 text-gray-700">
                                    <span className="font-medium text-[12.7px] font-poppins">{author.contactNo}</span>
                                </td>
                                <td className="py-4 px-4 text-gray-700">
                                    <span className="font-medium text-[12.7px] font-poppins">{author.noOfArticles}</span>
                                </td>
                                <td className="py-4 px-4 text-gray-700">
                                    <button className={`px-4 py-1 rounded text-[10.89px] font-bold ${author.status === "Approved" ? "bg-[#31AB5A] text-white" : author.status === "Pending" ? "bg-yellow-500 text-white" : "bg-red-500 text-white"}`}>
                                        {author.status}
                                    </button>
                                </td>
                                <td className="py-4 px-4 text-gray-700">
                                    <select className="border border-gray-300 rounded px-3 py-1 text-sm bg-white text-[10.89px] font-poppins">
                                        <option disabled value="">Action</option>
                                        <option value="preview">Preview</option>
                                        <option value="edit">Edit</option>
                                        <option value="delete">Delete</option>
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* New Item Button */}
            <div className="flex justify-center mt-8">
                <Link to="/admin/edit-author">

                    <button
                        onClick={() => console.log("Add new author")}
                        className="bg-[#DF0404] text-white px-6 py-2 rounded hover:bg-red-700 transition-colors font-bold text-[16.1px] leading-[100%] tracking-[-0.01em] font-poppins"
                    >
                        New Author
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default AuthorsManagement;