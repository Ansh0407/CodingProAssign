import React from 'react';
import { Users, BookOpen, Trophy } from 'lucide-react';
import Card from '../ui/cards';
import { TrainingCardProps } from '../../types';

const TrainingCard: React.FC<TrainingCardProps> = ({ icon: Icon, title, description }) => (
    <Card>
        <div className="flex items-start space-x-4">
            <div className="p-2 bg-blue-50 rounded-lg">
                <Icon className="w-6 h-6 text-[#2B9FDB]" />
            </div>
            <div>
                <h3 className="font-semibold text-gray-800">{title}</h3>
                <p className="text-sm text-gray-600 mt-1">{description}</p>
            </div>
        </div>
    </Card>
);

const TrainingCards: React.FC = () => {
    const cards = [
        {
            icon: Users,
            title: "Live Classes",
            description: "Interactive sessions with industry experts"
        },
        {
            icon: BookOpen,
            title: "Structured Learning",
            description: "Well-designed curriculum for all levels"
        },
        {
            icon: Trophy,
            title: "Practice Projects",
            description: "Real-world projects to build your portfolio"
        }
    ];

    return (
        <div className="grid gap-4">
            {cards.map((card, index) => (
                <TrainingCard key={index} {...card} />
            ))}
        </div>
    );
};

export default TrainingCards;