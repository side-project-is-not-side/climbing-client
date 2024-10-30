'use client';

import { useAuthContext } from './AuthContextProvider';
import { SWRConfig, mutate } from 'swr';

import { isError } from '@/shared/utils/isError';

type Props = {
  children: React.ReactNode;
};

export function SWRConfigContext({ children }: Props) {
  const { token } = useAuthContext();

  return (
    <SWRConfig
      value={{
        fetcher: async (url: string) => {
          const res = fetch(`https://${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
            headers: {
              Authorization: token ? `Bearer ${token}` : '',
              'Content-Type': 'application/json',
            },
          }).then((res) => {
            switch (res.status) {
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
