import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import Tags from '@/shared/ui/Tags';

const data = {
  id: 1,
  name: 'PEAKERS 클라이밍 신촌점',
  thumbnailImageUrl:
    'https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyNDAzMjhfMTU2%2FMDAxNzExNjA1ODI0NTE5.gQzS5vquWzJbeEB3nVzhA7TinWe-V3LEyjnGGPTN64gg.m7OzsRA16gR9rBDsSB_hv7f-Axgy3T0ioRxD_ysLxZgg.JPEG%2FF44D0BA3-E1A4-4F0D-AD2A-5FF82583E052.jpeg',
  roadNameAddress: '세부 주소',
  distance: 700,
  latitude: 90,
  longitude: 50,
  tags: ['휴식 공간', '주차장', '넓은 암장'],
};

const SelectedGymCard = ({ id }: { id: number }) => {
  // const { data, isLoading } = useSWR<GetBoulderingGymDetailResponse>(`${ENDPOINT}/${id}`);

  const detailUrl = `/map/details/${id}`;
  const { name, thumbnailImageUrl, roadNameAddress, distance, tags } = data;
  return (
    <Link href={detailUrl} passHref>
      <div className="mt-[20px] relative overflow-hidden w-full h-[156px] rounded-[10px] mb-5">
        <Image className="object-cover" src={thumbnailImageUrl} alt={name} fill />
      </div>

      <div>
        <span className="font-bold text-neutral-white mb-0.5">{name}</span>
        <div className="flex gap-[10px] items-center font-text-2 text-grayscale-400  mb-[6px]">
          <span className="text-neutral-white">{distance}m</span> <div className="w-[1px] h-[14px] bg-neutral-400" />
          <span>{roadNameAddress}</span>
        </div>

        <Tags tags={tags} />
      </div>
    </Link>
  );
};

export default SelectedGymCard;
