'use client';

import React from 'react';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { GymInfo } from '../api/types';

import Tags from '@/shared/ui/Tags';

type Props = {
  item: GymInfo;
};

function DefaultGymCard({ item }: Props) {
  const router = useRouter();
  const { id, name, thumbnailImageUrl, roadNameAddress, lotNumberAddress, distance, tags } = item;

  const handleItemClick = () => {
    router.push(`/map?id=${id}`);
  };

  return (
    <li className="p-5 flex w-full gap-5 bg-neutral-700 rounded-[10px]" onClick={handleItemClick}>
      <div className="relative w-[70px] h-[70px] overflow-hidden rounded-[10px]">
        <Image className="object-cover" src={thumbnailImageUrl} alt={name} fill />
      </div>

      <div>
        <span className="font-bold text-neutral-white mb-0.5">{name}</span>
        <div className="flex gap-[10px] items-center text-[14px] text-grayscale-400 leading-normal mb-[6px]">
          <span className="text-neutral-white">{distance}m</span> <div className="w-[1px] h-[14px] bg-neutral-400" />
          <span>{roadNameAddress ?? lotNumberAddress}</span>
        </div>

        <Tags tags={tags} />
      </div>
    </li>
  );
}

export default DefaultGymCard;
