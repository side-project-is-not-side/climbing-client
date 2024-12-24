'use client';

import React, { PropsWithChildren, createContext, useContext, useEffect, useState } from 'react';

import { usePathname } from 'next/navigation';

type AuthContext = {
  token: string | null;
  removeToken: () => void;
};

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
    const getTokenFromCookie = (): string | null => {
      const tokenCookie = document.cookie.split('; ').find((row) => row.startsWith('accessToken='));
      return tokenCookie ? tokenCookie.split('=')[1] : null;
    };

    // 토큰 이벤트 리스너
    const handleTokenReceived = (event: CustomEvent<string>) => {
      if (!event.detail) return;

      const data = event.detail ?? {};

      setToken(data);
    };

    // 초기 토큰 체크
    const initialToken = getTokenFromCookie();
    if (initialToken) {
      setToken(initialToken);
    }

    // 이벤트 리스너 등록
    window.addEventListener('tokenReceived', handleTokenReceived as EventListener);
    document.addEventListener('tokenReceived', handleTokenReceived as EventListener);

    return () => {
      window.removeEventListener('tokenReceived', handleTokenReceived as EventListener);
      document.removeEventListener('tokenReceived', handleTokenReceived as EventListener);
    };
  }, []);

  return (
    <AuthContext.Provider value={{ token, removeToken }}>
      {pathname.includes('/onboarding') || token ? children : <div>{/* loading... */}</div>}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export function useAuthContext() {
  return useContext(AuthContext);
}
