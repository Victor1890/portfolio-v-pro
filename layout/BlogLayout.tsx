import { useEffect, useState } from 'react';
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs';

import AnimatedDiv from '@components/FramerMotion/AnimatedDiv';
import Newsletter from '@components/Newsletter';
import ScrollProgressBar from '@components/ScrollProgressBar';
import TableOfContents from '@components/TableOfContents';
import { opacityVariant } from '@content/FramerMotionVariants';
import useBookmarkBlogs from '@hooks/useBookmarkBlogs';
import useWindowLocation from '@hooks/useWindowLocation';
import { IArticleDevTo } from '@provider/dev.to/devto.interface';
import { getFormattedDate } from '@utils/date';
import Image from 'next/image';
import Link from 'next/link';
import { FiPrinter } from 'react-icons/fi';
import ShareOnSocialMedia from '../components/ShareOnSocialMedia';
import { ITableOfContentMDX } from 'interfaces/common/common.interface';

export default function BlogLayout({
  post,
  children,
}: {
  post: IArticleDevTo & { tableOfContents: ITableOfContentMDX[] };
  children: JSX.Element | string;
}) {
  const { currentURL } = useWindowLocation();
  const [isTOCActive, setIsTOCActive] = useState(false);
  const [alreadyBookmarked, setAlreadyBookmarked] = useState(false);

  const { isAlreadyBookmarked, removeFromBookmark } = useBookmarkBlogs(
    'blogs',
    []
  );

  useEffect(() => {
    setAlreadyBookmarked(isAlreadyBookmarked(post.slug));
  }, [isAlreadyBookmarked, post.slug]);

  return (
    <section
      className={`relative mt-[44px] !overflow-hidden md:mt-[60px] ${
        !post.tableOfContents.length ? 'flex items-center justify-center' : ''
      }`}
    >
      {post.tableOfContents.length ? (
        <TableOfContents
          isTOCActive={isTOCActive}
          setIsTOCActive={setIsTOCActive}
          tableOfContents={post.tableOfContents}
        />
      ) : null}

      {/* Blog Content */}
      <section
        className={`prose relative p-5 font-barlow dark:prose-invert sm:pt-10 ${
          post.tableOfContents.length > 0 ? 'md:ml-[35%] lg:ml-[30%]' : ''
        } print:!mx-auto`}
        style={{
          maxWidth: '800px',
          opacity: `${isTOCActive} && "0.3"`,
          margin: `${post.tableOfContents.length <= 0} && "auto"`,
        }}
      >
        <ScrollProgressBar />
        <h1
          className={`text-3xl ${
            post.tableOfContents.length > 0 ? '' : 'text-center'
          } font-bold tracking-tight text-black dark:text-white md:text-5xl`}
        >
          {post.title}
        </h1>

        <div className='flex !w-full items-start text-gray-700 dark:text-gray-300'>
          <div className='flex w-full flex-wrap items-center justify-between gap-2'>
            <div className='flex items-center gap-2'>
              <div className='w-[40px]'>
                <Image
                  height={933}
                  width={933}
                  alt={
                    post.organization ? post.organization.name : post.user.name
                  }
                  src={
                    post.organization
                      ? post.organization.profile_image
                      : post.user.profile_image
                  }
                  className='!m-0 rounded-full'
                />
              </div>
              <div className='flex flex-col'>
                <div className='flex items-center gap-1 text-sm'>
                  <Link
                    href='/about'
                    className='text-sm font-medium hover:underline'
                  >
                    {post.user.name}
                  </Link>
                  {post.organization && (
                    <span>
                      for{' '}
                      <Link
                        href={post.user.website_url}
                        className='font-medium hover:underline'
                      >
                        {post.organization.name}
                      </Link>
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className='flex items-center gap-1'>
              <div className='rounded-md bg-white py-1 px-2 text-xs text-black dark:bg-darkSecondary dark:text-gray-400'>
                {getFormattedDate(new Date(post.published_at))}
              </div>
              <div className='rounded-md bg-white py-1 px-2 text-xs text-black dark:bg-darkSecondary dark:text-gray-400'>
                {post.reading_time_minutes} min read
              </div>
              {/* <div className="py-1 px-2 text-xs rounded-md bg-white text-black dark:bg-darkSecondary dark:text-gray-400">
                {post.readingTime.words} words
              </div> */}
            </div>
          </div>

          <div className='ml-4 sm:place-self-center'>
            <button
              title='Save for Later'
              className='mt-2 transition active:scale-75 sm:mt-1'
              onClick={() => {
                alreadyBookmarked ? removeFromBookmark(post.slug) : '';
                // : addToBookmark(post.meta);
              }}
            >
              {alreadyBookmarked ? (
                <BsBookmarkFill className='h-6 w-6 ' />
              ) : (
                <BsBookmark className='h-6 w-6 ' />
              )}
            </button>
          </div>
        </div>
        <AnimatedDiv
          variants={opacityVariant}
          className='blog-container prose-no-margin:!m-0 prose-sm max-w-full marker:text-black prose-h4:mb-6 prose-pre:bg-white prose-pre:saturate-150 prose-img:mx-auto prose-img:rounded-md dark:marker:text-white dark:prose-pre:bg-darkSecondary dark:prose-pre:saturate-100 sm:prose-base'
        >
          {children}
        </AnimatedDiv>
        <Newsletter />
        <div className='my-10 flex w-full flex-col items-center gap-4 print:hidden'>
          <h3
            style={{ margin: '0' }}
            className='text-xl font-semibold dark:text-white'
          >
            Share on Social Media:
          </h3>
          <ShareOnSocialMedia
            className='flex w-fit flex-wrap items-center gap-2'
            title={post.title}
            url={currentURL}
            summary={post.description}
            cover_image={post.cover_image}
          >
            <div className='cursor-pointer rounded-full bg-gray-700 p-2 text-white'>
              <FiPrinter className='h-4 w-4' onClick={() => window.print()} />
            </div>
          </ShareOnSocialMedia>
        </div>
      </section>
    </section>
  );
}
