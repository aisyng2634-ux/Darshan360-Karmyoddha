import { notFound } from 'next/navigation';
import ChatContainer from '@/components/ChatContainer';
import { getSiteBySlug } from '@/lib/api';

interface GuidePageProps {
  params: Promise<{ slug: string }>;
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const site = getSiteBySlug(slug);

  if (!site) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#F5EFE6]">
      <div className="bg-[#FFFBF5] border-b border-[#E5DCD0] px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-[#7A1F1F]/10 flex items-center justify-center">
            <svg className="w-5 h-5 text-[#7A1F1F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <div>
            <h1 className="font-['Playfair_Display'] text-xl text-[#2D2420]">
              Your Guide to {site.name}
            </h1>
            <p className="text-sm text-[#8B7B70]">
              Listen to stories from the past
            </p>
          </div>
        </div>
      </div>
      <ChatContainer slug={slug} />
    </div>
  );
}
