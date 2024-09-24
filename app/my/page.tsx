'use client';

import React from 'react';

import Link from 'next/link';

import useSWR from 'swr';

import { UserInfoMain } from '@/entities/challenges';
import { MYPAGE_LINKS, Menu } from '@/entities/my';
import { MoveToStoreButton } from '@/features/app/ui/MoveToStoreButton';
import { Icon } from '@/shared/icons';
import { ChallengeStatus } from '@/widgets';

const MyPage = () => {
  const { data: userInfo, isLoading } = useSWR<UserInfoMain>('/v1/user-info');

  if (isLoading || !userInfo) return null;

  const { challengingCount, characterLevel, characterName, badgeCount, nickname } = userInfo;

  const onLinkClick = (url: string) => () => {
    window.open(url, '_blank');
  };

  return (
    <div className="flex flex-col gap-5 pt-[30px]">
      <Link href="/my/user-info" className="flex justify-between items-center py-[14px]">
        <div className="flex gap-1 items-end">
          <span className="font-header-1 text-neutral-white">{nickname}</span>
          <span className="font-text-2 text-neutral-white">님</span>
        </div>

        <Icon name="ArrowRight" size="24" />
      </Link>

      <ChallengeStatus
        characterName={characterName}
        characterLevel={characterLevel}
        challengingCount={challengingCount}
        badgeCount={badgeCount}
      />

      <div>
        <ul>
          <Menu text="알림 설정" onClick={() => {}} />
          <Menu text={MYPAGE_LINKS['공지사항'].text} onClick={onLinkClick(MYPAGE_LINKS['공지사항'].url)} />
          <Menu
            text={MYPAGE_LINKS['개인정보처리방침'].text}
            onClick={onLinkClick(MYPAGE_LINKS['개인정보처리방침'].url)}
          />
          <Menu text={MYPAGE_LINKS['이용약관'].text} onClick={onLinkClick(MYPAGE_LINKS['이용약관'].url)} />
          <Menu text={MYPAGE_LINKS['문의'].text} onClick={onLinkClick(MYPAGE_LINKS['문의'].url)} />
        </ul>
        <MoveToStoreButton />
      </div>
    </div>
  );
};

export default MyPage;
