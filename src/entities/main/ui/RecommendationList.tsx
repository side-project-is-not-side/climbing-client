import React from 'react';

import Image from 'next/image';

import { RecommendationGymList } from '../api';
import { Badge } from './';
import dayjs from 'dayjs';

import { Icon } from '@/shared/icons';

function RecommendationList({ imageUrl, name, upcomingSector, lastUpdatedSector }: RecommendationGymList) {
  return (
    <li>
      <div className="bg-[#E7E7E7] h-[210px] rounded-[10px] relative">
        <Image
          src={imageUrl}
          fill
          style={{
            objectFit: 'cover',
          }}
          className="rounded-[10px]"
          alt="클라이밍장 사진"
        ></Image>
        <Badge upcomingSector={upcomingSector} />
      </div>

      <div className="text-white text-sm font-bold mt-[12px] mb-[8px]">{name}</div>

      <div className="flex gap-[10px] items-center mb-[2px]">
        <Icon size="16" name="RedStone"></Icon>
        <span className="text-sm font-normal text-[#FF4438]">{`${dayjs(upcomingSector.date).format('M월 DD일 a h:mm')} · ${upcomingSector.name}`}</span>
      </div>

      <div className="flex gap-[10px] items-center ">
        <Icon size="16" name="GrayStone"></Icon>
        <span className="text-sm font-normal text-[#B2B3B3]">
          마지막 업데이트 {`${dayjs(lastUpdatedSector.date).format('M월 DD일 a h:mm')} · ${lastUpdatedSector.name}`}
        </span>
      </div>
    </li>
  );
}

export default RecommendationList;
