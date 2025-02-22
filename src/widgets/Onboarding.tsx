'use client';

import React, { useEffect, useRef, useState } from 'react';

import Image from 'next/image';

import Slider, { Settings } from 'react-slick';

import { cn } from '@/shared/lib/tailwindMerge';
import { Button } from '@/shared/ui';

const onboardingCopy = [
  {
    title: '열정 불꽃 부리부리와 \n함께 성장해요',
    paragraph: '클라이머의 불꽃 심장 부리를 성장시켜볼까요?',
  },
  {
    title: '클라이밍에 대한 열정을 \n챌린지와 함께해요',
    paragraph: '간단한 챌린지 인증과 함께 올라가는 내 실력',
  },
  {
    title: '주변 암장을 살펴보고 \n내 기록을 남겨봐요',
    paragraph: '나만의 암장을 발견하고 그랩하기',
  },
];

const Onboarding = () => {
  const [disableButton, setDisableButton] = useState(true);
  const [page, setPage] = useState(0);

  const sliderRef = useRef<Slider>(null);
  const sliderOptions: Settings = {
    arrows: false,
    dots: false,
    infinite: false,
    // autoplay: true,
    // autoplaySpeed: 3500,
    beforeChange(currentSlide, nextSlide) {
      setPage(nextSlide);
      if (disableButton && nextSlide === 2) setDisableButton(false);
    },
  };

  useEffect(() => {
    const FixRatio = () => {
      const container = document.querySelector('#slide-container') as HTMLElement;
      const boxes = document.querySelectorAll('.slide-box') as NodeListOf<HTMLElement>;

      const height = container.clientHeight;
      // let width = height * 0.655;

      // if (width > container.clientWidth) {
      //   width = container.clientWidth;
      //   height = width * 1.526;
      // }

      // 설정한 값을 적용
      boxes.forEach((box) => {
        // box.style.width = `${width}px`;
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

  return (
    <>
      <div id={'slide-container'} className="flex-1 mx-3 grow-1 max-h-[calc(100vh-160px)]">
        <Slider ref={sliderRef} {...sliderOptions}>
          {onboardingCopy.map((copy, index) => (
            <div key={index} className={`slide-box flex flex-col justify-center items-center mt-4 overflow-hidden`}>
              <Image
                src={`/images/onboarding${index + 1}.png`}
                alt="on Boarding banner"
                width={280}
                height={280}
                className={cn(`object-contain w-full max-h-[calc(100vh-300px)] mx-auto mb-4 `)}
              />
              <h3 className="text-center text-2xl font-semibold leading-tight whitespace-pre">{copy.title}</h3>
              <p className="text-center mt-3 text-lg whitespace-pre leading-tight text-grayscale-700">
                {copy.paragraph}
              </p>
            </div>
          ))}
        </Slider>
      </div>
      <div className="flex justify-center gap-2 shrink-0">
        {Array(3)
          .fill(0)
          .map((_, idx) => (
            <span
              key={idx}
              className={cn('block w-[6px] h-[6px] rounded-full', page === idx ? 'bg-neutral-white' : 'bg-neutral-400')}
            ></span>
          ))}
      </div>
      <Button
        className="shrink-0"
        onClick={() => {
          if (page < 2) {
            setPage((page) => page + 1);
            sliderRef.current?.slickNext();
          } else if (window.ReactNativeWebView) {
            window.ReactNativeWebView.postMessage(
              JSON.stringify({ type: 'STORAGE_DATA', data: { key: 'Onboarding', data: true } }),
            );
          }
        }}
      >
        {disableButton ? '다음' : '시작하기'}
      </Button>
    </>
  );
};

export default Onboarding;
