
import ManagementTable from '../../../components/admin/ManagementTable'


import articleCover from "../../../assets/articles-cover.jpg";
const articles = [
    {
        id: 1,
        title: "Preserving Cultural Heritage in Modern Times",
        publishDate: "12-04-2025",
        language: "English",
        direction: "LTR",
        status: "Active",
    },
    {
        id: 2,
        title: "اسلامی فن تعمیر کی خوبصورتی",
        publishDate: "15-04-2025",
        language: "Urdu",
        direction: "RTL",
        status: "Active",
    },
    {
        id: 3,
        title: "Youth and Digital Transformation",
        publishDate: "18-04-2025",
        language: "English",
        direction: "LTR",
        status: "Inactive",
    },
    {
        id: 4,
        title: "معاشرتی اصلاحات کے بنیادی اصول",
        publishDate: "20-04-2025",
        language: "Urdu",
        direction: "RTL",
        status: "Active",
    },
    {
        id: 5,
        title: "Innovation in Public Sector",
        publishDate: "22-04-2025",
        language: "English",
        direction: "LTR",
        status: "Active",
    },
];


const columns = [
    {
        key: "image",
        label: "Image",
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
        key: "publishDate",
        label: "Publish Date",
        render: (value) => (
            <span className="font-medium text-[12.7px] font-poppins">{value}</span>
        ),

    },
    {
        key: "language",
        label: "Language",
        render: (value) => (
            <span className="font-medium text-[12.7px] font-poppins">{value}</span>
        ),
    },
    {
        key: "direction",
        label: "Direction",
        render: (value) => (
            <span className="font-medium text-[12.7px] font-poppins">{value}</span>
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
const MagazineManagement = () => {
    return (
        <ManagementTable
            title="Magazine management"
            data={articles}
            columns={columns}
            onAddNew={() => console.log("Add new article")}
            route={"/admin/edit-magazine"}
        />
    )
}

export default MagazineManagement