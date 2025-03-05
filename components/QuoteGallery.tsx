'use client';

import React, { useState } from 'react';
import QuoteCard from './QuoteCard';
import QuoteDialog from './QuoteDialog';

const QuoteGallery = ({ locale }: { locale: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedQuote, setSelectedQuote] = useState<{ text: string, author: string, like: number, favorite: number, share: number } | null>(null);

  const quotes = [
    {
      'category': 'self_growth',
      'quote': [
        {
          'language': 'TH',
          'text': 'เวลาของคุณมีจำกัด อย่าเสียเวลาไปกับการใช้ชีวิตของคนอื่น',
          'author': 'Steve Jobs'
        },
        {
          'language': 'EN',
          'text': 'Your time is limited, so don’t waste it living someone else’s life.',
          'author': 'Steve Jobs'
        }
      ],
      "views": 889321,
      "like": 29902,
      "favorite": 22333,
      "share": 2931,
      "created_by": "admin",
      "created_at": "2021-01-01 00:00:00",
      "updated_by": "admin",
      "updated_at": "2021-01-01 00:00:00"
    },
    {
      'category': 'overcoming_failure',
      'quote': [
        {
          'language': 'TH',
          'text': 'ฉันไม่ได้ล้มเหลว ฉันแค่ค้นพบ 10,000 วิธีที่ไม่ได้ผล',
          'author': 'Thomas Edison'
        },
        {
          'language': 'EN',
          'text': 'I have not failed. I’ve just found 10,000 ways that won’t work.',
          'author': 'Thomas Edison'
        }
      ],
      "views": 231444,
      "like": 9992,
      "favorite": 1255,
      "share": 1000,
      "created_by": "admin",
      "created_at": "2021-01-01 00:00:00",
      "updated_by": "admin",
      "updated_at": "2021-01-01 00:00:00"
    },
    {
      'category': 'self_growth',
      'quote': [
        {
          'language': 'TH',
          'text': 'ความสำเร็จไม่ได้ขึ้นอยู่กับโชคดี แต่ขึ้นอยู่กับความพยายามที่ไม่ย่อท้อ',
          'author': 'Anonymous'
        },
        {
          'language': 'EN',
          'text': 'Success is not based on luck, but on relentless effort.',
          'author': 'Anonymous'
        }
      ],
      "views": 9850,
      "like": 3456,
      "favorite": 899,
      "share": 543,
      "created_by": "admin",
      "created_at": "2021-01-01 00:00:00",
      "updated_by": "admin",
      "updated_at": "2021-01-01 00:00:00"
    },
  ]

  const filteredQuotes = quotes.flatMap(category =>
    category.quote
      .filter(quote => quote.language === (locale === 'th' ? 'TH' : 'EN'))
      .map(quote => ({
        ...quote,
        views: category.views,
        like: category.like,
        favorite: category.favorite,
        share: category.share
      }))
  );

  const handleCardClick = (text: string, author: string, like: number, favorite: number, share: number) => {
    setSelectedQuote({ text, author, like, favorite, share });
    setIsOpen(true);
  };

  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4'>
        {filteredQuotes.map((quote, i) => (
          <QuoteCard
            index={i}
            key={quote.text}
            text={quote.text}
            author={quote.author}
            views={quote.views}
            like={quote.like}
            favorite={quote.favorite}
            share={quote.share}
            onClick={() => handleCardClick(quote.text, quote.author, quote.like, quote.favorite, quote.share)}
          />
        ))}
      </div>
      {selectedQuote && (
        <QuoteDialog
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          text={selectedQuote.text}
          author={selectedQuote.author}
          like={selectedQuote.like}
          favorite={selectedQuote.favorite}
          share={selectedQuote.share}
          index={filteredQuotes.findIndex(quote => quote.text === selectedQuote.text)}
        />
      )}
    </>
  );
};

export default QuoteGallery;