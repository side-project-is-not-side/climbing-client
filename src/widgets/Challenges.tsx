import React from 'react';

import { ChallengeTabs } from '@/entities/challenges';
import ChallengeList from '@/entities/challenges/ui/ChallengeList';

function Challenges() {
  return (
    <div>
      <ChallengeTabs />

      <ChallengeList />
    </div>
  );
}

export default Challenges;
