'use client';

import { Mode, Audience } from '@/types';

interface ToggleBarProps {
  mode: Mode;
  audience: Audience;
  onModeChange: (mode: Mode) => void;
  onAudienceChange: (audience: Audience) => void;
}

const modes: { value: Mode; label: string; desc: string }[] = [
  { value: 'story', label: 'Story Mode', desc: 'Listen to tales' },
  { value: 'qa', label: 'Ask Questions', desc: 'Learn more' },
];

const audiences: { value: Audience; label: string }[] = [
  { value: 'kids', label: 'For Young Minds' },
  { value: 'general', label: 'For Everyone' },
  { value: 'expert', label: 'Deep Dive' },
];

export default function ToggleBar({
  mode,
  audience,
  onModeChange,
  onAudienceChange,
}: ToggleBarProps) {
  return (
    <div className="flex flex-col sm:flex-row flex-wrap gap-6 p-5 bg-[#FFFBF5] border-b border-[#E5DCD0]">
      <div className="flex items-center gap-3">
        <span className="text-sm text-[#8B7B70] font-medium">How would you like to explore?</span>
        <div className="flex bg-[#EDE6D9] rounded-xl p-1">
          {modes.map((m) => (
            <button
              key={m.value}
              onClick={() => onModeChange(m.value)}
              className={`px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${
                mode === m.value
                  ? 'bg-[#FFFBF5] text-[#7A1F1F] shadow-sm'
                  : 'text-[#5C4F46] hover:text-[#2D2420]'
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-sm text-[#8B7B70] font-medium">Audience:</span>
        <div className="flex bg-[#EDE6D9] rounded-xl p-1">
          {audiences.map((a) => (
            <button
              key={a.value}
              onClick={() => onAudienceChange(a.value)}
              className={`px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${
                audience === a.value
                  ? 'bg-[#FFFBF5] text-[#7A1F1F] shadow-sm'
                  : 'text-[#5C4F46] hover:text-[#2D2420]'
              }`}
            >
              {a.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
