import React from 'react';

import { twMerge } from 'tailwind-merge';

import { UserInfoMain } from '@/entities/challenges';
import { ShowInfoButton } from '@/features/main-info/ui';
import { LEVEL_STANDARD } from '@/shared/constants';
import { Icon } from '@/shared/icons';

type Props = Omit<UserInfoMain, 'nickname'>;

const LEVELS = [
  { progressWidth: 'w-0' },
  { progressWidth: 'w-[calc(100%/4+16px)]' },
  { progressWidth: 'w-[calc(100%/4*2+16px)]' },
  { progressWidth: 'w-[calc(100%/4*3+16px)]' },
  { progressWidth: 'w-[calc(252/328*100%)]' },
];

const levelDivStyle =
  'relative w-[calc(100%/4+32px)] h-full rounded-[14px] after:absolute after:block after:w-4 after:h-4 after:rounded-lg after:inset-y-0 after:my-auto after:left-1 z-[1]';

export const ChallengeStatus = ({ characterName, characterLevel, challengingCount, badgeCount }: Props) => {
  return (
    <div className="w-full h-[186px] rounded-[20px] bg-neutral-700 px-3">
      <div className="w-full flex gap-2 items-center pt-[22px] justify-center mb-4">
        <span className="text-lg font-bold text-neutral-white leading-normal">{characterName}</span>
        <ShowInfoButton customIcon={<Icon name="QuestionMark" size="16" />} />
      </div>

      <div className="flex items-center justify-center gap-[30px] mb-6">
        <div className="flex gap-[10px] items-center">
          <span className="font-text-1 text-neutral-400">진행중</span>
          <span className="font-mPlus text-primary-400 text-base font-bold leading-normal">{challengingCount}</span>
        </div>

        <div className="flex gap-[10px] items-center">
          <span className="font-text-1 text-neutral-400">보유 뱃지</span>
          <span className="font-mPlus text-primary-400 text-base font-bold leading-normal">{badgeCount}</span>
        </div>
      </div>

      <div className="relative w-full justify-center flex mx-auto h-6 bg-grayscale-600 rounded-[14px] mb-3">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className={twMerge(
              levelDivStyle,
              index !== 0 && '-ml-8',
              index > characterLevel ? 'after:bg-neutral-700' : 'after:bg-neutral-white',
            )}
          />
        ))}

        <div
          className={twMerge(
            'absolute left-0 top-0 bg-primary-400 rounded-[14px] h-full',
            LEVELS[characterLevel].progressWidth,
          )}
        />
      </div>
      <p className="text-sm text-neutral-400 text-center">
        {characterLevel < 4
          ? `다음 성장까지 ${LEVEL_STANDARD[(characterLevel + 1) as keyof typeof LEVEL_STANDARD] - badgeCount}개의 뱃지가 남았어요!`
          : '🔥부리의 모험은 계속된다🔥'}
      </p>
    </div>
  );
};
