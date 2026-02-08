import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import { ReactQueryClientProvider } from './provider/ReactQueryClientProvider';

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
        <ReactQueryClientProvider>
          <div>
            <Header />
            <main className="w-full">
              <div className="mx-auto mt-24 max-w-1200 px-16">{children}</div>
            </main>
          </div>
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
