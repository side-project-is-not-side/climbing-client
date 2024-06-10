import React from 'react';

import { useRouter } from 'next/navigation';

import DefaultGymCard from '@/entities/gyms/ui/DefaultGymCard';
import Sort from '@/entities/gyms/ui/Sort';

const gymInfos = [
  {
    id: 1,
    name: 'PEAKERS 클라이밍 신촌점',
    thumbnailImageUrl:
      'https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyNDAzMjhfMTU2%2FMDAxNzExNjA1ODI0NTE5.gQzS5vquWzJbeEB3nVzhA7TinWe-V3LEyjnGGPTN64gg.m7OzsRA16gR9rBDsSB_hv7f-Axgy3T0ioRxD_ysLxZgg.JPEG%2FF44D0BA3-E1A4-4F0D-AD2A-5FF82583E052.jpeg',
    roadNameAddress: '세부 주소',
    lotNumberAddress: '세부 주소',
    distance: 700,
    latitude: 90,
    longitude: 50,
    tags: ['휴식 공간', '주차장', '넓은 암장'],
  },
  {
    id: 2,
    name: 'PEAKERS 클라이밍 신촌점',
    thumbnailImageUrl:
      'https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyNDAzMjhfMTU2%2FMDAxNzExNjA1ODI0NTE5.gQzS5vquWzJbeEB3nVzhA7TinWe-V3LEyjnGGPTN64gg.m7OzsRA16gR9rBDsSB_hv7f-Axgy3T0ioRxD_ysLxZgg.JPEG%2FF44D0BA3-E1A4-4F0D-AD2A-5FF82583E052.jpeg',
    roadNameAddress: '세부 주소',
    lotNumberAddress: '세부 주소',
    distance: 700,
    latitude: 90,
    longitude: 50,
    tags: ['휴식 공간', '주차장', '넓은 암장'],
  },
];

function OrderedGyms() {
  // TODO: 내 근처 암장 조회 API와 동일한 API 연결
  const router = useRouter();

  const onClick = (id: number) => () => {
    router.push(`map/details/${id}`);
  };
  return (
    <div>
      <Sort />

      <ul className="flex flex-col gap-3">
        {gymInfos.map((item) => (
          <DefaultGymCard key={item.id} item={item} onClick={onClick} />
        ))}
      </ul>
    </div>
  );
}

export default OrderedGyms;
