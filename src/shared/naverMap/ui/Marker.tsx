import { useEffect } from 'react';

import { Coordinates, ImageIcon, NaverMap, TMarker } from '../types';

type Props = {
  map: NaverMap;
  coordinates: Coordinates;
  icon: ImageIcon;
  onClick?: () => void;
};

function Marker({ map, coordinates, icon, onClick }: Props) {
  useEffect(() => {
    let marker: TMarker = null;
    if (map) {
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
