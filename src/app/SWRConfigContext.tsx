'use client';

import { useAuthContext } from './AuthContextProvider';
import { SWRConfig, mutate } from 'swr';

import { isError } from '@/shared/utils/isError';

type Props = {
  children: React.ReactNode;
};

export function SWRConfigContext({ children }: Props) {
  const { token, removeToken } = useAuthContext();

  return (
    <SWRConfig
      value={{
        fetcher: async (url: string) => {
          const res = await fetch(`https://${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
            headers: {
              Authorization: token ? `Bearer ${token}` : '',
              'Content-Type': 'application/json',
            },
          }).then((res) => {
            switch (res.status) {
              case 403:
                // 토큰 만료 또는 권한 없음
                removeToken();
                return window.ReactNativeWebView?.postMessage(JSON.stringify({ type: '_ERROR', data: 403 }));
              default:
                return res.json();
            }
          });

          return res;
        },
        suspense: true,
        revalidateOnMount: true,
        onSuccess: (data, key) => {
          if (isError(data)) {
            setTimeout(() => {
              mutate(key);
            }, 300);
          }
        },
      }}
    >
      {children}
    </SWRConfig>
  );
}
