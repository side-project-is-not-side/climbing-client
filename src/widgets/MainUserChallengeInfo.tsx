'use client';

import React from 'react';

import { MainUserInfo, UserInfoMain, useGetChallengesForMain } from '@/entities/challenges';
import { CompletedChallenges, OngoingChallenges } from '@/features/challenge/ui';

const userInfo: UserInfoMain = {
  characterLevel: 1,
  characterName: '새싹부리부리',
  // nickname: string;
  challengingCount: 123,
  badgeCount: 123,
};

function MainUserChallengeInfo() {
  const { ongoingChallenges, successChallenges, isChallengeStarted } = useGetChallengesForMain();

  return (
    <div className="flex flex-col gap-[34px] w-full">
      <MainUserInfo userInfo={userInfo} isInProgress={isChallengeStarted} />

      <CompletedChallenges challenges={successChallenges} />

      <OngoingChallenges challenges={ongoingChallenges} />
    </div>
  );
}

export default MainUserChallengeInfo;
