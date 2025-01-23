'use client';

import React from 'react';

import { twMerge } from 'tailwind-merge';

import { UserInfoMain } from '@/entities/challenges';

type MainUserInfoProps = {
  userInfo: UserInfoMain;
  isInProgress: boolean;
  selectedTab: 'ongoing' | 'completed';
  onTabClick: (tab: 'ongoing' | 'completed') => () => void;
};

function MainUserInfo({ userInfo, isInProgress, selectedTab, onTabClick }: MainUserInfoProps) {
  const { challengingCount, badgeCount } = userInfo;

  const buttonStyle = 'flex-1 flex gap-[14px] justify-center items-center py-3 px-6 rounded-[10px] transition-all';
  const labelStyle = 'font-medium text-base';
  const countStyle = 'text-neutral-black text-[24px] font-mPlus font-extrabold';

  const handleButtonClick = () => {
    window.ReactNativeWebView?.postMessage?.(JSON.stringify({ type: 'NAVIGATE', data: { route: 'challenge_group' } }));
  };

  return (
    <>
      {isInProgress && (
        <div className="flex justify-center gap-3 mb-5">
          <button
            type="button"
            className={twMerge(buttonStyle, selectedTab === 'ongoing' ? 'bg-primary-400' : 'bg-[#DAD3CB]')}
            onClick={onTabClick('ongoing')}
          >
            <span
              className={twMerge(labelStyle, selectedTab === 'ongoing' ? 'text-neutral-white' : 'text-[#000000cc]')}
            >
              진행중 챌린지
            </span>
            <span
              className={twMerge(countStyle, selectedTab === 'ongoing' ? 'text-neutral-white' : 'text-[#000000cc]')}
            >
              {challengingCount}
            </span>
          </button>

          <button
            type="button"
            className={twMerge(buttonStyle, selectedTab === 'completed' ? 'bg-primary-400' : 'bg-[#DAD3CB]')}
            onClick={onTabClick('completed')}
          >
            <span
              className={twMerge(labelStyle, selectedTab === 'completed' ? 'text-neutral-white' : 'text-[#000000cc]')}
            >
              보유 뱃지
            </span>
            <span
              className={twMerge(countStyle, selectedTab === 'completed' ? 'text-neutral-white' : 'text-[#000000cc]')}
            >
              {badgeCount}
            </span>
          </button>
        </div>
      )}
      {!isInProgress && (
        <div className="flex flex-col items-center mt-[50px]">
          <p className="text-center font-text-1 mb-[26px] text-[#00000069]">
            현재 진행중인 도전이 없어요
            <br />
            근처 암장에 가서 그랩을 불태워보자!
          </p>

          <button
            type="button"
            className="flex justify-center items-center w-[180px] h-[50px] rounded-[24px] border-[1px] border-red-400 active:bg-red-400 text-red-400 font-header-2 active:text-grayscale-white active:scale-95 transition-all"
            onClick={handleButtonClick}
          >
            <span>챌린지 시작하기</span>
          </button>
        </div>
      )}
    </>
  );
}

export default MainUserInfo;
