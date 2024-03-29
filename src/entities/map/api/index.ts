import { Bounds } from './types';

import { getUrl } from '@/shared/lib/getUrl';

export const getNearByBoulderingGyms = async (bounds: Bounds | undefined) => {
  if (!bounds) return;
  const ENDPOINT = 'api/bouldering-gym/around';

  const url = getUrl(ENDPOINT, bounds);
  return await fetch(url, { cache: 'no-store' }).then((res) => res.json());
};
