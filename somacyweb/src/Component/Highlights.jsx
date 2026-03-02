import React from 'react';
import { ShieldCheck, BadgePlus, Truck, Lock } from 'lucide-react';

const Highlights = () => {
    const features = [
        {
            icon: <ShieldCheck className="text-blue-600 w-6 h-6" />,
            title: "State Govt. Authorized",
            description: "Official RGHS partner with 100% compliant cashless billing infrastructure.",
            bgColor: "bg-blue-50"
        },
        {
            icon: <BadgePlus className="text-green-600 w-6 h-6" />,
            title: "Expert Pharmacists",
            description: "Multi-level prescription verification by certified clinical pharmacists.",
            bgColor: "bg-green-50"
        },
        {
            icon: <Truck className="text-orange-500 w-6 h-6" />,
            title: "Same-Day Express",
            description: "Lightning fast delivery across Jaipur, Jodhpur, and major Rajasthan hubs.",
            bgColor: "bg-orange-50"
        },
        {
            icon: <Lock className="text-red-500 w-6 h-6" />,
            title: "Data Sovereignty",
            description: "Your medical history and RGHS data are secured with 256-bit encryption.",
            bgColor: "bg-red-50"
        }
    ];

    return (
        <section className="py-12 bg-[#F8FAFC]">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <div className={`w-16 h-16 rounded-full ${feature.bgColor} flex items-center justify-center mb-6`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                            <p className="text-sm text-gray-500 leading-relaxed px-4">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Highlights;
