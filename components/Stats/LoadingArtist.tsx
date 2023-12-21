
function LoadingArtists() {
    return (
        <>
            {Array.from(Array(5).keys()).map((item) => (
                <div
                    key={item}
                    className="h-[80.8px] first:h-[81.6px] first:md:h-[129.6px] md:h-[128.8px]  bg-gray-100  dark:bg-darkPrimary  border-l first:border-t border-r border-b border-gray-300 dark:border-neutral-600 p-4 font-barlow flex items-center gap-5 overflow-hidden"
                >
                    <>
                        <div className="hidden tracking-wider origin-center transform font-inter xs:inline-flex">
                            #{item + 1}
                        </div>
                        <div
                            aria-label="image"
                            className="relative w-12 h-12 bg-gray-300 rounded-full animate-pulse dark:bg-darkSecondary md:w-24 md:h-24"
                        ></div>
                        <div className="flex flex-col gap-1">
                            <h2
                                aria-label="artist-name"
                                className="animate-pulse h-6 md:h-[28px] w-40 bg-gray-300 dark:bg-darkSecondary"
                            ></h2>
                            <p
                                aria-label="followers"
                                className="w-20 h-4 bg-gray-300 animate-pulse md:h-6 dark:bg-darkSecondary"
                            ></p>
                        </div>
                    </>
                </div>
            ))}
        </>
    );
}

export default LoadingArtists;