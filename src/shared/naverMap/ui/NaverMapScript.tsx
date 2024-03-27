'use client';

import { PropsWithChildren } from 'react';

import Script from 'next/script';

export type Props = PropsWithChildren<{ initializeMap: () => void }>;

export function NaverMapScript({ initializeMap, children }: Props) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        type="text/javascript"
        src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_MAPS_CLIENT_ID}`}
        onReady={initializeMap}
      />
      {children}
    </>
  );
}
