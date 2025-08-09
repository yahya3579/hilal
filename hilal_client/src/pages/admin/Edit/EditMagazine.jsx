import { Upload, ChevronDown } from "lucide-react"
import UploadIcon from "../../../assets/UploadIcon.jpg"
import { useEffect, useRef, useState } from "react"
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { uploadToCloudinary } from "../../../utils/cloudinaryUpload";

const fetchMagazineById = async (id) => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/magazine/${id}/`);
    console.log("Fetched magazine data:", res.data);
    return res.data;
};

const saveMagazine = async ({ id, data }) => {
    if (id) {
        const res = await axios.put(`${import.meta.env.VITE_API_URL}/api/magazine/update/${id}/`, data);
        console.log("Magazine updated successfully:", res.data);
        return res.data;
    } else {
        const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/magazine/create/`, data);
        return res.data;
    }
};

export default function EditMagazine() {
    const { magazineId } = useParams();
    const fileInputRef = useRef(null);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: "",
        publish_date: "",
        language: "",
        direction: "",
        status: "Active",
        cover_image: null,
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [isDragActive, setIsDragActive] = useState(false);




    const { data: magazineData, isLoading } = useQuery({
        queryKey: ["magazine", magazineId],
        queryFn: () => fetchMagazineById(magazineId),
        enabled: !!magazineId,
        onSuccess: (data) => {
            setFormData({
                title: data.title || "",
                publish_date: data.publish_date || "",
                language: data.language || "",
                direction: data.direction || "",
                status: data.status || "Active",
                cover_image: data.cover_image || null,
            });
        },
    });

    const mutation = useMutation({
        mutationFn: saveMagazine,
        onSuccess: () => {
            alert(magazineId ? "Magazine updated successfully!" : "Magazine created successfully!");
            navigate("/admin/magazine-management");
        },
        onError: (error) => {
            alert(`Error ${magazineId ? "updating" : "creating"} magazine: ${error.response?.data || error.message}`);
        },
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: "" }));
    };


    useEffect(() => {
        if (magazineId && magazineData) { // ✅ Only run when data exists
            setFormData({
                title: magazineData.title || "",
                publish_date: magazineData.publish_date ? magazineData.publish_date.split("T")[0] : "",
                language: magazineData.language || "", // Ensure language is populated
                direction: magazineData.direction || "", // Ensure direction is populated
                status: magazineData.status || "Active",
                cover_image: magazineData.cover_image || null,
            });
        }
    }, [magazineId, magazineData]);

    const handleBrowseClick = (e) => {
        e.preventDefault();
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedFile(e.target.files[0]);
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

    const validateForm = () => {
        const newErrors = {};
        if (!formData.title.trim()) newErrors.title = "Title is required.";
        if (!formData.publish_date.trim()) {
            newErrors.publish_date = "Publish date is required.";
        } else if (!/^\d{4}-\d{2}-\d{2}$/.test(formData.publish_date)) {
            newErrors.publish_date = "Publish date must be in yyyy-mm-dd format.";
        }
        if (!formData.language.trim()) newErrors.language = "Language is required.";
        if (!formData.direction.trim()) newErrors.direction = "Direction is required.";
        if (!formData.cover_image) newErrors.cover_image = "Cover image is required.";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsSubmitting(true);
        let imageUrl = formData.cover_image;

        // Handle image upload if a new file is selected
        if (selectedFile) {
            try {
                imageUrl = await uploadToCloudinary(selectedFile);
                if (!imageUrl) {
                    setErrors((prev) => ({ ...prev, cover_image: "Image upload failed." }));
                    setIsSubmitting(false);
                    return;
                }
            } catch (error) {
                setErrors((prev) => ({ ...prev, cover_image: "Error uploading image." }));
                setIsSubmitting(false);
                return;
            }
        }

        const updatedData = {
            ...formData,
            cover_image: imageUrl, // Use the uploaded image URL or existing image
        };

        console.log("Updated Data:", updatedData); // Debugging: Check the updated data before submission

        mutation.mutate({ id: magazineId, data: updatedData });
    };

    if (isLoading) return <p>Loading magazine...</p>;

    return (
        <div className="min-h-screen bg-white p-6">
            <div className="">
                {/* Header */}
                <div className="mb-6">
                    <h1 className="font-medium text-[32.21px] leading-[100%] tracking-[-0.03em] uppercase font-poppins color-primary text-center mx-auto w-fit">
                        Admin Dashboard
                    </h1>
                </div>

                {/* Edit Magazine Section */}
                <div className="bg-white">
                    <div className="border-t-[3px] border-[#DF1600] py-4">
                        <h2 className="font-poppins font-medium text-[24px] leading-[100%] tracking-[-0.03em] uppercase color-primary">
                            Magazine Article
                        </h2>
                    </div>

                    <div className="mt-6 space-y-6">
                        {/* Magazine Cover Upload */}
                        <div>
                            <label className="block color-gray mb-2 font-montserrat font-semibold text-[14px] leading-[100%] tracking-normal text-left align-middle">
                                Magazine Cover
                            </label>
                            <div
                                className={`border-[1px] border-dashed border-[#DF1600] rounded-lg p-4 sm:p-6 md:p-8 text-center transition-colors ${isDragActive ? 'bg-red-50 border-red-400' : ''}`}
                                onDragOver={handleDragOver}
                                onDragLeave={handleDragLeave}
                                onDrop={handleDrop}
                            >
                                {/* <img src={UploadIcon} alt="Upload Icon" className="mx-auto h-12 w-14 sm:h-[59px] sm:w-[69px] color-primary mb-4" /> */}
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
                                    <span className="font-montserrat font-semibold text-base sm:text-[16px] leading-[24px] tracking-normal text-center align-middle">
                                        Drag & drop files or
                                    </span>
                                    <button
                                        onClick={handleBrowseClick}
                                        className="font-montserrat font-semibold text-base sm:text-[16px] leading-[24px] tracking-normal text-center align-middle color-primary underline"
                                    >
                                        Browse
                                    </button>
                                </p>
                                {selectedFile && (
                                    <p className="text-green-600 font-montserrat text-xs sm:text-[12px] mt-2">
                                        Selected: {selectedFile.name}
                                    </p>
                                )}
                                <p className="font-montserrat font-normal text-xs sm:text-[12px] leading-[18px] tracking-normal text-center align-middle color-gray">
                                    Supported formats: PNG, JPG
                                </p>
                            </div>
                            {errors.cover_image && <p className="text-red-600 text-xs mt-1">{errors.cover_image}</p>}
                        </div>

                        <div className="md:w-[90%] flex flex-col md:space-y-8 space-y-4">
                            {/* Form Fields Grid 1 */}
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
                                {/* Magazine Title */}
                                <div className="col-span-3">
                                    <label className="block color-gray mb-2 font-montserrat font-semibold text-[14px] leading-[100%] tracking-normal align-middle">
                                        Magazine Title
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="What we have given to Pakistan"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border color-border rounded-md font-montserrat align-middlefont-montserrat font-normal text-[12px] leading-[18px] tracking-normal text-[#0F0F0F] align-middle"
                                    />
                                    {errors.title && <p className="text-red-600 text-xs mt-1">{errors.title}</p>}
                                </div>

                                {/* Direction */}
                                <div className="col-span-1">
                                    <label className="block color-gray mb-2 font-montserrat font-semibold text-[14px] leading-[100%] tracking-normal align-middle">
                                        Direction
                                    </label>
                                    <div className="relative">
                                        <select
                                            name="direction"
                                            value={formData.direction}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border color-border rounded-md appearance-none bg-white font-montserrat align-middlefont-montserrat font-normal text-[12px] leading-[18px] tracking-normal text-[#0F0F0F] align-middle"
                                        >
                                            <option value="">Direction</option>
                                            <option value="LTR">LTR</option>
                                            <option value="RTL">RTL</option>
                                        </select>
                                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                                    </div>
                                    {errors.direction && <p className="text-red-600 text-xs mt-1">{errors.direction}</p>}
                                </div>
                            </div>

                            {/* Form Fields Grid 2 */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                {/* Language */}
                                <div>
                                    <label className="block color-gray mb-2 font-montserrat font-semibold text-[14px] leading-[100%] tracking-normal align-middle">
                                        Language
                                    </label>
                                    <select
                                        name="language"
                                        value={formData.language}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border color-border rounded-md bg-white font-montserrat font-normal text-[12px] leading-[18px] tracking-normal text-[#0F0F0F]"
                                    >
                                        <option value="">Select Language</option>
                                        <option value="English">English</option>
                                        <option value="Urdu">Urdu</option>
                                    </select>
                                    {errors.language && <p className="text-red-600 text-xs mt-1">{errors.language}</p>}
                                </div>

                                {/* Publish Date */}
                                <div>
                                    <label className="block color-gray mb-2 font-montserrat font-semibold text-[14px] leading-[100%] tracking-normal align-middle">
                                        Date
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="yyyy-mm-dd"
                                        name="publish_date"
                                        value={formData.publish_date}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border color-border rounded-md font-montserrat font-normal text-[12px] leading-[18px] tracking-normal text-[#0F0F0F] placeholder:text-[#DF1600]"
                                    />
                                    {errors.publish_date && <p className="text-red-600 text-xs mt-1">{errors.publish_date}</p>}
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="text-center mt-4">
                            <button
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                                className={`bg-primary text-white px-6 sm:px-8 py-2 transition-colors font-poppins font-bold text-lg sm:text-[20px] leading-[100%] tracking-[-0.01em] ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary'}`}
                            >
                                {isSubmitting ? (magazineId ? "Updating..." : "Creating...") : (magazineId ? "Update Magazine" : "Create Magazine")}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


