'use client';

import { useLocalStorage } from 'usehooks-ts';

const KEY = 'accessToken';

export const useToken = () => {
  const [token, setToken, removeToken] = useLocalStorage(KEY, '');

  const parsedToken: string = token !== '' ? JSON.parse(token) : '';

  return { token: parsedToken, setToken, removeToken };
};
