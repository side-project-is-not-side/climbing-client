'use client';

import React from 'react';

import { useRouter } from 'next/navigation';

import { useCheckFirstVisit, useToken } from '@/shared/hooks';
import { Button } from '@/shared/ui';

const MyPage = () => {
  const router = useRouter();
  const { removeToken } = useToken();
  const { setIsFirstVisit } = useCheckFirstVisit();

  return (
    <div className="flex gap-4 my-20">
      {/* 테스트용 버튼. 구현 시 삭제 */}
      <Button onClick={() => router.push('/login')}>로그인</Button>
      <Button onClick={removeToken}>로그아웃</Button>
      <Button
        onClick={() => {
          removeToken();
          setIsFirstVisit(true);
        }}
      >
        최초방문
      </Button>
    </div>
  );
};

export default MyPage;
