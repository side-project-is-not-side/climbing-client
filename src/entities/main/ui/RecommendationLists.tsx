import React from 'react';

import RecommendationList from './RecommendationList';

const DUMMY_DATA = [
  {
    imgUrl: 'sdfsdf',
    name: 'PEAKERS 클라이밍 신촌점',
    upcomingSector: {
      date: 'Tue Mar 26 2024 22:06:22 GMT+0900 (한국 표준시)',
      name: 'Sector 3',
    },
    lastUpdatedSector: {
      date: 'Tue Mar 26 2024 22:06:22 GMT+0900 (한국 표준시)',
      name: 'Sector 4',
    },
  },
  {
    imgUrl: 'sdfsdf',
    name: 'PEAKERS 클라이밍 신촌점',
    upcomingSector: {
      date: 'Tue Mar 26 2024 22:06:22 GMT+0900 (한국 표준시)',
      name: 'Sector 3',
    },
    lastUpdatedSector: {
      date: 'Tue Mar 26 2024 22:06:22 GMT+0900 (한국 표준시)',
      name: 'Sector 4',
    },
  },
  {
    imgUrl: 'sdfsdf',
    name: 'PEAKERS 클라이밍 신촌점',
    upcomingSector: {
      date: 'Tue Mar 26 2024 22:06:22 GMT+0900 (한국 표준시)',
      name: 'Sector 3',
    },
    lastUpdatedSector: {
      date: 'Tue Mar 26 2024 22:06:22 GMT+0900 (한국 표준시)',
      name: 'Sector 4',
    },
  },
];

function RecommendationLists() {
  return (
    <section>
      <h3 className="text-white font-bold text-lg mb-5">그래버즈가 추천하는 암장 업데이트!</h3>

      <ul className="flex flex-col gap-8">
        {DUMMY_DATA.map(({ imgUrl, name, upcomingSector, lastUpdatedSector }) => (
          <RecommendationList
            key={name}
            name={name}
            imgUrl={imgUrl}
            upcomingSector={upcomingSector}
            lastUpdatedSector={lastUpdatedSector}
          />
        ))}
      </ul>
    </section>
  );
}

export default RecommendationLists;
