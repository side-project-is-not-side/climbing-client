import React from 'react';

import Link from 'next/link';

import { ChallengeCard } from '@/entities/challenges';
import { Icon } from '@/shared/icons';

const challenges: Challenge[] = [
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

function OngoingChallenges() {
  return (
    <section>
      <div className="flex items-center justify-between mb-5">
        <span className="text-neutral-white font-header-1">진행중인 챌린지</span>
        <Link href={'/challenge?tab=ongoing'} className="flex items-center gap-1">
          <span className="font-text-2 text-neutral-400">전체보기</span>
          <Icon name="ArrowBack" size="16" className="rotate-180" color="#8B8D8E" />
        </Link>
      </div>

      <ul className="flex flex-col gap-2 w=full">
        {challenges.map((item) => (
          <ChallengeCard key={item.id} data={item} />
        ))}
      </ul>
    </section>
  );
}

export default OngoingChallenges;
