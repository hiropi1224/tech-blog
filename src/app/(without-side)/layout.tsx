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
    <main>
      <div className='lg:col-span-4 lg:col-start-2'>{props.children}</div>
    </main>
  );
}
