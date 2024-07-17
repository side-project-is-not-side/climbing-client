// import React, { useEffect, useState } from 'react';
import { KakaoLink } from './types';
// import { usePostKakaoCode } from './usePostKaKaoToken';
import useSWR from 'swr';

export const useGetKakaoCode = ({
  shouldFetch,
  setShouldFetch,
}: {
  shouldFetch: boolean;
  setShouldFetch: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  /* popup 옵션 설정 */
  // const [screenSize, setScreenSize] = useState({ top: 0, left: 0 });
  // const windowOptions = `status=no, menubar=no, scrollbars=no, toolbar=no, resizable=no, width=500, height=800, left=${screenSize.left}, top=${screenSize.top}`;

  // useEffect(() => {
  //   if (screen) {
  //     const left = screen.width / 2 - 500 / 2;
  //     const top = screen.height / 2 - 800 / 2;

  //     setScreenSize({ top, left });
  //   }
  // }, [setScreenSize]);

  // 로그인 팝업 호출을 위해 url 조회
  const response = useSWR<KakaoLink>(shouldFetch ? '/v1/oauth2/kakao/login-page' : null, {
    onSuccess: (data: KakaoLink) => {
      // window.open('https://' + data.link, '_blank', windowOptions);
      window.location.href = 'https://' + data.link;
      setShouldFetch(false);
    },
  });

  // 로그인 성공 후 token 조회
  // const { trigger, isMutating } = usePostKakaoCode();

  // // 로그인 팝업이 닫히면 code를 받아 token 조회
  // useEffect(() => {
  //   const handleMessage = (event: MessageEvent) => {
  //     if (event.data.type === 'KAKAO_LOGIN') {
  //       const { code } = event.data;
  //       trigger(code);
  //     }
  //   };

  //   window.addEventListener('message', handleMessage);
  //   return () => window.removeEventListener('message', handleMessage);
  // }, [trigger]);

  return { ...response, isLoading: response.isLoading };
};
