import React from 'react';

import dayjs from 'dayjs';

import { getBoulderingGymDetails } from '@/entities/details/api/getBoulderingGymDetails';
import { Carousel, SocialLink } from '@/entities/details/ui';
import LocationCard from '@/entities/map/ui/LocationCard';
import { Icon } from '@/shared/icons';
import SectorUpdateInfo from '@/shared/ui/SectorUpdateInfo';
import Tags from '@/shared/ui/Tags';

async function DetailsPage({ params: { slug } }: { params: { slug: string } }) {
  const {
    name,
    lastUpdatedSector,
    upcomingSector,
    tags,
    description,
    businessHours,
    roadNameAddress,
    imageUrls,
    location,
    instagram,
    naverMap,
  } = await getBoulderingGymDetails(slug);

  return (
    <>
      <div>
        <Carousel imageUrls={imageUrls}></Carousel>

        <div className="text-white text-lg font-bold mb-[8px]">{name}</div>

        <div className="flex gap-[10px] items-center mb-[8px]">
          <Icon size="16" name="RedStone" />
          <span className="text-sm font-normal text-neutral-white">{`${dayjs(upcomingSector.date).format('M월 DD일 a h:mm')} · ${upcomingSector.name}`}</span>
        </div>

        <SectorUpdateInfo type="lastUpdated" sectorUpdateInfo={lastUpdatedSector} className="mb-[20px]" />

        <Tags tags={tags} />
      </div>

      <hr className="border-[5px] border-grayscale-700 my-[30px]" />

      <div className="flex flex-col gap-[30px]">
        <div className="flex flex-col gap-[10px]">
          <h3 className="text-white font-header-3">암장 정보</h3>
          <p className="text-neutral-400 font-text-2">{description}</p>
        </div>

        <div className="flex flex-col gap-[10px]">
          <h3 className="text-white font-header-3">영업 시간</h3>

          <ul>
            <li className="mb-[4px] flex gap-[10px]">
              <span className="text-white text-sm">월 ~ 금</span>
              <span className="text-neutral-400 text-sm font-normal">{`${dayjs(businessHours.weekday.startAt).format('HH:mm')} ~ ${dayjs(businessHours.weekday.endAt).format('HH:mm')}`}</span>
            </li>

            <li className="flex gap-[10px]">
              <span className="text-white text-sm">토, 일</span>
              <span className="text-neutral-400 text-sm font-normal">{`${dayjs(businessHours.weekend.startAt).format('HH:mm')} ~ ${dayjs(businessHours.weekend.endAt).format('HH:mm')}`}</span>
            </li>
          </ul>
        </div>

        <div>
          <div className="mb-[20px]">
            <h3 className="font-header-3 text-neutral-white mb-[10px]">암장 위치</h3>
            <LocationCard lat={location.latitude} lng={location.longitude} />
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
