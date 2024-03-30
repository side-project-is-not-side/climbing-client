'use client';

import React, { useEffect, useRef } from 'react';

import { BoulderingGymDetails, SocialLinkInfo } from '../api/getBoulderingGymDetails';

import { Icon } from '@/shared/icons';

function SocialLink({ instagram, naverMap }: Pick<BoulderingGymDetails, 'instagram' | 'naverMap'>) {
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const handleClick = ({ scheme, link }: SocialLinkInfo) => {
    const isIphone = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    const isAndroid = /Android/i.test(navigator.userAgent);

    if (isIphone) {
      window.location.href = scheme;

      timerRef.current = setTimeout(() => {
        window.open(link, '_blank');
      }, 1500);

      return;
    }

    if (isAndroid) {
      window.location.href = link;

      if (!timerRef.current) {
        return;
      }

      timerRef.current = setTimeout(() => {
        window.open(link, '_blank');
      }, 1500);

      return;
    }

    window.open(link, '_blank');
  };

  useEffect(() => {
    const removeOpenLink = () => {
      if (!timerRef.current) {
        return;
      }

      clearTimeout(timerRef.current);
    };

    window.addEventListener('visibilitychange', removeOpenLink);
  }, []);

  return (
    <div className="flex gap-[10px]">
      <button
        className="flex items-center py-[14px] pl-[16px] pr-[56px] rounded-[10px] bg-neutral-700"
        onClick={() => handleClick(instagram)}
      >
        <Icon size="16" name="Instagram"></Icon>
        <span className="text-neutral-400 ml-[10px] text-[14px]">인스타그램</span>
      </button>

      <button
        className="flex items-center py-[14px] pl-[16px] pr-[56px] rounded-[10px] bg-neutral-700"
        onClick={() => handleClick(naverMap)}
      >
        <Icon size="16" name="NaverMap"></Icon>
        <span className="text-neutral-400  ml-[10px] text-[14px]"> 네이버 지도</span>
      </button>
    </div>
  );
}

export default SocialLink;
