'use client';

import { useRef } from 'react';

import { useAuthContext } from './AuthContextProvider';
import { SWRConfig, mutate } from 'swr';

import { isError } from '@/shared/utils/isError';

type Props = {
  children: React.ReactNode;
};

export function SWRConfigContext({ children }: Props) {
  const errCnt = useRef(0);
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
        fetcher,
        suspense: true,
        revalidateOnMount: true,
        onSuccess: (data, key) => {
          if (isError(data)) {
            errCnt.current = errCnt.current + 1;
            if (errCnt.current < 10) {
              setTimeout(() => {
                mutate(key);
              }, 400);
            } else {
              errCnt.current = 0;
              return window.ReactNativeWebView?.postMessage(JSON.stringify({ type: '_ERROR', data: 403 }));
            }
          } else {
            errCnt.current = 0;
          }
        },
      }}
    >
      {children}
    </SWRConfig>
  );
}
