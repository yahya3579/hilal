
import articleCover from "../../../assets/articles-cover.jpg";
import ManagementTable from "../../../components/admin/ManagementTable";

const articles = [
    {
        authorName: "Ayesha Khan",
        email: "ayesha.khan@example.com",
        contactNo: "0312-4567890",
        noOfArticles: 5,
        status: "Approved",
    },
    {
        authorName: "Zain Raza",
        email: "zain.raza@example.com",
        contactNo: "0345-1122334",
        noOfArticles: 8,
        status: "Pending",
    },
    {
        authorName: "Fatima Tariq",
        email: "fatima.tariq@example.com",
        contactNo: "0301-9988776",
        noOfArticles: 3,
        status: "Approved",
    },
    {
        authorName: "Hamza Ali",
        email: "hamza.ali@example.com",
        contactNo: "0321-5566778",
        noOfArticles: 6,
        status: "Rejected",
    },
    {
        authorName: "Sarah Imran",
        email: "sarah.imran@example.com",
        contactNo: "0333-6677889",
        noOfArticles: 9,
        status: "Approved",
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
        key: "authorName",
        label: "Author Name",
        render: (value) => (
            <span className="font-medium text-[12.7px] font-poppins">{value}</span>
        ),
    },
    {
        key: "email",
        label: "Email",
        render: (value) => (
            <span className="font-medium text-[12.7px] font-poppins">{value}</span>
        ),
    },
    {
        key: "contactNo",
        label: "Contact No",
        render: (value) => (
            <span className="font-medium text-[12.7px] font-poppins">{value}</span>
        ),
    },
    {
        key: "noOfArticles",
        label: "No. Of Articles ",
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

const AuthorsManagement = () => {
    return (
        <ManagementTable
            title="AUTHOR  management"
            data={articles}
            columns={columns}
            onAddNew={() => console.log("Add new article")}
            route={"/admin/edit-author"}
        />
    )
}

export default AuthorsManagement