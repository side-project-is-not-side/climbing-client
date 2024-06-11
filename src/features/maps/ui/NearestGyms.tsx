import React from 'react';

import { useRouter } from 'next/navigation';

import DefaultGymCard from '@/entities/gyms/ui/DefaultGymCard';
import { useGetGymsByLocation } from '@/features/gyms/queries/useGetGymsByLocation';

function NearestGyms() {
  const router = useRouter();
  const { data: gymInfos } = useGetGymsByLocation();

  const onClick = (id: number) => () => {
    router.push(`/map?id=${id}`);
  };
  return (
    <section>
      <h3 className="text-[18px] font-bold text-neutral-white mb-5">내 근처 암장을 찾아보세요🔥</h3>

      <ul className="flex flex-col gap-3">
        {gymInfos?.[0].slice(0, 2).map((item) => <DefaultGymCard key={item.id} item={item} onClick={onClick} />)}
      </ul>
    </section>
  );
}

export default NearestGyms;
