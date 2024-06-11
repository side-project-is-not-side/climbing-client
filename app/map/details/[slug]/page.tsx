'use client';

import React from 'react';

import GymDetailInfo from '@/entities/gyms/ui/GymDetailInfo';
import { useGetGymDetailInfo } from '@/features/gyms/queries/useGetGymDetailInfo';

function DetailsPage({ params }: { params: { slug: string } }) {
  const id = params.slug;
  const { data, isLoading } = useGetGymDetailInfo(Number(id));

  if (!data || isLoading) return null;

  return <GymDetailInfo data={data} />;
}

export default DetailsPage;
