'use client';

import React from 'react';

import useNaverMap from '@/shared/naverMap/hooks/useNaverMap';
import { Lat, Lng } from '@/shared/naverMap/types';
import Map from '@/shared/naverMap/ui/Map';
import Marker from '@/shared/naverMap/ui/Marker';
import { NaverMap } from '@/shared/naverMap/ui/NaverMap';

type Props = {
  lat: Lat;
  lng: Lng;
};
const MAP_ID = 'map-place';

function LocationCard({ lat, lng }: Props) {
  const { mapElementRef, initializeMap, map } = useNaverMap({
    mapId: MAP_ID,
    initialZoom: 20,
    initialCenter: [lat, lng],
  });
  return (
    <div className="w-full h-[156px] overflow-hidden rounded-[10px]">
      <NaverMap initializeMap={initializeMap}>
        <Map ref={mapElementRef} mapId={MAP_ID} />
        <Marker map={map} coordinates={[lat, lng]} isSelected />
      </NaverMap>
    </div>
  );
}

export default LocationCard;
