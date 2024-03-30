import React from 'react';

import Image from 'next/image';

import { GetBoulderingGymDetailResponse } from '../api/types';
import SelectedGymContents from './SelectedGymContents';
import useSWR from 'swr';

import { Icon } from '@/shared/icons';

const ENDPOINT = '/api/bouldering-gym/around';

const SelectedGymCard = ({ id, onClose }: { id: number; onClose: () => void }) => {
  const { data, isLoading } = useSWR<GetBoulderingGymDetailResponse>(`${ENDPOINT}/${id}`);
  return (
    <article className="fixed bottom-20 max-w-3xl left-0 pb-8 right-0 mx-auto w-full h-[232px] bg-neutral-800 rounded-t-[10px]">
      <button type="button" className="absolute top-5 right-5 text-[0px]" onClick={onClose}>
        <Icon name="Close" />
        닫기
      </button>
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
