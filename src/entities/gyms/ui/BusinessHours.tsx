import React from 'react';

import type { BusinessHours } from '../api/type';

import { ObjectTyped } from '@/shared/lib/typing';

type Props = {
  businessHours: BusinessHours;
};

const DAY_LABEL: Record<keyof BusinessHours, string> = {
  monday: '월',
  tuesday: '화',
  wednesday: '수',
  thursday: '목',
  friday: '금',
  saturday: '토',
  sunday: '일',
};

function BusinessHours({ businessHours }: Props) {
  return (
    <dl className="flex flex-col flex-wrap w-full h-[92px] gap-1 mb-5">
      {ObjectTyped.entries(businessHours).map(([key, value]) => (
        <div key={key} className="flex w-1/2 gap-[10px] leading-5">
          <dt className="font-text-2 text-neutral-white">{DAY_LABEL[key]}</dt>
          <dd className="font-text-2 text-neutral-400">{value}</dd>
        </div>
      ))}
    </dl>
  );
}

export default BusinessHours;
