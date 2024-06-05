'use client';

import React, { Suspense } from 'react';

import dynamic from 'next/dynamic';
import { useSearchParams } from 'next/navigation';

import SelectedGymCard from './SelectedGymCard';

import NearestGyms from '@/features/maps/ui/NearestGyms';
import { useDrawer } from '@/shared/drawer';

const Drawer = dynamic(() => import('@/shared/drawer/ui/Drawer'), { ssr: false });

function MapDrawer() {
  const { openState, onDragEnd } = useDrawer({ defaultOpenState: 'close' });

  const searchParams = useSearchParams();
  const selectedGymId = searchParams.get('id');

  return (
    <Drawer openState={openState} onDragEnd={onDragEnd}>
      {openState !== 'full-open' && (
        <Suspense>{selectedGymId ? <SelectedGymCard id={Number(selectedGymId)} /> : <NearestGyms />}</Suspense>
      )}
      {openState === 'full-open' && <Suspense></Suspense>}
    </Drawer>
  );
}

export default MapDrawer;
