'use client';

import React, { useEffect, useState } from 'react';

import { usePostKakaoCode } from '@/features/login/queries';

const KakaoLoginPage = () => {
  const { trigger } = usePostKakaoCode();
  const [search, setSearch] = useState<string>();

  useEffect(() => {
    const searchParams = new URLSearchParams(search);

    const code = searchParams.get('code');
    if (code) {
      window.postMessage({ type: 'KAKAO_LOGIN', code });
      trigger(code);
    }
  }, [search, trigger]);

  useEffect(() => {
    if (window) {
      setSearch(window.location.search);
    }
  }, []);
  return <></>;
};

export default KakaoLoginPage;