import React from 'react';

import Image from 'next/image';

import { ACTIVITY_LABEL } from '../constants';
import { moveToChallengeDetail } from '../util';

import { Challenge } from '@/entities/challenges';

const OngoingChallengeCard = ({ item }: { item: Challenge }) => {
  const {
    id,
    imageUrl: { black, color },
    activityCount,
    successCount,
    title,
    summary,
    activityType,
  } = item;

  const ratio = (activityCount / successCount) * 100;

  return (
    <li
      className="w-full h-[140px] flex p-5 gap-x-[14px] items-center rounded-[20px] bg-neutral-white shadow-custom"
      onClick={() => moveToChallengeDetail(id, activityType)}
    >
      <div className="relative w-[100px] h-[100px]">
        {/* TODO: 추후 DB 연결 시 imageUrl props로 변경 */}
        <Image
          className="absolute inset-0 w-[100px] h-[100px] object-contain object-center"
          src={black}
          width={100}
          height={100}
          alt={title}
        />
        <Image
          className="absolute bottom-2 w-[100px] object-cover object-bottom"
          src={color}
          style={{ height: `${ratio}%` }}
          width={100}
          height={100}
          alt={title}
        />
      </div>
      <div className="flex flex-1 flex-col gap-y-[10px]">
        <div className="flex flex-col">
          <span className="font-flag text-primary-400 mb-1">{ACTIVITY_LABEL[activityType]}</span>
          <span className="font-header-1 text-neutral-black mb-0.5 truncate">{title}</span>
          <p className="font-text-2 text-neutral-400 truncate">{summary}</p>
        </div>

        <div className="ml-auto flex justify-center items-center w-[92px] h-[28px] font-mPlus font-semibold text-sm text-neutral-white rounded-[200px] bg-primary-400">
          {activityCount}/{successCount}
        </div>
      </div>
    </li>
  );
};

export default OngoingChallengeCard;
