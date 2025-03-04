// components/QuoteCard.tsx
'use client';

import React from 'react';
import { Star } from 'lucide-react';

interface QuoteCardProps {
  text: string;
  author: string;
  index: number;
  onClick: () => void;
}

const QuoteCard: React.FC<QuoteCardProps> = ({ text, author, index, onClick }) => {
    const delay = `${index * 100}ms`;
  return (
    <div
      className='group relative overflow-hidden rounded-2xl cursor-pointer transition-all hover:shadow-xl 
      row-span-2 border border-transparent bg-white bg-opacity-90 dark:bg-gray-900 dark:bg-opacity-90'
      style={{
        animationDelay: delay,
        // transform: rotation,
      }}
      onClick={onClick}
    >
      <div className='p-6 h-full flex flex-col min-h-[250px]'>
        <div className='flex justify-between items-center mb-4'>
          <div className='p-2 rounded-full bg-white dark:bg-gray-700 dark:text-white'>
            <Star size={24} />
          </div>
        </div>
        <div className='flex-1 flex flex-col'>
          <p className='text-lg font-medium mb-2 flex-1 dark:text-gray-300'>
            "{text}"
          </p>
          <p className='text-sm text-muted-foreground text-slate-700 dark:text-gray-400'>
            — {author}
          </p>
        </div>
        <div className='mt-4 flex justify-between items-center text-xs text-muted-foreground dark:text-gray-400'>
          <span>200k views</span>
          <span>motivation</span>
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;