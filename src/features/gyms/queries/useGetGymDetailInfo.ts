import useSWR from 'swr';

import { GetGymDetailResponse } from '@/entities/gyms/api/type';
import { getUrlWithoutHost } from '@/shared/lib/getUrl';
import { INITIAL_CENTER } from '@/shared/naverMap/constants';
import { useGeoLocation } from '@/shared/naverMap/hooks/useGeolocation';

export const useGetGymDetailInfo = (id: number) => {
  const { location } = useGeoLocation(true);
  const [latitude, longitude] = location ?? INITIAL_CENTER;

  const url = getUrlWithoutHost(`/v1/gyms/${id}`, { latitude: String(latitude), longitude: String(longitude) });
  return useSWR<GetGymDetailResponse>(url, {
    keepPreviousData: true,
  });
};
