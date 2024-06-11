'use client';

import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import { getNearByBoulderingGyms } from '../api';
import { GetAroundBoulderingGymResponse } from '../api/types';
import GeolocationLoading from './GeolocationLoading';
import SelectedGymCard from './SelectedGymCard';
import useSWR from 'swr';

import { INITIAL_CENTER, ZOOM_LEVEL } from '@/shared/naverMap/constants';
import useNaverMap from '@/shared/naverMap/hooks/useNaverMap';
import CurrentLocationButton from '@/shared/naverMap/ui/CurrentLocationButton';
import CurrentLocationMarker from '@/shared/naverMap/ui/CurrentLocationMarker';
import Map from '@/shared/naverMap/ui/Map';
import Marker from '@/shared/naverMap/ui/Marker';
import NaverMapScript from '@/shared/naverMap/ui/NaverMapScript';

const MAP_ID = 'nearby-map';
const ENDPOINT = '/v1/gyms/map';

function NearbyMap() {
  const {
    mapElementRef,
    initializeMap,
    onCurrentLocationChanged,
    isGeolocationLoading,
    map,
    bounds,
    panTo,
    currentLocation,
  } = useNaverMap({
    geolocationEnabled: true,
    mapId: MAP_ID,
    initialZoom: ZOOM_LEVEL.시군구,
    initialCenter: INITIAL_CENTER,
  });

  const params = new URLSearchParams(bounds);
  const { data } = useSWR<GetAroundBoulderingGymResponse>(
    bounds ? `${ENDPOINT}?${params}` : null,
    () => getNearByBoulderingGyms(bounds),
    {
      keepPreviousData: true,
    },
  );
  const [selected, setSelected] = useState<number>();
  const router = useRouter();

  useEffect(() => {
    if (selected) {
      const location = data?.find((item) => item.id === selected);
      if (!location) return;
      const { latitude, longitude } = location;
      panTo([latitude, longitude]);
      router.push(`/map?id=${selected}`);
    }
  }, [selected]);

  return (
    <div id="naver-map" className="relative w-full h-screen">
      <NaverMapScript initializeMap={initializeMap}>
        <GeolocationLoading visible={isGeolocationLoading} />
        <Map ref={mapElementRef} mapId={MAP_ID} />
        {currentLocation && <CurrentLocationMarker coordinates={currentLocation} map={map} />}
        {data?.map(({ id, latitude, longitude }) => (
          <Marker
            key={id}
            map={map}
            coordinates={[latitude, longitude]}
            isSelected={selected === id}
            onClick={() => setSelected(id)}
            clickable
          />
        ))}
        <CurrentLocationButton onClick={onCurrentLocationChanged} />
        {selected && <SelectedGymCard id={selected} />}
      </NaverMapScript>
    </div>
  );
}

export default NearbyMap;
