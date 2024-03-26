'use client';

import { forwardRef } from 'react';

type Props = {
  mapId: string;
};

const Map = forwardRef<HTMLDivElement, Props>(function Map({ mapId }, ref) {
  return (
    <>
      <div id={mapId} ref={ref} className="w-full h-full" />
    </>
  );
});

export default Map;
