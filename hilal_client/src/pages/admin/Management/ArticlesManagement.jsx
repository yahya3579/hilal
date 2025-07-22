// import React from 'react'
// import ManagementTable from '../../../components/admin/ManagementTable'
// import articleCover from "../../../assets/articles-cover.jpg";

// const articles = [
//     {
//         id: 1,
//         articleTitle: "Reviving Traditional Art in Modern Pakistan",
//         publishDate: "05-03-2025",
//         author: "Ayesha Khan",
//         articleVisits: 456,
//         issueNews: "Yes",
//         status: "Active",
//     },
//     {
//         id: 2,
//         articleTitle: "Youth Empowerment Through Education",
//         publishDate: "08-03-2025",
//         author: "Zain Raza",
//         articleVisits: 274,
//         issueNews: "No",
//         status: "Active",
//     },
//     {
//         id: 3,
//         articleTitle: "Climate Change and Our Responsibility",
//         publishDate: "12-03-2025",
//         author: "Fatima Tariq",
//         articleVisits: 389,
//         issueNews: "Yes",
//         status: "Inactive",
//     },
//     {
//         id: 4,
//         articleTitle: "پاکستانی معیشت کے چیلنجز",
//         publishDate: "14-03-2025",
//         author: "Hamza Ali",
//         articleVisits: 512,
//         issueNews: "No",
//         status: "Active",
//     },
//     {
//         id: 5,
//         articleTitle: "Digital Pakistan – A Leap Toward Progress",
//         publishDate: "16-03-2025",
//         author: "Sarah Imran",
//         articleVisits: 618,
//         issueNews: "Yes",
//         status: "Active",
//     },
// ];


// const columns = [
//     {
//         key: "aricleCover",
//         label: "Article Cover",
//         render: () => (
//             <img src={articleCover} alt="Article" className="w-[120px] h-[47px] object-cover rounded" />
//         ),
//     },
//     {
//         key: "articleTitle",
//         label: "Aricle Title",
//         render: (value) => (
//             <span className="font-medium text-[12.7px] font-poppins">{value}</span>
//         ),
//     },
//     {
//         key: "publishDate",
//         label: "Publish Date",
//         render: (value) => (
//             <span className="font-medium text-[12.7px] font-poppins">{value}</span>
//         ),

//     },
//     {
//         key: "author",
//         label: "Author",
//         render: (value) => (
//             <span className="font-medium text-[12.7px] font-poppins">{value}</span>
//         ),

//     },
//     {
//         key: "articleVisits",
//         label: "Aricle Visits",
//         render: (value) => (
//             <span className="font-medium text-[12.7px] font-poppins">{value}</span>
//         ),

//     },
//     {
//         key: "issueNews",
//         label: "Issue News",
//         render: (value) => (
//             <button className="bg-black text-white px-3 py-1 text-[10.89px] font-bold rounded">
//                 {value}
//             </button>
//         ),
//     },
//     {
//         key: "status",
//         label: "Status",
//         render: (value) => (
//             <button className="bg-[#31AB5A] text-white px-4 py-1 rounded text-[10.89px] font-bold">
//                 {value}
//             </button>
//         ),
//     },
//     {
//         key: "actions",
//         label: "Actions",
//         render: () => (
//             <select className="border border-gray-300 rounded px-3 py-1 text-sm bg-white text-[10.89px] font-poppins">
//                 <option value="preview">Preview</option>
//                 <option value="edit">Edit</option>
//                 <option value="delete">Delete</option>
//             </select>
//         ),
//     },
// ];

// const ArticleManagement = () => {
//     return (
//         <ManagementTable
//             title="Article Management"
//             data={articles}
//             columns={columns}
//             onAddNew={() => console.log("Add new article")}
//         />
//     )
// }

// export default ArticleManagement


import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import ManagementTable from '../../../components/admin/ManagementTable'

// Table columns
const columns = [
    {
        key: "cover_image",
        label: "Article Cover",
        render: (value) => (
            <img
                src={value}
                alt="Article"
                className="w-[120px] h-[47px] object-cover rounded"
            />
        ),
    },
    {
        key: "title",
        label: "Article Title",
        render: (value) => (
            <span className="font-medium text-[12.7px] font-poppins">{value}</span>
        ),
    },
    {
        key: "publish_date",
        label: "Publish Date",
        render: (value) => {
            const date = new Date(value);
            const formattedDate = date.toLocaleDateString("en-GB");
            return <span className="font-medium text-[12.7px] font-poppins">{formattedDate}</span>
        },
    },
    {
        key: "writer",
        label: "Author",
        render: (value) => (
            <span className="font-medium text-[12.7px] font-poppins">{value || "Unknown"}</span>
        ),
    },
    {
        key: "visits",
        label: "Article Visits",
        render: (value) => (
            <span className="font-medium text-[12.7px] font-poppins">{value}</span>
        ),
    },
    {
        key: "issue_new",
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
    {
        key: "actions",
        label: "Actions",
        render: () => (
            <select className="border border-gray-300 rounded px-3 py-1 text-sm bg-white text-[10.89px] font-poppins">
                <option value="preview">Preview</option>
                <option value="edit">Edit</option>
                <option value="delete">Delete</option>
            </select>
        ),
    },
];

// API call
const fetchArticles = async () => {
    const res = await axios.get('http://localhost:8000/adminpanel/get-articles/');
    return res.data.data;
};

const ArticleManagement = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['articles'],
        queryFn: fetchArticles
    });

    if (isLoading) return <p className="p-4">Loading articles...</p>;
    if (error) return <p className="p-4 text-red-500">Error fetching articles</p>;

    return (
        <ManagementTable
            title="Article Management"
            data={data}
            columns={columns}
            route={"/admin/new-article"}
            onAddNew={() => console.log("Add new article")}
        />
    );
};

export default ArticleManagement;

