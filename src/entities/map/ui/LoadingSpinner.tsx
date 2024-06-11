import React from 'react';

import Image from 'next/image';

function LoadingSpinner() {
  return (
    <div className="mx-auto">
      <Image
        src={'/images/spinner.png'}
        className="animate-spin mx-auto"
        width={50}
        height={50}
        alt="위치 정보 불러오는 중"
      />
      <p className="text-neutral-400 text-[14px] leading-5">암장 정보를 가져오는 중입니다.</p>
    </div>
  );
}

export default LoadingSpinner;
