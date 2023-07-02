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

export default async function Layout(props: {
  children: React.ReactNode;
  side: React.ReactNode;
}) {
  return (
    <main className='m-auto flex flex-col bg-mauve-3 lg:grid lg:grid-cols-4 lg:gap-4'>
      <div className='lg:col-span-3'>{props.children}</div>
      <div className='lg:col-span-1'>{props.side}</div>
    </main>
  );
}
