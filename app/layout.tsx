import { M_PLUS_1p } from 'next/font/google';

import './globals.css';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import type { Metadata } from 'next';

import { ModalContextProvider, SWRConfigContext } from '@/app';
import AuthContextProvider from '@/app/AuthContextProvider';
import { getMetadata } from '@/shared/lib/getMetadata';
import { Layout } from '@/widgets';

dayjs.locale('ko');

const mPlus1P = M_PLUS_1p({ subsets: ['latin'], weight: ['700', '800'], variable: '--font-mPlus1p' });

export const generateMetadata = async (): Promise<Metadata> => {
  return getMetadata();
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${mPlus1P.variable} bg-neutral-black`}>
      <body className="font-pretendard select-none">
        <Layout>
          <AuthContextProvider>
            <SWRConfigContext>
              <ModalContextProvider>{children}</ModalContextProvider>
            </SWRConfigContext>
          </AuthContextProvider>
        </Layout>
      </body>
    </html>
  );
}
