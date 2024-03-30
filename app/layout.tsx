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
