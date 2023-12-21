import { FadeContainer, opacityVariant } from "@content/FramerMotionVariants";
import { ITMDBData } from "@lib/interface";

import AnimatedDiv from "@components/FramerMotion/AnimatedDiv";
import MovieCard from "@components/MovieCard";
import StaticPage from "@components/StaticPage";
import { linkedinData } from "@content/linkedinData";
import pageMeta from "@content/meta";
import MDXContent from "@lib/MDXContent";
// import { fetchTMDBData } from "@lib/tmdb";
import { months } from "@utils/date";
import classNames from "classnames";
import { motion } from "framer-motion";
import Image from "next/image";
import { IStaticInfo } from "interfaces/about/about.interface";

export default function About({
  about,
  movies,
}: {
  about: IStaticInfo;
  movies: ITMDBData[];
}) {
  return (
    <>
      <StaticPage metadata={pageMeta.about} page={about} />

      <div className="pageTop mt-0 print:hidden">
        <motion.h3
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={opacityVariant}
          className="my-2 text-xl font-bold text-left md:text-3xl"
        >
          Recent Experience
        </motion.h3>

        <AnimatedDiv
          variants={FadeContainer}
          className="flex flex-col gap-2 pt-10 pb-5 overflow-x-scroll md:gap-4"
        >
          {linkedinData.experiences.map((experience) => {
            return (
              <div
                key={experience.company_linkedin_profile_url}
                className="p-5 bg-white dark:bg-darkSecondary rounded-lg flex flex-start gap-3 shadow flex-col xs:flex-row"
              >
                <div className="min-w-[56px] w-14 h-14 max-w-[56px] relative mt-1">
                  <Image
                    src={experience.logo_url}
                    width={400}
                    height={400}
                    className="object-cover"
                    alt={experience.company}
                  />
                </div>

                <div
                  className={classNames(
                    "flex flex-col gap-2 flex-grow",
                    experience.job_titles.length > 1 ? "ml-10" : "ml-0"
                  )}
                >
                  {experience.job_titles.length > 1 && (
                    <h2
                      className={classNames(
                        "text-xl font-semibold",
                        experience.job_titles.length > 1 ? "-ml-10" : "ml-0"
                      )}
                    >
                      {experience.company}
                    </h2>
                  )}
                  {experience.job_titles.map((job) => (
                    <div key={job.title} className="relative w-full group">
                      {experience.job_titles.length > 1 && (
                        <span className="-left-[29px] h-full absolute w-0.5 bg-black dark:bg-gray-500 top-5 peer-last:opacity-0 group-last:opacity-0"></span>
                      )}
                      <div
                        className={
                          "flex flex-col sm:flex-row items-start sm:justify-between"
                        }
                      >
                        <div className="flex flex-col">
                          <h3 className="text-lg font-semibold relative">
                            {job.title}

                            {experience.job_titles.length > 1 && (
                              <span className="absolute -left-[31.5px] h-2 w-2 top-1/2 -translate-y-1/2 rounded-full bg-white dark:bg-gray-500 ring-[3px] ring-black dark:ring-white"></span>
                            )}
                          </h3>
                          {experience.job_titles.length === 1 && (
                            <p className="text-base">{experience.company}</p>
                          )}
                        </div>
                        <div>
                          <div className="flex items-center gap-1 text-sm">
                            <span>
                              {months[job.starts_at.month - 1]}{" "}
                              {job.starts_at.year}
                            </span>
                            <span> - </span>
                            <span>
                              {!job.ends_at ? (
                                "Present"
                              ) : (
                                <>
                                  {months[job.ends_at.month - 1]}{" "}
                                  {job.ends_at.year}
                                </>
                              )}
                            </span>
                          </div>
                        </div>
                      </div>

                      {job.description && (
                        <p className="whitespace-pre-wrap mt-2 text-sm text-black/80 dark:text-white/50">
                          {job.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </AnimatedDiv>
      </div>

      {
        movies && (
          <div className="-mt-5 pageTop print:hidden">
            <motion.h3
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={opacityVariant}
              className="my-2 text-xl font-bold text-left md:text-3xl"
            >
              Recent watched Movies & TV Series
            </motion.h3>

            <AnimatedDiv
              variants={FadeContainer}
              className="flex items-center gap-2 pt-10 pb-5 overflow-x-scroll md:gap-4 horizontal-scrollbar"
            >
              {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </AnimatedDiv>
          </div>
        )
      }
    </>
  );
}

export async function getStaticProps() {
  const { post: aboutData } = await new MDXContent('static_pages').getPostFromSlug('about')

  console.log("aboutData: ", aboutData)

  const about: IStaticInfo = {
    slug: aboutData?.meta?.slug || "",
    title: aboutData?.meta?.title || "",
    keywords: aboutData?.meta?.keywords || "",
    published_at: aboutData?.meta?.date || "",
    content: aboutData?.source as any,
    excerpt: aboutData?.meta?.excerpt || "",
    cover_image: aboutData?.meta?.image || "",
  }

  // const movies = await fetchTMDBData();

  return {
    props: {
      about,
      movies: null,
    },
    revalidate: 60 * 60 * 24, // everyday
  };
}
