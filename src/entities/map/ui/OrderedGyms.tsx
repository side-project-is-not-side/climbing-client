import React from 'react';

import { useRouter } from 'next/navigation';

import DefaultGymCard from '@/entities/gyms/ui/DefaultGymCard';
import Sort from '@/entities/gyms/ui/Sort';
import { useGetGymsByLocation } from '@/features/gyms/queries/useGetGymsByLocation';
import { useInfiniteScroll } from '@/shared/hooks';

function OrderedGyms() {
  const router = useRouter();
  const { observerContainerRef, data } = useInfiniteScroll({ queryFn: useGetGymsByLocation });

  const onClick = (id: number) => () => {
    router.push(`map/details/${id}`);
  };
  return (
    <div>
      <Sort />

      <ul ref={observerContainerRef} className="flex flex-col gap-3">
        {data?.map((pages) => {
          return pages.map((item) => <DefaultGymCard key={item.id} item={item} onClick={onClick} />);
        })}
      </ul>
    </div>
  );
}

export default OrderedGyms;
