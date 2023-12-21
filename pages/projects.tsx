import React from 'react';
import Project from '@components/Project';
import Metadata from '@components/MetaData';
import PageTop from '@components/PageTop';
import AnimatedDiv from '@components/FramerMotion/AnimatedDiv';
import { FadeContainer } from '@content/FramerMotionVariants';
import pageMeta from '@content/meta';
// import { getProjects } from "@lib/supabase";
// import { ProjectType } from "@lib/types";
import CreateAnIssue from '@components/CreateAnIssue';
import projectData from '@content/projectData';

export default function Projects() {
  if (!projectData.length) return <CreateAnIssue />;

  return (
    <>
      <Metadata
        title={pageMeta.projects.title}
        description={pageMeta.projects.description}
        previewImage={pageMeta.projects.image}
        keywords={pageMeta.projects.keywords}
      />
      <section className='pageTop'>
        <PageTop pageTitle='Projects'>
          I've been making various types of projects some of them were basics
          and some of them were complicated. So far I've made{' '}
          <span className='font-bold text-gray-600 dark:text-gray-200'>
            {projectData.length}+
          </span>{' '}
          projects.
        </PageTop>

        <AnimatedDiv
          variants={FadeContainer}
          className='mx-auto grid grid-cols-1 gap-4 md:ml-[20%] xl:ml-[24%]'
        >
          {projectData.map((project) => {
            if (project.name === '' && project.githubURL === '') return null;
            return <Project key={project.id} project={project} />;
          })}
        </AnimatedDiv>
      </section>
    </>
  );
}
