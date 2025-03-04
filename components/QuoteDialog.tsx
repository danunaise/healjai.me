// components/QuoteDialog.tsx
'use client';

import React, { useState } from 'react';
import {
  Dialog,
  DialogPanel,
} from '@headlessui/react';
import { X } from 'lucide-react';

interface QuoteDialogProps {
  isOpen: boolean;
  onClose: () => void;
  text: string;
  author: string;
}

const QuoteDialog: React.FC<QuoteDialogProps> = ({ isOpen, onClose, text, author }) => {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [shared, setShared] = useState(false);

  return (
    <Dialog open={isOpen} onClose={onClose} className='relative z-50'>
      <div className='fixed inset-0 flex w-screen items-center bg-black bg-opacity-60 justify-center p-4'>
        <DialogPanel className='relative max-w-2xl w-full rounded-3xl -rotate-1 bg-blue-50 p-8'>
          <button
            className='absolute top-4 right-4 rounded-full bg-white bg-opacity-80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-800 p-2'
            onClick={onClose}
          >
            <X className='h-5 w-5' />
          </button>
          <div className='flex flex-col gap-6'>
            <div className='p-3 rounded-full bg-white bg-opacity-80 dark:bg-gray-700text-primary w-fit'>
              <svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px' fill='currentColor'>
                <path d='M240-400h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm80-80v-720h640v480H160Zm0-480v480-480Z' />
              </svg>
            </div>
            <div>
              <p className='text-2xl font-medium mb-4 dark:text-slate-900'>
                "{text}"
              </p>
              <p className='text-lg text-muted-foreground text-slate-400 dark:text-slate-700'>
                — {author}
              </p>
            </div>
            <div className='flex justify-between items-center pt-4 border-t border-black dark:border-white'>
              <div className='flex gap-2'>
                <button
                  className='flex items-center cursor-pointer text-gray-600 dark:text-gray-400'
                  onClick={() => setLiked(!liked)}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    height='24px'
                    viewBox='0 -960 960 960'
                    width='24px'
                    fill={liked ? '#ff5a5f' : 'currentColor'}
                    className='mr-1 transition-colors duration-200'
                  >
                    <path d='m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z' />
                  </svg>
                  <span className={liked ? 'text-red-500' : ''}>
                    {liked ? '5.3k' : '5.2k'}
                  </span>
                </button>
                <button
                  className='flex items-center cursor-pointer text-gray-600 dark:text-gray-400'
                  onClick={() => setBookmarked(!bookmarked)}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    height='24px'
                    viewBox='0 -960 960 960'
                    width='24px'
                    fill={bookmarked ? '#facc15' : 'currentColor'}
                    className='mr-0 transition-colors duration-200'
                  >
                    <path d='M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z' />
                  </svg>
                  <span className={bookmarked ? 'text-yellow-500' : ''}>
                    {bookmarked ? '1.3k' : '1.2k'}
                  </span>
                </button>
                <button
                  className='flex items-center cursor-pointer text-gray-600 dark:text-gray-400'
                  onClick={() => setShared(!shared)}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    height='24px'
                    viewBox='0 -960 960 960'
                    width='24px'
                    fill={shared ? '#facc15' : 'currentColor'}
                    className='mr-0 hover:cursor-pointer'
                  >
                    <path d='M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z' />
                  </svg>
                  <span className={shared ? 'text-yellow-500' : ''}>
                    {shared ? '1.3k' : '1.2k'}
                  </span>
                </button>
              </div>
              <div className='text-sm text-muted-foreground dark:text-slate-700'>
                <p className='bg-gray-100 px-2 py-1 rounded-xl'>motivation</p>
              </div>
            </div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default QuoteDialog;