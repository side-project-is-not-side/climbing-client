import { KakaoLink } from './types';
import useSWR from 'swr';

export const useGetKakaoCode = ({
  shouldFetch,
  setShouldFetch,
}: {
  shouldFetch: boolean;
  setShouldFetch: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  // 로그인 팝업 호출을 위해 url 조회
  const response = useSWR<KakaoLink>(shouldFetch ? '/v1/oauth2/kakao/login-page' : null, {
    onSuccess: (data: KakaoLink) => {
      window.location.href = 'https://' + data.link;
      setShouldFetch(false);
    },
  });
  return { ...response, isLoading: response.isLoading };
};
