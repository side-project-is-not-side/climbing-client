'use client';

import React, { useEffect, useState } from 'react';

import { usePathname, useRouter } from 'next/navigation';

import { useCheckFirstVisit } from '@/shared/hooks';
import { useToken } from '@/shared/hooks/useToken';

const excludedPaths = ['/login', '/onboarding']; // 비로그인 허용 paths

const FirstVisitorChecker = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const router = useRouter();

  const { isFirstVisit } = useCheckFirstVisit();
  const { token } = useToken();

  const [renderContent, setRenderContent] = useState(false);

  useEffect(() => {
    const isExcluded = excludedPaths.some((path) => pathname.includes(path));

    // 로그인 상태거나 비로그인 접근 가능 페이지 => 화면 렌더링
    if (isExcluded || token !== '') return setRenderContent(true);

    // 첫 방문인 경우 => 온보딩 페이지로 이동
    if (isFirstVisit && token === '') return router.push('/onboarding');

    // 방문이력이 있으나 로그아웃 상태인 경우 => 로그인 페이지로 이동
    if (!isFirstVisit && token === '') return router.push('/login');

    setRenderContent(true);
  }, [pathname, isFirstVisit, token, router]);

  return renderContent ? <>{children}</> : <></>;
};

export default FirstVisitorChecker;
