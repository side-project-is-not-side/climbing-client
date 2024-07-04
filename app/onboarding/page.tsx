import React from 'react';



import { Text } from '@/shared/ui';
import { Onboarding } from '@/widgets';

const OnboardingPage = () => {
  return (
    <div className="px-5 pt-[60px] pb-5 flex flex-col h-[calc(100vh-140px)]">
      <div>
        <Text.Heading>다양한 클라이밍 챌린지</Text.Heading>
        <Text.Description>단조로웠던 클라이밍에 챌린지를 끼얹어봐요!</Text.Description>
      </div>

      <Onboarding />
    </div>
  );
};

export default OnboardingPage;