import React from 'react';

import Link from 'next/link';

import CurrentGymCard from '@/entities/gyms/ui/CurrentGymCard';
import { useGetGymDetailInfo } from '@/features/gyms/queries/useGetGymDetailInfo';

const SelectedGymCard = ({ id }: { id: number }) => {
  const { isLoading, data } = useGetGymDetailInfo(id);

  if (isLoading || !data) return null;

  const detailUrl = `/map/details/${id}`;
  const { name, thumbnailImageUrl, roadNameAddress, distance, tags } = data;

  return (
    <Link href={detailUrl} passHref>
      <CurrentGymCard
        name={name}
        thumbnailImageUrl={thumbnailImageUrl}
        roadNameAddress={roadNameAddress}
        distance={distance}
        tags={tags}
      />
    </Link>
  );
};

export default SelectedGymCard;
