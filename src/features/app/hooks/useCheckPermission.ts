import { useEffect } from 'react';

import { PermissionStatus, useNotificationPermissionStore } from '@/entities/app';

export const useCheckPermission = () => {
  const { updateNotificationPermissionStatus } = useNotificationPermissionStore();
  // TODO: 추후 앱 버전이 낮을 경우 강제 업데이트 로직이 추가되어야 한다.

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const receiveMessage = ({ data }: { data: { key: string; payload: PermissionStatus } }) => {
      const { key, payload } = data;
      if (key === 'NOTIFICATION_PERMISSION') {
        alert(payload);
        updateNotificationPermissionStatus(payload);
      }
    };

    window.addEventListener('message', receiveMessage);
    return () => window.removeEventListener('message', receiveMessage);
  }, []);
};
