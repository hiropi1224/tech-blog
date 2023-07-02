import { IconBrandGithubFilled } from '@tabler/icons-react';
import Link from 'next/link';

export const Header: React.FC = () => {
  return (
    <header className='col-span-6 bg-mauve-7 py-4 text-center'>
      <div className='flex flex-col items-center justify-center'>
        <p className='text-lg font-bold'>Shirahamaのブログ</p>
        <Link
          href='https://github.com/hiropi1224'
          target='_blank'
          rel='noreferrer'
        >
          <IconBrandGithubFilled size={20} />
        </Link>
      </div>
    </header>
  );
};
