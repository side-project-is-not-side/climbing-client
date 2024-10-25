'use client';

import useSWRMutation from 'swr/mutation';

import { useModalRegister } from '@/app';
import { useAuthContext } from '@/app/AuthContextProvider';
import { ModalKeys } from '@/shared/constants';

export const useWithdrawal = () => {
  const { token, removeToken } = useAuthContext();
  const { close } = useModalRegister(ModalKeys.회원탈퇴);

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
        window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'LOGOUT' }));
      }
      removeToken();
      close();
    },
  });

  const handleWithdrawal = () => {
    trigger();
  };

  return { handleWithdrawal };
};
