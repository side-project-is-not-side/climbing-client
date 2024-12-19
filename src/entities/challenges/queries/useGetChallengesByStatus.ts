'use client';

import { Challenge, CompleteChallenge, Status } from '../apis';
import useSWR from 'swr';

import { getUrlWithoutHost } from '@/shared/lib/getUrl';

type ChallengesByStatus<S extends Status> = S extends 'SUCCESS'
  ? CompleteChallenge[]
  : S extends 'ONGOING'
    ? Challenge[]
    : [];

export const useGetChallengesByStatus = <S extends Status>(status: S) => {
  const url = getUrlWithoutHost('/v1/challenges', {
    status,
    page: '0',
    limit: '10',
    sort: 'LATEST',
  });

  return useSWR<ChallengesByStatus<S>>(url, {
    suspense: true,
    revalidateOnMount: true,
    fallbackData: [] as ChallengesByStatus<S>,
  });
};
