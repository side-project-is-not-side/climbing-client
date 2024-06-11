'use client';

import React, { useEffect, useRef } from 'react';

import { ExternalLink, GetGymDetailResponse } from '@/entities/gyms/api/type';
import { Icon } from '@/shared/icons';

function SocialLink({ instagram, naverMap }: Pick<GetGymDetailResponse, 'instagram' | 'naverMap'>) {
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const handleClick = ({ scheme, link }: ExternalLink) => {
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
        className="flex flex-1 items-center py-[14px] px-4 rounded-[10px] bg-neutral-700 gap-[10px]"
        onClick={() => handleClick(instagram)}
      >
        <Icon size="18" name="Instagram" />
        <span className="text-neutral-400 font-text-2">인스타그램</span>
      </button>

      <button
        className="flex flex-1 items-center py-[14px] px-4 rounded-[10px] bg-neutral-700 gap-[10px]"
        onClick={() => handleClick(naverMap)}
      >
        <Icon size="18" name="NaverMap" />
        <span className="text-neutral-400 font-text-2"> 네이버 지도</span>
      </button>
    </div>
  );
}

export default SocialLink;
