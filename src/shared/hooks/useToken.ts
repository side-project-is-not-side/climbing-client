'use client';

import { useLocalStorage } from 'usehooks-ts';

const KEY = 'accessToken';

export const useToken = () => {
  const [data, setData, remove] = useLocalStorage(KEY, '');

  const token: string = data !== '' ? JSON.parse(data) : '';

  const setToken = (token:string) => {
    if(window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(JSON.stringify({type: 'STORAGE_DATA', data: {key: KEY, data: token}}));
    }
    setData(JSON.stringify(token))
  }

  return { token, setToken: setToken, removeToken: remove };
};
