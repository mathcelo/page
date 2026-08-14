/** Structured résumé content rendered by the home and about pages. */

export interface TimelineChip {
  label: string;
  highlighted: boolean;
  url?: string;
}

const USENIX_SECURITY_23_URL =
  'https://www.usenix.org/conference/usenixsecurity23/presentation/zhang-zhuo-exploit';

export interface TimelineEntry {
  period: string;
  role: string;
  meta: string;
  description: string;
  chips: readonly TimelineChip[];
}

export interface Publication {
  venue: string;
  title: string;
  authors: readonly string[];
  url: string;
}

/** Author name emphasised when rendering a publication's byline. */
export const AUTHOR_NAME = 'Marcelo Morales';

export interface Project {
  name: string;
  meta: string;
  description: string;
}

export interface SkillGroup {
  label: string;
  items: readonly string[];
}

export interface Achievement {
  period: string;
  title: string;
  institution: string;
}

export const CONTACT_EMAIL = 'marcelomoralesuni@gmail.com';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/mathcelo/';
export const GITHUB_URL = 'https://github.com/mathcelo';
export const RESUME_URL =
  'https://github.com/mathcelo/resume/raw/main/out/morales_marcelo_resume.pdf';

export const TIMELINE: readonly TimelineEntry[] = [
  {
    period: '2025 —',
    role: 'Security Engineer, Trail of Bits',
    meta: 'full-time · remote',
    description:
      'Smart contract security audits and client engagements, alongside internal ' +
      'security tooling that supports the audit practice. Arrived as an intern ' +
      'onsite in Brooklyn, where I architected a general data flow engine for ' +
      'Slither and demonstrated it with a reentrancy detector, an interval ' +
      'analysis, and a rounding-issue detector.',
    chips: [],
  },
  {
    period: '2022–26',
    role:
      'Doctoral Studies + Research & Teaching Assistant, ' +
      'The Ohio State University',
    meta: 'cs&e · w3cil lab · advisor dr. carter yagemann',
    description:
      'Doctoral studies in Computer Science and Engineering, researching blockchain ' +
      'security and malware detection, alongside teaching C++ Programming and ' +
      'Information Security. Built a Python tool for Solidity range analysis and ' +
      'peer-reviewed for IEEE S&P and USENIX Security.',
    chips: [
      {
        label: "USENIX Security '23 — Your Exploit is Mine",
        highlighted: true,
        url: USENIX_SECURITY_23_URL,
      },
      { label: 'Burnyard', highlighted: false },
    ],
  },
  {
    period: "2021, '22",
    role: 'Software Engineer Program Intern, JPMorgan Chase',
    meta: 'two summer internships · columbus, oh',
    description:
      'Built AutoTune, a Java Spring Boot and DynamoDB API with a React front end, ' +
      'provisioned on AWS with Terraform and deployed through Jenkins CI/CD. The ' +
      'summer prior, voice-recognition APIs for secure caller verification.',
    chips: [],
  },
  {
    period: '2018–22',
    role: 'BS Computer Science, Ohio University',
    meta: 'magna cum laude · honors tutorial college · advisor dr. harsha chenji',
    description:
      'Undergraduate research and coursework through the Honors Tutorial College, ' +
      'with independent studies in blockchain and cryptocurrency technologies, ' +
      'computer security, and advanced problem solving.',
    chips: [],
  },
];

export const PUBLICATIONS: readonly Publication[] = [
  {
    venue: "USENIX Security '23",
    title:
      'Your Exploit is Mine: Instantly Synthesizing Counterattack Smart Contract',
    authors: [
      'Zhuo Zhang',
      'Zhiqiang Lin',
      'Marcelo Morales',
      'Xiangyu Zhang',
      'Kaiyuan Zhang',
    ],
    url: USENIX_SECURITY_23_URL,
  },
];

export const PROJECTS: readonly Project[] = [
  {
    name: 'Burnyard',
    meta: 'ohio state · 2025',
    description:
      'Dynamic malware analysis light enough to run on a Raspberry Pi Zero. 96.1% ' +
      'classification accuracy, detecting malware 50× faster than traditional ' +
      'sandboxes without queuing delays. Selected to present at West Point.',
  },
  {
    name: 'Slytherin',
    meta: 'ohio state · 2024',
    description:
      'Range analysis for Solidity, pairing Slither with Echidna to catch improper ' +
      'binary-expression usage. Benchmarked by reproducing a vulnerability ' +
      'previously reported in a Code4rena challenge.',
  },
  {
    name: 'Proofmatic',
    meta: 'ohio university · 2021–22',
    description:
      'A web platform for learning mathematical proofs, integrating LaTeX and Coq ' +
      'IDEs. Led as Scrum Master and full-stack developer through delivery.',
  },
  {
    name: 'CatMap',
    meta: 'ohio university · 2019',
    description:
      'Indoor navigation for students finding classrooms across complex campus ' +
      'buildings, with real-time turn-by-turn directions over building maps.',
  },
];

export const SKILL_GROUPS: readonly SkillGroup[] = [
  {
    label: 'security',
    items: [
      'static program analysis',
      'taint analysis',
      'smart contract security',
    ],
  },
  {
    label: 'programming',
    items: ['Python', 'C++', 'Java', 'JavaScript', 'TypeScript', 'Solidity'],
  },
  {
    label: 'tools & infrastructure',
    items: [
      'Slither',
      'Echidna',
      'Pydantic',
      'Claude Code',
      'Codex',
      'AWS',
      'Terraform',
      'Jenkins',
      'Splunk',
      'Git',
      'Linux',
      'Shell',
      'React',
      'LaTeX',
    ],
  },
  {
    label: 'languages',
    items: ['Spanish — fluent', 'English — fluent'],
  },
];

export const ACHIEVEMENTS: readonly Achievement[] = [
  {
    period: 'fall 2025 – spring 2026',
    title: 'NSF CyberCorps Scholarship for Service recipient',
    institution: 'The Ohio State University',
  },
  {
    period: '2025',
    title: 'Demo Presenter, ICDT Cybersecurity & Digital Trust Symposium',
    institution: 'The Ohio State University',
  },
  {
    period: '2025',
    title: 'Deputy Secretary, National Security Simulation',
    institution: 'The Ohio State University',
  },
  {
    period: '2020',
    title: '2nd Place, Revolution UC — Kubernetes Server Manager',
    institution: 'University of Cincinnati',
  },
  {
    period: '2019',
    title: 'Best Environmental Hack, Hackaplachia',
    institution: 'Ohio University',
  },
];
