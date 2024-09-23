'use client';

import { useEffect } from 'react';

import { useAppVersionStore } from '@/entities/app';

export const useCheckAppVersion = () => {
  const { updateAppState } = useAppVersionStore();
  // TODO: 추후 앱 버전이 낮을 경우 강제 업데이트 로직이 추가되어야 한다.

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const receiveMessage = ({ data }: { data: { key: string; payload: any } }) => {
      const { key, payload } = data;
      if (key === 'APP_VERSION') {
        updateAppState(payload.currentVersion, payload.userAgent);
      }
    };

    window.addEventListener('message', receiveMessage);
    return () => window.removeEventListener('message', receiveMessage);
  }, []);
};
