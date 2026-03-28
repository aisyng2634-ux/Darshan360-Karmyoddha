import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getSiteBySlug } from '@/lib/api';

interface SitePageProps {
  params: Promise<{ slug: string }>;
}

export default async function SitePage({ params }: SitePageProps) {
  const { slug } = await params;
  const site = getSiteBySlug(slug);

  if (!site) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#F5EFE6]">
      <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img
          src={site.image}
          alt={site.name}
          className="w-full h-full object-cover scale-110 animate-scale-in"
        />
        <div className="absolute inset-0 warm-overlay" />
        
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
          <div className="max-w-4xl mx-auto">
            <span className="text-[#C8A96A] text-sm font-medium tracking-widest uppercase animate-fade-down">
              Heritage Site
            </span>
            <h1 className="font-['Playfair_Display'] text-5xl sm:text-6xl text-white mt-3 mb-4 animate-fade-up">
              {site.name}
            </h1>
            <p className="text-[#E5DCD0] text-lg max-w-xl animate-fade-up delay-200">
              {site.shortDescription}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <p className="text-[#5C4F46] text-lg leading-relaxed mb-12 animate-fade-up delay-400">
          {site.description}
        </p>

        <Link
          href={`/guide/${slug}`}
          className="inline-flex items-center gap-3 px-10 py-5 bg-[#7A1F1F] text-white font-medium rounded-full hover:bg-[#9A3535] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 animate-fade-up delay-600"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          Begin Your Darshan
        </Link>
      </div>
    </div>
  );
}
