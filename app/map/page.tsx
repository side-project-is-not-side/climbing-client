import React from 'react';

import NearbyMap from '@/entities/map/ui/NearbyMap';

export const dynamic = 'force-dynamic';
async function MapPage() {
  return (
    <section className="w-full h-full">
      <NearbyMap />
    </section>
  );
}

export default MapPage;
