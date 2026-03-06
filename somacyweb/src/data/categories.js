import {
    Heart,
    Droplet,
    Activity,
    Shield,
    Bone,
    Thermometer,
    HeartPulse,
    Citrus,
    Leaf,
    Sparkles,
    Venus
} from "lucide-react";

export const LAB_CATEGORIES = [
    { id: 1, name: "Heart", icon: Heart, count: "15 Tests", bgColor: "bg-red-50", iconColor: "text-red-500", borderHover: "hover:border-red-400" },
    { id: 2, name: "Diabetes", icon: Droplet, count: "10 Tests", bgColor: "bg-blue-50", iconColor: "text-blue-500", borderHover: "hover:border-blue-400" },
    { id: 3, name: "Liver", icon: Activity, count: "12 Tests", bgColor: "bg-orange-50", iconColor: "text-orange-500", borderHover: "hover:border-orange-400" },
    { id: 4, name: "Kidney", icon: Shield, count: "8 Tests", bgColor: "bg-green-50", iconColor: "text-green-500", borderHover: "hover:border-green-400" },
    { id: 5, name: "Thyroid", icon: Thermometer, count: "5 Tests", bgColor: "bg-purple-50", iconColor: "text-purple-500", borderHover: "hover:border-purple-400" },
    { id: 6, name: "Bones", icon: Bone, count: "7 Tests", bgColor: "bg-yellow-50", iconColor: "text-yellow-600", borderHover: "hover:border-yellow-400" },
];

export const HEALTH_CATEGORIES = [
    { id: "diabetes", title: "Diabetes Care", icon: Droplet, colors: "bg-blue-100 text-blue-700 group-hover:bg-blue-600 group-hover:text-white", hoverText: "group-hover:text-blue-600" },
    { id: "cardiac", title: "Cardiac Health", icon: HeartPulse, colors: "bg-rose-100 text-rose-700 group-hover:bg-rose-600 group-hover:text-white", hoverText: "group-hover:text-rose-600" },
    { id: "vitamins", title: "Vitamins & Nutrition", icon: Citrus, colors: "bg-orange-100 text-orange-700 group-hover:bg-orange-600 group-hover:text-white", hoverText: "group-hover:text-orange-600" },
    { id: "ayurvedic", title: "Ayurvedic Essentials", icon: Leaf, colors: "bg-emerald-100 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white", hoverText: "group-hover:text-emerald-600" },
    { id: "personal", title: "Personal Care", icon: Sparkles, colors: "bg-purple-100 text-purple-700 group-hover:bg-purple-600 group-hover:text-white", hoverText: "group-hover:text-purple-600" },
    { id: "women", title: "Women's Health", icon: Venus, colors: "bg-pink-100 text-pink-700 group-hover:bg-pink-600 group-hover:text-white", hoverText: "group-hover:text-pink-600" },
];
