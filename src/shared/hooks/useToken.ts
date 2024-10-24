'use client';

import { useEffect } from 'react';

import { useLocalStorage } from 'usehooks-ts';

const KEY = 'accessToken';

export const useToken = () => {
  const [data, setData, remove] = useLocalStorage(KEY, '');

  const token: string = data ? JSON.parse(data) : '';

  useEffect(() => {
    const accessToken = document.cookie
      .split('; ')
      .find((row) => row.startsWith('accessToken='))
      ?.split('=')[1];

    if (accessToken) setData(accessToken);
  }, []);

  const removeToken = () => {
    if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'LOGOUT' }));
    }
    remove();
  };

  return { token, removeToken };
};
