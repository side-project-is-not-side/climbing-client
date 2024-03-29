import React, { Suspense } from 'react';

import NearbyMap from '@/entities/map/ui/NearbyMap';

function MapPage() {
  return (
    <section className="w-full h-full">
      <Suspense>
        <NearbyMap />
      </Suspense>
    </section>
  );
}

export default MapPage;
