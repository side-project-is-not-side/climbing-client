import { Bounds, GetNearestGymsRequest } from './types';

import { getUrl } from '@/shared/lib/getUrl';

export const getNearByBoulderingGyms = async (bounds: Bounds | undefined) => {
  if (!bounds) return;
  const ENDPOINT = 'v1/gyms/map';

  const url = getUrl(ENDPOINT, bounds);
  return await fetch(url, { cache: 'no-store' }).then((res) => res.json());
};

// 현재 위치로부터 가장 가까운 암장 두 개를 가져오는 API
export const getNearestGyms = async ({ latitude, longitude }: GetNearestGymsRequest) => {
  const ENDPOINT = 'api/gyms/map';

  const url = getUrl(ENDPOINT, { latitude: String(latitude), longitude: String(longitude) });
  return await fetch(url).then((res) => res.json());
};
