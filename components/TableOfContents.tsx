import { FadeContainer, opacityVariant } from '@content/FramerMotionVariants';
import { lockScroll, removeScrollLock } from '@utils/functions';
import { useEffect, useState } from 'react';

import AnimatedDiv from './FramerMotion/AnimatedDiv';
import AnimatedHeading from './FramerMotion/AnimatedHeading';
import { CgSearch } from 'react-icons/cg';
import Link from 'next/link';
import { TableOfContents as TableOfContentType } from '@lib/types';
import { stringToSlug } from '@utils/string.util';
import useScrollPercentage from '@hooks/useScrollPercentage';
import useWindowSize from '@hooks/useWindowSize';

export default function TableOfContents({
  tableOfContents,
  setIsTOCActive,
  isTOCActive,
}: {
  tableOfContents: TableOfContentType[];
  setIsTOCActive: (val: boolean) => void;
  isTOCActive: boolean;
}) {
  const [searchValue, setSearchValue] = useState('');
  const [toc, setToc] = useState(tableOfContents);

  const scrollPercentage = useScrollPercentage();
  const size = useWindowSize();

  useEffect(() => {
    // In Case user exists from mobile to desktop then remove the scroll lock and TOC active to false
    if (size.width > 768) {
      removeScrollLock();
      setIsTOCActive(false);
    }
  }, [size, setIsTOCActive]);
  useEffect(() => {
    setToc(
      tableOfContents.filter((table: any) =>
        table.heading.toLowerCase().includes(searchValue.trim().toLowerCase())
      )
    );
  }, [searchValue, tableOfContents]);
  return (
    <>
      {tableOfContents.length > 0 && (
        <>
          <div
            className={`fixed h-full print:hidden ${
              isTOCActive
                ? 'left-0 top-[44px] opacity-100 md:top-[60px]'
                : '-left-full opacity-0'
            } ${
              scrollPercentage > 95 ? 'xl:-left-full' : 'xl:left-0'
            } fixed z-50 flex h-screen  w-full flex-col gap-1 overflow-y-scroll bg-darkWhite p-10 !pb-[100px] font-barlow text-neutral-800 transition-all duration-500 dark:bg-darkPrimary dark:text-gray-200 md:left-0 md:max-w-[35%] md:p-14 md:opacity-100 lg:max-w-[30%] `}
          >
            {/* TOC Search Bar */}
            <div className='group relative mx-auto -ml-[5px] w-full rounded-md  text-slate-700 dark:text-gray-300'>
              <CgSearch className='absolute top-[50%] z-10 ml-3 h-5 w-5 -translate-y-1/2' />

              <input
                className='w-full rounded-md bg-white px-5 py-2 pl-10 shadow outline-none ring-1 ring-slate-900/10 transition duration-200 hover:ring-slate-400 dark:bg-darkSecondary'
                type='text'
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder='Search Content...'
              />
            </div>
            <AnimatedHeading
              variants={opacityVariant}
              className='-ml-[5px] mt-2 text-xl font-bold md:-ml-[6px] md:text-2xl'
            >
              Table of Contents
            </AnimatedHeading>

            <AnimatedDiv
              variants={FadeContainer}
              className='relative mb-20 flex flex-col before:absolute before:left-0 before:h-full before:w-[1.5px] before:bg-neutral-500'
            >
              {toc.map((content: any) => {
                return (
                  <Link
                    key={content.id}
                    href={`#${stringToSlug(content.id)}`}
                    className='relative overflow-hidden rounded-tr-md rounded-br-md border-l-2 border-neutral-500 px-2 py-0.5 font-medium text-neutral-700 hover:bg-darkSecondary  hover:text-white dark:text-neutral-200 dark:hover:border-white md:py-1 md:line-clamp-1'
                    style={{ marginLeft: `${content.level * 15}px` }}
                    onClick={() => {
                      if (size.width < 768) {
                        lockScroll();
                        setIsTOCActive(false);
                      }
                      setIsTOCActive(false);
                      removeScrollLock();
                    }}
                  >
                    {content.heading}
                  </Link>
                );
              })}
            </AnimatedDiv>
            {/* When you search but found nothing */}
            {toc.length === 0 && (
              <div className='text-center'>No Result found</div>
            )}
          </div>

          <button
            onClick={() => {
              setIsTOCActive(!isTOCActive);
              lockScroll();
            }}
            className='fixed bottom-0 z-50 w-full bg-black py-2 font-medium text-white outline-none dark:bg-white dark:text-black md:hidden'
          >
            Table of Contents
          </button>
        </>
      )}
    </>
  );
}
