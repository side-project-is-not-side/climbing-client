import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { BoulderingGym } from '../api/getBoulderingGym';
import Badge from './Badge';

import SectorUpdateInfo from '@/shared/ui/SectorUpdateInfo';
import Tags from '@/shared/ui/Tags';

function List({
  id,
  imageUrl,
  name,
  sector,
  category,
  tags,
}: BoulderingGym & {
  category: string;
}) {
  return (
    <li>
      <Link href={`details/${id}`}>
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
          {category === 'schedule' && <Badge sector={sector} />}
        </div>

        <div className="text-white text-sm font-bold mt-[20px] mb-3">{name}</div>

        <SectorUpdateInfo
          className="mb-4"
          type={category === 'schedule' ? 'upcoming' : 'lastUpdated'}
          sectorUpdateInfo={sector}
        />

        <div className="mt-[18px]">
          <Tags tags={tags} />
        </div>
      </Link>
    </li>
  );
}

export default List;
