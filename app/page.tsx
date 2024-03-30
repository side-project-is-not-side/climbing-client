import React from 'react';

import { Banner, Category, RecommendationLists } from '@/entities/main/ui';
import Logo from '@/entities/main/ui/Logo';

function HomePage() {
  return (
    <>
      <Logo />

      <h1 className="text-white text-2xl font-bold">
        오늘은 어떤 문제를 <br />
        GRAB 해볼까요? 🔥
      </h1>

      <div className="flex flex-col gap-10">
        <Category />

        <Banner />

        <RecommendationLists />
      </div>
    </>
  );
}

export default HomePage;
