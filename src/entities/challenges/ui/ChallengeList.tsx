import React from 'react';

import { useGetChallengesByStatus } from '../queries';
import ChallengeCard from './ChallengeCard';

import Sort from '@/entities/gyms/ui/Sort';
import { useInfiniteScroll } from '@/shared/hooks';

function ChallengeList() {
  const { observerContainerRef, data } = useInfiniteScroll({ queryFn: useGetChallengesByStatus });

  return (
    <div>
      <Sort />

      <ul ref={observerContainerRef}>
        {data?.map((pages) => {
          return pages.map((data) => <ChallengeCard key={data.id} data={data} />);
        })}
      </ul>
    </div>
  );
}

export default ChallengeList;
