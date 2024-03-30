'use client';

import React from 'react';

import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';

import { twJoin } from 'tailwind-merge';

import { Icon } from '@/shared/icons';

function BottomNavigation() {
  const pathname = usePathname();

  const { slug } = useParams();

  return (
    <div className="drop-shadow-[0px_-4px_10px_rgba(0,0,0,0.30)] fixed left-0 bottom-0  w-full h-[80px] bg-neutral-700">
      <nav className="max-w-[768px] w-full h-full mx-auto">
        <ul className="flex items-center h-full text-neutral-white">
          <Link href="/" className="basis-1/3 h-full flex flex-col justify-center items-center">
            <li className="text-[10px]  flex flex-col items-center">
              <Icon name="Home" color={pathname === '/' ? '#ff5544' : undefined} className="mb-[4px]"></Icon>
              <span className={twJoin(pathname === '/' && 'text-primary-400')}>홈</span>
            </li>
          </Link>

          <Link href="/map" className="basis-1/3 h-full flex flex-col justify-center items-center">
            <li className="text-[10px]  flex flex-col items-center">
              <Icon name="Near" color={pathname === '/map' ? '#ff5544' : undefined}></Icon>
              <span className={twJoin(pathname === '/map' && 'text-primary-400')}>암장 찾기</span>
            </li>
          </Link>

          <Link href="/schedule" className="basis-1/3 h-full flex flex-col justify-center items-center">
            <li className="text-[10px]  flex flex-col items-center">
              <Icon
                name="Calendar"
                color={pathname === '/schedule' || pathname === `/details/${slug}` ? '#ff5544' : undefined}
                className="mb-[4px]"
              ></Icon>
              <span
                className={twJoin((pathname === '/schedule' || pathname === `/details/${slug}`) && 'text-primary-400')}
              >
                세팅 일정
              </span>
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default BottomNavigation;
