import React from 'react';

import Image from 'next/image';

import { ACTIVITY_LABEL } from '../constants';
import { moveToChallengeDetail } from '../util';

import { CompleteChallenge } from '@/entities/challenges';

const CompletedChallengeCard = ({ item }: { item: CompleteChallenge }) => {
  const { id, successImageUrl, title, summary, activityType } = item;

  return (
    <li
      className="w-full h-[200px] flex p-5 gap-x-[10px] items-center rounded-[20px] bg-grayscale-700 shadow-custom"
      onClick={() => moveToChallengeDetail(id, activityType)}
    >
      <div className="rounded-[10px]">
        <Image src={successImageUrl} width={160} height={160} alt="challenge badge" />
      </div>

      <div className="flex flex-1 flex-col gap-y-[16px]">
        <div className="flex flex-col">
          <span className="font-flag text-primary-400 mb-1">{ACTIVITY_LABEL[activityType]}</span>
          <span className="font-header-1 text-neutral-white mb-0.5 truncate">{title}</span>
          <p className="font-text-2 text-neutral-400 truncate">{summary}</p>
        </div>

        <button
          type="button"
          className="w-[86px] h-[28px] font-mPlus font-semibold text-sm text-neutral-white rounded-[200px] bg-grayscale-600"
        >
          기록보기
        </button>
      </div>
    </li>
  );
};

export default CompletedChallengeCard;
