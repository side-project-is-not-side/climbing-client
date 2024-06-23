'use client';

import React from 'react';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import { twMerge } from 'tailwind-merge';

type Props = {
  text: string;
  value: string;
};

function ChallengeTab({ text, value }: Props) {
  const params = useSearchParams();
  const type = params.get('type');

  const href = `/challenge?type=${value}`;
  const isActive = type === value;

  return (
    <li>
      <Link
        href={href}
        className={twMerge(
          'relative block w-[70px] h-10 font-text-1 text-neutral-400 text-center',
          isActive &&
            'font-header-2 text-neutral-white after:absolute after:h-0.5 after:bottom-0 after:w-full after:inset-x-0 after:mx-auto after:bg-neutral-white',
        )}
      >
        {text}
      </Link>
    </li>
  );
}

export default ChallengeTab;
