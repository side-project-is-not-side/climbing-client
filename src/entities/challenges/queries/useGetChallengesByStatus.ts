'use client';

import { Challenge, Status } from '../apis';
import useSWRInfinite, { SWRInfiniteKeyLoader } from 'swr/infinite';

import { getUrlWithoutHost } from '@/shared/lib/getUrl';

export const useGetChallengesByStatus = (status: Status) => {
  const getKey: SWRInfiniteKeyLoader = (pageIndex, previousPageData) => {
    if (previousPageData && !previousPageData.length) return null;

    const url = getUrlWithoutHost('/v1/challenges', {
      status,
      page: String(pageIndex),
      limit: '10',
      sort: 'LATEST',
    });
    return url;
  };

  return useSWRInfinite<Challenge[]>(getKey);
};
