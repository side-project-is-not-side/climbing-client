import React from 'react';

import Image from 'next/image';

import { GymInfo } from '@/entities/map/api/types';
import Tags from '@/shared/ui/Tags';

type Props = {
  item: GymInfo;
  onClick: (id: number) => () => void;
};

function DefaultGymCard({ item, onClick }: Props) {
  const { id, name, thumbnailImageUrl, roadNameAddress, lotNumberAddress, distance, tags } = item;

  return (
    <li className="p-5 flex w-full gap-5 bg-neutral-700 rounded-[10px]" onClick={onClick(id)}>
      <div className="relative w-[70px] h-[70px] overflow-hidden rounded-[10px]">
        <Image className="object-cover" src={thumbnailImageUrl} alt={name} fill />
      </div>

      <div>
        <span className="font-bold text-neutral-white mb-0.5">{name}</span>
        <div className="flex gap-[10px] items-start text-[14px] text-grayscale-400 leading-normal mb-[6px]">
          <span className="text-neutral-white">{distance}m</span> | <span>{roadNameAddress ?? lotNumberAddress}</span>
        </div>

        <Tags tags={tags} />
      </div>
    </li>
  );
}

export default DefaultGymCard;
