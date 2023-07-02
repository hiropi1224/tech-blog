import './globals.css';
import { Inter } from 'next/font/google';

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

export default async function RootLayout(props: {
  children: React.ReactNode;
  side: React.ReactNode;
}) {
  return (
    <html lang='ja'>
      <body
        className={`${inter.className} m-auto flex flex-col bg-mauve-3 md:grid md:grid-cols-6 md:gap-4`}
      >
        <div className='md:col-span-3 md:col-start-2'>{props.children}</div>
        <div className='md:col-span-1 md:col-start-5'>{props.side}</div>
      </body>
    </html>
  );
}
