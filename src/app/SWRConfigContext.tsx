'use client';

import { useAuthContext } from './AuthContextProvider';
import { SWRConfig } from 'swr';

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
      }}
    >
      {children}{' '}
    </SWRConfig>
  );
}
