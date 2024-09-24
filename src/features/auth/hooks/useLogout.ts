'use client';

import { useRouter } from 'next/navigation';

import useSWRMutation from 'swr/mutation';

import { useModalRegister } from '@/app';
import { ModalKeys } from '@/shared/constants';
import { useToken } from '@/shared/hooks';

export const useLogout = () => {
  const { removeToken, token } = useToken();
  const router = useRouter();
  const { close } = useModalRegister(ModalKeys.로그아웃);

  const logout = async () => {
    await fetch(`https://${process.env.NEXT_PUBLIC_API_HOST}/v1/oauth2/logout`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'POST',
    });
  };

  const { trigger } = useSWRMutation('logout', logout, {
    onSuccess: () => {
      removeToken();
      router.push('/login');
      close();
    },
  });

  const handleLogout = () => {
    trigger();
  };

  return { handleLogout };
};
