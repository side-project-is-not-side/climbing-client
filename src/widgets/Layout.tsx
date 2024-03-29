'use client';

import React from 'react';

import { useParams, usePathname } from 'next/navigation';

import { twJoin } from 'tailwind-merge';

import { FULL_SCREEN_PATHS, PATH_NAME } from '@/shared/constants';

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const path = usePathname();
  const { slug } = useParams();

  const isFullScreen = FULL_SCREEN_PATHS.some((item) => item === path);

  console.log('path', path);
  return (
    <main
      className={`w-full bg-neutral-black min-h-full ${twJoin(!isFullScreen && 'pb-[80px]')} ${twJoin(((PATH_NAME[path] && !isFullScreen) || path === `/details/${slug}`) && 'pt-[60px]')} `}
    >
      <div className={`max-w-3xl min-w-[390px] mx-auto ${twJoin(!isFullScreen && 'px-5 pt-[30px] pb-[32px]')}`}>
        {children}
      </div>
    </main>
  );
}

export default Layout;
