// components/QuoteGallery.tsx
'use client';

import React, { useState } from 'react';
import QuoteCard from './QuoteCard';
import QuoteDialog from './QuoteDialog';

const QuoteGallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedQuote, setSelectedQuote] = useState<{ text: string; author: string } | null>(null);

  const quote = [
    {
      "category": "self_growth",
      "quotes": [
        {
          "language": "TH",
          "text": "เวลาของคุณมีจำกัด อย่าเสียเวลาไปกับการใช้ชีวิตของคนอื่น",
          "author": "Steve Jobs"
        },
        {
          "language": "EN",
          "text": "Your time is limited, so don’t waste it living someone else’s life.",
          "author": "Steve Jobs"
        }
      ]
    },
    {
      "category": "overcoming_failure",
      "quotes": [
        {
          "language": "TH",
          "text": "ฉันไม่ได้ล้มเหลว ฉันแค่ค้นพบ 10,000 วิธีที่ไม่ได้ผล",
          "author": "Thomas Edison"
        },
        {
          "language": "EN",
          "text": "I have not failed. I’ve just found 10,000 ways that won’t work.",
          "author": "Thomas Edison"
        }
      ]
    },
    {
      "category": "self_growth",
      "quotes": [
        {
          "language": "TH",
          "text": "ความสำเร็จไม่ได้ขึ้นอยู่กับโชคดี แต่ขึ้นอยู่กับความพยายามที่ไม่ย่อท้อ",
          "author": "Anonymous"
        },
        {
          "language": "EN",
          "text": "Success is not based on luck, but on relentless effort.",
          "author": "Anonymous"
        }
      ]
    },
  ]

  const handleCardClick = (text: string, author: string) => {
    setSelectedQuote({ text, author });
    setIsOpen(true);
  };

  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4'>
        {
          quote.map((quote) => (
            quote.quotes.map((quote, i) => (
              <QuoteCard
                index={i}
                key={quote.text}
                text={quote.text}
                author={quote.author}
                onClick={() => handleCardClick(quote.text, quote.author)}
              />
            ))
          ))
        }
      </div>
      {selectedQuote && (
        <QuoteDialog
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          text={selectedQuote.text}
          author={selectedQuote.author}
        />
      )}
    </>
  );
};

export default QuoteGallery;