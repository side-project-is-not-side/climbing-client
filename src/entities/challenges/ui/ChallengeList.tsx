'use client';

import React from 'react';

import { useGetChallengesByQuery } from '../queries';
import ChallengeCard from './ChallengeCard';

import Sort from '@/entities/gyms/ui/Sort';
import { useInfiniteScroll } from '@/shared/hooks';

function ChallengeList() {
  const { observerContainerRef, data } = useInfiniteScroll({ queryFn: useGetChallengesByQuery });

  return (
    <div className="pt-[30px]">
      <Sort />

      <ul ref={observerContainerRef} className="flex flex-col gap-[10px]">
        {data?.map((pages) => {
          return pages?.map((data) => <ChallengeCard key={data.id} data={data} />);
        })}
      </ul>
    </div>
  );
}

export default ChallengeList;
