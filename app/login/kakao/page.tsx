'use client';

import React, { useEffect, useState } from 'react';

/**
 * 카카오 로그인에 성공하면 팝업이 해당 페이지로 이동.
 * queryParams에 담긴 code를 조회하여 부모창의 input을 통해 값 전달
 */
const KakaoLoginPage = () => {
  const [search, setSearch] = useState<string>();
  const searchParams = new URLSearchParams(search);

  useEffect(() => {
    window.opener.document.getElementById('kakao_code').value = searchParams.get('code');
    if (
      searchParams.get('code') &&
      window.opener.document.getElementById('kakao_code').value !== undefined &&
      window.opener.document.getElementById('kakao_code').value !== 'undefined'
    ) {
      window.close();
    }
  }, [searchParams]);

  useEffect(() => {
    if (window) {
      setSearch(window.location.search);
    }
  }, []);
  return <></>;
};

export default KakaoLoginPage;
