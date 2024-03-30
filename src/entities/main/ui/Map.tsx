import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

function Map() {
  return (
    <section>
      <h3 className="text-white font-bold text-lg mb-5">내 근처의 암장은?</h3>
      <Link href="/map" className="block relative w-full aspect-[1.67]">
        <Image src="/images/main/main-banner.png" fill className="absolute" alt="내 근처의 암장 찾기" />
      </Link>
    </section>
  );
}

export default Map;
