import React from 'react';

import Image from 'next/image';

function GeolocationLoading({ visible }: { visible: boolean }) {
  return (
    <section
      className={`fixed top-0 left-0 z-[101] bg-[rgba(0,0,0,0.98)] w-full h-full flex-col justify-center items-center ${visible ? 'flex' : 'hidden'}`}
    >
      <Image src={'/images/spinner.png'} className="animate-spin" width={50} height={50} alt="위치 정보 불러오는 중" />
      <p className="text-neutral-400 text-[14px] leading-5">암장 정보를 가져오는 중입니다.</p>
    </section>
  );
}

export default GeolocationLoading;
