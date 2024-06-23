import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Challenge } from '../apis';
import { getActivityLabel } from '../libs';

function SimpleChallengeCard({
  id,
  imageUrl,
  title,
  activityType,
}: Pick<Challenge, 'id' | 'imageUrl' | 'title' | 'activityType'>) {
  const activityLabel = getActivityLabel(activityType);

  return (
    <li className="w-[120px] rounded-[20px] bg-grayscale-700 overflow-hidden">
      <Link href={`/challenge/${id}`} className="h-40 flex flex-col items-center w-full py-5 px-2">
        <Image
          className="w-[70px] h-[70px] mb-1 object-contain object-center"
          src={imageUrl.color}
          width={70}
          height={70}
          alt={title}
        />
        <span className="text-primary-400 font-flag mb-1">{activityLabel}</span>
        <span className="w-full text-center text-neutral-white font-header-3 truncate">{title}</span>
      </Link>
    </li>
  );
}

export default SimpleChallengeCard;
