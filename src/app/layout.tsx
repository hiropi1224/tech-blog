import './globals.css';
import { Inter } from 'next/font/google';

import { TagList } from '@/app/_components/tag-list';
import { getTagList } from '@/app/_libs/microcms';

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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const tags = await getTagList({
    limit: 10,
    orders: 'createdAt',
  });

  return (
    <html lang='ja'>
      <body className={inter.className}>
        <TagList tags={tags.contents} />
        {children}
      </body>
    </html>
  );
}
