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
    <div className={`flex gap-[10px] ${type === 'upcoming' ? 'text-primary-400 ' : 'text-neutral-400'} text-[14px]`}>
      {type == 'upcoming' ? <RedStone width={20} height={20} /> : <GrayStone width={20} height={20} />}
      <p>{date}</p>
      <span>&middot;</span>
      <p>{name}</p>
    </div>
  );
};

export default SectorUpdateInfo;
