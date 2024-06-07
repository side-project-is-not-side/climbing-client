'use client';

import React from 'react';

import { useParams, usePathname } from 'next/navigation';

import { MapDetailHeader } from '@/features/maps/ui';
import { PATH_NAME } from '@/shared/constants';

function Header() {
  const path = usePathname();

  const { slug } = useParams<{ slug: string }>();

  if (path === '/') return null;
  if (path.includes('/map/details')) return <MapDetailHeader slug={slug} />;
  return (
    <header className="fixed top-0 left-0 w-full h-[60px] bg-neutral-700 z-10">
      <div className="relative h-full mx-auto max-w-3xl text-neutral-white flex justify-center items-center">
        <h1>{PATH_NAME[path]}</h1>
      </div>
    </header>
  );
}

export default Header;
