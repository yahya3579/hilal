import { Upload, ChevronDown } from "lucide-react"
import UploadIcon from "../../../assets/UploadIcon.jpg"
import { useRef, useState } from "react"
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { uploadToCloudinary } from "../../../utils/cloudinaryUpload";

const fetchMagazineById = async (id) => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/magazine/${id}/`);
    return res.data;
};

const saveMagazine = async ({ id, data }) => {
    if (id) {
        const res = await axios.put(`${import.meta.env.VITE_API_URL}/api/magazine/update/${id}/`, data);
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.title.trim() || !formData.publish_date.trim() || !formData.language.trim() || !formData.direction.trim()) {
            alert("All fields are required.");
            return;
        }

        setIsSubmitting(true);
        let imageUrl = magazineData?.cover_image;

        if (formData.cover_image && typeof formData.cover_image !== "string") {
            try {
                imageUrl = await uploadToCloudinary(formData.cover_image);
                if (!imageUrl) {
                    alert("Image upload failed");
                    setIsSubmitting(false);
                    return;
                }
            } catch (error) {
                alert("Error uploading image: " + error.message);
                setIsSubmitting(false);
                return;
            }
        }

        const updatedData = {
            ...formData,
            cover_image: imageUrl,
        };

        mutation.mutate({ id: magazineId, data: updatedData });
    };

    if (isLoading) return <p>Loading magazine...</p>;

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
                        <h2 className="font-poppins font-medium text-[24px] leading-[100%] tracking-[-0.03em] uppercase color-primary">Magazine Article</h2>
                    </div>

                    <div className="mt-6 space-y-6">
                        {/* Article Cover Upload */}
                        <div>
                            <label className="block  color-gray mb-2 font-montserrat  font-semibold text-[14px] leading-[100%] tracking-normal text-left align-middle">Magazine Cover</label>
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
                                    <label className="block  color-gray mb-2 font-montserrat  font-semibold text-[14px] leading-[100%] tracking-normal  align-middle">Magazine Title</label>
                                    <input
                                        type="text"
                                        placeholder="What we have given to Pakistan"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border color-border rounded-md font-montserrat align-middlefont-montserrat font-normal text-[12px] leading-[18px] tracking-normal text-[#0F0F0F] align-middle "
                                    />
                                </div>

                                {/* Category */}
                                <div className="col-span-1">
                                    <label className="block  color-gray mb-2 font-montserrat  font-semibold text-[14px] leading-[100%] tracking-normal  align-middle">Direction</label>
                                    <div className="relative">
                                        <select
                                            name="direction"
                                            value={formData.direction}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border color-border rounded-md appearance-none bg-white font-montserrat align-middlefont-montserrat font-normal text-[12px] leading-[18px] tracking-normal text-[#0F0F0F] align-middle"
                                        >
                                            <option className="" value="">Direction</option>
                                            <option className="" value="LTR">LTR</option>
                                            <option className="" value="RTL">RTL</option>

                                        </select>
                                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                                    </div>
                                </div>

                            </div>

                            {/* Form Fields Grid 2 */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

                                {/* Writer */}
                                <div>
                                    <label className="block  color-gray mb-2 font-montserrat  font-semibold text-[14px] leading-[100%] tracking-normal  align-middle">Language</label>
                                    <input
                                        type="text"
                                        placeholder="Language"
                                        name="language"
                                        value={formData.language}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border color-border rounded-md  font-montserrat align-middlefont-montserrat font-normal text-[12px] leading-[18px] tracking-normal text-[#0F0F0F] align-middle placeholder:text-[#DF1600]"
                                    />
                                </div>

                                {/* Date */}
                                <div>
                                    <label className="block  color-gray mb-2 font-montserrat  font-semibold text-[14px] leading-[100%] tracking-normal  align-middle">Date</label>
                                    <input
                                        type="text"
                                        placeholder="yyyy-mm-dd"
                                        name="publish_date"
                                        value={formData.publish_date}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border color-border rounded-md  font-montserrat align-middlefont-montserrat font-normal text-[12px] leading-[18px] tracking-normal text-[#0F0F0F] align-middle placeholder:text-[#DF1600]"
                                    />
                                </div>
                            </div>



                        </div>

                        {/* Upload Button */}
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


