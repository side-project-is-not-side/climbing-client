'use client';

import { useRouter } from 'next/navigation';

import { SWRConfig } from 'swr';

import { useToken } from '@/shared/hooks/useToken';

type Props = {
  children: React.ReactNode;
};

export function SWRConfigContext({ children }: Props) {
  const router = useRouter();

  const { token, removeToken } = useToken();

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
              case 403:
                // 토큰 만료 시 로그아웃
                removeToken();
                router.push('/login');
                return;
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
