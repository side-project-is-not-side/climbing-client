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
      <div className="relative overflow-hidden w-full h-[156px] rounded-[10px] mb-5">
        <Image className="object-cover" src={thumbnailImageUrl} alt={name} fill />
      </div>
      <div>
        <span className="font-bold text-neutral-white mb-1">{name}</span>
        <div className="flex gap-[10px] items-start font-text-2 text-grayscale-400 mb-[6px]">
          <span className="text-neutral-white">{distance}m</span>
          <div> | </div>
          <span>{roadNameAddress}</span>
        </div>

        <Tags tags={tags} />
      </div>
    </div>
  );
}

export default CurrentGymCard;
