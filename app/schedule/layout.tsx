import React from 'react';

import { Layout } from '@/widgets';

function ScheduleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Layout>{children}</Layout>;
}

export default ScheduleLayout;
