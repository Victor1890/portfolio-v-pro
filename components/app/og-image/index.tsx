import Image from 'next/image'

interface IOgImageProps {
    src: string
    alt: string
}

function OgImage({ src, alt }: IOgImageProps) {
    return (
        <div className='relative -mt-[35%] w-full shrink-0 overflow-hidden rounded-xl shadow-2xl before:absolute before:inset-0 before:z-10 sm:-mt-0 sm:w-1/2 md:-ml-[35%] md:w-8/12 dark:before:bg-black/20'>
            <Image
                title={alt}
                alt={alt}
                src={src}
                width={1200}
                height={630}
                placeholder='blur'
                blurDataURL={src}
                quality={25}
                className='backdrop-blur-xl transition-all duration-300 lg:group-hover:scale-110'
                style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                }}
            />
        </div>
    )
}

export default OgImage
