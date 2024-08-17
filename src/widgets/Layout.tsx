'use client';

import React from 'react';

import { useParams, usePathname } from 'next/navigation';

import { twMerge } from 'tailwind-merge';

import { FULL_SCREEN_PATHS, PATH_NAME } from '@/shared/constants';

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const path = usePathname();
  const { slug } = useParams();

  const isMain = path === '/';
  const isFullScreen = FULL_SCREEN_PATHS.some((item) => item === path);
  const mainClassName = twMerge(
    'w-full min-h-full overflow-auto bg-neutral-700',
    !isFullScreen && 'pb-[80px]',
    ((PATH_NAME[path] && !isFullScreen) || path === `/details/${slug}`) && 'pt-[60px]',
    isMain && 'bg-[#EEEAE5]',
  );

  const containerClassName = twMerge('max-w-3xl w-full mx-auto', !isFullScreen && 'px-5 pt-[30px] pb-[32px]');

  return (
    <main className={mainClassName}>
      <div className={containerClassName}>{children}</div>
    </main>
  );
}

export default Layout;
