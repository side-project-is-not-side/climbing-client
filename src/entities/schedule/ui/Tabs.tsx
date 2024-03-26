'use client';

import React from 'react';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

const CATEGORY: {
  [index: string]: string;
} = {
  schedule: '예정',
  complete: '완료',
};

function Tabs() {
  const searchParams = useSearchParams();

  const pathname = usePathname();

  const category = searchParams.get('category') ?? 'schedule';

  return (
    <nav>
      <ul className={`flex gap-[12px]`}>
        <li
          className={`${CATEGORY[category] === '예정' ? 'text-neutral-white' : 'text-neutral-400'} py-[8px] px-[16px] ${CATEGORY[category] === '예정' && 'border-b-[2px]'} }`}
        >
          <Link href={`${pathname}?category=schedule`}>예정</Link>
        </li>

        <li
          className={`${CATEGORY[category] === '완료' ? 'text-neutral-white' : 'text-neutral-400'} py-[8px] px-[16px] ${CATEGORY[category] === '완료' && 'border-b-[2px]'} }`}
        >
          <Link href={`${pathname}?category=complete`}>완료</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Tabs;
