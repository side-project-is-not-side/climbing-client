'use client';

import React from 'react';

import useSWR from 'swr';

import { GetGymDetailResponse } from '@/entities/gyms/api/type';
import GymDetailInfo from '@/entities/gyms/ui/GymDetailInfo';
import { getUrlWithoutHost } from '@/shared/lib/getUrl';
import { INITIAL_CENTER } from '@/shared/naverMap/constants';
import { useGeoLocation } from '@/shared/naverMap/hooks/useGeolocation';

function DetailsPage({ params }: { params: { slug: string } }) {
  const id = params.slug;
  const { location } = useGeoLocation(true);
  const [latitude, longitude] = location ?? INITIAL_CENTER;

  const url = getUrlWithoutHost(`/v1/gyms/${id}`, { latitude: String(latitude), longitude: String(longitude) });
  const { data, isLoading } = useSWR<GetGymDetailResponse>(url);

  if (!data || isLoading) return null;

  return <GymDetailInfo data={data} />;
}

export default DetailsPage;
