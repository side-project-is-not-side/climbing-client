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
          fetch(`https://${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
            headers: {
              // TODO: Authorization 구현 후 연결 필요
              Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwiaWF0IjoxNzE5MjE5NTUwLCJleHAiOjE3MTkyNTExMDd9.uPmJlC3i1qjJfUHpxMxjxviLZBhhdVVOJIxSbY5119c`,
            },
          }).then((res) => res.json()),
      }}
    >
      {children}
    </SWRConfig>
  );
}

export default SWRConfigContext;
