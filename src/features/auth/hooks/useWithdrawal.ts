'use client';

import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';

import { useModalRegister } from '@/app';
import { useAuthContext } from '@/app/AuthContextProvider';
import { UserInfoMain } from '@/entities/challenges';
import { ModalKeys } from '@/shared/constants';

export const useWithdrawal = () => {
  const { token, removeToken } = useAuthContext();
  const { close } = useModalRegister(ModalKeys.회원탈퇴);

  const { data } = useSWR<UserInfoMain>('/v1/user-info');
  const { provider } = data ?? {};

  const withdraw = async () => {
    await fetch(`https://${process.env.NEXT_PUBLIC_API_HOST}/v1/withdraw`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'POST',
    });
  };

  const { trigger } = useSWRMutation('withdraw', withdraw, {
    onSuccess: () => {
      if (window.ReactNativeWebView) {
        window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'WITHDRAW', data: provider }));
      }
      removeToken();
      close();
    },
  });

  const handleWithdrawal = () => {
    if (provider === 'APPLE') {
      if (window.ReactNativeWebView) {
        window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'APPLE_WITHDRAW' }));
      }
      return;
    }
    trigger();
  };

  return { handleWithdrawal };
};
