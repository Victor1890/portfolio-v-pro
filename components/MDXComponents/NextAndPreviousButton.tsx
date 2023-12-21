import Link from 'next/link';
import { IoArrowForwardSharp } from 'react-icons/io5';

type Props = {
  prevHref: string;
  prevTitle: string;
  nextHref: string;
  nextTitle: string;
};

export default function NextAndPreviousButton({
  prevHref,
  prevTitle,
  nextHref,
  nextTitle,
}: Props) {
  return (
    <div className='flex flex-col gap-2 lg:flex-row '>
      {prevHref && prevTitle && (
        <BlogPageButton href={prevHref} title={prevTitle} type='previous' />
      )}
      {nextHref && nextTitle && (
        <BlogPageButton href={nextHref} title={nextTitle} type='next' />
      )}
    </div>
  );
}

function BlogPageButton({
  href,
  title,
  type,
}: {
  href: string;
  title: string;
  type: 'previous' | 'next';
}) {
  return (
    <Link
      title={title}
      href={href}
      className={`flex ${
        type === 'previous' && 'flex-row-reverse'
      } w-full justify-between rounded-md bg-neutral-800 p-3 !no-underline shadow transition hover:bg-black active:scale-95 dark:ring-white dark:hover:ring-1`}
    >
      <div
        className={`flex flex-col gap-1 ${type === 'previous' && 'text-right'}`}
      >
        <p className='!my-0  text-sm capitalize text-gray-300 sm:font-light'>
          {type} Article
        </p>
        <p className='!my-0 text-base font-bold text-white sm:font-medium'>
          {title}
        </p>
      </div>
      <IoArrowForwardSharp
        className={`h-8 w-8 self-center rounded-full bg-white p-2 text-black ${
          type === 'previous' && 'rotate-180'
        }`}
      />
    </Link>
  );
}
