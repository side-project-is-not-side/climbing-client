'use client';

import { SWRConfig } from 'swr';

type Props = {
  children: React.ReactNode;
};

function SWRConfigContext({ children }: Props) {
  return (
    <SWRConfig
      value={{
        fetcher: (url: string) =>
          fetch(`https://${process.env.NEXT_PUBLIC_API_HOST}${url}`, { mode: 'no-cors' }).then((res) => res.json()),
      }}
    >
      {children}
    </SWRConfig>
  );
}

export default SWRConfigContext;
