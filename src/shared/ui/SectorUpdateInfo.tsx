import React from 'react';

import { GrayStone, RedStone } from '../icons/components';

import { TSectorUpdateInfo } from '@/entities/map/api/types';

const SectorUpdateInfo = ({
  sectorUpdateInfo,
  type,
}: {
  sectorUpdateInfo: TSectorUpdateInfo;
  type: 'upcoming' | 'lastUpdated';
}) => {
  const { date, name } = sectorUpdateInfo;
  return (
    <div className="flex gap-[10px] text-primary-400 mb-2 text-sm">
      {type == 'upcoming' ? <RedStone width={20} height={20} /> : <GrayStone width={20} height={20} />}
      <p>{date}</p>
      <span>&middot;</span>
      <p>{name}</p>
    </div>
  );
};

export default SectorUpdateInfo;
