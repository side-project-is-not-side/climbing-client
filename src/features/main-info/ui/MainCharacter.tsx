'use client';

import React, { useEffect, useState } from 'react';

import Image from 'next/image';

import ShowInfoButton from './ShowInfoButton';
import { motion } from 'framer-motion';

import { UserInfoMain, useGetSpeechBubbleText } from '@/entities/challenges';
import SpeechBubble from '@/entities/challenges/ui/SpeechBubble';

const MainCharacter = ({
  characterLevel,
  characterName,
  nickname,
}: Pick<UserInfoMain, 'characterLevel' | 'characterName' | 'nickname'>) => {
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
                src={`/images/buri/v${characterLevel}.png`}
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
          <span className="font-extrabold text-[20px] text-neutral-black leading-normal">{nickname}</span>
          <span className="text-grayscale-500 font-bold text-[22px] leading-normal">{characterName}</span>
        </div>

        <ShowInfoButton showTooltip />
      </div>
    </div>
  );
};

export default MainCharacter;
