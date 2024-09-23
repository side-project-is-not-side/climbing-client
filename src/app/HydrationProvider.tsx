'use client';

import React, { PropsWithChildren } from 'react';

import { useCheckAppVersion } from '@/features/app';

export const HydrationProvider = ({ children }: PropsWithChildren) => {
  useCheckAppVersion();

  return <>{children}</>;
};
