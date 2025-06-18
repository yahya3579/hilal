import React from 'react'

import ManagementTable from '../../components/admin/ManagementTable'


import articleCover from "../../assets/articles-cover.jpg";

const articles = [
    { id: 1, title: "What have we given to....", created: "10-03-2025", count: 456, location: "Islamabad", issueNews: "No", status: "Active" },
    { id: 2, title: "What have we given to....", created: "10-03-2025", count: 274, location: 'Islamabad', issueNews: "No", status: "Active" },
    // ...
];

const columns = [
    {
        key: "preview",
        label: "Preview",
        render: () => (
            <img src={articleCover} alt="Article" className="w-[120px] h-[47px] object-cover rounded" />
        ),
    },
    {
        key: "title",
        label: "Title",
        render: (value) => (
            <span className="font-medium text-[12.7px] font-poppins">{value}</span>
        ),
    },
    {
        key: "created",
        label: "Created",
        render: (value) => (
            <span className="font-medium text-[12.7px] font-poppins">{value}</span>
        ),
    },
    {
        key: "location",
        label: "Location",
        render: (value) => (
            <span className="font-medium text-[12.7px] font-poppins">{value}</span>
        ),
    },
    {
        key: "issueNews",
        label: "Issue News",
        render: (value) => (
            <button className="bg-black text-white px-3 py-1 text-[10.89px] font-bold rounded">
                {value}
            </button>
        ),
    },
    {
        key: "status",
        label: "Status",
        render: (value) => (
            <button className="bg-[#31AB5A] text-white px-4 py-1 rounded text-[10.89px] font-bold">
                {value}
            </button>
        ),
    },

];

const BillBoards = () => {
    return (
        <ManagementTable
            title="Bill-Board management"
            data={articles}
            columns={columns}
            onAddNew={() => console.log("Add new article")}
        />
    )
}

export default BillBoards