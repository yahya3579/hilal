import { Upload, ChevronDown } from "lucide-react"
import UploadIcon from "../../../assets/UploadIcon.jpg"
import { useRef, useState, useEffect } from "react"
import { useMutation, useQuery } from "@tanstack/react-query"; // Import React Query
import axios from "axios"; // Import Axios for API calls
import { uploadToCloudinary } from "../../../utils/cloudinaryUpload";
import { useParams } from "react-router-dom"; // Import useParams to get URL parameters
import useAuthStore from "../../../utils/store";

const fetchArticleById = async (id) => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/article/${id}/`);
    return res.data;
};

export default function EditArticle() {
    const { articleId } = useParams(); // Get articleId from URL
    const userId = useAuthStore((state) => state.userId)
    const { data: articleData, isLoading: isFetching, error: fetchError } = useQuery({
        queryKey: ["article", articleId],
        queryFn: () => fetchArticleById(articleId),
        enabled: !!articleId, // Only fetch if articleId exists
    });

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
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (articleData) {
            setFormData({
                title: articleData.title || "",
                writer: articleData.writer || "",
                description: articleData.description || "",
                category: articleData.category || "",
                publish_date: articleData.publish_date ? articleData.publish_date.split("T")[0] : "",
                cover_image: articleData.cover_image || null, // Populate existing image
            });
        }
    }, [articleData]);

    const handleBrowseClick = (e) => {
        e.preventDefault();
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: "" })); // Clear error for the field
    };

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files.length === 1) {
            setSelectedFile(e.target.files[0]);
            setFormData((prev) => ({ ...prev, cover_image: e.target.files[0] }));
            setErrors((prev) => ({ ...prev, cover_image: "" })); // Clear error for the file
        } else {
            setErrors((prev) => ({ ...prev, cover_image: "Only one image is allowed." }));
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
        if (e.dataTransfer.files && e.dataTransfer.files.length === 1) {
            setSelectedFile(e.dataTransfer.files[0]);
            setFormData((prev) => ({ ...prev, cover_image: e.dataTransfer.files[0] }));
            setErrors((prev) => ({ ...prev, cover_image: "" })); // Clear error for the file
        } else {
            setErrors((prev) => ({ ...prev, cover_image: "Only one image is allowed." }));
        }
    };
    const uploadArticle = async (formData) => {
        let imageUrl = null;

        if (formData.cover_image) {
            console.log("Uploading cover image:", formData.cover_image);
            imageUrl = await uploadToCloudinary(formData.cover_image);
            console.log("Uploaded cover image URL:", imageUrl);
            if (!imageUrl) {
                throw new Error("Image upload failed");
            }
        }

        const data = new FormData();
        data.append("user", userId);
        data.append("cover_image", imageUrl || articleData?.cover_image); // Use existing image if not updated
        data.append("title", formData.title);
        data.append("writer", formData.writer);
        data.append("description", formData.description);
        data.append("category", formData.category);
        const isoDate = new Date(formData.publish_date).toISOString();
        data.append("publish_date", isoDate);
        data.append("visits", articleData?.visits || 0);
        data.append("issue_new", articleData?.issue_new || "Yes");
        data.append("status", articleData?.status || "Active");

        if (articleId) {
            // Update existing article
            const response = await axios.put(`${import.meta.env.VITE_API_URL}/api/article/${articleId}/`, data);
            console.log("Article updated successfully:", response.data);
            return response.data;
        } else {
            // Create new article
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/create-article/`, data);
            return response.data;
        }
    };
    const mutation = useMutation({ mutationFn: uploadArticle });

    const validateForm = () => {
        const newErrors = {};
        if (!formData.title.trim()) newErrors.title = "Title is required.";
        if (!formData.writer.trim()) newErrors.writer = "Writer is required.";
        if (!formData.description.trim()) newErrors.description = "Description is required.";
        if (!formData.category.trim()) newErrors.category = "Category is required.";
        if (!formData.publish_date.trim()) {
            newErrors.publish_date = "Publish date is required.";
        } else if (!/^\d{4}-\d{2}-\d{2}$/.test(formData.publish_date)) {
            newErrors.publish_date = "Publish date must be in yyyy-mm-dd format.";
        }
        if (!formData.cover_image) newErrors.cover_image = "Cover image is required.";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        setIsSubmitting(true);
        mutation.mutate(formData, {
            onSuccess: () => {
                alert(articleId ? "Article updated successfully!" : "Article uploaded successfully!");
                setFormData({
                    title: "",
                    writer: "",
                    description: "",
                    category: "",
                    publish_date: "",
                    cover_image: null,
                });
                setSelectedFile(null);
                setErrors({});
                setIsSubmitting(false);
            },
            onError: (error) => {
                alert(`Error ${articleId ? "updating" : "uploading"} article: ${error.response?.data || error.message}`);
                setIsSubmitting(false);
            },
        });
    };

    if (isFetching) return <p className="p-4">Loading article...</p>;
    if (fetchError) return <p className="p-4 text-red-500">Error fetching article</p>;

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
                                {formData.cover_image && typeof formData.cover_image === "string" ? (
                                    <img
                                        src={formData.cover_image}
                                        alt="Article Cover"
                                        className="mx-auto h-12 w-14 sm:h-[59px] sm:w-[69px] mb-4 object-cover"
                                    />
                                ) : (
                                    <img src={UploadIcon} alt="Upload Icon" className="mx-auto h-12 w-14 sm:h-[59px] sm:w-[69px] mb-4" />
                                )}
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
                            {errors.cover_image && <p className="text-red-600 text-xs mt-1">{errors.cover_image}</p>}
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
                                    {errors.title && <p className="text-red-600 text-xs mt-1">{errors.title}</p>}
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

                                            <option value="in-focus">In-Focus</option>
                                            <option value="trending1">Trending1</option>
                                            <option value="trending2">Trending2</option>
                                            <option value="digital">Digital</option>
                                            <option value="war-on-terror">War on Terror</option>
                                            <option value="special-reports">Special Reports</option>
                                            <option value="armed-forces-news">Armed Forces News</option>
                                            <option value="national-and-international-news">National and International News</option>
                                        </select>
                                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                                    </div>
                                    {errors.category && <p className="text-red-600 text-xs mt-1">{errors.category}</p>}
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
                                    {errors.writer && <p className="text-red-600 text-xs mt-1">{errors.writer}</p>}
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
                                        className="w-full px-3 py-2 border color-border rounded-md font-montserrat align-middlefont-montserrat font-normal text-[12px] leading-[18px] tracking-normal text-[#0F0F0F] align-middle placeholder:text-[#DF1600]"
                                    />
                                    {errors.publish_date && <p className="text-red-600 text-xs mt-1">{errors.publish_date}</p>}
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
                                {errors.description && <p className="text-red-600 text-xs mt-1">{errors.description}</p>}
                            </div>

                        </div>

                        {/* Upload Button */}
                        <div className="text-center mt-4">
                            <button
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                                className={`bg-primary text-white px-6 sm:px-8 py-2 transition-colors font-poppins font-bold text-lg sm:text-[20px] leading-[100%] tracking-[-0.01em] ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary'}`}
                            >
                                {isSubmitting ? "Uploading..." : "Upload Article"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


