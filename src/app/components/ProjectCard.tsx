import React from 'react';
import type { Project } from '@/content/resume';

/** A project entry: name and context on one line, description indented below. */
const ProjectCard = ({ project }: { project: Project }): React.ReactElement => (
  <article
    id={`project-${project.name.toLowerCase()}`}
    className='scroll-mt-20 border-t border-rule py-5 first:border-t-0 first:pt-0'
  >
    <div className='flex flex-wrap items-baseline gap-x-4 gap-y-1'>
      <h3 className='text-lg font-medium tracking-[-0.01em] text-ink'>{project.name}</h3>
      <span className='text-[0.8125rem] text-meta'>{project.meta}</span>
    </div>
    <p className='mt-2 max-w-[68ch] font-sans text-base leading-[1.7] text-copy text-pretty'>
      {project.description}
    </p>
  </article>
);

export default ProjectCard;
