'use client';

import React from 'react';

import useSWR from 'swr';

import { MainUserInfo, UserInfoMain, useGetChallengesForMain } from '@/entities/challenges';
import { CompletedChallenges, OngoingChallenges } from '@/features/challenge/ui';
import { MainCharacter } from '@/features/main-info/ui';

function MainUserChallengeInfo() {
  const { data: userInfo } = useSWR<UserInfoMain>('/v1/user-info/main');
  const { ongoingChallenges, successChallenges, isChallengeStarted } = useGetChallengesForMain();

  return (
    <div className="flex flex-col gap-[34px] w-full">
      {userInfo && <MainCharacter level={userInfo.characterLevel} />}

      {userInfo && <MainUserInfo userInfo={userInfo} isInProgress={isChallengeStarted} />}

      <CompletedChallenges challenges={successChallenges} />

      <OngoingChallenges challenges={ongoingChallenges} />
    </div>
  );
}

export default MainUserChallengeInfo;
