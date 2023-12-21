import React, { useState } from 'react';

import { AiFillStar } from 'react-icons/ai';
import { ITMDBData } from '@lib/interface';
import Image from 'next/image';
import { fromLeftChildren } from '@content/FramerMotionVariants';
import { motion } from 'framer-motion';

const TMDB_IMAGE_PREFIX = 'https://image.tmdb.org/t/p/w780';

export default function MovieCard({ movie }: { movie: ITMDBData }) {
  const [loading, setLoading] = useState(true);

  const handleImageLoaded = () => {
    setLoading(false);
  };

  return (
    <motion.div
      variants={fromLeftChildren}
      className='group relative rounded-3xl bg-white p-3 shadow-md transition-[opacity,transform] duration-500 dark:bg-darkSecondary'
    >
      <div className='relative -mt-7 h-64 w-44 overflow-hidden rounded-2xl shadow-lg'>
        {loading && (
          <>
            <div
              className='absolute inset-0 flex items-center justify-center bg-neutral-700'
              style={{
                zIndex: 1,
              }}
            ></div>
            <span
              className='absolute inset-0 left-full h-full w-full'
              style={{
                zIndex: 2,
                background:
                  'linear-gradient(90deg, transparent, #ffffff50, transparent)',
                animation: 'loadingAnimation 1.5s linear infinite',
              }}
            ></span>
          </>
        )}
        <Image
          className='rounded-2xl object-cover transition-transform lg:group-hover:scale-105'
          src={TMDB_IMAGE_PREFIX + movie.poster_path}
          alt={(movie?.original_title ?? movie?.original_name) as string}
          width={600}
          height={720}
          style={{
            height: '100%',
          }}
          onLoadingComplete={handleImageLoaded}
        />
      </div>

      <div className='mt-2 mb-1 flex max-w-full flex-col gap-2'>
        <MovieWatchedStatus rating={movie.rating} />
        <p
          className='-z-1 text-sm font-medium line-clamp-1'
          title={movie?.original_title ?? movie?.original_name}
        >
          {movie?.original_title ?? movie?.original_name}
        </p>
      </div>
    </motion.div>
  );
}

/* This Component displays the current status of a movie, which includes whether it is watched or being watched. */
function MovieWatchedStatus({ rating }: { rating?: number }) {
  return (
    <div className='flex items-center justify-between text-xs'>
      {rating ? (
        <>
          <p className='rounded-full bg-green-400/40 px-4 py-0.5 text-green-800 dark:text-green-300'>
            Watched
          </p>
          <div className='flex items-center gap-1 font-medium'>
            <AiFillStar className='h-4 w-4' />
            <p>{rating}/10</p>
          </div>
        </>
      ) : (
        <p className='relative animate-pulse rounded-full bg-yellow-300/70 px-4 py-0.5 text-yellow-700 dark:bg-yellow-300'>
          Watching
        </p>
      )}
    </div>
  );
}
