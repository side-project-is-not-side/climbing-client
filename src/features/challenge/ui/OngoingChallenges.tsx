import React from 'react';

import Link from 'next/link';

import { Challenge, ChallengeCard } from '@/entities/challenges';
import { Icon } from '@/shared/icons';

function OngoingChallenges({ challenges }: { challenges: Challenge[] }) {
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
