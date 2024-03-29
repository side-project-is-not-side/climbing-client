'use client';

import React from 'react';

import { useInfiniteScroll } from '../hooks';
import List from './List';

function Lists() {
  const { observerContainerRef, data, category } = useInfiniteScroll();

  return (
    <section className="mt-[30px]">
      <ul ref={observerContainerRef} className="flex flex-col gap-[30px]">
        {data?.map((pages) => {
          return pages.map(({ id, imageUrl, name, sector, tags }) => (
            <List key={id} id={id} name={name} imageUrl={imageUrl} sector={sector} tags={tags} category={category} />
          ));
        })}
      </ul>
    </section>
  );
}

export default Lists;
