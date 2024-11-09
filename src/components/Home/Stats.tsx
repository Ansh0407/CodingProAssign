import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { number: "100K+", label: "Active Students" },
    { number: "1000+", label: "Expert Mentors" },
    { number: "95%", label: "Placement Rate" }
  ];

  return (
    <div className="py-12">
      <div className="grid grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-[#2B9FDB]">{stat.number}</div>
            <div className="text-sm md:text-base text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;