import React from 'react';

import { RecommendationGymList } from '../api';
import dayjs from 'dayjs';

function Badge({ upcomingSector }: Pick<RecommendationGymList, 'upcomingSector'>) {
  return (
    <div className="border-primary-400 border-[1px] right-[18px] top-[18px] absolute flex items-center justify-center bg-neutral-800 w-[40px] py-[2px] rounded-[6px]">
      <span className="text-neutral-white text-[12px]">
        D-
        {dayjs(upcomingSector.date).diff(new Date(), 'day') === 0
          ? 'Day'
          : dayjs(upcomingSector.date).diff(new Date(), 'day')}
      </span>
    </div>
  );
}

export default Badge;
