'use client';

import React, { ReactNode } from 'react';

import Image from 'next/image';

import { BoulderingGymDetails } from '../api/getBoulderingGymDetails';
import './carousel.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

export const SETTING = {
  dots: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dotsClass: 'dots_custom',
  appendDots: (dots: ReactNode) => (
    <div
      style={{
        width: '100%',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ul> {dots} </ul>
    </div>
  ),
};

function Carousel({ imageUrls }: Pick<BoulderingGymDetails, 'imageUrls'>) {
  return (
    <div>
      {imageUrls.length === 1 ? (
        <div className="h-[156px] sm:h-[420px] mb-[40px] rounded-[10px] relative overflow-hidden">
          <Image
            src={imageUrls[0]}
            fill
            style={{
              objectFit: 'cover',
            }}
            alt="클라이밍 장 사진"
            priority
          ></Image>
        </div>
      ) : (
        <Slider {...SETTING}>
          {imageUrls?.map((imageUrl) => (
            <div key={imageUrl} className="h-[210px] sm:h-[420px] rounded-[10px] relative outline-none">
              <Image
                className="rounded-[10px] "
                src={imageUrl}
                fill
                style={{
                  objectFit: 'cover',
                }}
                alt="클라이밍 장 사진"
                priority
              ></Image>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
}

export default Carousel;
