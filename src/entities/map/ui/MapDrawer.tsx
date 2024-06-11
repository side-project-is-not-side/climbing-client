'use client';

import React, { Suspense, useEffect } from 'react';

import dynamic from 'next/dynamic';
import { useRouter, useSearchParams } from 'next/navigation';

import LoadingSpinner from './LoadingSpinner';
import OrderedGyms from './OrderedGyms';
import SelectedGymCard from './SelectedGymCard';

import NearestGyms from '@/features/maps/ui/NearestGyms';
import { useDrawer } from '@/shared/drawer';

const Drawer = dynamic(() => import('@/shared/drawer/ui/Drawer'), { ssr: false });

function MapDrawer() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedGymId = searchParams.get('id');

  const { openState, increaseOpenState, onDragEnd } = useDrawer({
    defaultOpenState: selectedGymId ? 'half-open' : 'close',
    onClose: () => router.push('/map'),
  });

  const onIncreaseDragEnd = () => {
    if (openState === 'full-open' && selectedGymId) {
      const detailUrl = `/map/details/${selectedGymId}`;
      router.push(detailUrl);
    }
  };

  useEffect(() => {
    if (selectedGymId && openState === 'close') {
      increaseOpenState();
    }
  }, [selectedGymId]);

  return (
    <Drawer openState={openState} onDragEnd={onDragEnd} onAnimationComplete={onIncreaseDragEnd}>
      <Suspense fallback={<LoadingSpinner />}>
        {selectedGymId && <SelectedGymCard id={Number(selectedGymId)} />}
        {!selectedGymId && openState !== 'full-open' && <NearestGyms />}
        {!selectedGymId && openState === 'full-open' && <OrderedGyms />}
      </Suspense>
    </Drawer>
  );
}

export default MapDrawer;
