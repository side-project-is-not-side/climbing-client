'use client';

import { useEffect } from 'react';

import { useAppVersionStore } from '@/entities/app';

export const useCheckAppVersion = () => {
  const { updateAppState } = useAppVersionStore();
  // TODO: 추후 앱 버전이 낮을 경우 강제 업데이트 로직이 추가되어야 한다.

  useEffect(() => {
    const getOSType = () => {
      const osType = navigator.userAgent.toLocaleLowerCase();

      if (osType.search('android') > -1) {
        return 'Android';
      }

      if (
        (osType.search('iphone') > -1 || osType.search('ipad') > -1 || osType.search('ipod') > -1) &&
        !String(navigator.userAgent).includes('BankMallRNApp')
      ) {
        return 'iOS';
      }
      return 'other';
    };

    const getAppVersion = () => {
      const appVersion = navigator.userAgent.split('GrabbersRNApp/')[1];
      return appVersion;
    };

    const osType = getOSType();
    const appVersion = getAppVersion();

    updateAppState(appVersion, osType);
  }, []);
};
