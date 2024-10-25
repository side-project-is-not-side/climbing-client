'use client';

import useSWRMutation from 'swr/mutation';

import { useModalRegister } from '@/app';
import { useAuthContext } from '@/app/AuthContextProvider';
import { ModalKeys } from '@/shared/constants';

export const useLogout = () => {
  const { token, removeToken } = useAuthContext();
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
      if (window.ReactNativeWebView) {
        window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'LOGOUT' }));
      }
      removeToken();
      close();
    },
  });

  const handleLogout = () => {
    trigger();
  };

  return { handleLogout };
};
