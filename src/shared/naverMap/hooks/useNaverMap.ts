'use client';

import { useRef, useState } from 'react';

import { INITIAL_CENTER, INITIAL_ZOOM, MIN_ZOOM } from '@/shared/naverMap/constants';
import { Coordinates, NaverMapOptions, TNaverMap } from '@/shared/naverMap/types';

type Props = {
  mapId?: string;
  initialCenter?: Coordinates;
  initialZoom?: number;
  minZoom?: number;
  onLoad?: (map: TNaverMap) => void;
};

const useNaverMap = ({
  mapId = 'map',
  initialZoom = INITIAL_ZOOM,
  initialCenter = INITIAL_CENTER,
  minZoom = MIN_ZOOM,
  onLoad,
}: Props) => {
  const mapElementRef = useRef<HTMLDivElement | null>(null);
  const [map, setMap] = useState<TNaverMap | null>(null);

  const initializeMap = () => {
    const mapOptions: NaverMapOptions = {
      center: new window.naver.maps.LatLng(...initialCenter),
      zoom: initialZoom,
      minZoom,
      scaleControl: false,
      mapDataControl: false,
      logoControlOptions: {
        position: naver.maps.Position.BOTTOM_LEFT,
      },
    };

    const newMap = new window.naver.maps.Map(mapId, mapOptions);
    setMap(newMap);

    if (onLoad) {
      onLoad(map);
    }
  };

  return { mapElementRef, initializeMap, map };
};
export default useNaverMap;
