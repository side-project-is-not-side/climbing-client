'use client';

import React from 'react';

import { usePathname, useRouter } from 'next/navigation';

import { PATH_NAME } from '@/shared/constants';

function Header() {
  const path = usePathname();
  const router = useRouter();

  if (!PATH_NAME[path]) return null;

  return (
    <header className="fixed top-0 left-0 w-full h-[60px] bg-neutral-700">
      <div className="relative h-full mx-auto max-w-3xl text-neutral-white flex justify-center items-center">
        <button onClick={() => router.back()} className="absolute left-[20px]">
          뒤로가기
        </button>
        <h1>{PATH_NAME[path]}</h1>
      </div>
    </header>
  );
}

export default Header;
