'use client';

import useSWRMutation from 'swr/mutation';

import { useModalRegister } from '@/app';
import { ModalKeys } from '@/shared/constants';
import { useGetAccessToken } from '@/shared/hooks/useGetAccessToken';

export const useWithdrawal = () => {
  const token = useGetAccessToken();
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
      close();
    },
  });

  const handleWithdrawal = () => {
    trigger();
  };

  return { handleWithdrawal };
};
