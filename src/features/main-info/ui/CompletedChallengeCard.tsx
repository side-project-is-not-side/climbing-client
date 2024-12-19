import React from 'react';

import Image from 'next/image';

import { ACTIVITY_LABEL } from '../constants';
import { moveToChallengeDetail } from '../util';
import dayjs from 'dayjs';

import { CompleteChallenge } from '@/entities/challenges';

const CompletedChallengeCard = ({ item }: { item: CompleteChallenge }) => {
  const { id, title, summary, activityType, successAt, successImageUrl } = item;

  return (
    <li
      className="w-full h-[140px] flex p-5 gap-x-[14px] items-center rounded-[20px] bg-neutral-white shadow-custom"
      onClick={() => moveToChallengeDetail(id, activityType)}
    >
      <Image className="rounded-[10px]" src={successImageUrl} width={100} height={100} alt="challenge badge" />

      <div className="flex flex-1 flex-col gap-y-[10px]">
        <div className="flex flex-col">
          <span className="font-flag text-primary-400 mb-1">{ACTIVITY_LABEL[activityType]}</span>
          <span className="font-header-1 text-neutral-black mb-0.5 truncate">{title}</span>
          <p className="font-text-2 text-neutral-400 truncate">{summary}</p>
        </div>

        <div className="flex w-full justify-between items-center">
          <span className="font-bold font-mPlus font-flag text-primary-400">
            {dayjs(successAt).format('YYYY-MM-DD')} 완료
          </span>

          <button
            type="button"
            className="w-[92px] h-[28px] font-mPlus font-semibold text-sm text-neutral-white rounded-[200px] bg-primary-400"
          >
            더보기
          </button>
        </div>
      </div>
    </li>
  );
};

export default CompletedChallengeCard;
