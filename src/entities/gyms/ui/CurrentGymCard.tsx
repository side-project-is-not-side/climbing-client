import React from 'react';

import Image from 'next/image';

import { GetGymDetailResponse } from '../api/type';

import Tags from '@/shared/ui/Tags';

function CurrentGymCard({
  name,
  thumbnailImageUrl,
  distance,
  roadNameAddress,
  tags,
}: Pick<GetGymDetailResponse, 'name' | 'thumbnailImageUrl' | 'distance' | 'roadNameAddress' | 'tags'>) {
  return (
    <div>
      <div className="mt-[20px] relative overflow-hidden w-full h-[156px] rounded-[10px] mb-5">
        <Image className="object-cover" src={thumbnailImageUrl} alt={name} fill />
      </div>
      <div>
        <span className="font-bold text-neutral-white mb-0.5">{name}</span>
        <div className="flex gap-[10px] items-center font-text-2 text-grayscale-400  mb-[6px]">
          <span className="text-neutral-white">{distance}m</span> <div className="w-[1px] h-[14px] bg-neutral-400" />
          <span>{roadNameAddress}</span>
        </div>

        <Tags tags={tags} />
      </div>
    </div>
  );
}

export default CurrentGymCard;
