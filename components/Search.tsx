import React from 'react';
import { useTranslations } from 'next-intl';

const Search = () => {
  const t = useTranslations('search');
  return (
    <div className='flex mt-4'>
      <input
        className='px-4 py-2 w-full md:w-72 outline-none rounded-full shadow-lg dark:bg-gray-900 border dark:border-gray-800'
        type='text'
        placeholder={t('placeholder')}
      />
      {/* <button className='px-3 py-2 bg-sky-dark dark:bg-blue-600 text-white rounded-r-lg shadow-lg'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          height='24px'
          viewBox='0 -960 960 960'
          width='24px'
          fill='currentColor'
        >
          <path d='M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z' />
        </svg>
      </button> */}
    </div>
  );
};

export default Search;
