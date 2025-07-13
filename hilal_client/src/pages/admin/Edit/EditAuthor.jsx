import { Upload, ChevronDown } from "lucide-react"
import UploadIcon from "../../../assets/UploadIcon.jpg"
import { useRef, useState } from "react"
export default function EditAuthor() {
    const fileInputRef = useRef(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [isDragActive, setIsDragActive] = useState(false);

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
                        <h2 className="font-poppins font-medium text-[24px] leading-[100%] tracking-[-0.03em] uppercase color-primary">EDIT Author</h2>
                    </div>

                    <div className=" space-y-6 mt-6">
                        {/* Article Cover Upload */}
                        <div>
                            <label className="block  color-gray mb-2 font-montserrat  font-semibold text-[14px] leading-[100%] tracking-normal text-left align-middle">Author Image</label>
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
                                    <label className="block  color-gray mb-2 font-montserrat  font-semibold text-[14px] leading-[100%] tracking-normal  align-middle">Author Name</label>
                                    <input
                                        type="text"
                                        placeholder="What we have given to Pakistan"
                                        className="w-full px-3 py-2 border color-border rounded-md font-montserrat align-middlefont-montserrat font-normal text-[12px] leading-[18px] tracking-normal text-[#0F0F0F] align-middle "
                                    />
                                </div>

                                {/* Category */}
                                <div className="col-span-1">
                                    <label className="block  color-gray mb-2 font-montserrat  font-semibold text-[14px] leading-[100%] tracking-normal  align-middle">Category</label>
                                    <div className="relative">
                                        <select className="w-full px-3 py-2 border color-border rounded-md appearance-none bg-white font-montserrat align-middlefont-montserrat font-normal text-[12px] leading-[18px] tracking-normal text-[#0F0F0F] align-middle">
                                            <option className="" value="">Select category</option>
                                            <option className="" value="politics">Politics</option>
                                            <option className="" value="sports">Sports</option>
                                            <option className="" value="technology">Technology</option>
                                        </select>
                                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                                    </div>
                                </div>

                            </div>

                            {/* Form Fields Grid 2 */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

                                {/* Writer */}
                                <div>
                                    <label className="block  color-gray mb-2 font-montserrat  font-semibold text-[14px] leading-[100%] tracking-normal  align-middle">Email</label>
                                    <input
                                        type="email"
                                        placeholder="Enter email"
                                        className="w-full px-3 py-2 border color-border rounded-md  font-montserrat align-middlefont-montserrat font-normal text-[12px] leading-[18px] tracking-normal text-[#0F0F0F] align-middle placeholder:text-[#DF1600]"
                                    />
                                </div>

                                {/* Date */}
                                <div>
                                    <label className="block  color-gray mb-2 font-montserrat  font-semibold text-[14px] leading-[100%] tracking-normal  align-middle">Contact No.</label>
                                    <input
                                        type="tel"
                                        placeholder="xx-xxx-xxxxxx"
                                        className="w-full px-3 py-2 border color-border rounded-md  font-montserrat align-middlefont-montserrat font-normal text-[12px] leading-[18px] tracking-normal text-[#0F0F0F] align-middle placeholder:text-[#DF1600]"
                                    />
                                </div>
                            </div>

                            {/* Article Content */}
                            <div>
                                <label className="block color-gray mb-2 font-montserrat font-semibold text-sm sm:text-[14px] leading-[100%] tracking-normal align-middle">Author Introduction</label>
                                <textarea
                                    rows={6}
                                    placeholder="Write Introduction here"
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 color-border resize-vertical font-montserrat font-normal text-xs sm:text-[12px] leading-[18px] tracking-normal align-middle"
                                />
                            </div>

                        </div>

                        {/* Upload Button */}
                        <div className="text-center mt-4">
                            <button className="bg-primary hover:bg-primary text-white px-6 sm:px-8 py-2 transition-colors font-poppins font-bold text-lg sm:text-[20px] leading-[100%] tracking-[-0.01em]">
                                Update Author
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


