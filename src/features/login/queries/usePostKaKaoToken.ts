import { useRouter } from 'next/navigation';

import { KakaoToken } from './types';
import { Key } from 'swr';
import useSWRMutation from 'swr/mutation';

import { useToken } from '@/shared/hooks/useToken';

const postCode = async (url: string, { arg }: { arg: string }) => {
  return await fetch(`https://${process.env.NEXT_PUBLIC_API_HOST}${url}?code=${arg}`, { method: 'POST' }).then((res) =>
    res.json(),
  );
};

export const usePostKakaoCode = () => {
  const router = useRouter();
  const { setToken } = useToken();

  return useSWRMutation<KakaoToken, string, Key, string>(`/v1/oauth2/kakao`, postCode, {
    onSuccess: (data) => {
      setToken(JSON.stringify(data.accessToken));
      router.replace('/');
    },
  });
};
