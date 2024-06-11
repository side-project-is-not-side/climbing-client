import React, { Suspense } from 'react';

import MapDrawer from '@/entities/map/ui/MapDrawer';
import NearbyMap from '@/entities/map/ui/NearbyMap';

function MapView() {
  return (
    <Suspense>
      <NearbyMap />
      <MapDrawer />
    </Suspense>
  );
}

export default MapView;
