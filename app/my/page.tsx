'use client';

import React from 'react';

import { useRouter } from 'next/navigation';

import { useModalContext } from '@/app/ModalContext';
import { ModalKeys } from '@/shared/constants';
import { Button } from '@/shared/ui';
import { LogoutModal } from '@/widgets';

const MyPage = () => {
  const router = useRouter();
  const { open } = useModalContext();

  return (
    <>
      <div className="flex gap-4 my-20">
        {/* 테스트용 버튼. 구현 시 삭제 */}
        <Button onClick={() => router.push('/login')}>로그인</Button>
        <Button onClick={() => open(ModalKeys.로그아웃)}>로그아웃</Button>
      </div>

      <LogoutModal />
    </>
  );
};

export default MyPage;
