import React from 'react';

import { ChallengeTabs } from '@/entities/challenges';
import { Text } from '@/shared/ui';

const ChallengePage = () => {
  return (
    <>
      <Text.Heading className="mb-[30px]">
        클라이밍 챌린지를 수행하고
        <br />
        뱃지를 획득해봐요!
      </Text.Heading>

      <ChallengeTabs />
    </>
  );
};

export default ChallengePage;
