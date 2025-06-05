import {
    Facebook,
    Youtube,
    Music2,
    Instagram,
    ChevronRight,
    User2Icon,
    User,
} from "lucide-react";

const footerSections = [
    {
        title: "USEFUL INFO LINKS",
        icon: "⛶",
        links: [
            "ISPR",
            "Pakistan Army",
            "Pakistan Navy",
            "Pakistan Airforce",
            "Youtube - Hilal Digital",
            "Instagram - Hilal Digital",
            "Tiktok - Hilal Digital",
        ],
    },
    {
        title: "ADVERTISEMENTS",
        icon: "📢",
        links: [
            "Post an Add",
            "Adds Renew",
            "Price of Advertisements",
            "Adds Closed",
            "Monthly or Yearly",
            "Trial Adds",
            "Add Making",
        ],
    },
    {
        title: "HILAL PAGES",
        icon: '👤',
        links: [
            "About Us",
            "Contribute",
            "Subscribe",
            "Advertise",
            "Be a Member",
            "Career",
        ],
    },
];

const bottomLinks = ["Home", "FAQ", "Support"];

const socialIcons = [
    { Icon: Facebook, href: "#" },
    { Icon: Youtube, href: "#" },
    { Icon: Music2, href: "#" },
    { Icon: Instagram, href: "#" },
];

const ListItem = ({ text }) => (
    <li className="flex items-center text-gray-300 hover:text-white cursor-pointer">
        <ChevronRight className="w-3 h-3 mr-2" />
        {text}
    </li>
);

const FooterSection = ({ title, icon, links }) => (
    <div>
        <h3 className="text-lg font-semibold mb-4 border-t   flex justify-between  pt-4  items-center">
            {title}
            {icon && <span className="ml-2 w-4 h-4 text-sm">{icon}</span>}
        </h3>
        <ul className="space-y-2 text-sm opacity-70">
            {links.map((link, idx) => (
                <ListItem key={idx} text={link} />
            ))}
        </ul>
    </div>
);

export default function Footer() {
    return (
        <footer className="bg-black text-white pt-6 pb-2 px-6">
            <div className="ml-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-6">
                    {/* About Us */}
                    <div>
                        <div className="flex mb-4 border-t pt-4 justify-between">
                            <h3 className="text-lg font-semibold  border-gray-600">ABOUT US</h3>
                            <h3 className="text-lg font-semibold  border-gray-600">⛶</h3>
                        </div>

                        <p className="text-gray-200 opacity-70 text-sm leading-relaxed mb-4">
                            ISPR Publications started as weekly Urdu Magazine in 1948 under the name 'Mujahid' that holds the
                            distinction of featuring congratulatory messages from the Founder of Pakistan and other prominent civil
                            and military leaders in its early editions. Capturing historical moments...
                        </p>
                        <button className="text-gray-200 opacity-70 text-sm  mb-4 flex items-center">
                            Read More
                            <span className="flex items-center ml-1">
                                <span>{'>'}</span>
                                <span>{'>'}</span>
                            </span>
                        </button>

                        <div className="space-y-2 text-sm text-gray-300 opacity-70">
                            {["Hilal Road, Rawalpindi, PK", "hilalengish@gmail.com", "051-5104118"].map((item, idx) => (
                                <div key={idx} className="flex items-center">
                                    <span className="w-2 h-2 bg-white rounded-full mr-3" />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Other Sections */}
                    {footerSections.map((section, idx) => (
                        <FooterSection
                            key={idx}
                            title={section.title}
                            icon={section.icon}
                            links={section.links}
                        />
                    ))}
                </div>

                {/* Bottom Footer */}
                <div className=" border-gray-600  flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center text-sm text-gray-300 ">
                        <span className="text-white mr-2  text-2xl">©</span>
                        <span className="text-red-500 mr-1">2017</span>
                        <span className="text-red-500 mr-1">Hilal Publications</span>
                        <span>All Rights Reserved</span>
                    </div>

                    <div className="flex items-center space-x-4 ml-auto">
                        <div className="flex items-center space-x-2 text-sm text-gray-300">
                            {bottomLinks.map((link, idx) => (
                                <span key={idx} className="flex items-center space-x-2">
                                    {idx > 0 && <span>|</span>}
                                    <a href="#" className="hover:text-white">
                                        {link}
                                    </a>
                                </span>
                            ))}
                        </div>

                        <div className="flex items-center space-x-2 bg-red-600 ml-auto">
                            {socialIcons.map(({ Icon, href }, idx) => (
                                <a
                                    key={idx}
                                    href={href}
                                    className=" p-3 rounded hover:bg-red-700 transition-colors"
                                >
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
