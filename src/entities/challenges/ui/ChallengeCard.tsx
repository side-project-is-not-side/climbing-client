import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Challenge } from '../apis';
import { getActivityLabel } from '../libs';

function ChallengeCard({ data }: { data: Challenge }) {
  const { imageUrl, id, title, successCount, summary, activityCount, activityType } = data;
  const activityLabel = getActivityLabel(activityType);

  const ratio = (successCount / activityCount) * 10;

  return (
    <li className="w-full rounded-[20px] overflow-hidden bg-grayscale-700">
      <Link href={`/challenge/${id}`} passHref className="flex w-full p-5 gap-4">
        <div className="relative w-[100px] h-[100px]">
          <Image
            className="absolute inset-0 w-[100px] h-[100px] object-contain object-center"
            src={imageUrl.black}
            width={100}
            height={100}
            alt={title}
          />
          <Image
            className="absolute bottom-0 w-[100px] object-cover object-bottom"
            src={imageUrl.color}
            style={{ height: `${ratio}%` }}
            width={100}
            height={100}
            alt={title}
          />
        </div>

        <div className="flex flex-col">
          <span className="text-primary-400 font-flag mb-1">{activityLabel}</span>
          <span className="text-neutral-white font-header-1">{title}</span>
          <p className="text-neutral-400 font-text-2 mb-2 w-full truncate">{summary}</p>

          <div className="flex justify-center items-center w-[86px] h-7 rounded-[200px] bg-grayscale-600 font-text-2 text-neutral-white">
            {activityCount}/{successCount}
          </div>
        </div>
      </Link>
    </li>
  );
}

export default ChallengeCard;
