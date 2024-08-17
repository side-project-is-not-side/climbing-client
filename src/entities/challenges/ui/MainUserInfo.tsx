'use client';

import React from 'react';

import Link from 'next/link';

import { UserInfoMain } from '../apis';

function MainUserInfo({ userInfo, isInProgress }: { userInfo: UserInfoMain; isInProgress: boolean }) {
  const { challengingCount, badgeCount, characterName } = userInfo;

  return (
    <>
      <span className="text-neutral-white font-header-1 mb-[10px]">{characterName}</span>

      <div className="flex justify-center gap-[30px]">
        <div className="flex gap-[10px] items-center">
          <span className="text-neutral-400 font-text-1">진행중</span>
          <span className="text-primary-400 font-black text-base">{challengingCount}</span>
        </div>

        <div className="flex gap-[10px] items-center">
          <span className="text-neutral-400 font-text-1">보유 뱃지</span>
          <span className="text-primary-400 font-black text-base">{badgeCount}</span>
        </div>
      </div>

      {!isInProgress && (
        <>
          <hr className="w-full mt-5 mb-[30px] border-[1px] border-b-0 border-solid border-grayscale-500" />

          <p className="text-center text-neutral-white font-text-1 mb-9">
            아직 진행중인 도전이 없어요!
            <br />
            근처 암장에 가서 그랩을 불태워보자🔥🔥
          </p>

          <Link
            href="/challenge"
            className="flex justify-center items-center w-[156px] h-[42px] rounded-[20px] bg-red-400"
          >
            <span className="text-neutral-white font-header-2">챌린지 시작하기</span>
          </Link>
        </>
      )}
    </>
  );
}

export default MainUserInfo;
