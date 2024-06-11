import React from 'react';

import { GetGymDetailResponse } from '../api/type';
import BusinessHours from './BusinessHours';
import CurrentGymCard from './CurrentGymCard';

import { SocialLink } from '@/entities/details/ui';
import LocationCard from '@/entities/map/ui/LocationCard';
import { Icon } from '@/shared/icons';

function GymDetailInfo({ data }: { data: GetGymDetailResponse }) {
  const {
    name,
    tags,
    roadNameAddress,
    thumbnailImageUrl,
    description,
    distance,
    businessHours,
    location,
    instagram,
    naverMap,
  } = data;
  const { latitude, longitude } = location;

  return (
    <div>
      <div className="pt-[50px] pb-5">
        <CurrentGymCard
          name={name}
          tags={tags}
          roadNameAddress={roadNameAddress}
          thumbnailImageUrl={thumbnailImageUrl}
          distance={distance}
        />
      </div>

      <hr className="border-[5px] border-grayscale-700 mb-[30px]" />

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
    </div>
  );
}

export default GymDetailInfo;
