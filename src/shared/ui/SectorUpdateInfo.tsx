import React from 'react';

import { Icon } from '../icons';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import { twMerge } from 'tailwind-merge';

import { TSectorUpdateInfo } from '@/entities/map/api/types';

dayjs.locale('ko');
const SectorUpdateInfo = ({
  className,
  sectorUpdateInfo,
  type,
}: {
  className?: string;
  sectorUpdateInfo: TSectorUpdateInfo;
  type: 'upcoming' | 'lastUpdated';
}) => {
  const { date, name } = sectorUpdateInfo;

  const cn = twMerge(
    'flex gap-[10px] text-[14px]',
    type === 'upcoming' ? 'text-neutral-white' : 'text-neutral-400',
    className,
  );

  return (
    <div className={cn}>
      <Icon name={type === 'upcoming' ? 'RedStone' : 'GrayStone'} size="20" />
      <p>
        {type === 'lastUpdated' && '마지막 업데이트'} {dayjs(date).format('M월 D일 a h:mm')}
      </p>
      {name && (
        <>
          <span>&middot;</span>
          <p>{name}</p>
        </>
      )}
    </div>
  );
};

export default SectorUpdateInfo;
