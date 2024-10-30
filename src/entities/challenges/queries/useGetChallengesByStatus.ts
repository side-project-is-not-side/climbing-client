'use client';

import { Challenge, Status } from '../apis';
import useSWR from 'swr';

import { getUrlWithoutHost } from '@/shared/lib/getUrl';

export const useGetChallengesByStatus = (status: Status) => {
  // const initialRenderRef = useRef(true);

  // const getKey: SWRInfiniteKeyLoader = (pageIndex, previousPageData) => {
  //   if (previousPageData && !previousPageData.length) return null;
  //   if (initialRenderRef.current) {
  //     initialRenderRef.current = false;
  //     return null;
  //   }

  //   const url = getUrlWithoutHost('/v1/challenges', {
  //     status,
  //     page: String(pageIndex),
  //     limit: '10',
  //     sort: 'LATEST',
  //   });
  //   return url;
  // };

  const url = getUrlWithoutHost('/v1/challenges', {
    status,
    page: '0',
    limit: '10',
    sort: 'LATEST',
  });

  return useSWR<Challenge[]>(url, {
    suspense: true,
    revalidateOnMount: true,
    fallbackData: [],
  });
};
