import React from 'react';

import { AroundGym } from '../api/types';

import SectorUpdateInfo from '@/shared/ui/SectorUpdateInfo';
import Tags from '@/shared/ui/Tags';

const SelectedGymCard = ({ data }: { data: AroundGym }) => {
  const { name, roadNameAddress, tags, lastUpdatedSector, upcomingSector } = data;
  return (
    <article className="fixed bottom-20 left-0 p-5 pb-8 right-0 mx-auto w-full h-[232px] bg-neutral-black rounded-t-[10px]">
      <div className="flex flex-col gap-3 border-b-[1px] pb-5 border-neutral-400 mb-5">
        <p className="text-base font-bold text-white">{name}</p>
        <p className="truncate text-sm text-neutral-400">{roadNameAddress}</p>
      </div>
      <div className="flex flex-col gap-2 mb-4">
        <SectorUpdateInfo type="upcoming" sectorUpdateInfo={upcomingSector} />
        <SectorUpdateInfo type="lastUpdated" sectorUpdateInfo={lastUpdatedSector} />
      </div>

      <Tags tags={tags} />
    </article>
  );
};

export default SelectedGymCard;
