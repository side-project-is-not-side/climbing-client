'use client';

import useSWRMutation from 'swr/mutation';

import { useModalRegister } from '@/app';
import { ModalKeys } from '@/shared/constants';
import { useCheckFirstVisit, useToken } from '@/shared/hooks';

export const useWithdrawal = () => {
  const { removeToken, token } = useToken();
  const { setIsFirstVisit } = useCheckFirstVisit();
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
      removeToken();
      setIsFirstVisit(true);
      close();
    },
  });

  const handleWithdrawal = () => {
    trigger();
  };

  return { handleWithdrawal };
};
