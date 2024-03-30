import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

function Banner() {
  return (
    <section>
      <h3 className="text-white font-bold text-lg mb-5">내 근처의 암장은?</h3>

      <Link href={'/map'}>
        <div className="h-[210px] rounded-[10px] relative">
          <Image src="/images/main/banner.png" fill alt="다가오는 세팅" sizes="100%"></Image>
        </div>
      </Link>
    </section>
  );
}

export default Banner;
