import React from 'react';
import type { Project } from '@/content/resume';

const ProjectCard = ({ project }: { project: Project }): React.ReactElement => (
  <article className='flex flex-col gap-2 bg-surface p-6'>
    <h2 className='text-[17px] font-bold tracking-[-0.02em] text-ink'>
      {project.name}
    </h2>
    <div className='font-mono text-[11.5px] text-meta'>{project.meta}</div>
    <p className='text-[14.5px] leading-[1.6] text-copy text-pretty'>
      {project.description}
    </p>
  </article>
);

export default ProjectCard;
