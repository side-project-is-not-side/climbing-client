'use client';

import React from 'react';

import GeolocationLoading from './GeolocationLoading';

import { INITIAL_CENTER } from '@/shared/naverMap/constants';
import useNaverMap from '@/shared/naverMap/hooks/useNaverMap';
import CurrentLocationButton from '@/shared/naverMap/ui/CurrentLocationButton';
import Map from '@/shared/naverMap/ui/Map';
// import Marker from '@/shared/naverMap/ui/Marker';
import NaverMapScript from '@/shared/naverMap/ui/NaverMapScript';

const MAP_ID = 'nearby-map';
function NearbyMap() {
  const { mapElementRef, initializeMap, onCurrentLocationChanged, isGeolocationLoading } = useNaverMap({
    geolocationEnabled: true,
    mapId: MAP_ID,
    initialZoom: 20,
    initialCenter: INITIAL_CENTER,
  });

  return (
    <NaverMapScript initializeMap={initializeMap}>
      <GeolocationLoading visible={isGeolocationLoading} />
      <Map ref={mapElementRef} mapId={MAP_ID} />
      {/* {[1, 2, 3].map((item) => (
        <Marker key={item} map={map} coordinates={[]} />
      ))} */}
      <CurrentLocationButton onClick={onCurrentLocationChanged} />
    </NaverMapScript>
  );
}

export default NearbyMap;
