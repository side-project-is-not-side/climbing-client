import { Inter } from 'next/font/google';

import './globals.css';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import type { Metadata } from 'next';

import { Header } from '@/widgets';
import BottomNavigation from '@/widgets/BottomNavigation';
import SWRConfigContext from '@app/SWRConfigContext';

dayjs.locale('ko');

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Grabbers',
  description: '클라이밍장에 대한 모든 정보를 한번에',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={inter.className}>
      <body>
        <Header />
        <main className="w-full h-full bg-neutral-black">
          <SWRConfigContext>{children}</SWRConfigContext>
        </main>
        <BottomNavigation />
      </body>
    </html>
  );
}
