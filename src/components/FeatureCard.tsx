'use client';

import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export default function FeatureCard({ icon, title, description, delay = 0 }: FeatureCardProps) {
  return (
    <div 
      className="heritage-card p-5 sm:p-8 group cursor-pointer"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[#EDE6D9] flex items-center justify-center text-[#7A1F1F] mb-4 sm:mb-6 group-hover:bg-[#7A1F1F] group-hover:text-[#C8A96A] transition-all duration-500 transform group-hover:scale-110">
        {icon}
      </div>
      <h3 className="font-['Playfair_Display'] text-lg sm:text-xl text-[#2D2420] mb-2 sm:mb-3 group-hover:text-[#7A1F1F] transition-colors duration-300">
        {title}
      </h3>
      <p className="text-[#5C4F46] text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
