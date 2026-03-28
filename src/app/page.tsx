'use client';

import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';
import SiteCard from '@/components/SiteCard';
import { SITES } from '@/lib/api';

const features = [
  {
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Stories, Not Facts',
    description: 'Let the ancient walls speak to you through tales of emperors and artisans.',
    delay: 0
  },
  {
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    title: 'Immersive Journeys',
    description: 'Step into the past with guided experiences tailored to how you wish to explore.',
    delay: 200
  },
  {
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    title: 'Your Journey, Your Way',
    description: 'Craft a personal itinerary that honors your time, budget, and spirit.',
    delay: 400
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F5EFE6]">
      <Hero />

      <section className="py-16 sm:py-24 bg-[#FFFBF5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div 
            className="text-center mb-12 sm:mb-16"
            data-aos="fade-up"
          >
            <span className="text-[#C8A96A] text-xs sm:text-sm font-medium tracking-widest uppercase">Why Darshan 360</span>
            <h2 className="font-['Playfair_Display'] text-2xl sm:text-4xl text-[#2D2420] mt-3 sm:mt-4 mb-4 sm:mb-6">
              Rediscover History
            </h2>
            <p className="text-[#5C4F46] max-w-xl mx-auto leading-relaxed text-sm sm:text-base">
              We believe every stone has a story. Our approach brings these dormant tales back to life.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-8">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index} 
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={feature.delay}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div 
            className="text-center mb-12 sm:mb-16"
            data-aos="fade-up"
          >
            <span className="text-[#C8A96A] text-xs sm:text-sm font-medium tracking-widest uppercase">Begin Your Journey</span>
            <h2 className="font-['Playfair_Display'] text-2xl sm:text-4xl text-[#2D2420] mt-3 sm:mt-4 mb-4 sm:mb-6">
              Sacred Destinations Await
            </h2>
            <p className="text-[#5C4F46] max-w-lg mx-auto text-sm sm:text-base">
              Two timeless treasures of Madhya Pradesh, waiting to share their secrets with you.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-10 max-w-4xl sm:max-w-5xl mx-auto">
            {SITES.map((site, index) => (
              <SiteCard 
                key={site.slug} 
                site={site}
                delay={index * 200}
              />
            ))}
          </div>
        </div>
      </section>

      <section 
        className="py-16 sm:py-24 bg-[#7A1F1F] relative overflow-hidden"
        data-aos="fade-up"
      >
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-5" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 
            className="font-['Playfair_Display'] text-2xl sm:text-4xl text-white mb-4 sm:mb-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Craft Your Pilgrimage
          </h2>
          <p 
            className="text-[#E5DCD0] text-sm sm:text-lg mb-8 sm:mb-10 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Every journey transforms the traveler. Let us help you design a path that resonates with your spirit.
          </p>
          <a
            href="/planner"
            className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-10 py-3 sm:py-5 bg-[#C8A96A] text-[#2D2420] font-medium rounded-full hover:bg-[#D4BC85] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-sm sm:text-base"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            Plan Your Visit
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      <footer className="py-8 sm:py-12 bg-[#2D2420]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#8B7B70] text-xs sm:text-sm">
            © 2024 Darshan 360. Honoring India&apos;s living heritage.
          </p>
        </div>
      </footer>
    </div>
  );
}
