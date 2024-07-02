import React from 'react';

import { Text } from '@/shared/ui';
import Button from '@/shared/ui/Button';

const Onboarding = () => {
  return (
    <div className="px-5 pt-[60px] pb-5 flex flex-col h-[calc(100vh-140px)]">
      <div>
        <Text.Heading>다양한 클라이밍 챌린지</Text.Heading>
        <Text.Description>단조로웠던 클라이밍에 챌린지를 끼얹어봐요!</Text.Description>
      </div>

      <main className="flex-1 mt-[46px] mx-[22px] mb-12 grow-1">
        <div className="bg-grayscale-200 w-full h-[500px]"></div>
        <div className="flex justify-center items-center py-5 text-white">. . .</div>
      </main>

      <Button>Button</Button>
    </div>
  );
};

export default Onboarding;
