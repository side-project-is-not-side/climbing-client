'use client';

import { useRef } from 'react';

import { Challenge, Status } from '../apis';
import useSWRInfinite, { SWRInfiniteKeyLoader } from 'swr/infinite';

import { getUrlWithoutHost } from '@/shared/lib/getUrl';

export const useGetChallengesByStatus = (status: Status) => {
  const initialRenderRef = useRef(true);

  const getKey: SWRInfiniteKeyLoader = (pageIndex, previousPageData) => {
    if (previousPageData && !previousPageData.length) return null;
    if (initialRenderRef.current) {
      initialRenderRef.current = false;
      return null;
    }

    const url = getUrlWithoutHost('/v1/challenges', {
      status,
      page: String(pageIndex),
      limit: '10',
      sort: 'LATEST',
    });
    return url;
  };

  return useSWRInfinite<Challenge[]>(getKey, { suspense: true, revalidateOnMount: true, fallbackData: [[]] });
};
