'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { useRouter } from 'next/navigation'; // ใช้สำหรับเปลี่ยนภาษาด้วย URL

interface NavbarClientProps {
  title: string;
  locale: string;
}

const NavbarClient: React.FC<NavbarClientProps> = ({ title, locale }) => {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLanguageChange = (lang: 'th' | 'en') => {
    // เปลี่ยนภาษาด้วยการ redirect ไป URL ใหม่
    router.push(
      `/${lang}${window.location.pathname.replace(/^\/(en|th)/, '')}`
    );
  };

  const toggleDarkMode = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className='flex justify-between h-16'>
      <div className='flex items-center'>
        <Link href='/'>
          <h1 className='text-2xl font-semibold text-gray-800 dark:text-white'>
            {title}
          </h1>
        </Link>
        <small className='ml-2'>v.1.0.1</small>
      </div>
      <div className='flex items-center space-x-2'>
        <Link
          href='/insertQuote'
          className='text-gray-600 hover:text-blue-400 dark:text-gray-300 dark:hover:text-blue-400 transition-colors'
        >
          <svg
            className='h-7 w-7'
            xmlns='http://www.w3.org/2000/svg'
            height='24px'
            viewBox='0 -960 960 960'
            width='24px'
            fill='currentColor'
          >
            <path d='M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z' />
          </svg>
        </Link>
        <Menu as='div' className='relative'>
          <MenuButton className='flex items-center pl-2 pr-0.5 py-1 rounded-md outline-none border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors'>
            <span className='flex items-center text-sm font-medium text-gray-600 dark:text-gray-300'>
              {locale === 'th' ? (
                <Image src='/thailand.png' alt='' width={19} height={19} />
              ) : (
                <Image src='/united-states.png' alt='' width={19} height={19} />
              )}
              <svg
                className='ml-1 h-4 w-4'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                  clipRule='evenodd'
                />
              </svg>
            </span>
          </MenuButton>
          <MenuItems className='absolute right-0 mt-2 w-32 origin-top-right rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10'>
            <MenuItem>
              <button
                onClick={() => handleLanguageChange('th')}
                className='block w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 hover:rounded-t-md dark:hover:bg-gray-700'
              >
                <div className='flex items-center space-x-2'>
                  <Image src='/thailand.png' alt='' width={16} height={16} />
                  <span>ภาษาไทย</span>
                </div>
              </button>
            </MenuItem>
            <MenuItem>
              <button
                onClick={() => handleLanguageChange('en')}
                className='block w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 hover:rounded-b-md dark:hover:bg-gray-700'
              >
                <div className='flex items-center space-x-2'>
                  <Image
                    src='/united-states.png'
                    alt=''
                    width={16}
                    height={16}
                  />
                  <span>English</span>
                </div>
              </button>
            </MenuItem>
          </MenuItems>
        </Menu>
        <button
          onClick={toggleDarkMode}
          className='flex items-center rounded-full p-1 hover:bg-gray-200 border border-none outline-none dark:border-gray-600 transition-colors'
        >
          <span className='text-sm font-medium text-gray-600 dark:text-gray-300'>
            {mounted ? (
              theme === 'dark' ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  height='24px'
                  viewBox='0 -960 960 960'
                  width='24px'
                  fill='currentColor'
                >
                  <path d='M480-28 346-160H160v-186L28-480l132-134v-186h186l134-132 134 132h186v186l132 134-132 134v186H614L480-28Zm0-252q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Zm0-80q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm0 220 100-100h140v-140l100-100-100-100v-140H580L480-820 380-720H240v140L140-480l100 100v140h140l100 100Zm0-340Z' />
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  height='24px'
                  viewBox='0 -960 960 960'
                  width='24px'
                  fill='currentColor'
                >
                  <path d='M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z' />
                </svg>
              )
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                height='24px'
                viewBox='0 -960 960 960'
                width='24px'
                fill='currentColor'
              >
                <path d='M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z' />
              </svg>
            )}
          </span>
        </button>
      </div>
    </div>
  );
};

export default NavbarClient;
