import Link from 'next/link';

type Props = {
  title: string;
};

export const Breadcrumb: React.FC<Props> = ({ title }) => {
  return (
    <div className='flex gap-4'>
      <Link href='/' className='font-bold text-mauve-12'>
        Home
      </Link>
      <div className='font-bold text-mauve-12'>{'>'}</div>
      <div className='font-bold text-mauve-12'>{title}</div>
    </div>
  );
};
