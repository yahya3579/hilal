import { Upload, ChevronDown } from "lucide-react"
import UploadIcon from "../../../assets/UploadIcon.jpg"
import { useRef, useState } from "react"
import { useMutation } from "@tanstack/react-query"; // Import React Query
import axios from "axios"; // Import Axios for API calls

export default function EditArticle() {
    const fileInputRef = useRef(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [isDragActive, setIsDragActive] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        writer: "",
        description: "",
        category: "",
        publish_date: "",
        cover_image: null,
    });

    const handleBrowseClick = (e) => {
        e.preventDefault();
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedFile(e.target.files[0]);
            setFormData((prev) => ({ ...prev, cover_image: e.target.files[0] }));
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragActive(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragActive(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setSelectedFile(e.dataTransfer.files[0]);
        }
    };
    const uploadArticle = async (formData) => {
        const data = new FormData();
        data.append("user", 1);
        data.append("cover_image", "test image"); // TODO: Replace this later with actual file
        data.append("title", formData.title);
        data.append("writer", formData.writer);
        data.append("description", formData.description);
        data.append("category", formData.category);
        const isoDate = new Date(formData.publish_date).toISOString();
        data.append("publish_date", isoDate);
        data.append("visits", 0);
        data.append("issue_new", "Yes");
        data.append("status", "Active");

        const response = await axios.post("http://localhost:8000/adminpanel/create-article/", data);
        return response.data;
    };
    const mutation = useMutation({ mutationFn: uploadArticle });

    const handleSubmit = (e) => {
        e.preventDefault();
        mutation.mutate(formData, {
            onSuccess: () => {
                alert("Article uploaded successfully!");
            },
            onError: (error) => {
                alert(`Error uploading article: ${error.response?.data || error.message}`);
            },
        });
    };

    return (
        <div className="min-h-screen bg-white p-6">
            <div className="">
                {/* Header */}


                <div className=" mb-6">
                    <h1 className="font-medium text-[32.21px] leading-[100%] tracking-[-0.03em] uppercase font-poppins color-primary text-center mx-auto w-fit">
                        Admin Dashboard
                    </h1>
                </div>


                {/* Edit Article Section */}
                <div className="bg-white">
                    <div className="border-t-[3px] border-[#DF1600] py-4">
                        <h2 className="font-poppins font-medium text-[24px] leading-[100%] tracking-[-0.03em] uppercase color-primary">EDIT ARTICLE</h2>
                    </div>

                    <div className="mt-6 space-y-6">
                        {/* Article Cover Upload */}
                        <div>
                            <label className="block  color-gray mb-2 font-montserrat  font-semibold text-[14px] leading-[100%] tracking-normal text-left align-middle">Article Cover</label>
                            <div
                                className={`border-[1px] border-dashed border-[#DF1600] rounded-lg p-4 sm:p-6 md:p-8 text-center transition-colors ${isDragActive ? 'bg-red-50 border-red-400' : ''}`}
                                onDragOver={handleDragOver}
                                onDragLeave={handleDragLeave}
                                onDrop={handleDrop}
                            >
                                <img src={UploadIcon} alt="Upload Icon" className="mx-auto h-12 w-14 sm:h-[59px] sm:w-[69px] color-primary mb-4" />
                                <input
                                    type="file"
                                    accept="image/png, image/jpeg"
                                    ref={fileInputRef}
                                    style={{ display: 'none' }}
                                    onChange={handleFileChange}
                                />
                                <p className="text-gray-600 mb-2">
                                    <span className="font-montserrat font-semibold text-base sm:text-[16px] leading-[24px] tracking-normal text-center align-middle">Drag & drop files or </span>
                                    <button onClick={handleBrowseClick} className="font-montserrat font-semibold text-base sm:text-[16px] leading-[24px] tracking-normal text-center align-middle color-primary underline">Browse</button>
                                </p>
                                {selectedFile && (
                                    <p className="text-green-600 font-montserrat text-xs sm:text-[12px] mt-2">Selected: {selectedFile.name}</p>
                                )}
                                <p className="font-montserrat font-normal text-xs sm:text-[12px] leading-[18px] tracking-normal text-center align-middle color-gray">Supported formats: PNG, JPG</p>
                            </div>
                        </div>

                        <div className="md:w-[90%] flex flex-col md:space-y-8 space-y-4">

                            {/* Form Fields Grid 1 */}
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
                                {/* Article Title */}
                                <div className="col-span-3">
                                    <label className="block  color-gray mb-2 font-montserrat  font-semibold text-[14px] leading-[100%] tracking-normal  align-middle">Article Title</label>
                                    <input
                                        type="text"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleInputChange}
                                        placeholder="What we have given to Pakistan"
                                        className="w-full px-3 py-2 border color-border rounded-md font-montserrat align-middlefont-montserrat font-normal text-[12px] leading-[18px] tracking-normal text-[#0F0F0F] align-middle "
                                    />
                                </div>

                                {/* Category */}
                                <div className="col-span-1">
                                    <label className="block  color-gray mb-2 font-montserrat  font-semibold text-[14px] leading-[100%] tracking-normal  align-middle">Category</label>
                                    <div className="relative">
                                        <select
                                            name="category"
                                            value={formData.category}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border color-border rounded-md appearance-none bg-white font-montserrat align-middlefont-montserrat font-normal text-[12px] leading-[18px] tracking-normal text-[#0F0F0F] align-middle"
                                        >
                                            <option value="">Select category</option>
                                            <option value="politics">Politics</option>
                                            <option value="sports">Sports</option>
                                            <option value="technology">Technology</option>
                                        </select>
                                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                                    </div>
                                </div>

                            </div>

                            {/* Form Fields Grid 2 */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

                                {/* Writer */}
                                <div>
                                    <label className="block  color-gray mb-2 font-montserrat  font-semibold text-[14px] leading-[100%] tracking-normal  align-middle">Writer</label>
                                    <input
                                        type="text"
                                        name="writer"
                                        value={formData.writer}
                                        onChange={handleInputChange}
                                        placeholder="Enter Writer name"
                                        className="w-full px-3 py-2 border color-border rounded-md  font-montserrat align-middlefont-montserrat font-normal text-[12px] leading-[18px] tracking-normal text-[#0F0F0F] align-middle placeholder:text-[#DF1600]"
                                    />
                                </div>

                                {/* Date */}
                                <div>
                                    <label className="block  color-gray mb-2 font-montserrat  font-semibold text-[14px] leading-[100%] tracking-normal  align-middle">Date</label>
                                    <input
                                        type="text"
                                        name="publish_date"
                                        value={formData.publish_date}
                                        onChange={handleInputChange}
                                        placeholder="yyyy-mm-dd"
                                        className="w-full px-3 py-2 border color-border rounded-md  font-montserrat align-middlefont-montserrat font-normal text-[12px] leading-[18px] tracking-normal text-[#0F0F0F] align-middle placeholder:text-[#DF1600]"
                                    />
                                </div>
                            </div>

                            {/* Article Content */}
                            <div>
                                <label className="block color-gray mb-2 font-montserrat font-semibold text-sm sm:text-[14px] leading-[100%] tracking-normal align-middle">Article Title</label>
                                <textarea
                                    rows={6}
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    placeholder="Write article here"
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 color-border resize-vertical font-montserrat font-normal text-xs sm:text-[12px] leading-[18px] tracking-normal align-middle"
                                />
                            </div>

                        </div>

                        {/* Upload Button */}
                        <div className="text-center mt-4">
                            <button
                                onClick={handleSubmit}
                                className="bg-primary hover:bg-primary text-white px-6 sm:px-8 py-2 transition-colors font-poppins font-bold text-lg sm:text-[20px] leading-[100%] tracking-[-0.01em]"
                            >
                                Upload Article
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


