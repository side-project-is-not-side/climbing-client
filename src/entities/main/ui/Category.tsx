import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Icon } from '@/shared/icons';

function Category() {
  return (
    <nav className="mt-[26px]">
      <ul className="flex gap-x-2.5">
        <li className="relative flex-1 bg-[#222427] rounded-[10px]">
          <Link href={'/schedule?category=schedule'} className="block h-full pt-5 pl-5 pr-8 pb-[26px]">
            <div className="w-[100px] h-[100px] relative">
              <Image src="/images/main/upcoming-setting.png" fill alt="다가오는 세팅"></Image>
            </div>

            <div className="text-white mt-[20px]">다가오는 세팅</div>

            <div>
              <span className="text-[#8B8D8E] text-sm"> 다가오는 세팅 날짜를 확인하세요</span>
              <Icon
                name="ArrowBack"
                style={{
                  width: '6px',
                  height: '16px',
                  transform: 'rotate(180deg)',
                  display: 'inline-block',
                  marginBottom: '1px',
                  marginLeft: '4px',
                }}
                color="#8B8D8E"
              />
            </div>
          </Link>
        </li>

        <li className="flex-1 bg-[#222427] rounded-[10px]">
          <Link href={'/schedule?category=complete'} className="block h-full pt-5 pl-5 pr-8 pb-[26px]">
            <div className="w-[90px] h-[100px] relative">
              <Image src="/images/main/complete-setting.png" fill alt="완료된 세팅"></Image>
            </div>

            <div className="text-white mt-[20px]">완료된 세팅</div>
            <div>
              <span className="text-[#8B8D8E] text-sm">놓친 업데이트 된 세팅을 확인하세요</span>
              <Icon
                name="ArrowBack"
                style={{
                  width: '6px',
                  height: '16px',
                  transform: 'rotate(180deg)',
                  display: 'inline-block',
                  marginBottom: '1px',
                  marginLeft: '4px',
                }}
                color="#8B8D8E"
              />
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Category;
