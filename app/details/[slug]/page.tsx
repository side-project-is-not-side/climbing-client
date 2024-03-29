import React from 'react';

import dayjs from 'dayjs';

import { getBoulderingGymDetails } from '@/entities/details/api/getBoulderingGymDetails';
import { Carousel } from '@/entities/details/ui';
import { Icon } from '@/shared/icons';

async function DetailsPage({ params: { slug } }: { params: { slug: string } }) {
  const { name, lastUpdatedSector, upcomingSector, tags, description, businessHours, roadNameAddress, imageUrls } =
    await getBoulderingGymDetails(slug);
  console.log('businessHours', businessHours);
  return (
    <>
      <div className="mb-[40px]">
        <Carousel imageUrls={imageUrls}></Carousel>

        <div className="text-white text-lg font-bold mt-[32px] mb-[8px]">{name}</div>

        <div className="flex gap-[10px] items-center mb-[8px]">
          <Icon size="16" name="RedStone"></Icon>
          <span className="text-sm font-normal text-[#FF4438]">{`${dayjs(upcomingSector.date).format('M월 DD일 a h:mm')} · ${upcomingSector.name}`}</span>
        </div>

        <div className="flex gap-[10px] items-center mb-[20px]">
          <Icon size="16" name="GrayStone"></Icon>
          <span className="text-sm font-normal text-[#B2B3B3]">
            마지막 업데이트 {`${dayjs(lastUpdatedSector.date).format('M월 DD일 a h:mm')} · ${lastUpdatedSector.name}`}
          </span>
        </div>

        <ul className="flex gap-[10px]">
          {tags?.map((tag) => (
            <li className="text-neutral-50 text-xs py-[4px] px-[16px] bg-neutral-700 rounded-[10px]" key={tag}>
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-[30px]">
        <div className="flex flex-col gap-[10px]">
          <h3 className="text-white text-sm font-bold">암장 정보</h3>
          <p className="text-neutral-400 text-sm font-normal">{description}</p>
        </div>

        <div className="flex flex-col gap-[10px]">
          <h3 className="text-white text-sm font-bold">영업 시간</h3>

          <ul>
            <li className="mb-[4px] flex gap-[10px]">
              <span className="text-white text-sm">월 ~ 금</span>
              <span className="text-neutral-400 text-sm font-normal">{`${dayjs(businessHours.weekday.startAt).format('H:mm')} ~ ${dayjs(businessHours.weekday.endAt).format('H:mm')}`}</span>
            </li>

            <li className="flex gap-[10px]">
              <span className="text-white text-sm">토, 일</span>
              <span className="text-neutral-400 text-sm font-normal">{`${dayjs(businessHours.weekend.startAt).format('H:mm')} ~ ${dayjs(businessHours.weekend.endAt).format('H:mm')}`}</span>
            </li>
          </ul>
        </div>

        <div>
          <div className="w-full h-[156px] bg-[#E7E7E7] mb-[20px]">지도 영역</div>
          <p className="flex items-center gap-[4px]">
            <Icon name="Location" size="16"></Icon>
            <span className="text-neutral-400 text-sm font-normal">{roadNameAddress}</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default DetailsPage;
