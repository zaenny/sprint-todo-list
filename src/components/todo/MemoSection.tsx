import React from 'react';
import memoImg from '@/assets/image/memoImg.png';
import Image from 'next/image';

interface MemoSectionProps {
  className?: string;
  memo?: string | null;
  onChange: (value: string) => void;
  disabled?: boolean;
}

const MemoSection = ({
  className,
  memo,
  onChange,
  disabled,
}: MemoSectionProps) => {
  return (
    <div
      className={`rounded-24 relative min-h-320 overflow-hidden ${className}`}
    >
      <Image src={memoImg} fill alt="메모 배경" className="object-cover" />

      <div className="relative z-10 h-full overflow-y-auto p-24">
        <h3 className="mb-16 text-center font-extrabold text-amber-800">
          Memo
        </h3>
        <textarea
          value={memo || ''}
          placeholder="메모를 작성해주세요"
          className="min-h-240 w-full resize-none leading-relaxed whitespace-pre-wrap placeholder:text-slate-400"
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
        ></textarea>
      </div>
    </div>
  );
};

export default MemoSection;
