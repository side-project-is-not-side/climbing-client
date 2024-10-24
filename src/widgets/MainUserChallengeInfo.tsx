'use client';

import React from 'react';

import useSWR from 'swr';

import { UserInfoMain, useGetChallengesForMain } from '@/entities/challenges';
import { CompletedChallengeCard, MainCharacter, MainUserInfo, OngoingChallengeCard } from '@/features/main-info/ui';
import { useGetAccessToken } from '@/shared/hooks/useGetAccessToken';

function MainUserChallengeInfo() {
  const { token } = useGetAccessToken();
  const { data: userInfo } = useSWR<UserInfoMain>('/v1/user-info');
  const { ongoingChallenges, successChallenges, isChallengeStarted } = useGetChallengesForMain();
  const [selectedTab, setSelectedTab] = React.useState<'ongoing' | 'completed'>('ongoing');

  if (!token) return <></>;

  const onTabClick = (tab: 'ongoing' | 'completed') => () => {
    setSelectedTab(tab);
  };
  return (
    <div className="flex flex-col gap-[34px] w-full pb-[30px]">
      {userInfo && (
        <>
          <MainCharacter level={userInfo.characterLevel} nickname={userInfo.nickname} />{' '}
          <MainUserInfo
            userInfo={userInfo}
            isInProgress={isChallengeStarted}
            selectedTab={selectedTab}
            onTabClick={onTabClick}
          />
        </>
      )}
      {isChallengeStarted && (
        <>
          <ul className="flex w-full flex-col gap-[10px]">
            {selectedTab === 'completed'
              ? successChallenges.map((item) => <CompletedChallengeCard key={item.id} item={item} />)
              : ongoingChallenges.map((item) => <OngoingChallengeCard key={item.id} item={item} />)}
          </ul>
        </>
      )}
    </div>
  );
}

export default MainUserChallengeInfo;
