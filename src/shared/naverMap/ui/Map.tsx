'use client';

import { useEffect, useRef } from 'react';

import Script from 'next/script';

import { INITIAL_CENTER, INITIAL_ZOOM } from '../constants';
import { Coordinates, NaverMap, NaverMapOptions } from '../types';

type Props = {
  mapId?: string;
  initialCenter?: Coordinates;
  initialZoom?: number;
  onLoad?: (map: NaverMap) => void;
  minZoom?: number;
};

const MIN_ZOOM = 1;

function Map({
  mapId = 'map',
  initialCenter = INITIAL_CENTER,
  initialZoom = INITIAL_ZOOM,
  minZoom = MIN_ZOOM,
  onLoad,
}: Props) {
  const mapRef = useRef<NaverMap | null>(null);

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

    const map = new window.naver.maps.Map(mapId, mapOptions);
    mapRef.current = map;

    if (onLoad) {
      onLoad(map);
    }
  };

  useEffect(() => {
    return () => {
      mapRef.current?.destroy();
    };
  }, []);

  return (
    <>
      <Script
        strategy="afterInteractive"
        type="text/javascript"
        src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_MAPS_CLIENT_ID}`}
        onReady={initializeMap}
      />
      <div id={mapId} className="w-full h-full" />
    </>
  );
}

export default Map;
