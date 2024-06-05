'use client';

import React from 'react';

import { useParams, usePathname, useRouter } from 'next/navigation';

import { PATH_NAME } from '@/shared/constants';
import { Icon } from '@/shared/icons';

function Header() {
  const path = usePathname();

  const { slug } = useParams<{ slug: string }>();

  const router = useRouter();

  if (path === '/' || path.includes('/map/details')) return null;

  return (
    <header className="fixed top-0 left-0 w-full h-[60px] bg-neutral-700 z-10">
      <div className="relative h-full mx-auto max-w-3xl text-neutral-white flex justify-center items-center">
        {path === `/details/${slug}` && (
          <button onClick={() => router.back()} className="absolute left-[20px]">
            <Icon name="ArrowBack" size="16"></Icon>
          </button>
        )}

        <h1>{PATH_NAME[path]}</h1>
      </div>
    </header>
  );
}

export default Header;
