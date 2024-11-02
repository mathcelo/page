import React from 'react';
import Section from '../components/Section';
import Entry from '../components/Entry';
import PublicationList from '../components/PublicationList';

const About: React.FC = () => {
    return (
        <div className='min-h-screen p-8 sm:p-20 text-gray-200 bg-slate-900'>
            <h1 className='text-4xl font-bold mb-8'>About Me</h1>

            {/* Education Section */}
            <Section title='Education'>
                <Entry
                    organization='The Ohio State University'
                    title='Ph.D. in Computer Science and Engineering'
                    location='Columbus, Ohio'
                    date='August 2022 - Present'
                    descriptions={[
                        'Member of the World 3 Cybersecurity Innovations Lab (W3CIL)',
                    ]}
                />
                <Entry
                    organization='Ohio University'
                    title='B.S. in Computer Science'
                    location='Athens, Ohio'
                    date='August 2018 - May 2022'
                    descriptions={[
                        'Graduated with Magna Cum Laude',
                        'Member of the Honors Tutorial College',
                        'Conducted research on cybersecurity applications',
                        'Independent Study: Blockchain & Cryptocurrency Technologies, Digital Signal Processing, Network on Chip, Computer Security, Advanced Problem Solving',
                    ]}
                />
            </Section>

            <Section title='Work Experience'>
                <Entry
                    organization='The Ohio State University'
                    title='Graduate Research Assistant'
                    location='Columbus, Ohio'
                    date='May 2023 - Current'
                    descriptions={[
                        'Researched blockchain security with a focus on smart contracts.',
                        'Developed a prototype using agent-based simulation to detect smart contract vulnerabilities by modeling economic environments.',
                        'Applied machine learning to analyze and enhance the security of blockchain oracles.',
                        'Collaborated with other research labs on blockchain security projects.',
                    ]}
                />
                <Entry
                    organization='The Ohio State University'
                    title='Graduate Teaching Assistant'
                    location='Columbus, Ohio'
                    date='August 2022 - May 2023'
                    descriptions={[
                        'Graded labs and exams for a C++ programming course.',
                        'Held office hours to assist students with course material and debugging.',
                        'Clarified complex programming concepts to improve student understanding.',
                    ]}
                />
                <Entry
                    organization='JPMorgan Chase & Co.'
                    title='Software Engineer Intern'
                    location='Columbus, Ohio'
                    date='June 2022 - August 2022'
                    descriptions={[
                        'Developed a Java Spring Boot API interacting with DynamoDB on an EKS cluster.',
                        'Utilized Jenkins for CI/CD and Terraform for AWS infrastructure provisioning.',
                        'Built a React front-end for API interaction and optimized performance using JMeter.',
                        'Achieved 100% code coverage with JUnit tests.',
                        'Documented API functionality in Confluence and contributed to daily scrum meetings.',
                        'Technical Skills: Java, AWS, React, Jenkins, Terraform.',
                    ]}
                />
                <Entry
                    organization='JPMorgan Chase & Co.'
                    title='Software Engineer Intern'
                    location='Columbus, Ohio'
                    date='June 2021 - August 2021'
                    descriptions={[
                        'Developed APIs and microservices using Java Spring Boot.',
                        'Tested REST services with Postman and analyzed logs via Splunk.',
                        'Wrote unit tests (JUnit) and integration tests (Mockito).',
                        'Created SQL scripts for interactions with Oracle SQL database.',
                        'Collaborated with vendor team for product backlog refinement.',
                        'Participated in Sprint reviews and presented product demos.',
                        'Led Scrum meetings and managed agile boards using Jira.',
                        'Technical Skills: Java, Python, AWS.',
                    ]}
                />
            </Section>
            <Section title='Publications'>
                <PublicationList />
            </Section>
            <Section title='University Projects'>
                <Entry
                    organization='Proofmatic Project'
                    title='Ohio University'
                    location='Athens, Ohio'
                    date='August 2021 - May 2022'
                    descriptions={[
                        'Served as Scrum Master, team lead, and full-stack developer for the Proofmatic project, overseeing team coordination and project timelines.',
                        'Developed an advanced web-based platform to support the learning of mathematical proofs, featuring integrated development environments (IDEs) for LaTeX and Coq.',
                        'Participated in client meetings to gather requirements and provide project updates, ensuring alignment with client expectations throughout the development cycle.',
                        'Technical Skills Utilized: Node.js, TypeScript, React, LaTeX, Coq',
                    ]}
                />
                <Entry
                    organization='CatMap'
                    title='Ohio University'
                    location='Athens, Ohio'
                    date='August 2019 - December 2019'
                    descriptions={[
                        'Developed an indoor navigation app designed to help students locate and navigate to classrooms within complex campus buildings.',
                        'Integrated building maps and room data to provide turn-by-turn real-time directions for easier navigation.',
                        'Collaborated with a team to design user-friendly interfaces and ensure accurate mapping of campus facilities.',
                        'Technical Skills: Java, Mobile App Development',
                    ]}
                />
            </Section>

            <Section title='Skills'>
                <Entry
                    organization='Programming'
                    title=''
                    location=''
                    date=''
                    descriptions={[
                        'Python, C++, JavaScript, TypeScript, React, Solidity',
                    ]}
                />
                <Entry
                    organization='Miscellaneous'
                    title=''
                    location=''
                    date=''
                    descriptions={[
                        'Linux, Shell (Bash/Zsh), LaTeX (Overleaf/R Markdown), Microsoft Office, Git',
                    ]}
                />
                <Entry
                    organization='Soft Skills'
                    title=''
                    location=''
                    date=''
                    descriptions={[
                        'Time Management, Teamwork, Problem‑solving, Engaging Presentation',
                    ]}
                />
            </Section>
            <Section title='Achievements'>
                <Entry
                    organization='Revolution UC'
                    title='2nd Place'
                    location='University of Cincinnati'
                    date='2020'
                    descriptions={["Kubernetes Server Manager"]}
                />
                <Entry
                    organization='Hackaplachia'
                    title='Best Environmental Hack'
                    location='Ohio University'
                    date='2019'
                    descriptions={[]}
                />
            </Section>
            <Section title="Languages">
                <Entry
                    organization="English"
                    title="Bilingual Proficiency"
                    location=""
                    date=""
                    descriptions={[]}
                />
                <Entry
                    organization="Spanish"
                    title="Native Proficiency"
                    location=""
                    date=""
                    descriptions={[]}
                />
            </Section>
        </div>
    );
};

export default About;
