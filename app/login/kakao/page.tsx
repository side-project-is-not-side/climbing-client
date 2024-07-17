'use client';

import React, { useEffect, useState } from 'react';


/**
 * 카카오 로그인에 성공하면 팝업이 해당 페이지로 이동.
 * queryParams에 담긴 code를 조회하여 부모창의 input을 통해 값 전달
 */
const KakaoLoginPage = () => {
  const [search, setSearch] = useState<string>();
  
  useEffect(() => {
    const searchParams = new URLSearchParams(search);

    const code = searchParams.get('code');
    if (code) {
      window.opener.postMessage({ type: 'KAKAO_LOGIN', code });
      window.close();
    }
  }, [search]);

  useEffect(() => {
    if (window) {
      setSearch(window.location.search);
    }
  }, []);
  return <></>;
};

export default KakaoLoginPage;