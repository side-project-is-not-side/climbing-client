'use client';

import React, { PropsWithChildren, createContext, useContext, useEffect, useState } from 'react';

import { usePathname } from 'next/navigation';

type AuthContext = {
  token: string | null;
  removeToken: () => void;
};

const notLoginPath = ['/onboarding', '/services'];

const AuthContext = createContext<AuthContext>({
  token: null,
  removeToken: () => {},
});

const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const pathname = usePathname();
  const [token, setToken] = useState<string | null>(null);

  const removeToken = () => {
    setToken(null);
    document.cookie = 'accessToken=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
  };

  useEffect(() => {
    // 토큰 이벤트 리스너
    const handleTokenReceived = (event: CustomEvent<string>) => {
      if (!event.detail) return;

      const data = event.detail;
      setToken(data);
    };

    // 이벤트 리스너 등록
    window.addEventListener('tokenReceived', handleTokenReceived as EventListener);
    document.addEventListener('tokenReceived', handleTokenReceived as EventListener);

    return () => {
      window.removeEventListener('tokenReceived', handleTokenReceived as EventListener);
      document.removeEventListener('tokenReceived', handleTokenReceived as EventListener);
    };
  }, []);

  useEffect(() => {
    // 초기 토큰 체크
    const getTokenFromCookie = (): string | null => {
      const tokenCookie = document.cookie.split('; ').find((row) => row.startsWith('accessToken='));
      return tokenCookie ? tokenCookie.split('=')[1] : null;
    };

    const initialToken = getTokenFromCookie();
    if (initialToken) {
      setToken(initialToken);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ token, removeToken }}>
      {notLoginPath.some((item) => pathname.includes(item)) || token ? children : <div>{/* loading... */}</div>}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export function useAuthContext() {
  return useContext(AuthContext);
}
