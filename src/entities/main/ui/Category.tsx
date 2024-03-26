import React from 'react';

import Link from 'next/link';

function Category() {
  return (
    <nav className="mt-[26px]">
      <ul className="flex gap-x-2.5">
        <li className="flex-1 bg-[#222427] pt-5 pl-[20px] pr-[24px] pb-[30px] rounded-[10px]">
          <Link href={'/schedule?category=scheduled'}>
            <div className="w-[100px] h-[90px] bg-[#E7E7E7] mb-[20px]">이미지</div>

            <div className="text-white">다가오는 세팅</div>
            <div className="text-[#8B8D8E]">{`다가오는 세팅 날짜를 확인하세요 >`}</div>
          </Link>
        </li>

        <li className="flex-1 bg-[#222427] pt-5 pl-5 pr-8 pb-[26px] rounded-[10px]">
          <Link href={'/schedule?category?completed'}>
            <div className="w-[100px] h-[90px] bg-[#E7E7E7] mb-[20px]">이미지</div>

            <div className="text-white">완료된 세팅</div>
            <div className="text-[#8B8D8E]">{`놓친 업데이트 된 세팅을 확인하세요 >`}</div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Category;
