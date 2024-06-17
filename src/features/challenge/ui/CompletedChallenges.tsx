import React from 'react';

import Link from 'next/link';

import { Challenge, SimpleChallengeCard } from '@/entities/challenges';
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

async function CompletedChallenges() {
  // TODO: API 구현 시 연결
  // const challenges = await getChallenges('SUCCESS');

  return (
    <section>
      <div className="flex items-center justify-between mb-5">
        <span className="text-neutral-white font-header-1">완료한 챌린지</span>
        <Link href={'/challenge?tab=complete'} className="flex items-center gap-1">
          <span className="font-text-2 text-neutral-400">전체보기</span>
          <Icon name="ArrowBack" size="16" className="rotate-180" color="#8B8D8E" />
        </Link>
      </div>

      <div className="w-full overflow-x-auto">
        <ul className="flex gap-[10px] flex-nowrap w-fit">
          {challenges.map(({ id, imageUrl, title, activityType }) => (
            <SimpleChallengeCard key={id} id={id} imageUrl={imageUrl} title={title} activityType={activityType} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default CompletedChallenges;
