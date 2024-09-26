'use client';

import React, { useEffect, useState } from 'react';

import Image from 'next/image';

import ShowInfoButton from './ShowInfoButton';
import { motion } from 'framer-motion';

import { useGetSpeechBubbleText } from '@/entities/challenges';
import SpeechBubble from '@/entities/challenges/ui/SpeechBubble';

const levelLabel = {
  1: 'LV1 부리',
  2: 'LV2 부리불',
  3: 'LV3 부리번',
  4: 'LV4 부리부리',
} as const;

const MainCharacter = ({ level }: { level: keyof typeof levelLabel }) => {
  const [showBubble, setShowBubble] = useState(false);
  const { message, getBubbleText } = useGetSpeechBubbleText();

  const onCharacterClick = () => {
    getBubbleText();
  };

  useEffect(() => {
    if (message) {
      setShowBubble(true);

      const timeoutId = setTimeout(() => {
        setShowBubble(false);
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [message]);

  return (
    <div className="flex flex-col items-center">
      <div className="mb-7">
        <Image
          className="-mt-5 mb-8"
          src={'/images/main/main-background.png'}
          width={373}
          height={364}
          alt="background"
        />

        <div className="relative">
          <div className="flex flex-col items-center absolute bottom-5 inset-x-0 mx-auto">
            <SpeechBubble showBubble={showBubble} message={message} />

            <motion.div onClick={onCharacterClick} whileTap={{ scale: 0.9 }}>
              <Image
                className="w-50 h-50 object-contain object-center mb-0.5"
                src={`/images/buri/v${level}.png`}
                width={200}
                height={200}
                alt="캐릭터"
              />
            </motion.div>
          </div>

          <Image src="/images/main/character_plate.png" width={342} height={64} alt="character plate" />
        </div>
      </div>

      <div className="flex gap-x-2 items-center">
        <div className="flex gap-x-[10px] items-center">
          <span className="font-medium text-[16px] text-[#00000069] leading-[23px]">내 레벨은</span>
          <span className="text-neutral-black font-bold text-[22px] leading-[26px]">{levelLabel[level]}</span>
        </div>

        <ShowInfoButton />
      </div>
    </div>
  );
};

export default MainCharacter;
