import React from 'react';



import Link from 'next/link';

import { Button, Text } from '@/shared/ui';

const Onboarding = () => {
  return (
    <div className="px-5 pt-[60px] pb-5 flex flex-col h-[calc(100vh-140px)]">
      <div>
        <Text.Heading>다양한 클라이밍 챌린지</Text.Heading>
        <Text.Description>단조로웠던 클라이밍에 챌린지를 끼얹어봐요!</Text.Description>
      </div>

      <main className="flex-1 flex flex-col mt-[46px] mx-[22px] mb-12 grow-1">
        <div className="flex-1 w-full bg-grayscale-200"></div>
        <div className="flex items-center justify-center py-5 text-white">. . .</div>
      </main>

      <Link href={'/login'}>
        <Button>Button</Button>
      </Link>
    </div>
  );
};

export default Onboarding;