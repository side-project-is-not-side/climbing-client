'use client';

import { SWRConfig } from 'swr';

import { getAccessToken } from '@/shared/utils/getAccessToken';

type Props = {
  children: React.ReactNode;
};

export function SWRConfigContext({ children }: Props) {
  const token = getAccessToken();
  return (
    <SWRConfig
      value={{
        fetcher: (url: string) =>
          fetch(`https://${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }).then((res) => {
            switch (res.status) {
              default:
                return res.json();
            }
          }),
      }}
    >
      {children}
    </SWRConfig>
  );
}
