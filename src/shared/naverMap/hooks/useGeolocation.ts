import { useEffect, useState } from 'react';

import { Coordinates } from '../types';

type GeolocationOptions = {
  enableHighAccuracy: boolean;
  timeout: number;
  maximumAge: number;
};

export const useGeoLocation = (isActive: boolean, options?: GeolocationOptions) => {
  const [location, setLocation] = useState<Coordinates>();
  const [error, setError] = useState('');

  const onSuccess = (position: GeolocationPosition) => {
    const { latitude, longitude } = position.coords;

    setLocation([latitude, longitude]);
  };

  const onError = (error: GeolocationPositionError) => {
    setError(error.message);
  };

  const loadGeolocation = () => {
    const { geolocation } = navigator;

    if (!geolocation) {
      setError('not supported');
      return;
    }

    geolocation.getCurrentPosition(onSuccess, onError, options);
  };

  useEffect(() => {
    if (isActive) {
      loadGeolocation();
    }
  }, [options, isActive]);

  return { location, error, reload: loadGeolocation };
};
