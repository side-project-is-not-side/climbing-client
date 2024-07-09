'use client';

import { SWRConfig } from 'swr';



import { useToken } from '@/shared/hooks/useToken';

type Props = {
  children: React.ReactNode;
};

function SWRConfigContext({ children }: Props) {
  const { token } = useToken();

  return (
    <SWRConfig
      value={{
        fetcher: (url: string) =>
          fetch(`https://${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }).then((res) => res.json()),
      }}
    >
      {children}
    </SWRConfig>
  );
}

export default SWRConfigContext;