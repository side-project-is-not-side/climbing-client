'use client';

import React, { useEffect, useRef, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import Slider, { Settings } from 'react-slick';
import { twMerge } from 'tailwind-merge';

import { useToken } from '@/shared/hooks/useToken';
import { Button } from '@/shared/ui';

const Onboarding = () => {
  const router = useRouter();

  const [disableButton, setDisableButton] = useState(true);

  const { token, removeToken } = useToken();

  const sliderRef = useRef<Slider>(null);
  const sliderOptions: Settings = {
    arrows: false,
    dots: true,
    infinite: false,
    afterChange: (index) => {
      if (disableButton && index === 2) setDisableButton(false);
    },
  };

  useEffect(() => {
    const FixRatio = () => {
      const container = document.querySelector('#container') as HTMLElement;
      const boxes = document.querySelectorAll('.slide-box') as NodeListOf<HTMLElement>;

      let height = container.clientHeight;
      let width = height * 0.655;

      if (width > container.clientWidth) {
        width = container.clientWidth;
        height = width * 1.526;
      }

      // 설정한 값을 적용
      boxes.forEach((box) => {
        box.style.width = `${width}px`;
        box.style.height = `${height}px`;
      });
    };

    // window.onresize = FixRatio; // 화면의 사이즈가 변할 때마다 호출
    addEventListener('resize', FixRatio);
    FixRatio(); // 맨 처음 실행 될 때도 호출

    return () => {
      removeEventListener('resize', FixRatio);
    };
  }, []);

  useEffect(() => {
    if (token !== '') {
      return router.back();
    }
    removeToken();
  }, [router, token, removeToken]);
  return (
    <>
      <div id={'container'} className="flex-1 mt-[46px] mx-[22px] mb-12 grow-1">
        <Slider ref={sliderRef} {...sliderOptions}>
          {Array(3)
            .fill(0)
            .map((banner, index) => (
              <div key={index} className={`slide-box`}>
                <Image
                  src={'/images/opengraph-image.png'}
                  alt="on Boarding banner"
                  width={304}
                  height={464}
                  className="object-contain w-full h-full bg-[#151517]"
                />
              </div>
            ))}
        </Slider>
      </div>

      <Link href={'/login'} className={twMerge(disableButton && 'pointer-events-none')}>
        <Button disabled={disableButton}>Button</Button>
      </Link>
    </>
  );
};

export default Onboarding;
