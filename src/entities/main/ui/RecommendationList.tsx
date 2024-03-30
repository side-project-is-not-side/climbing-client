import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { RecommendationGymList } from '../api';
import { Badge } from './';

import SectorUpdateInfo from '@/shared/ui/SectorUpdateInfo';

function RecommendationList({ id, imageUrl, name, upcomingSector, lastUpdatedSector }: RecommendationGymList) {
  return (
    <li>
      <Link href={`/details/${id}`}>
        <div className="bg-[#E7E7E7] h-[210px] rounded-[10px] relative">
          <Image
            src={imageUrl}
            fill
            style={{
              objectFit: 'cover',
            }}
            className="rounded-[10px]"
            alt="클라이밍장 사진"
            priority
          ></Image>
          <Badge upcomingSector={upcomingSector} />
        </div>

        <div className="text-white text-sm font-bold mt-[12px] mb-[8px]">{name}</div>

        <SectorUpdateInfo className="mb-[2px]" type="upcoming" sectorUpdateInfo={upcomingSector} />

        <SectorUpdateInfo type="lastUpdated" sectorUpdateInfo={lastUpdatedSector} />
      </Link>
    </li>
  );
}

export default RecommendationList;
