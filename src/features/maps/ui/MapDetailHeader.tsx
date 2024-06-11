'use client';

import React from 'react';

import { useRouter } from 'next/navigation';

import { Icon } from '@/shared/icons';

const MapDetailHeader = ({ slug }: { slug: string }) => {
  const router = useRouter();

  return (
    <header className="fixed inset-x-0 top-0 w-full h-[60px] px-5 flex justify-between items-center bg-neutral-700 z-10">
      <button type="button" onClick={() => router.push(`/map?id=${slug}`)}>
        <Icon name="ArrowBack" size="20" />
      </button>

      <button type="button" onClick={() => router.push('/map')}>
        <Icon name="Close" size="20" />
      </button>
    </header>
  );
};

export default MapDetailHeader;
