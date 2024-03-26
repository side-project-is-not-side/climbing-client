import React from 'react';

// TODO: API 연동시 date 타입을 Date로 수정한다
// NAME: 김도현
type Props = {
  imgUrl: string;
  name: string;
  upcomingSector: {
    date: string;
    name: string;
  };
  lastUpdatedSector: {
    date: string;
    name: string;
  };
};

function RecommendationList({ name, upcomingSector, lastUpdatedSector }: Props) {
  return (
    <li>
      <div className="bg-[#E7E7E7] h-[210px] rounded-[10px]">이미지</div>
      <div className="text-white text-sm font-bold mt-[12px] mb-[8px]">{name}</div>
      <div className="text-sm font-normal text-[#FF4438] mb-[2px]">{`${upcomingSector.date} ${upcomingSector.name}`}</div>
      <div className="text-sm font-normal text-[#B2B3B3]">
        마지막 업데이트 {`${lastUpdatedSector.date} ${lastUpdatedSector.name}`}
      </div>
    </li>
  );
}

export default RecommendationList;
