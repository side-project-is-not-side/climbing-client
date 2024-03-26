'use client';

import React from 'react';

import { usePathname } from 'next/navigation';

import { PATH_NAME } from '@/shared/constants';

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const path = usePathname();

  return (
    <div className={`bg-[#151518] w-full ${PATH_NAME[path] && 'pt-[60px]'} pb-[80px]`}>
      <section className="mx-auto px-5 max-w-3xl pt-[30px] pb-[32px]">{children}</section>
    </div>
  );
}

export default Layout;
