import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import AuthorList from '@/app/components/AuthorList';
import ContactList from '@/app/components/ContactList';
import InstitutionName from '@/app/components/InstitutionName';
import ListingEntry from '@/app/components/ListingEntry';
import ManSection from '@/app/components/ManSection';
import ProjectCard from '@/app/components/ProjectCard';
import TimelineRow from '@/app/components/TimelineRow';
import {
  ACHIEVEMENTS,
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

const MAN_TITLE = 'MORALES(1)';
const LINK_STYLE = 'text-teal underline underline-offset-4 hover:text-rust';

const ManHeader = (): React.ReactElement => (
  <div aria-hidden='true' className='flex justify-between gap-4 text-[0.8125rem] text-meta'>
    <span>{MAN_TITLE}</span>
    <span className='hidden compact:inline'>mathcelo manual</span>
    <span>{MAN_TITLE}</span>
  </div>
);

const Description = (): React.ReactElement => (
  <ManSection id='description' title='Description'>
    <p className='max-w-[64ch] font-sans text-[1.0625rem] leading-[1.75] text-copy'>
      I’m a security engineer at{' '}
      <a href='https://trailofbits.com/' className={LINK_STYLE}>Trail of Bits</a>, working on smart
      contract audits and security tooling. My path here runs through
      software engineering, blockchain research, and malware analysis.
    </p>
  </ManSection>
);

const Timeline = (): React.ReactElement => (
  <ManSection id='experience' title='Experience & education'>
    <div className='flex flex-col gap-9'>
      {TIMELINE.map((entry, position) => (
        <TimelineRow key={entry.role} entry={entry} current={position === 0} />
      ))}
    </div>
  </ManSection>
);

const Publications = (): React.ReactElement => (
  <ManSection id='publications' title='Publications'>
    <ul className='border-b border-rule'>
      {PUBLICATIONS.map((publication) => (
        <ListingEntry
          key={publication.title}
          href={publication.url}
          title={publication.title}
          meta={publication.venue}
          detail={<AuthorList authors={publication.authors} />}
          headingLevel='h3'
          external
        />
      ))}
    </ul>
  </ManSection>
);

const Projects = (): React.ReactElement => (
  <ManSection id='projects' title='Selected projects'>
    {PROJECTS.map((project) => (
      <ProjectCard key={project.name} project={project} />
    ))}
  </ManSection>
);

const SkillItem = ({ item }: { item: string }): React.ReactElement =>
  item === 'LaTeX' ? (
    <Image
      src='/skills/latex.png'
      alt='LaTeX'
      width={48}
      height={20}
      loading='eager'
      className='inline-block h-3.5 w-[2.1rem] align-[-0.1em]'
    />
  ) : (
    <>{item}</>
  );

const Skills = (): React.ReactElement => (
  <ManSection id='skills' title='Skills'>
    <dl className={[
      'grid grid-cols-1 gap-x-6 gap-y-1 text-[0.9375rem]',
      'compact:grid-cols-[24ch_minmax(0,1fr)] compact:gap-y-3',
    ].join(' ')}>
      {SKILL_GROUPS.map((group) => (
        <React.Fragment key={group.label}>
          <dt className='mt-3 text-teal first:mt-0 compact:mt-0'>{group.label}</dt>
          <dd>
            <ul className='flex flex-wrap gap-x-1 leading-7 text-ink-muted'>
              {group.items.map((item, position) => (
                <li key={item}>
                  <SkillItem item={item} />
                  {position < group.items.length - 1 && <span aria-hidden='true'>,</span>}
                </li>
              ))}
            </ul>
          </dd>
        </React.Fragment>
      ))}
    </dl>
  </ManSection>
);

const Achievements = (): React.ReactElement => (
  <ManSection id='recognition' title='Recognition'>
    <ul className='flex flex-col gap-4'>
      {ACHIEVEMENTS.map((achievement) => (
        <li
          key={achievement.title}
          className='grid grid-cols-1 gap-x-6 gap-y-0.5 compact:grid-cols-[24ch_minmax(0,1fr)]'
        >
          <span className='text-[0.8125rem] leading-7 text-meta'>{achievement.period}</span>
          <div>
            <h3 className='text-base font-medium leading-7'>{achievement.title}</h3>
            <p className='text-[0.8125rem] text-meta'>
              <InstitutionName text={achievement.institution} />
            </p>
          </div>
        </li>
      ))}
    </ul>
  </ManSection>
);

const SeeAlso = (): React.ReactElement => (
  <ManSection id='see-also' title='See also'>
    <p className='mb-4 text-[0.9375rem]'>
      <Link href='/blog' className={LINK_STYLE}>
        notes
      </Link>
    </p>
    <ContactList />
  </ManSection>
);

const About = (): React.ReactElement => (
  <div className='flex flex-col gap-12 px-5 py-8 compact:px-10 compact:py-10'>
    <ManHeader />
    <h1 className={[
      'text-[clamp(2.25rem,6vw,3.75rem)] font-medium leading-[1.08] tracking-[-0.055em]',
    ].join(' ')}>
      A background<br />in breaking things<span className='text-accent' aria-hidden='true'>.</span>
    </h1>
    <Description />
    <Timeline />
    <Publications />
    <Projects />
    <Skills />
    <Achievements />
    <SeeAlso />
    <div aria-hidden='true' className='flex justify-between gap-4 text-[0.8125rem] text-meta'>
      <span>mathcelo</span>
      <span>{MAN_TITLE}</span>
    </div>
  </div>
);

export default About;
