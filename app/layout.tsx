import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'Next Lvl | Developer Blog',
  description:
    '호기심 많은 프론트엔드 개발자의 블로그. TypeScript, React.js, Next.js 등 개발 관련 이야기를 나눠요.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
