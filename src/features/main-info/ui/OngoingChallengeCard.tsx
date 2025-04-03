import React from 'react';

import Image from 'next/image';

import { ACTIVITY_LABEL } from '../constants';
import { moveToChallengeDetail } from '../util';

import { Challenge } from '@/entities/challenges';

const OngoingChallengeCard = ({ item }: { item: Challenge }) => {
  const { id, activityCount, successCount, title, summary, activityType } = item;

  return (
    <li
      className="w-full h-[140px] flex p-5 gap-x-[14px] items-center rounded-[20px] bg-neutral-white shadow-custom"
      onClick={() => moveToChallengeDetail(id, activityType)}
    >
      <Image src="/images/ongoing.png" width={100} height={100} alt={title} />

      <div className="flex flex-1 flex-col gap-y-[10px] min-w-0">
        <div className="flex flex-col w-full">
          <span className="font-flag text-primary-400 mb-1">{ACTIVITY_LABEL[activityType]}</span>
          <h3 className="font-header-1 text-neutral-black mb-0.5 truncate max-w-full">{title}</h3>
          <p className="font-text-2 text-neutral-400 truncate max-w-full">{summary}</p>
        </div>

        <div className="ml-auto flex justify-center items-center w-[92px] h-[28px] font-mPlus font-semibold text-sm text-neutral-white rounded-[200px] bg-primary-400">
          {activityCount}/{successCount}
        </div>
      </div>
    </li>
  );
};

export default OngoingChallengeCard;
