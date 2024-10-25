'use client';

import React from 'react';

import useSWR from 'swr';

import { HydrationProvider } from '@/app/HydrationProvider';
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

  const onPageMove = () => {
    window.ReactNativeWebView?.postMessage?.(JSON.stringify({ type: 'NAVIGATE', data: { route: 'user_info' } }));
  };
  return (
    <HydrationProvider>
      <div className="flex flex-col gap-5 pt-[30px]">
        <button type="button" onClick={onPageMove} className="flex justify-between items-center py-[14px]">
          <div className="flex gap-1 items-end">
            <span className="font-header-1 text-neutral-white">{nickname}</span>
            <span className="font-text-2 text-neutral-white">님</span>
          </div>

          <Icon name="ArrowRight" size="24" />
        </button>

        <ChallengeStatus
          characterName={characterName}
          characterLevel={characterLevel}
          challengingCount={challengingCount}
          badgeCount={badgeCount}
        />

        <div>
          <ul>
            {/* TODO:" 추후 알림 기능이 픽스되면 구현하도록 합니다" */}
            {/* <Menu text="알림 설정" onClick={() => {}} /> */}
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
    </HydrationProvider>
  );
};

export default MyPage;
