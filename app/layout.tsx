import { M_PLUS_1p } from 'next/font/google';
import localFont from 'next/font/local';

import './globals.css';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import type { Metadata } from 'next';

import { FirstVisitorChecker, ModalContextProvider, SWRConfigContext } from '@/app';
import { getMetadata } from '@/shared/lib/getMetadata';
import { Layout } from '@/widgets';

dayjs.locale('ko');

const mPlus1P = M_PLUS_1p({ subsets: ['latin'], weight: ['700', '800'], variable: '--font-mPlus1p' });

const pretendard = localFont({
  src: '../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  variable: '--font-pretendard',
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
    <html lang="ko" className={`${mPlus1P.variable} ${pretendard.variable} bg-neutral-black`}>
      <body className="font-pretendard select-none">
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
