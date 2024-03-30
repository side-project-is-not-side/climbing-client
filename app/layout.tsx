import { Noto_Sans_KR } from 'next/font/google';

import './globals.css';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import type { Metadata } from 'next';

import { getMetadata } from '@/shared/lib/getMetadata';
import { Header, Layout } from '@/widgets';
import BottomNavigation from '@/widgets/BottomNavigation';
import SWRConfigContext from '@app/SWRConfigContext';

dayjs.locale('ko');

const notoSansKR = Noto_Sans_KR({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Grabbers',
  description: '클라이밍장에 대한 모든 정보를 한번에',
  icons: [
    {
      url: '/favicons/android-chrome-192x192.png',
      sizes: '192x192',
      type: 'image/png',
    },
    {
      url: '/favicons/android-chrome-512x512.png',
      sizes: '512x512',
      type: 'image/png',
    },
  ],
};

export const generateMetadata = async (): Promise<Metadata> => {
  return getMetadata();
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={notoSansKR.className}>
      <body>
        <Header />

        <Layout>
          <SWRConfigContext>{children}</SWRConfigContext>
        </Layout>

        <BottomNavigation />
      </body>
    </html>
  );
}
