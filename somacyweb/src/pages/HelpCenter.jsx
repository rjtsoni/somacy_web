import {
    Search,
    UploadCloud,
    Wallet,
    Users,
    Pill,
    ClipboardList,
    ShoppingCart,
    FlaskConical,
    ChevronRight,
    Bell,
    SquarePlay,
    SquareArrowOutDownLeft
} from "lucide-react";
import ReactPlayer from "react-player";
import HelpDesk from "../Component/HelpDesk";
const HelpCenter = () => {
    return (
        <div className="max-w-7xl mx-auto mt-10 px-6">
            {/* SEARCH*/}
            <div className="bg-gradient-to-b from-blue-600 to-[#0F0B59] rounded-xl shadow-lg py-10 px-6 text-white text-center">
                <h2 className="text-3xl font-bold mb-2">
                    How can we help you with RGHS today?
                </h2>
                <p className="text-sm text-blue-100 mb-6">
                    Find detailed policy information, user guides, and medicine lists for
                    the Rajasthan Government Health Scheme.
                </p>
                <div className="flex items-center bg-white rounded-lg overflow-hidden max-w-xl mx-auto shadow">
                    <div className="pl-4 text-gray-400">
                        <Search size={18} />
                    </div>
                    <input
                        type="text"
                        placeholder="Search for RGHS policies, guides, or medicine lists..."
                        className="flex-1 px-3 py-2 outline-none text-gray-700 text-sm"
                    />
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 text-sm font-medium">
                        Search
                    </button>
                </div>
            </div>
            {/* POPULAR TOPICS */}
            <h4 className="flex items-center gap-2 font-semibold text-lg my-2">Popular Topics</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-white border rounded-xl p-6 hover:shadow-md transition">
                    <div className="bg-blue-50 w-10 h-10 flex items-center justify-center rounded-lg mb-3">
                        <UploadCloud className="text-blue-600 w-5 h-5" />
                    </div>
                    <h4 className="font-semibold">Upload Prescriptions</h4>
                    <p className="text-sm text-gray-500">
                        Step-by-step upload guide for new orders
                    </p>
                </div>
                <div className="bg-white border rounded-xl p-6 hover:shadow-md transition">
                    <div className="bg-blue-50 w-10 h-10 flex items-center justify-center rounded-lg mb-3">
                        <Wallet className="text-blue-600 w-5 h-5" />
                    </div>
                    <h4 className="font-semibold">Wallet Limits</h4>
                    <p className="text-sm text-gray-500">
                        Understanding your annual benefit limits
                    </p>
                </div>
                <div className="bg-white border rounded-xl p-6 hover:shadow-md transition">
                    <div className="bg-blue-50 w-10 h-10 flex items-center justify-center rounded-lg mb-3">
                        <Users className="text-blue-600 w-5 h-5" />
                    </div>
                    <h4 className="font-semibold">Family Members</h4>
                    <p className="text-sm text-gray-500">
                        How to add or update dependent information
                    </p>
                </div>
                <div className="bg-white border rounded-xl p-6 hover:shadow-md transition">
                    <div className="bg-blue-50 w-10 h-10 flex items-center justify-center rounded-lg mb-3">
                        <Pill className="text-blue-600 w-5 h-5" />
                    </div>
                    <h4 className="font-semibold">Generic vs Branded</h4>
                    <p className="text-sm text-gray-500">
                        RGHS policies on medicine types
                    </p>
                </div>
            </div>
            {/* MEDIA PLAYER */}
            <div className="flex justify-between items-center my-4">
                <h4 className="flex items-center gap-2 font-semibold text-lg">
                    <SquarePlay className="text-blue-600 w-5 h-5" />
                    Video Tutorials
                </h4>
                <a
                    href="#"
                    className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                    View All Tutorials
                    <SquareArrowOutDownLeft className="w-4 h-4" />
                </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white border rounded-xl overflow-hidden shadow-sm p-3">
                    <ReactPlayer
                        src="https://www.youtube.com/watch?v=jNQXAC9IVRw"
                        width="100%"
                        height="200px"
                        controls
                    />
                    <h5 className="font-semibold mt-3">
                        How to use the RGHS App
                    </h5>
                    <p className="text-sm text-gray-500">
                        Navigate your account and access digital card
                    </p>
                </div>
                <div className="bg-white border rounded-xl overflow-hidden shadow-sm p-3">
                    <ReactPlayer
                        src="https://www.youtube.com/watch?v=jNQXAC9IVRw"
                        width="100%"
                        height="200px"
                        controls
                    />
                    <h5 className="font-semibold mt-3">
                        Uploading your first prescription
                    </h5>
                    <p className="text-sm text-gray-500">
                        Clear photography and submission tips
                    </p>
                </div>
                <div className="bg-white border rounded-xl overflow-hidden shadow-sm p-3">
                    <ReactPlayer
                        src="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                        width="100%"
                        height="200px"
                        controls
                    />
                    <h5 className="font-semibold mt-3">
                        Understanding your limit
                    </h5>
                    <p className="text-sm text-gray-500">
                        How wallet deductions and refills work
                    </p>
                </div>
            </div>
            {/* HELP SECTION*/}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10 mb-10">
                {/* LEFT SIDE */}
                <div className="lg:col-span-2 space-y-8">
                    <div>
                        <h3 className="flex items-center gap-2 font-semibold text-lg">
                            <ClipboardList className="text-blue-600 w-5 h-5" />
                            Enrollment & Eligibility
                        </h3>
                        <ul className="mt-3 space-y-3 text-gray-700">
                            <li className="flex justify-between items-center hover:text-blue-600 hover:bg-gray-50 px-2 py-1 rounded cursor-pointer">
                                How to register for the first time?
                                <ChevronRight size={16} />
                            </li>
                            <li className="flex justify-between items-center hover:text-blue-600 hover:bg-gray-50 px-2 py-1 rounded cursor-pointer">
                                Documents required for family verification
                                <ChevronRight size={16} />
                            </li>
                            <li className="flex justify-between items-center hover:text-blue-600 hover:bg-gray-50 px-2 py-1 rounded cursor-pointer">
                                Eligibility criteria for pensioners
                                <ChevronRight size={16} />
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="flex items-center gap-2 font-semibold text-lg">
                            <ShoppingCart className="text-blue-600 w-5 h-5" />
                            Ordering Medicines
                        </h3>
                        <ul className="mt-3 space-y-3 text-gray-700">
                            <li className="flex justify-between items-center hover:text-blue-600 hover:bg-gray-50 px-2 py-1 rounded cursor-pointer">
                                Finding a nearby RGHS approved pharmacy
                                <ChevronRight size={16} />
                            </li>
                            <li className="flex justify-between items-center hover:text-blue-600 hover:bg-gray-50 px-2 py-1 rounded cursor-pointer">
                                What to do if medicine is out of stock?
                                <ChevronRight size={16} />
                            </li>
                            <li className="flex justify-between items-center hover:text-blue-600 hover:bg-gray-50 px-2 py-1 rounded cursor-pointer">
                                Track your prescription delivery
                                <ChevronRight size={16} />
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="flex items-center gap-2 font-semibold text-lg">
                            <FlaskConical className="text-blue-600 w-5 h-5" />
                            Lab Tests & Diagnostics
                        </h3>
                        <ul className="mt-3 space-y-3 text-gray-700">
                            <li className="flex justify-between items-center hover:text-blue-600 hover:bg-gray-50 px-2 py-1 rounded cursor-pointer">
                                Book a home sample collection
                                <ChevronRight size={16} />
                            </li>
                            <li className="flex justify-between items-center hover:text-blue-600 hover:bg-gray-50 px-2 py-1 rounded cursor-pointer">
                                List of empanelled diagnostic centers
                                <ChevronRight size={16} />
                            </li>
                        </ul>
                    </div>
                </div>
                {/* RIGHT SIDE */}
                <div className="bg-white border rounded-xl p-6 h-fit shadow-sm">
                    <h3 className="flex items-center gap-2 font-semibold mb-4">
                        <Bell className="text-blue-600 w-5 h-5" />
                        Recent Updates
                    </h3>
                    <div className="space-y-4 text-sm">
                        <div>
                            <p className="text-blue-600 text-xs font-semibold">
                                CIRCULAR · OCT 24
                            </p>
                            <p className="font-medium">
                                Revision of medicine price lists for 2024-25
                            </p>
                            <p className="text-gray-400 text-xs">Published 2 days ago</p>
                        </div>
                        <div>
                            <p className="text-blue-600 text-xs font-semibold">
                                NEWS UPDATE
                            </p>
                            <p className="font-medium">
                                5 new hospitals added to empanelled list in Jaipur
                            </p>
                            <p className="text-gray-400 text-xs">Published 5 days ago</p>
                        </div>
                        <div>
                            <p className="text-blue-600 text-xs font-semibold">
                                IMPORTANT
                            </p>
                            <p className="font-medium">
                                Deadline extended for family member verification
                            </p>
                            <p className="text-gray-400 text-xs">
                                Published Oct 20, 2023
                            </p>
                        </div>
                    </div>
                    <button className="mt-6 w-full border border-blue-500 text-blue-600 py-2 rounded-lg hover:bg-blue-50">
                        View All Circulars
                    </button>
                </div>
            </div>
            <div className="mb-5">
                <HelpDesk />
            </div>
        </div>
    );
};

export default HelpCenter;