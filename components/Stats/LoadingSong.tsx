function LoadingSongs() {
    return (
        <>
            {Array.from(Array(10).keys()).map((item) => (
                <div
                    key={item}
                    className="bg-gray-100 h-[80.8px] first:h-[81.6px] first:md:h-[85.6px] md:h-[84.8px]  dark:bg-darkPrimary  border-l first:border-t border-r border-b  border-gray-300 dark:border-neutral-600 p-4 font-barlow flex items-center gap-5 overflow-hidden relative xs:pl-16 md:!pl-20 "
                >
                    <div className="absolute hidden tracking-wider origin-center transform left-4 md:left-6 font-inter xs:inline-flex">
                        #{item + 1}
                    </div>

                    <div className="relative w-12 h-12 origin-center transform bg-gray-300 dark:bg-darkSecondary animate-pulse"></div>
                    <div className="flex flex-col gap-1">
                        <p className="animate-pulse w-40 h-6 md:h-[28px] bg-gray-300 dark:bg-darkSecondary"></p>
                        <p className="h-4 bg-gray-300 animate-pulse w-28 md:h-6 dark:bg-darkSecondary delay-125"></p>
                    </div>
                </div>
            ))}
        </>
    );
}

export default LoadingSongs;