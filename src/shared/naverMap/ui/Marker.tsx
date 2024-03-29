import { useEffect } from 'react';

import { generateMarkerIcon } from '../lib/generateMarkerIcon';
import { Coordinates, TMarker, TNaverMap } from '../types';

type Props = {
  map: TNaverMap | null;
  coordinates: Coordinates;
  isSelected: boolean;
  onClick?: () => void;
  clickable?: boolean;
};

function Marker({ map, coordinates, isSelected, onClick, clickable = false }: Props) {
  useEffect(() => {
    let marker: TMarker = null;
    if (map) {
      const icon = generateMarkerIcon(isSelected);

      marker = new naver.maps.Marker({
        map,
        position: new naver.maps.LatLng(...coordinates),
        icon,
        clickable,
      });
    }

    if (onClick) {
      naver.maps.Event.addListener(marker, 'click', onClick);
    }

    return () => {
      marker?.setMap(null);
    };
  }, [map, isSelected]);

  return null;
}

export default Marker;
