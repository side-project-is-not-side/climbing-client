import { useSearchParams } from 'next/navigation';

import { Challenge, Status } from '../apis';
import useSWRInfinite, { SWRInfiniteKeyLoader } from 'swr/infinite';

import { getUrlWithoutHost } from '@/shared/lib/getUrl';

export const useGetChallengesByStatus = () => {
  const params = useSearchParams();
  const status = params.get('status') as Status;

  const getKey: SWRInfiniteKeyLoader = (pageIndex, previousPageData) => {
    if (previousPageData && !previousPageData.length) return null;

    const url = getUrlWithoutHost('/v1/challenges', {
      status,
      page: String(pageIndex),
      limit: '10',
    });
    return url;
  };

  return useSWRInfinite<Challenge[]>(getKey, { revalidateFirstPage: false });
};
