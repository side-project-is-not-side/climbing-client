import React from 'react';

import Image from 'next/image';

import { createPortal } from 'react-dom';

function GeolocationLoading() {
  return createPortal(
    <section className="flex fixed z-[101] bg-[rgba(0,0,0,0.98)] w-full h-full flex-col justify-center items-center">
      <Image src={'/images/spinner.png'} className="animate-spin" width={50} height={50} alt="위치 정보 불러오는 중" />
      <p className="text-neutral-400 text-[14px] leading-5">암장 정보를 가져오는 중입니다.</p>
    </section>,
    document.body,
  );
}

export default GeolocationLoading;
