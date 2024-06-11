import useSWRInfinite, { SWRInfiniteKeyLoader } from 'swr/infinite';

import { GymInfo } from '@/entities/map/api/types';
import { getUrlWithoutHost } from '@/shared/lib/getUrl';
import { INITIAL_CENTER } from '@/shared/naverMap/constants';
import { useGeoLocation } from '@/shared/naverMap/hooks/useGeolocation';

export const useGetGymsByLocation = () => {
  const { location } = useGeoLocation(true);
  const [latitude, longitude] = location ?? INITIAL_CENTER;

  const getKey: SWRInfiniteKeyLoader = (pageIndex, previousPageData) => {
    if (previousPageData && !previousPageData.length) return null;

    const url = getUrlWithoutHost('/v1/gyms/order-by-location', {
      latitude: String(latitude),
      longitude: String(longitude),
      page: String(pageIndex),
      limit: '10',
    });
    return url;
  };

  return useSWRInfinite<GymInfo[]>(getKey, { revalidateFirstPage: false });
};
