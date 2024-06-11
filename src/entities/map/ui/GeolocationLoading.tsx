import React from 'react';

import LoadingSpinner from './LoadingSpinner';

function GeolocationLoading({ visible }: { visible: boolean }) {
  return (
    <section
      className={`fixed top-0 left-0 z-[101] bg-[rgba(0,0,0,0.98)] w-full h-full flex-col justify-center items-center ${visible ? 'flex' : 'hidden'}`}
    >
      <LoadingSpinner />
    </section>
  );
}

export default GeolocationLoading;
