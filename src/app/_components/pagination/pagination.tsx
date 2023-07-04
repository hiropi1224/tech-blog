import Link from 'next/link';

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
  const pages = Array.from({ length: Math.ceil(totalCount / 10) }).map(
    (_, i) => i + 1
  );

  return (
    <ul className='flex items-center justify-center gap-6'>
      {pages.map((p) => (
        <li key={p}>
          {current !== p ? (
            <Link
              href={`${basePath}/p/${p}` + (q ? `?q=${q}` : '')}
              className='flex h-9 w-9 items-center justify-center rounded  target:bg-sky-6'
            >
              {p}
            </Link>
          ) : (
            <span className='flex h-9 w-9 items-center justify-center rounded bg-sky-6'>
              {p}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
};
