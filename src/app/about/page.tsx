import type { Metadata } from 'next';
import React from 'react';
import MetaRow from '@/app/components/MetaRow';
import ProjectCard from '@/app/components/ProjectCard';
import SectionRow from '@/app/components/SectionRow';
import Tag from '@/app/components/Tag';
import TimelineRow from '@/app/components/TimelineRow';
import {
  ACHIEVEMENTS,
  AUTHOR_NAME,
  PROJECTS,
  PUBLICATIONS,
  RESUME_URL,
  SKILL_GROUPS,
  TIMELINE,
} from '@/content/resume';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Career timeline, publications, projects, and skills for Marcelo Morales.',
};

const AboutHeader = (): React.ReactElement => (
  <div className='border-b border-rule bg-surface'>
    <div
      className={[
        'mx-auto flex max-w-shell flex-wrap items-center justify-between',
        'gap-6 px-5 py-6 compact:px-7',
      ].join(' ')}
    >
      <h1 className='font-mono text-xs font-normal text-meta'>{'// about'}</h1>
      <a
        href={RESUME_URL}
        target='_blank'
        rel='noopener noreferrer'
        className={[
          'bg-accent px-[18px] py-[11px] font-mono text-xs text-accent-ink',
          'transition-colors duration-200 hover:bg-accent-hover',
        ].join(' ')}
      >
        download resume &darr;
      </a>
    </div>
  </div>
);

const Timeline = (): React.ReactElement => (
  <SectionRow label='timeline'>
    <div className='flex flex-col'>
      {TIMELINE.map((entry, position) => (
        <TimelineRow
          key={entry.role}
          entry={entry}
          current={position === 0}
          last={position === TIMELINE.length - 1}
        />
      ))}
    </div>
  </SectionRow>
);

const Publications = (): React.ReactElement => (
  <SectionRow label='publications'>
    <div>
      {PUBLICATIONS.map((publication) => (
        <MetaRow
          key={publication.title}
          className='py-[26px] last:border-b'
          gutter={
            <div className='font-mono text-[11.5px] text-rust'>
              {publication.venue}
            </div>
          }
        >
          <div className='flex flex-col gap-2'>
            <a
              href={publication.url}
              target='_blank'
              rel='noopener noreferrer'
              className={[
                'text-base font-medium leading-[1.5] tracking-[-0.01em]',
                'text-ink transition-colors duration-200 hover:text-rust',
              ].join(' ')}
            >
              {publication.title}
            </a>
            <p className='text-sm leading-[1.6] text-copy'>
              {publication.authors.map((author, position) => (
                <span
                  key={author}
                  className={author === AUTHOR_NAME ? 'font-medium text-ink' : ''}
                >
                  {author}
                  {position < publication.authors.length - 1 ? ', ' : ''}
                </span>
              ))}
            </p>
          </div>
        </MetaRow>
      ))}
    </div>
  </SectionRow>
);

const Projects = (): React.ReactElement => (
  <SectionRow label='projects'>
    <div className='grid grid-cols-1 gap-px border border-rule bg-rule wide:grid-cols-2'>
      {PROJECTS.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </div>
  </SectionRow>
);

const Skills = (): React.ReactElement => (
  <SectionRow label='skills'>
    <div className='flex flex-col gap-7'>
      {SKILL_GROUPS.map((group) => (
        <div key={group.label} className='flex flex-col gap-3'>
          <div className='font-mono text-[11.5px] text-ink'>{group.label}</div>
          <div className='flex flex-wrap gap-[7px]'>
            {group.items.map((item) => (
              <Tag key={item}>{item}</Tag>
            ))}
          </div>
        </div>
      ))}
    </div>
  </SectionRow>
);

const Achievements = (): React.ReactElement => (
  <SectionRow label='achievements'>
    <div>
      {ACHIEVEMENTS.map((achievement) => (
        <MetaRow
          key={achievement.title}
          className='py-4 last:border-b'
          gutter={
            <div className='font-mono text-[11.5px] text-meta'>
              {achievement.period}
            </div>
          }
        >
          <div className='flex flex-col gap-1'>
            <span className='text-[15px] text-ink'>{achievement.title}</span>
            <span className='font-mono text-[11.5px] text-meta'>
              {achievement.institution}
            </span>
          </div>
        </MetaRow>
      ))}
    </div>
  </SectionRow>
);

const About = (): React.ReactElement => (
  <>
    <AboutHeader />
    <div
      className={[
        'mx-auto flex max-w-shell flex-col gap-[62px]',
        'px-5 pb-[90px] pt-[60px] compact:px-7',
      ].join(' ')}
    >
      <Timeline />
      <Publications />
      <Projects />
      <Skills />
      <Achievements />
    </div>
  </>
);

export default About;
