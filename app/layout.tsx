import { M_PLUS_1p, Noto_Sans_KR } from 'next/font/google';
import localFont from 'next/font/local';

import './globals.css';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import type { Metadata } from 'next';

import FirstVisitorChecker from '@/app/FirstVisitorChecker';
import { ModalContextProvider } from '@/app/ModalContext';
import { getMetadata } from '@/shared/lib/getMetadata';
import { Layout } from '@/widgets';
import SWRConfigContext from '@app/SWRConfigContext';
import { Analytics } from '@vercel/analytics/react';

dayjs.locale('ko');

const notoSansKR = Noto_Sans_KR({ subsets: ['latin'] });

const mPlus1P = M_PLUS_1p({ subsets: ['latin'], weight: ['700', '800'], variable: '--font-mPlus1p' });

const cafeSurround = localFont({
  src: '../public/fonts/Cafe24Ssurround-v2.0.woff2',
  display: 'swap',
  variable: '--font-cafeSurround',
});

export const generateMetadata = async (): Promise<Metadata> => {
  return getMetadata();
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${notoSansKR.className} ${mPlus1P.variable} ${cafeSurround.variable}`}>
      <body className="bg-neutral-black">
        <Analytics />
        <FirstVisitorChecker>
          <Layout>
            <SWRConfigContext>
              <ModalContextProvider>{children}</ModalContextProvider>
            </SWRConfigContext>
          </Layout>
        </FirstVisitorChecker>
      </body>
    </html>
  );
}
