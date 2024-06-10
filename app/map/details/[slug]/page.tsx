import React from 'react';

import { SocialLink } from '@/entities/details/ui';
import BusinessHours from '@/entities/gyms/ui/BusinessHours';
import CurrentGymCard from '@/entities/gyms/ui/CurrentGymCard';
import LocationCard from '@/entities/map/ui/LocationCard';
import { Icon } from '@/shared/icons';

const data = {
  id: 1,
  name: 'PEAKERS 클라이밍 신촌점',
  thumbnailImageUrl:
    'https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyNDAzMjhfMTU2%2FMDAxNzExNjA1ODI0NTE5.gQzS5vquWzJbeEB3nVzhA7TinWe-V3LEyjnGGPTN64gg.m7OzsRA16gR9rBDsSB_hv7f-Axgy3T0ioRxD_ysLxZgg.JPEG%2FF44D0BA3-E1A4-4F0D-AD2A-5FF82583E052.jpeg',
  tags: ['휴식 공간', '주차장', '넓은 암장'],
  description: '홍대입구역 4번 출구 30초 거리! 체계적인 커리큘럼과 전문 강사진!하나의 회원권으로 11개 지점을 자유롭게!',
  businessHours: {
    monday: '08:00 ~ 24:00',
    tuesday: '-',
    wednesday: '휴무',
    thursday: '-',
    friday: '-',
    saturday: '-',
    sunday: '-',
  },
  roadNameAddress: '도로명 주소',
  distance: 700, // 단위: 미터
  latitude: 123.123,
  longitude: 123.123,
  instagram: {
    scheme: 'instagram://user?username=climbing_park_seongsu',
    link: 'https://www.instagram.com/climbing_park_seongsu',
  },
  naverMap: {
    scheme: 'https://map.naver.com/p/search/클라이밍파크%20성수점',
    link: 'https://map.naver.com/p/search/클라이밍파크%20성수점',
  },
};

async function DetailsPage() {
  const {
    name,
    thumbnailImageUrl,
    tags,
    description,
    businessHours,
    roadNameAddress,
    distance,
    latitude,
    longitude,
    instagram,
    naverMap,
  } = data;
  return (
    <>
      <div className="pt-[50px] pb-5">
        <CurrentGymCard
          name={name}
          tags={tags}
          roadNameAddress={roadNameAddress}
          thumbnailImageUrl={thumbnailImageUrl}
          distance={distance}
        />
      </div>

      <hr className="border-[5px] border-grayscale-700 my-[30px]" />

      <div className="flex flex-col gap-[30px]">
        <div className="flex flex-col gap-[10px]">
          <h3 className="text-white font-header-3">암장 정보</h3>
          <p className="text-neutral-400 font-text-2">{description}</p>
        </div>

        <div className="flex flex-col gap-[10px]">
          <h3 className="text-white font-header-3">영업 시간</h3>

          <BusinessHours businessHours={businessHours} />
        </div>

        <div>
          <div className="mb-[20px]">
            <h3 className="font-header-3 text-neutral-white mb-[10px]">암장 위치</h3>
            <LocationCard lat={latitude} lng={longitude} />
          </div>
          <p className="flex items-start gap-[4px]">
            <Icon name="Location" size="16" />
            <span className="text-neutral-400 text-sm font-normal leading-4 break-keep">{roadNameAddress}</span>
          </p>
        </div>

        <SocialLink instagram={instagram} naverMap={naverMap} />
      </div>
    </>
  );
}

export default DetailsPage;
