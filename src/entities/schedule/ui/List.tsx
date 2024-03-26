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
  keywords: string[];
};

function List({ name, upcomingSector, keywords }: Props) {
  return (
    <li>
      <div className="bg-[#E7E7E7] h-[210px] rounded-[10px]">이미지</div>
      <div className="text-white text-sm font-bold mt-[20px]">{name}</div>
      <div className="text-sm font-normal text-neutral-400 mt-[12px] mb-[16px]">{`${upcomingSector.date} ${upcomingSector.name}`}</div>
      <ul className="flex gap-[10px]">
        {keywords.map((keyword) => (
          <li className="text-neutral-50 py-[2px] px-[16px] bg-neutral-700 rounded-[10px]" key={keyword}>
            {keyword}
          </li>
        ))}
      </ul>
    </li>
  );
}

export default List;
