import React from 'react';
import type { Project } from '@/content/resume';

const ProjectCard = ({ project, number }: { project: Project; number: number }): React.ReactElement => (
  <article className={[
          'relative flex flex-col gap-2 border border-rule bg-surface p-7',
          'transition-colors duration-[250ms] hover:bg-canvas',
        ].join(' ')}>
    <span aria-hidden='true' className='mb-5 font-mono text-xs text-meta'>
      {String(number).padStart(2, '0')}
    </span>
    <h2 className='text-[1.625rem] font-bold tracking-[-0.02em] text-ink'>
      {project.name}
    </h2>
    <div className='font-mono text-[0.8125rem] text-meta'>{project.meta}</div>
    <p className='mt-2.5 text-base leading-[1.75] text-copy text-pretty'>
      {project.description}
    </p>
  </article>
);

export default ProjectCard;
