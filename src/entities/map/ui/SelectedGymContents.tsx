import React from 'react';

import { GetSelectedBoulderingGymResponse } from '../api/types';

import SectorUpdateInfo from '@/shared/ui/SectorUpdateInfo';
import Tags from '@/shared/ui/Tags';

function SelectedGymContents({ data }: { data: GetSelectedBoulderingGymResponse | undefined }) {
  if (!data) return <p className="text-neutral-400 text-sm">선택하신 암장의 정보를 불러올 수 없습니다.</p>;

  const { name, roadNameAddress, tags, lastUpdatedSector, upcomingSector } = data;
  return (
    <>
      <div className="flex flex-col gap-3 border-b-[1px] p-5 border-neutral-700">
        <p className="text-[16px] font-bold text-white">{name}</p>
        <p className="truncate text-[14px] text-neutral-400">{roadNameAddress}</p>
      </div>
      <div className="flex flex-col gap-2 p-5 pb-4">
        <SectorUpdateInfo type="upcoming" sectorUpdateInfo={upcomingSector} />
        <SectorUpdateInfo type="lastUpdated" sectorUpdateInfo={lastUpdatedSector} />
      </div>
      <div className="px-5">
        <Tags tags={tags} />
      </div>
    </>
  );
}

export default SelectedGymContents;
