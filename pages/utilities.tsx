/* eslint-disable @typescript-eslint/ban-ts-comment */
import MetaData from '@components/MetaData';
import PageTop from '@components/PageTop';
import utilities from '@content/utilitiesData';
import Link from 'next/link';
import AnimatedText from '@components/FramerMotion/AnimatedText';
import {
  FadeContainer,
  opacityVariant,
  popUp,
  popUpFromBottomForText,
} from '@content/FramerMotionVariants';
import { motion } from 'framer-motion';
import AnimatedDiv from '@components/FramerMotion/AnimatedDiv';
import pageMeta from '@content/meta';
import { UtilityType } from '@lib/types';

export default function Utilities() {
  return (
    <>
      <MetaData
        title={pageMeta.utilities.title}
        description={utilities.description}
        previewImage={pageMeta.utilities.image}
        keywords={pageMeta.utilities.keywords}
      />

      <section className='pageTop font-inter'>
        <PageTop pageTitle={utilities.title}>{utilities.description}</PageTop>

        <div className='flex flex-col gap-14'>
          {utilities.data.map((utility, index) => (
            <UtilitySection key={index} utility={utility} />
          ))}
        </div>

        <AnimatedText variants={opacityVariant} className='mt-12 -mb-10'>
          Last Update on{' '}
          <span className='font-semibold'>{utilities.lastUpdate}</span>
        </AnimatedText>
      </section>
    </>
  );
}

function UtilitySection({ utility }: { utility: UtilityType }) {
  return (
    <AnimatedDiv
      variants={FadeContainer}
      className='!w-full  font-medium selection:bg-blue-300 dark:text-neutral-200 dark:selection:bg-blue-900 dark:selection:text-gray-400'
    >
      <motion.h2
        variants={popUpFromBottomForText}
        className='mb-4 font-barlow text-2xl font-bold sm:text-3xl'
      >
        {utility.title}
      </motion.h2>

      <AnimatedDiv
        variants={FadeContainer}
        className='mt-5 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7'
      >
        {utility.data.map((item) => {
          const Icon = item.Icon;
          return (
            <motion.div key={item.name} variants={popUp}>
              <Link
                title={item.name + ' - ' + item.description}
                rel='noopener noreferrer'
                target='_blank'
                href={item.link}
                className='relative flex flex-col items-center justify-center gap-3 rounded-md border border-transparent bg-white p-8  text-gray-700 shadow transition-all hover:z-10 hover:origin-center hover:border-gray-400 hover:text-black hover:shadow-lg active:!scale-90 dark:bg-darkSecondary dark:text-gray-300/80 dark:shadow-md dark:hover:border-neutral-600 dark:hover:text-white lg:hover:!scale-125'
              >
                {/* @ts-ignore */}
                <Icon className='utilities-svg' />
                <p className='absolute bottom-3 select-none text-[10px]'>
                  {item.name}
                </p>
              </Link>
            </motion.div>
          );
        })}
      </AnimatedDiv>
    </AnimatedDiv>
  );
}
