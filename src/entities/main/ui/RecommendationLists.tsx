import React from 'react';

import { getRecommendationGym } from '../api/getRecommendations';
import RecommendationList from './RecommendationList';

async function RecommendationLists() {
  const lists = await getRecommendationGym();

  return (
    <section>
      <h3 className="text-white font-bold text-lg mb-5">그래버즈가 추천하는 암장 업데이트!</h3>

      <ul className="flex flex-col gap-8">
        {lists.map(({ imageUrl, name, upcomingSector, lastUpdatedSector }) => (
          <RecommendationList
            key={name}
            name={name}
            imageUrl={imageUrl}
            upcomingSector={upcomingSector}
            lastUpdatedSector={lastUpdatedSector}
          />
        ))}
      </ul>
    </section>
  );
}

export default RecommendationLists;
