import { useEffect } from 'react';

import { generateMarkerIcon } from '../lib/generateMarkerIcon';
import { Coordinates, TMarker, TNaverMap } from '../types';

type Props = {
  map: TNaverMap | null;
  coordinates: Coordinates;
  isSelected: boolean;
  onClick?: () => void;
};

function Marker({ map, coordinates, isSelected, onClick }: Props) {
  useEffect(() => {
    let marker: TMarker = null;
    if (map) {
      const icon = generateMarkerIcon(isSelected);

      marker = new naver.maps.Marker({
        map: map,
        position: new naver.maps.LatLng(...coordinates),
        icon,
      });
    }

    if (onClick) {
      naver.maps.Event.addListener(marker, 'click', onClick);
    }

    return () => {
      marker?.setMap(null);
    };
  }, [map]);

  return null;
}

export default Marker;
