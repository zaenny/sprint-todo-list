import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';

export const metadata: Metadata = {
  title: 'do it',
  description: 'To doList',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <head>
        <link
          href="https://hangeul.pstatic.net/hangeul_static/css/nanum-square.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="px-16">
          <Header />
          <main className="w-full">
            <div className="mx-auto max-w-1200">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
