import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { BoulderingGym } from '../api/getBoulderingGym';
import Badge from './Badge';
import dayjs from 'dayjs';
import { twJoin } from 'tailwind-merge';

import { Icon } from '@/shared/icons';

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

        <div className="text-white text-sm font-bold mt-[20px]">{name}</div>

        <div className="flex gap-[10px] items-center mb-[2px]">
          <Icon size="16" name={category === 'schedule' ? 'RedStone' : 'GrayStone'}></Icon>

          <span
            className={`text-sm font-normal mt-[12px] mb-[16px] inline-block ${twJoin(category === 'schedule' ? 'text-primary-400' : 'text-neutral-400')} `}
          >
            {`${category === 'schedule' ? '마지막 업데이트' : ''} ${dayjs(sector?.date).format('M월 DD일 a h:mm')} · ${sector?.name ?? ''}`}
          </span>
        </div>

        <ul className="flex gap-[10px]">
          {tags?.map((tag) => (
            <li className="text-neutral-50 text-xs py-[4px] px-[16px] bg-neutral-700 rounded-[10px]" key={tag}>
              {tag}
            </li>
          ))}
        </ul>
      </Link>
    </li>
  );
}

export default List;
