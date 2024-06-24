import React, { Suspense } from 'react';

import { Text } from '@/shared/ui';
import { Challenges } from '@/widgets';

const ChallengePage = () => {
  return (
    <>
      <Text.Heading className="mb-[30px]">
        클라이밍 챌린지를 수행하고
        <br />
        뱃지를 획득해봐요!
      </Text.Heading>

      <Suspense>
        <Challenges />
      </Suspense>
    </>
  );
};

export default ChallengePage;
