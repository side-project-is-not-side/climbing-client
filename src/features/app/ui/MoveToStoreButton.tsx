import React from 'react';

import { STORE_LINK, useAppVersionStore } from '@/entities/app';

export const MoveToStoreButton = () => {
  const { currentVersion, osType } = useAppVersionStore();

  const handleClick = () => {
    if (osType === 'iOS') {
      window.open(STORE_LINK.iOS, '_target');
      return;
    }

    window.open(STORE_LINK.Android, '_target');
  };

  return (
    <button type="button" className="flex items-center gap-[5px] py-4" onClick={handleClick}>
      <span className="font-text-2 text-neutral-white">버전</span>
      <span className="font-text-2 text-neutral-400">{currentVersion}</span>
    </button>
  );
};
