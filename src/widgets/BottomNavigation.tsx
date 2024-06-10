'use client';

import React from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { twJoin } from 'tailwind-merge';

import { Icon, IconName } from '@/shared/icons';

const NAVIGATION_ITEMS: { iconName: IconName; pathname: string; text: string }[] = [
  { iconName: 'Home', pathname: '/', text: '홈' },
  { iconName: 'Near', pathname: '/map', text: '암장 찾기' },
  { iconName: 'Challenge', pathname: '/challenge', text: '암장 찾기' },
  { iconName: 'AccountCircle', pathname: '/my', text: '마이 페이지' },
];

function BottomNavigation() {
  const pathname = usePathname();

  return (
    <div className="drop-shadow-[0px_-4px_10px_rgba(0,0,0,0.30)] fixed left-0 bottom-0 z-20 w-full h-[80px] bg-neutral-700">
      <nav className="max-w-[768px] w-full h-full mx-auto">
        <ul className="flex items-center h-full text-neutral-white">
          {NAVIGATION_ITEMS.map((item) => (
            <li key={item.pathname} className="basis-1/3">
              <Link href={item.pathname} className="w-full h-full flex flex-col justify-center items-center">
                <Icon name={item.iconName} color={pathname === item.pathname ? '#ff5544' : undefined} />
                <span className={twJoin('font-bottom-tab', pathname === item.pathname && 'text-primary-400')}>
                  {item.text}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default BottomNavigation;
