
import ManagementTable from '../../../components/admin/ManagementTable'


const articles = [
    { id: 1, author: "Zeeshan", title: "What have we given to....", comment: "This is a sample comment." },
    { id: 2, author: "Arslan", title: "What have we given to....", comment: "This is a sample comment." },
]
// ...;

const columns = [
    {
        key: "author",
        label: "Author Name",
        render: (value) => (
            <span className="font-medium text-[12.7px] font-poppins">{value}</span>
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
        key: "comment",
        label: "Comment",
        render: (value) => (
            <span className="font-medium text-[12.7px] font-poppins">{value}</span>
        ),

    },

    {
        key: "actions",
        label: "Actions",
        render: () => (
            <select className="border border-gray-300 rounded px-3 py-1 text-sm bg-white text-[10.89px] font-poppins">
                <option value="disapprove">Disapprove</option>
                <option value="edit">Edit</option>
                <option value="delete">Delete</option>
            </select>
        ),
    },
];
const CommentManagement = () => {
    return (
        <ManagementTable
            title="Comment management"
            data={articles}
            columns={columns}
            onAddNew={() => console.log("Add new article")}
        />
    )
}

export default CommentManagement