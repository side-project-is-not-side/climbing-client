import { Coordinates } from './types';

export const INITIAL_CENTER: Coordinates = [37.4979517, 127.0276188];

export const ZOOM_LEVEL = {
  국가: 6,
  시도: 9,
  시군구: 12,
  읍면동: 14,
  거리: 16,
  부동산: 20,
} as const;
