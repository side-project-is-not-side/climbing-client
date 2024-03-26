import React from 'react';

import Link from 'next/link';

// TODO: 아이콘 추가 및 텍스트 디자인 시스템 반영 작업
// NAME: 김도현

function BottomNavigation() {
  return (
    <div className="fixed left-0 bottom-0  w-full h-[80px] bg-neutral-700">
      <nav className="max-w-[768px] w-full h-full mx-auto">
        <ul className="flex items-center h-full text-neutral-white">
          <li className="basis-1/3 h-full flex flex-col justify-center items-center">
            <span>아이콘</span>
            <Link href="/" className="text-[10px]">
              홈
            </Link>
          </li>

          <li className="basis-1/3 h-full flex flex-col justify-center items-center">
            <span>아이콘</span>
            <Link href="/map" className="text-[10px]">
              암장 찾기
            </Link>
          </li>

          <li className="basis-1/3 h-full flex flex-col justify-center items-center">
            <span>아이콘</span>
            <Link href="/schedule" className="text-[10px]">
              세팅 일정
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default BottomNavigation;
