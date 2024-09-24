'use client';

import React, { PropsWithChildren } from 'react';

import { useCheckAppVersion, useCheckPermission } from '@/features/app';

export const HydrationProvider = ({ children }: PropsWithChildren) => {
  useCheckAppVersion();
  useCheckPermission();

  return <>{children}</>;
};
