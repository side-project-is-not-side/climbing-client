'use client';

import { Challenge, CompleteChallenge, Status } from '../apis';
import useSWR from 'swr';

import { getUrlWithoutHost } from '@/shared/lib/getUrl';

export const useGetChallengesByStatus = (status: Status) => {
  const url = getUrlWithoutHost('/v1/challenges', {
    status,
    page: '0',
    limit: '10',
    sort: 'LATEST',
  });

  return useSWR<Status extends 'SUCCESS' ? CompleteChallenge[] : Status extends 'ONGOING' ? Challenge[] : []>(url, {
    suspense: true,
    revalidateOnMount: true,
    fallbackData: [],
  });
};
