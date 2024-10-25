'use client';

import React, { PropsWithChildren, createContext, useContext, useEffect, useState } from 'react';

import { usePathname } from 'next/navigation';

type AuthContext = {
  token: string | null;
  isTokenReady: boolean;
  removeToken: () => void;
};

const AuthContext = createContext<AuthContext>({
  token: null,
  isTokenReady: false,
  removeToken: () => {},
});

const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const pathname = usePathname();

  const [token, setToken] = useState<string | null>(null);
  const [isTokenReady, setIsTokenReady] = useState(false);

  const removeToken = () => {
    setToken(null);
  };

  useEffect(() => {
    const checkToken = () => {
      const accessToken = document.cookie
        .split('; ')
        .find((row) => row.startsWith('accessToken='))
        ?.split('=')[1];

      if (accessToken) {
        setToken(accessToken);
        setIsTokenReady(true);
        return true;
      }
      return !!token;
    };

    if (!checkToken()) {
      const interval = setInterval(checkToken, 100);
      const timeout = setTimeout(() => {
        clearInterval(interval);
        console.error('Token not received within timeout');
      }, 5000);

      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }
  }, []);
  return (
    <AuthContext.Provider value={{ token, isTokenReady, removeToken }}>
      {pathname.includes('/onboarding') || token ? children : <div>{/* loading... */}</div>}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export function useAuthContext() {
  return useContext(AuthContext);
}
