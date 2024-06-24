import React, { Suspense } from 'react';

import { Text } from '@/shared/ui';
import MainUserChallengeInfo from '@/widgets/MainUserChallengeInfo';

function HomePage() {
  return (
    <>
      <Text.Heading className="mb-10">
        오늘은 어떤 문제를 <br />
        GRAB 해볼까요? 🔥
      </Text.Heading>

      <Suspense>
        <MainUserChallengeInfo />
      </Suspense>
    </>
  );
}

export default HomePage;
