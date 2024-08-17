import React, { Suspense } from 'react';

import MainUserChallengeInfo from '@/widgets/MainUserChallengeInfo';

function HomePage() {
  return (
    <>
      <Suspense>
        <MainUserChallengeInfo />
      </Suspense>
    </>
  );
}

export default HomePage;
