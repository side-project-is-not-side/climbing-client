'use client';

import React from 'react';

import useKakaoLogin from '@/features/login/hooks/useKakaoLogin';
import { LoginButton } from '@/features/login/ui';

const LoginButtons = () => {
  const { fetch, isLoading } = useKakaoLogin();
  return (
    <div className="flex flex-col justify-center flex-1 gap-4">
      <LoginButton iconName="apple">애플 로그인</LoginButton>
      <LoginButton iconName="kakao" disabled={isLoading} onClick={fetch}>
        카카오 로그인
      </LoginButton>
      <LoginButton iconName="naver">네이버 로그인</LoginButton>
      <LoginButton iconName="google">구글 로그인</LoginButton>
    </div>
  );
};

export default LoginButtons;
