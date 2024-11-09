import React from 'react';
import { Book, BookOpen, Code, GraduationCap, PlaySquare, Library } from 'lucide-react';

// Import your assets (make sure the paths are correct)
import MinistryLogo from '../../assets/images/ministry.png';
import NSDClogo from '../../assets/images/India NSDC.png';
import StartupIndiaLogo from '../../assets/images/Startup.png';
import Background from '../../assets/images/bgsmall.jpg';

// Define types for FeatureCard props
interface FeatureCardProps {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    title: string;
    description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <Icon className="w-8 h-8 text-blue-500" />
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
    </div>
);

const Features = () => {
    const features = [
        {
            icon: GraduationCap,
            title: 'Created by IIT-IIM Alumni',
            description: "We've learnt from the best and strive to bring you the best"
        },
        {
            icon: BookOpen,
            title: 'A.I Integration',
            description: 'We have harnessed the power of A.I to enhance and assess your knowledge'
        },
        {
            icon: Code,
            title: 'In-app Coding',
            description: 'The app features in-app coding, eliminating the need for a laptop'
        },
        {
            icon: Book,
            title: 'Extensive E-books',
            description: 'Deepen your understanding and mastery of the skills'
        },
        {
            icon: PlaySquare,
            title: 'Recorded Lectures',
            description: 'Access lectures anywhere and anytime at your own pace'
        },
        {
            icon: Library,
            title: 'Flash Cards',
            description: 'Make learning convenient and fun using flash cards'
        }
    ];

    return (
        <div className="bg-[#2B9FDB] py-5 px-0 mx-auto mt-8 mb-12 relative">
            {/* Logos in the top section */}
            <div className="flex justify-between items-center bg-[#EBF8FF] py-6 px-4">
                <img
                    src={MinistryLogo}
                    alt="Government of India Ministry of Commerce and Industry"
                    className="h-12 md:h-16 lg:h-24 w-auto object-contain"
                />
                <img
                    src={NSDClogo}
                    alt="NSDC"
                    className="h-12 md:h-16 lg:h-24 w-auto object-contain"
                />
                <img
                    src={StartupIndiaLogo}
                    alt="#startupindia"
                    className="h-12 md:h-16 lg:h-24 w-auto object-contain"
                />
            </div>

            {/* Header with Recognition Logos */}
            <div className="max-w-7xl mx-auto mb-12 z-10 relative">
                <h2 className="text-3xl font-bold text-white text-center mb-1">
                    What Sets Us Apart?
                </h2>
            </div>
            {/* Features grid */}
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute right-0 top-1/4">
                <div className="w-12 h-12 border-4 border-white/20 rotate-45" />
            </div>

            <div className="absolute left-0 bottom-1/4">
                <div className="w-16 h-16 border-4 border-white/20 rotate-12" />
            </div>
            
            <div className="absolute top-0 bottom-1/4">
                <div className="w-16 h-16 border-4 border-white/20 rotate-12" />
            </div>

            <div className="absolute bottom-0 bottom-1/4">
                <div className="w-16 h-16 border-4 border-white/20 rotate-12" />
            </div>
            
            
        </div>
    );
};

export default Features;
