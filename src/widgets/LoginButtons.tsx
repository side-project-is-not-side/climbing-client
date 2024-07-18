'use client';

import React, { useEffect } from 'react';

import { useRouter } from 'next/navigation';

import useKakaoLogin from '@/features/login/hooks/useKakaoLogin';
import { LoginButton } from '@/features/login/ui';
import { useToken } from '@/shared/hooks/useToken';

const LoginButtons = () => {
  const { token } = useToken();

  const { fetch: kakaoLogin } = useKakaoLogin();

  const router = useRouter();

  useEffect(() => {
    if (token !== '') {
      router.back();
    }
  }, [token, router]);

  return (
    <>
      <div className="flex flex-col justify-center flex-1 gap-4">
        <LoginButton iconName="apple" disabled>애플 로그인</LoginButton>
        <LoginButton iconName="kakao" onClick={kakaoLogin}>
          카카오 로그인
        </LoginButton>
        <LoginButton iconName="naver" disabled>네이버 로그인</LoginButton>
        <LoginButton iconName="google" disabled>구글 로그인</LoginButton>
      </div>

      {/* 팝업에서 정보를 받아 저장하는 inputs */}
      <input type="hidden" id="kakao_code" name="kakao_code" />
    </>
  );
};

export default LoginButtons;
