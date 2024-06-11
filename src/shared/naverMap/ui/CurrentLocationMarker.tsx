import { useEffect } from 'react';

import { Coordinates, TMarker, TNaverMap } from '../types';

type Props = {
  map: TNaverMap | null;
  coordinates: Coordinates;
};
function CurrentLocationMarker({ map, coordinates }: Props) {
  useEffect(() => {
    let marker: TMarker = null;
    if (map) {
      marker = new naver.maps.Marker({
        map,
        position: new naver.maps.LatLng(...coordinates),
        icon: {
          url: '/icons/marker-current.svg',
        },
      });
    }

    return () => {
      marker?.setMap(null);
    };
  }, [map]);

  return null;
}

export default CurrentLocationMarker;
