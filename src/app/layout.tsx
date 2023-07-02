import '@/app/globals.css';
import { Inter } from 'next/font/google';

import { Header } from '@/app/_components/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL(process.env.BASE_URL || 'http://localhost:3000'),
  title: 'Tech Blog',
  description: 'Tech Blog presented by microCMS',
  openGraph: {
    title: 'Tech Blog',
    description: 'Tech Blog presented by microCMS',
    images: '/ogp.png',
  },
  alternates: {
    canonical: '/',
  },
};

export default async function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang='ja'>
      <body
        className={`${inter.className} m-auto grid grid-cols-1 flex-col bg-mauve-3 md:grid md:grid-cols-6 md:gap-4`}
      >
        <Header />
        <div className='md:col-span-4 md:col-start-2'>{props.children}</div>
      </body>
    </html>
  );
}
