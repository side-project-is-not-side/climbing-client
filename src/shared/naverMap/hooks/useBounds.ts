import { useEffect, useRef, useState } from 'react';

import { TNaverMap } from '../types';

import { Bounds } from '@/entities/map/api/types';

const DELAY = 500;

export const useBounds = (map: TNaverMap | null) => {
  const [bounds, setBounds] = useState<Bounds>();
  const timer = useRef<ReturnType<typeof setTimeout>>();

  const handleBoundChange = (bounds: naver.maps.Bounds) => {
    // @ts-expect-error naver maps api가 제공하는 naver.maps.Bounds의 타입이 any이기 때문에 에러가 발생합니다.
    const { _max, _min } = bounds;
    const { _lat: maxLatitude, _lng: maxLongitude } = _max;
    const { _lat: minLatitude, _lng: minLongitude } = _min;

    setBounds({
      maxLatitude: String(maxLatitude),
      maxLongitude: String(maxLongitude),
      minLatitude: String(minLatitude),
      minLongitude: String(minLongitude),
    });
  };

  const handleBoundsChangeWithDebounce = (bounds: naver.maps.Bounds) => {
    if (timer) {
      clearTimeout(timer.current);
    }

    const newTimer = setTimeout(() => {
      handleBoundChange(bounds);
    }, DELAY);

    timer.current = newTimer;
  };

  useEffect(() => {
    if (map) {
      const currentBounds = map.getBounds();
      handleBoundChange(currentBounds);

      naver.maps.Event.addListener(map, 'bounds_changed', handleBoundsChangeWithDebounce);
    }
  }, [map]);

  return bounds;
};
