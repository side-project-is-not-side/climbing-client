import { useEffect, useRef, useState } from 'react';

import { useGeoLocation } from './useGeolocation';

import { Bounds } from '@/entities/map/api/types';
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

  const handleMoveToCurrentLocation = () => {
    if (!location) return;

    const mapOptions: NaverMapOptions = {
      center: new window.naver.maps.LatLng(...location),
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
  };

  const onCurrentLocationChanged = () => {
    reload();
  };

  useEffect(() => {
    handleMoveToCurrentLocation();
  }, []);

  useEffect(() => {
    const handleBoundChange = (bounds: naver.maps.Bounds) => {
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

    if (map) {
      const currentBounds = map.getBounds();
      handleBoundChange(currentBounds);
      naver.maps.Event.addListener(map, 'bounds_changed', handleBoundChange);
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
  };
};
export default useNaverMap;
