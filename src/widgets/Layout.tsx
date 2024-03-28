'use client';

import React from 'react';

import { usePathname } from 'next/navigation';

import { twJoin } from 'tailwind-merge';

import { PATH_NAME } from '@/shared/constants';

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const path = usePathname();

  return (
    <main className={`w-full bg-neutral-black min-h-full pb-[80px] ${twJoin(PATH_NAME[path] && 'pt-[60px]')} `}>
      <div className="mx-auto px-5 max-w-3xl pt-[30px] pb-[32px]">{children}</div>
    </main>
  );
}

export default Layout;
