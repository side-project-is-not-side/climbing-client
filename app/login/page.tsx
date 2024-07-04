import React from 'react';



import { Text } from '@/shared/ui';
import { LoginButtons } from '@/widgets';

const LoginPage = () => {
  return (
    <div className="px-5 pt-[60px] pb-5 flex flex-col h-[calc(100vh-140px)]">
      <div>
        <Text.Heading>홀드를 그랩하러 가볼까요! 🔥</Text.Heading>
        <Text.Description>챌린지를 위한 로그인을 진행해주세요.</Text.Description>
      </div>

      <LoginButtons />
    </div>
  );
};

export default LoginPage;