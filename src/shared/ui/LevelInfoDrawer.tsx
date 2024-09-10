'use client';

import React from 'react';

import { twMerge } from 'tailwind-merge';

import { Drawer } from '@/shared/drawer';
import { TBaseDrawerProps } from '@/shared/drawer';

type Props = Pick<TBaseDrawerProps, 'visible' | 'onClose' | 'onAction'>;

const levelDivStyle =
  'relative w-[calc(100%/4+32px)] h-full rounded-[14px] after:absolute after:block after:w-4 after:h-4 after:bg-neutral-white after:rounded-lg after:inset-y-0 after:my-auto after:left-1';
const levelTextStyle = 'absolute left-3 -translate-x-1/2 -bottom-[34px] font-flag text-grayscale-300';

const LEVELS = [
  { text: '0', bgStyle: 'bg-[#FFCB44]' },
  { text: '4', bgStyle: 'bg-[#FF6726]' },
  { text: '8', bgStyle: 'bg-[#FF4E27]' },
  { text: '12~', bgStyle: 'bg-[#F53D2A]' },
];
const LevelInfoDrawer = ({ visible, onClose, onAction }: Props) => {
  return (
    <Drawer.Base
      visible={visible}
      onClose={onClose}
      onAction={onAction}
      title="부리 성장 기준"
      actionText="확인했어요"
      titleStyle="center"
      showCloseButton
      maskClosable
    >
      <div className="pt-10 pb-8">
        <div className="relative mb-4 flex items-center justify-center ml-[calc(100%/4+4px)] -translate-x-1/2 w-[104px] h-[28px] rounded-[20px] bg-neutral-black after:absolute after:w-0 after:h-0 after:bg-transparent after:-bottom-2 after:border-transparent after:border-l-[8px] after:border-l-transparent after:border-t-[10px] after:border-t-neutral-black after:border-r-[8px] after:border-r-transparent">
          <span className="font-mPlus text-neutral-white font-semibold text-sm">LEVEL UP!</span>
        </div>

        <div className="relative h-[51px]">
          <div className="w-full justify-center flex mx-auto h-6">
            {LEVELS.map(({ text, bgStyle }, index) => (
              <div
                key={index}
                className={twMerge(
                  levelDivStyle,
                  bgStyle,
                  index !== 0 && '-ml-8',
                  index === 3 &&
                    'before:absolute before:w-4 before:h-4 before:rounded-lg before:bg-neutral-white before:inset-y-0 before:right-1 before:my-auto',
                )}
              >
                <span className={levelTextStyle}>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <h4 className="mb-2 font-header-1 text-neutral-white text-center">보유 뱃지가 늘어날수록 🔥부리가 성장해요</h4>
      <p className="mb-10 font-text-2 text-grayscale-400 text-center">
        다양한 챌린지를 통해 뱃지를 획득해보세요.
        <br />
        클라이머의 불꽃 심장 부리를 성장시켜볼까요?
      </p>
    </Drawer.Base>
  );
};

export default LevelInfoDrawer;
