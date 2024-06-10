import { useEffect, useRef, useState } from 'react';

import { useBounds } from './useBounds';
import { useGeoLocation } from './useGeolocation';

import { INITIAL_CENTER, ZOOM_LEVEL } from '@/shared/naverMap/constants';
import { Coordinates, NaverMapOptions, TNaverMap } from '@/shared/naverMap/types';

type Props = {
  mapId?: string;
  initialCenter?: Coordinates;
  initialZoom?: number;
  minZoom?: number;
  onLoad?: (map: TNaverMap) => void;
  geolocationEnabled: boolean;
};

const useNaverMap = ({
  mapId = 'map',
  initialZoom = ZOOM_LEVEL.시도,
  initialCenter = INITIAL_CENTER,
  minZoom = ZOOM_LEVEL.시도,
  geolocationEnabled,
  onLoad,
}: Props) => {
  const mapElementRef = useRef<HTMLDivElement | null>(null);
  const [map, setMap] = useState<TNaverMap | null>(null);
  const bounds = useBounds(map);
  const { location, reload, isGeolocationLoading } = useGeoLocation(geolocationEnabled);

  const initializeMap = () => {
    const mapOptions: NaverMapOptions = {
      center: new naver.maps.LatLng(...initialCenter),
      zoom: initialZoom,
      minZoom,
      scaleControl: false,
      mapDataControl: false,
    };

    const newMap = new window.naver.maps.Map(mapId, mapOptions);
    setMap(newMap);

    if (onLoad && map) {
      onLoad(map);
    }
  };

  const onCurrentLocationChanged = () => {
    reload();
  };

  const panTo = (location: Coordinates) => {
    const selected = new naver.maps.LatLng(...location);
    map?.panTo(selected);
  };

  useEffect(() => {
    if (location) panTo(location);
  }, [location]);

  return {
    mapElementRef,
    initializeMap,
    map,
    currentLocation: location,
    onCurrentLocationChanged,
    isGeolocationLoading,
    bounds,
    panTo,
  };
};
export default useNaverMap;
