import { tv } from 'tailwind-variants';

export const metadata = {
  metadataBase: new URL(process.env.BASE_URL || 'http://localhost:3000'),
  title: 'Tech Blog',
  description: 'Technology Blog by shirahama',
  openGraph: {
    title: 'Tech Blog',
    description: 'Technology Blog by shirahama',
    images: '/ogp.png',
  },
  alternates: {
    canonical: '/',
  },
};

const layoutStyle = tv({
  slots: {
    base: 'm-auto mt-4 flex flex-col gap-4 bg-mauve-3 lg:grid lg:grid-cols-4 lg:gap-4',
    main: 'm-2 lg:col-span-3',
    side: 'm-2 lg:col-span-1',
  },
});

const { base, main, side } = layoutStyle();

export default async function Layout(props: {
  children: React.ReactNode;
  side: React.ReactNode;
}) {
  return (
    <main className={base()}>
      <div className={main()}>{props.children}</div>
      <div className={side()}>{props.side}</div>
    </main>
  );
}
