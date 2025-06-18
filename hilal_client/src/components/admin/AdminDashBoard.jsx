import {
    BookOpen,
    Archive,
    Tablet,
    Book,
    Users,
    TrendingUp,
    Mic,
    UserCheck,
    Wifi,
    MessageSquare,
    Globe,
} from "lucide-react"

const AdminDashboard = () => {
    const stats = [
        {
            title: "TOTAL ARTICLES",
            value: "10,076",
            icon: BookOpen,
            bgColor: "bg-gradient-to-br from-red-500 to-red-600",
            iconBg: "bg-red-400/30",
        },
        {
            title: "TOTAL ARCHIVE MAGAZINES",
            value: "5,202",
            icon: Archive,
            bgColor: "bg-gradient-to-br from-blue-500 to-blue-600",
            iconBg: "bg-blue-400/30",
        },
        {
            title: "TOTAL DIGITAL MAGAZINES",
            value: "405",
            icon: Tablet,
            bgColor: "bg-gradient-to-br from-yellow-500 to-yellow-600",
            iconBg: "bg-yellow-400/30",
        },
        {
            title: "TOTAL E-BOOKS",
            value: "16",
            icon: Book,
            bgColor: "bg-gradient-to-br from-green-500 to-green-600",
            iconBg: "bg-green-400/30",
        },
        {
            title: "TOTAL AUTHORS",
            value: "2,070",
            icon: Users,
            bgColor: "bg-gradient-to-br from-purple-500 to-purple-600",
            iconBg: "bg-purple-400/30",
        },
        {
            title: "TOTAL VIEWS",
            value: "345",
            icon: TrendingUp,
            bgColor: "bg-gradient-to-br from-orange-500 to-orange-600",
            iconBg: "bg-orange-400/30",
        },
        {
            title: "TOTAL SPEECHES",
            value: "3",
            icon: Mic,
            bgColor: "bg-gradient-to-br from-orange-600 to-orange-700",
            iconBg: "bg-orange-500/30",
        },
        {
            title: "TOTAL TEAM MEMBERS",
            value: "29",
            icon: UserCheck,
            bgColor: "bg-gradient-to-br from-pink-500 to-pink-600",
            iconBg: "bg-pink-400/30",
        },
        {
            title: "TOTAL ONLINE SUBSCRIPTIONS",
            value: "6",
            icon: Wifi,
            bgColor: "bg-gradient-to-br from-teal-500 to-teal-600",
            iconBg: "bg-teal-400/30",
        },
        {
            title: "TOTAL APPROVED COMMENTS",
            value: "9",
            icon: MessageSquare,
            bgColor: "bg-gradient-to-br from-purple-600 to-purple-700",
            iconBg: "bg-purple-500/30",
        },
        {
            title: "TOTAL LANGUAGES",
            value: "11",
            icon: Globe,
            bgColor: "bg-gradient-to-br from-gray-500 to-gray-600",
            iconBg: "bg-gray-400/30",
        },
    ]

    return (
        <div className="min-h-screen bg-[#DEE1E6] p-6">
            {/* Header */}
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-red-600 mb-2">WELCOME TO HILAL DIGITAL WORLD</h1>
                <div className="w-full h-px bg-red-600"></div>
                <div className="w-px h-8 bg-blue-400 mx-auto mt-2"></div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 mx-auto">
                {stats.map((stat, index) => {
                    const IconComponent = stat.icon
                    return (
                        <div
                            key={index}
                            className={`${stat.bgColor} rounded-lg p-6 text-white shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden`}
                        >
                            {/* Background Icon */}
                            <div className={`absolute top-4 right-4 ${stat.iconBg} rounded-full p-3`}>
                                <IconComponent className="w-8 h-8 text-white/80" />
                            </div>

                            {/* Content */}
                            <div className="relative z-10">
                                <div className="text-sm font-medium mb-2 opacity-90">{stat.title}</div>
                                <div className="text-4xl font-bold mb-4">{stat.value}</div>
                                <button className="bg-black/20 hover:bg-black/30 text-white text-sm px-4 py-2 rounded transition-colors duration-200 flex items-center gap-2">
                                    View Detail
                                    <span className="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center">
                                        <span className="text-xs">→</span>
                                    </span>
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Footer */}
            <div className="text-left mt-12 text-sm text-gray-600">
                <p>
                    © Copyright 2025 Hilal ISPR. All rights reserved. Hilal Back Office Developed by{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                        Media Sniffers
                    </a>
                </p>
            </div>
        </div>
    )
}

export default AdminDashboard
