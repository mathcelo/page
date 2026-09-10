import type { Metadata } from 'next';
import React from 'react';
import InstitutionName from '@/app/components/InstitutionName';
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
  SKILL_GROUPS,
  TIMELINE,
} from '@/content/resume';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Career timeline, publications, projects, and skills for Marcelo Morales.',
};

const AboutHeader = (): React.ReactElement => (
  <header className='blueprint-grid border-b border-rule bg-surface'>
    <div className={[
          'grid grid-cols-1 items-end gap-6 pt-11 pb-10 wide:grid-cols-[1.2fr_1fr]',
          'wide:gap-16 wide:pt-16 wide:pb-14 mx-auto w-full max-w-shell px-5 compact:px-7',
        ].join(' ')}>
      <div>
        <p className='mb-5 font-mono text-sm text-teal'>{'// about me'}</p>
        <h1 className='text-[clamp(2.75rem,5vw,3.75rem)] font-bold leading-[1.08] tracking-[-0.05em]'>A background<br />in breaking things<span
          className='text-accent'
        >.</span></h1>
      </div>
      <p className='max-w-[60ch] text-lg leading-[1.8] text-copy wide:max-w-none'>
        I’m a security engineer at{' '}
        <a href='https://trailofbits.com/' className='text-teal underline underline-offset-4'>Trail of Bits</a>, working on smart
        contract audits and security tooling. My path here runs through
        software engineering, blockchain research, and malware analysis.
      </p>
    </div>
  </header>
);

const Timeline = (): React.ReactElement => (
  <SectionRow layout='stacked' label='experience & education'>
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
  <SectionRow layout='stacked' label='publications'>
    <div>
      {PUBLICATIONS.map((publication) => (
        <MetaRow
          key={publication.title}
          className={[
          'relative border border-rule-heavy border-t-[3px] border-t-accent bg-surface',
          'px-[22px] py-[26px] compact:px-10 compact:py-9',
        ].join(' ')} layout='stacked'
          gutter={
            <div className='mb-[18px] font-mono text-sm text-rust'>
              {publication.venue}
            </div>
          }
        >
          <div className='flex flex-col gap-2'>
            <h2 className={[
          'max-w-[34ch] text-[clamp(1.5rem,3vw,2rem)] font-medium leading-[1.35]',
          'tracking-[-0.025em]',
        ].join(' ')}>
              <a
                href={publication.url}
                target='_blank'
                rel='noopener noreferrer'
                className='text-ink transition-colors duration-200 hover:text-rust'
              >
                {publication.title}<span aria-hidden='true' className='whitespace-nowrap text-teal'> ↗</span>
              </a>
            </h2>
            <p className='mt-3.5 text-sm leading-[1.6] text-copy'>
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
  <SectionRow layout='stacked' label='selected projects'>
    <div className='grid grid-cols-1 gap-5 compact:grid-cols-2'>
      {PROJECTS.map((project, index) => (
        <ProjectCard key={project.name} project={project} number={index + 1} />
      ))}
    </div>
  </SectionRow>
);

const Skills = (): React.ReactElement => (
  <SectionRow layout='stacked' label='skills'>
    <div className='grid grid-cols-1 gap-y-8 gap-x-10 compact:grid-cols-2'>
      {SKILL_GROUPS.map((group) => (
        <div key={group.label} className='flex flex-col gap-3'>
          <div className='font-mono text-sm text-teal'>{group.label}</div>
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
  <SectionRow layout='stacked' label='recognition'>
    <div>
      {ACHIEVEMENTS.map((achievement) => (
        <MetaRow
          key={achievement.title}
          className='py-4 last:border-b'
          gutter={
            <div className='font-mono text-[0.8125rem] leading-[1.65] text-meta'>
              {achievement.period}
            </div>
          }
        >
          <div className='flex flex-col gap-1'>
            <h2 className='text-[1.0625rem] font-medium text-ink'>
              {achievement.title}
            </h2>
            <span className='font-mono text-[0.8125rem] leading-[1.65] text-meta'>
              <InstitutionName text={achievement.institution} />
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
        'mx-auto flex w-full max-w-shell flex-col gap-20',
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
