import React from 'react';

import Image from 'next/image';

import { GetBoulderingGymDetailResponse } from '../api/types';
import SelectedGymContents from './SelectedGymContents';
import useSWR from 'swr';

const ENDPOINT = '/api/bouldering-gym/around';

const SelectedGymCard = ({ id }: { id: number }) => {
  const { data, isLoading } = useSWR<GetBoulderingGymDetailResponse>(`${ENDPOINT}/${id}`);
  return (
    <article className="fixed bottom-20 left-0 p-5 pb-8 right-0 mx-auto w-full h-[232px] bg-neutral-black rounded-t-[10px]">
      {isLoading ? (
        <div className="flex flex-col justify-center items-center w-full h-full">
          <Image
            src={'/images/spinner.png'}
            className="animate-spin"
            width={50}
            height={50}
            alt="위치 정보 불러오는 중"
          />
        </div>
      ) : (
        <SelectedGymContents data={data} />
      )}
    </article>
  );
};

export default SelectedGymCard;
