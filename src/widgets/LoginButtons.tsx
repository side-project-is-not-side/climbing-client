import React from 'react';

import { LoginButton } from '@/features/login/ui';

const LoginButtons = () => {
  return (
    <div className="flex flex-col justify-center flex-1 gap-4">
      <LoginButton iconName="apple">애플 로그인</LoginButton>
      <LoginButton iconName="kakao">카카오 로그인</LoginButton>
      <LoginButton iconName="naver">네이버 로그인</LoginButton>
      <LoginButton iconName="google">구글 로그인</LoginButton>
    </div>
  );
};

export default LoginButtons;
