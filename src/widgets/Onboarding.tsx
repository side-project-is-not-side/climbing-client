'use client';

import React, { useRef, useState } from 'react';



import Link from 'next/link';



import Slider, { Settings } from 'react-slick';
import { twMerge } from 'tailwind-merge';



import { Button } from '@/shared/ui';


const Onboarding = () => {
  const [disableButton, setDisableButton] = useState(true);

  const sliderRef = useRef<Slider>(null);
  const sliderOptions: Settings = {
    arrows: false,
    dots: true,
    infinite: false,
    afterChange: (index) => {
      if (disableButton && index === 2) setDisableButton(false);
    },
  };

  return (
    <>
      <div id={'sliderContainer'} className="flex-1 mt-[46px] mx-[22px] mb-12 grow-1">
        <Slider ref={sliderRef} {...sliderOptions}>
          {Array(3)
            .fill(0)
            .map((banner, index) => (
              <div key={index}>
                <div className={`mx-auto bg-neutral-400 w-[304px] h-[464px] max-h-[calc(100vh-400px)]`}>
                  {banner + index}
                </div>
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