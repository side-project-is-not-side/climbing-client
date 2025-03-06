'use client';

import React from 'react';

import { useParams, usePathname } from 'next/navigation';

import { ThemeProvider } from 'styled-components';
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
  const isOnboarding = path.includes('onboarding');
  const isMyPage = path.includes('my');
  const isFullScreen = FULL_SCREEN_PATHS.includes(path);
  const isDetailPage = path === `/details/${slug}`;
  const isSpecialPage = PATH_NAME[path] && !isFullScreen;
  const isServicePage = path.includes('services');

  const mainClassName = twMerge(
    'w-full min-h-full overflow-auto bg-neutral-700',
    !isFullScreen && 'pb-[80px]',
    (isSpecialPage || isDetailPage) && !isFullScreen && 'pt-[60px]',
    (isMain || isOnboarding || isServicePage) && 'bg-[#EEEAE5]',
    isMyPage && 'bg-grayscale-800',
  );

  const containerClassName = twMerge('max-w-3xl w-full mx-auto', !isFullScreen && 'px-5 pt-[30px] pb-[32px]');

  return (
    <ThemeProvider theme={{}}>
      <main className={mainClassName}>
        <div className={containerClassName}>{children}</div>
      </main>
    </ThemeProvider>
  );
}

export default Layout;
