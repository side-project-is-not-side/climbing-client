import { useEffect, useRef, useState } from 'react';

import { useGeoLocation } from './useGeolocation';

import { Bounds } from '@/entities/map/api/types';
import { useDebounce } from '@/shared/hooks/useDebounce';
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
  initialZoom = ZOOM_LEVEL.거리,
  initialCenter = INITIAL_CENTER,
  minZoom = ZOOM_LEVEL.시도,
  geolocationEnabled,
  onLoad,
}: Props) => {
  const mapElementRef = useRef<HTMLDivElement | null>(null);
  const [map, setMap] = useState<TNaverMap | null>(null);
  const [bounds, setBounds] = useState<Bounds>();

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

  const handleBoundWithDebounce = useDebounce(() => handleBoundChange, 300);

  useEffect(() => {
    if (map) {
      const currentBounds = map.getBounds();
      handleBoundChange(currentBounds);
      naver.maps.Event.addListener(map, 'bounds_changed', handleBoundWithDebounce);
    }
  }, [map]);

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
