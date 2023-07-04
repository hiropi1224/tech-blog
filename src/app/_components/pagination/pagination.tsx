import Link from 'next/link';

import { limit } from '@/app/_const';

type Props = {
  totalCount: number;
  current?: number;
  basePath?: string;
  q?: string;
};

export const Pagination: React.FC<Props> = ({
  totalCount,
  current = 1,
  basePath = '',
  q,
}) => {
  const pages = Array.from({ length: Math.ceil(totalCount / limit) }).map(
    (_, i) => i + 1
  );

  return (
    <ul className='flex items-center justify-center gap-6'>
      {pages.map((p) => (
        <li key={p}>
          {current !== p ? (
            <Link
              href={`${basePath}/p/${p}` + (q ? `?q=${q}` : '')}
              className='flex h-9 w-9 items-center justify-center rounded'
            >
              {p}
            </Link>
          ) : (
            <span className='flex h-9 w-9 cursor-default items-center justify-center rounded bg-mauve-8'>
              {p}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
};
