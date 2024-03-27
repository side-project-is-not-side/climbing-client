import React from 'react';

import { Layout } from '@/widgets';

function DetailsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Layout>{children}</Layout>;
}

export default DetailsLayout;
