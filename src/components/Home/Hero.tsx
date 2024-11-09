import React from 'react';
import TrainingCards from './TrainingCards';
import ImacImage from '../../assets/images/iMac.png';

const Hero: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center py-12 bg-blue-50">
      {/* Left Side Image Content */}
      <div className="flex justify-center p-4 rounded-md shadow-md">
        <img src={ImacImage} alt="iMac" className="w-[626px] h-[484px] object-contain bg-transparent border-none shadow-none" />
      </div>

      {/* Right Side Text and Training Cards */}
      <div className="space-y-6 md:space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Where The World<br />
          Learns To C<span className="text-[#2B9FDB]">o</span>de
        </h1>
        <p className="text-lg text-gray-600">
          Join millions of learners worldwide in mastering the art of programming
          through interactive courses and expert guidance.
        </p>
        {/* Training Cards Section */}
        <TrainingCards />
      </div>
    </div>
  );
};

export default Hero;
