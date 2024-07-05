import React, { useEffect, useState } from 'react';

import useSWR from 'swr';

export const useGetKakaoCode = ({
  enabled,
  setEnabled,
  setCode,
}: {
  enabled: boolean;
  setEnabled: React.Dispatch<React.SetStateAction<boolean>>;
  setCode: React.Dispatch<React.SetStateAction<string | null>>;
}) => {
  const [screenSize, setScreenSize] = useState({ top: 0, left: 0 });

  const windowOptions = `status=no, menubar=no, scrollbars=no, toolbar=no, resizable=no, width=500, height=800, left=${screenSize.left}, top=${screenSize.top}`;

  const onSuccess = (data: { link: string }) => {
    // 로그인 인증 팝업 호출
    const popup = window.open('https://' + data.link, '_blank', windowOptions);

    // 팝업이 차단되었다면 사용자에게 알림
    if (!popup || popup.closed || typeof popup.closed == 'undefined') {
      alert('팝업 차단이 감지되었습니다. 팝업 차단을 해제해 주세요.');
    }

    // 팝업이 닫히면 받아 온 code를 state에 저장
    if (popup) {
      const interval = window.setInterval(() => {
        try {
          if (popup.closed) {
            window.clearInterval(interval);
            const code = (document.getElementById('kakao_code') as HTMLInputElement).value;
            code && setCode(code);
          }
        } catch (e) {
          // empty
        }
      }, 800);
    }

    setEnabled(false);
  };

  useEffect(() => {
    // 로그인 팝업을 화면 중앙에 띄우기 위해 화면 너비 계산
    if (screen) {
      const left = screen.width / 2 - 500 / 2;
      const top = screen.height / 2 - 800 / 2;

      setScreenSize({ top, left });
    }
  }, [setScreenSize]);

  return useSWR(enabled ? '/v1/oauth2/kakao/login-page' : null, { onSuccess });
};
