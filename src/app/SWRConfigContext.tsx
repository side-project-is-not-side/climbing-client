'use client';

import { useAuthContext } from './AuthContextProvider';
import { SWRConfig, mutate } from 'swr';

import { isError } from '@/shared/utils/isError';

type Props = {
  children: React.ReactNode;
};

export function SWRConfigContext({ children }: Props) {
  const { token } = useAuthContext();

  const fetcher = async (url: string) => {
    const res = await fetch(`https://${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
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
  };

  return (
    <SWRConfig
      value={{
        fetcher, // token을 반영한 fetcher를 동적으로 전달
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
