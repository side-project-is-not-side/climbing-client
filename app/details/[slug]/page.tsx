import React from 'react';

function DetailsPage() {
  return (
    <>
      <div className="mb-[40px]">
        <div className="bg-[#E7E7E7] h-[210px] rounded-[10px]">이미지</div>

        <div className="text-white text-lg font-bold mt-[12px] mb-[8px]">더클라임 클라이밍 짐앤샵 연남점</div>
        <div className="text-sm font-normal text-[#FF4438] mb-[2px]">3월 26일 오전 10:00 * 툇마루벽, 어쩌구벽</div>
        <div className="text-sm font-normal text-[#B2B3B3]">마지막 업데이트 3월 21일 * Sector 1</div>

        <ul className="flex gap-[10px] mt-[20px]">
          {['휴식공간', '주차장', '넓은 암장'].map((keyword) => (
            <li className="text-neutral-50 py-[2px] px-[16px] bg-neutral-700 rounded-[10px]" key={keyword}>
              {keyword}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-[30px]">
        <div className="flex flex-col gap-[10px]">
          <h3 className="text-white text-sm font-bold">암장 정보</h3>
          <p className="text-neutral-400 text-sm font-normal">
            예시 문장 그래버즈가 작성해주는 암장 정보 어쩌구 저쩌구 암장에 대한 설명입니다. 예시 문장 그래버즈가
            작성해주는 암장 정보 어쩌구 저쩌구 암장에 대한 설명입니다.
          </p>
        </div>

        <div className="flex flex-col gap-[10px]">
          <h3 className="text-white text-sm font-bold">영업 시간</h3>

          <ul>
            <li className="mb-[4px] flex gap-[10px]">
              <span className="text-white text-sm">월 ~ 금</span>
              <span className="text-neutral-400 text-sm font-normal">10:00 ~ 22:00</span>
            </li>

            <li className="flex gap-[10px]">
              <span className="text-white text-sm">토, 일</span>
              <span className="text-neutral-400 text-sm font-normal">8:00 ~ 23: 00</span>
            </li>
          </ul>
        </div>

        <div>
          <div className="w-full h-[156px] bg-[#E7E7E7] mb-[20px]">지도 영역</div>
          <span className="text-neutral-400 text-sm font-normal">
            서울 서초구 효령로 77길 34 아크로텔 강남역 지하1층 B-115호
          </span>
        </div>
      </div>
    </>
  );
}

export default DetailsPage;
