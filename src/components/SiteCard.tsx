'use client';

import Link from 'next/link';
import { Site } from '@/types';

interface SiteCardProps {
  site: Site;
  delay?: number;
}

export default function SiteCard({ site, delay = 0 }: SiteCardProps) {
  const accentColor = site.slug === 'gwalior' ? 'border-l-[#C8A96A]' : 'border-l-[#7A1F1F]';
  
  return (
    <Link href={`/site/${site.slug}`} className="group block">
      <div 
        className={`relative overflow-hidden rounded-xl sm:rounded-2xl bg-[#FFFBF5] border border-[#E5DCD0] border-l-4 ${accentColor} shadow-sm hover:shadow-xl transition-all duration-500`}
        data-aos="fade-up"
        data-aos-delay={delay}
      >
        <div className="aspect-[16/10] overflow-hidden img-zoom-container">
          <img
            src={site.image}
            alt={site.name}
            className="w-full h-full object-cover"
          />
          {/* Warm overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#2D2420]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* View icon on hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#7A1F1F]/80 flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-300">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="p-5 sm:p-8">
          <h3 className="font-['Playfair_Display'] text-xl sm:text-2xl text-[#2D2420] mb-2 sm:mb-3 group-hover:text-[#7A1F1F] transition-colors duration-300">
            {site.name}
          </h3>
          <p className="text-[#5C4F46] text-sm leading-relaxed mb-4 sm:mb-6">
            {site.shortDescription}
          </p>
          
          <span className="inline-flex items-center gap-2 text-sm font-medium text-[#7A1F1F] group-hover:gap-3 transition-all duration-300">
            Enter Experience
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
