import React from 'react';

import List from './List';

const DUMMY_DATA = [
  {
    imgUrl: 'sdfsdf',
    name: 'PEAKERS 클라이밍 신촌점',
    upcomingSector: {
      date: 'Tue Mar 26 2024 22:06:22 GMT+0900 (한국 표준시)',
      name: 'Sector 3',
    },
    keywords: ['12s', 'second', 'third'],
  },
  {
    imgUrl: 'sdfsdf',
    name: 'PEAKERS 클라이밍 신촌점',
    upcomingSector: {
      date: 'Tue Mar 26 2024 22:06:22 GMT+0900 (한국 표준시)',
      name: 'Sector 3',
    },
    keywords: ['12s', 'second', 'third'],
  },
  {
    imgUrl: 'sdfsdf',
    name: 'PEAKERS 클라이밍 신촌점',
    upcomingSector: {
      date: 'Tue Mar 26 2024 22:06:22 GMT+0900 (한국 표준시)',
      name: 'Sector 3',
    },
    keywords: ['12s', 'second', 'third'],
  },
];

function Lists() {
  return (
    <section className="mt-[30px]">
      <ul className="flex flex-col gap-[30px]">
        {DUMMY_DATA.map(({ imgUrl, name, upcomingSector, keywords }) => (
          <List key={name} name={name} imgUrl={imgUrl} upcomingSector={upcomingSector} keywords={keywords} />
        ))}
      </ul>
    </section>
  );
}

export default Lists;
