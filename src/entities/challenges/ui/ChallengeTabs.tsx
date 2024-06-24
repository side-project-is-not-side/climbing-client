'use client';

import React, { useLayoutEffect } from 'react';

import { useRouter, useSearchParams } from 'next/navigation';

import { Status } from '../apis';
import ChallengeTab from './ChallengeTab';

const TABS = [
  { value: 'NOT_STARTED', text: '챌린지' },
  { value: 'ONGOING', text: '진행중' },
  { value: 'SUCCESS', text: '완료' },
];

function ChallengeTabs() {
  const router = useRouter();
  const params = useSearchParams();
  const status = params.get('status') as Status;

  useLayoutEffect(() => {
    if (!status) {
      router.replace('challenge?status=NOT_STARTED');
    }
  }, []);

  return (
    <ul className="flex w-full border-b-[1px] border-solid border-grayscale-700">
      {TABS.map((tab) => (
        <ChallengeTab key={tab.value} {...tab} />
      ))}
    </ul>
  );
}

export default ChallengeTabs;
