import React from 'react';

import { Challenge, MainUserInfo, UserInfoMain } from '@/entities/challenges';
import { CompletedChallenges, OngoingChallenges } from '@/features/challenge/ui';

const userInfo: UserInfoMain = {
  characterLevel: 1,
  characterName: '새싹부리부리',
  // nickname: string;
  challengingCount: 123,
  badgeCount: 123,
};

const completedChallenges: Challenge[] = [
  {
    id: 1,
    imageUrl: '/images/badge.svg',
    title: '암장원정대',
    activityType: 'PICTURE',
    summary: '암장 이곳저곳을 둘러보세요!',
    activityCount: 3,
    successCount: 10,
  },
  {
    id: 2,
    imageUrl: '/images/badge.svg',
    title: '거의다왔어레드',
    activityType: 'LOCATION',
    summary: '암장 이곳저곳을 둘러보세요!',
    activityCount: 3,
    successCount: 10,
  },
  {
    id: 3,
    imageUrl: '/images/badge.svg',
    title: '암장원정대',
    activityType: 'LOCATION',
    summary: '암장 이곳저곳을 둘러보세요!',
    activityCount: 3,
    successCount: 10,
  },
  {
    id: 4,
    imageUrl: '/images/badge.svg',
    title: '거의다왔어레드',
    activityType: 'LOCATION',
    summary: '암장 이곳저곳을 둘러보세요!',
    activityCount: 3,
    successCount: 10,
  },
  {
    id: 5,
    imageUrl: '/images/badge.svg',
    title: '거의다왔어레드',
    activityType: 'LOCATION',
    summary: '암장 이곳저곳을 둘러보세요!',
    activityCount: 3,
    successCount: 10,
  },
];

const ongoingChallenges: Challenge[] = [
  {
    id: 1,
    imageUrl: '/images/badge.svg',
    title: '암장원정대',
    activityType: 'PICTURE',
    summary: '암장 이곳저곳을 둘러보세요!',
    activityCount: 3,
    successCount: 10,
  },
  {
    id: 2,
    imageUrl: '/images/badge.svg',
    title: '거의다왔어레드',
    activityType: 'LOCATION',
    summary: '암장 이곳저곳을 둘러보세요!',
    activityCount: 3,
    successCount: 10,
  },
  {
    id: 3,
    imageUrl: '/images/badge.svg',
    title: '암장원정대',
    activityType: 'LOCATION',
    summary: '암장 이곳저곳을 둘러보세요!',
    activityCount: 3,
    successCount: 10,
  },
];

function HomePage() {
  // TODO: 추후 API 구현되면 연결
  const isInProgress = !!completedChallenges.length && !!ongoingChallenges.length;
  return (
    <>
      <h1 className="text-neutral-white font-display-1 mb-10">
        오늘은 어떤 문제를 <br />
        GRAB 해볼까요? 🔥
      </h1>

      <div className="flex flex-col gap-[34px] w-full">
        <MainUserInfo userInfo={userInfo} isInProgress={isInProgress} />

        <CompletedChallenges challenges={completedChallenges} />

        <OngoingChallenges challenges={ongoingChallenges} />
      </div>
    </>
  );
}

export default HomePage;
