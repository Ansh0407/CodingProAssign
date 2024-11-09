import React from 'react';
import { Award } from 'lucide-react';
import Card from '../ui/cards';

const Recognition: React.FC = () => {
  const awards = [
    { title: "Best Coding Platform 2024" },
    { title: "Excellence in Education" },
    { title: "Industry Choice Award" }
  ];

  return (
    <div className="py-12">
      <h2 className="text-2xl font-bold text-center mb-8">Recognition</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {awards.map((award, index) => (
          <Card key={index} className="text-center">
            <Award className="w-8 h-8 text-[#2B9FDB] mx-auto mb-4" />
            <div className="font-semibold text-gray-800">{award.title}</div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Recognition;