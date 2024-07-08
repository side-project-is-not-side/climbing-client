import React, { useEffect, useState } from 'react';



import { KakaoLink } from './types';
import { usePostKakaoCode } from './usePostKaKaoToken';
import useSWR from 'swr';

import { openPopup } from '@/shared/utils/popup';

export const useGetKakaoCode = ({
  shouldFetch,
  setShouldFetch,
}: {
  shouldFetch: boolean;
  setShouldFetch: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  /* popup 옵션 설정 */
  const [screenSize, setScreenSize] = useState({ top: 0, left: 0 });
  const windowOptions = `status=no, menubar=no, scrollbars=no, toolbar=no, resizable=no, width=500, height=800, left=${screenSize.left}, top=${screenSize.top}`;

  useEffect(() => {
    if (screen) {
      const left = screen.width / 2 - 500 / 2;
      const top = screen.height / 2 - 800 / 2;

      setScreenSize({ top, left });
    }
  }, [setScreenSize]);

  // 로그인 팝업 호출을 위해 url 조회
  const response = useSWR<KakaoLink>(shouldFetch ? '/v1/oauth2/kakao/login-page' : null, {
    onSuccess: (data: KakaoLink) => {
      openPopup({
        url: 'https://' + data.link,
        features: windowOptions,
        onClose: () => {
          const code = (document.getElementById('kakao_code') as HTMLInputElement).value;
          code && trigger(code);
        },
      });

      setShouldFetch(false);
    },
  });

  // 로그인 성공 후 token 조회
  const { trigger, isMutating } = usePostKakaoCode();

  return { ...response, isLoading: response.isLoading || isMutating };
};