# Design research: personal sites of security engineers and researchers

## Purpose

This document collects what comparable personal sites do on their first screen, how they present
work, how they establish credibility and how they invite contact. It feeds the redesign of
https://mathcelo.com.

- **Owner:** Marcelo Morales, security engineer at Trail of Bits (smart contract audits, security
  tooling, blockchain security and malware research) and PhD student at Ohio State.
- **Visitors:** recruiters and hiring managers, potential audit clients, security researchers and
  peers, and academics. They usually arrive from LinkedIn, GitHub, a Trail of Bits post or a paper,
  and decide in seconds whether he is credible and worth contacting.
- **Goal:** the visitor reads one piece of his work, or reaches out.
- **Fixed constraints:** the current colors (cyan accent `#00B7CD`, teal links `#056676`, rust
  hover `#A94E2E`, ink/copy greys on `#F1F5F6`/white) and the `blueprint-grid` grid-paper
  background stay as they are.
- **Method:** ten sites were fetched and then independently re-verified on 2026-10-21. Claims the
  re-check could not confirm are marked as unverified or left out. The samczsun site was collected
  twice under two URLs; the two entries are merged below.

### Where mathcelo stands today

- **Home (`src/app/page.tsx`):** "Security engineer | Trail of Bits" meta line, large name, the
  tagline "Blockchain security and smart contract analysis.", two buttons ("About me", "Read my
  notes"), a portrait, and a background paragraph. The paragraph describes Ohio State in the past
  tense ("academic roots", "researched"). No individual piece of work is linked from the home
  page, and there is no contact route on it apart from the shared footer.
- **About (`src/app/about/page.tsx`):** timeline, one publication (USENIX Security '23, "Your
  Exploit is Mine"), four project cards (Burnyard, Slytherin, Proofmatic, CatMap), skills and
  recognition.
- **Notes (`src/app/blog/page.tsx`):** one external Trail of Bits post ("1Password's AI patching
  benchmark is misleading", Sep 2026) and the local MDX posts.
- **Contact:** email, LinkedIn and GitHub live in `src/content/resume.ts` and are rendered only in
  `SiteFooter`.

## Sites

### 1. samczsun — https://samczsun.com/

**Role:** Security researcher in smart contract and blockchain security; founder of SEAL
(Security Alliance, a non-profit); formerly Research Partner at Paradigm.

- **First screen:** Site name, a nav bar (About, Writing, Findings, Talks, Press, Contact) and a
  one-line positioning statement: "I'm a cybersecurity leader who solves big problems at every
  level of the stack." The About bio follows: he discloses vulnerabilities in software
  and smart contracts, founded SEAL, and was previously a Research Partner at Paradigm.
- **Work & writing:** Separate stacked sections, each a dated list with a star marker, a linked
  title and a one-line summary. Writing has 9 essays (Sep 2020 to Dec 2025, e.g. "Escaping the
  Dark Forest"; "Higher Bug Bounties Won't Stop Hacks" with the summary "Bug bounties are passive,
  but security is an active process."). Findings has 15 disclosures (Rari, Etherscan, SushiSwap
  MISO, go-ethereum, Optimism, 0x Exchange, mathjs), each linked to a write-up or advisory. Talks
  has 8 entries (title, event, date) and Press has 12 (headline, outlet, date). Writing and
  Findings are truncated behind a "Show all" control.
- **Credibility:** Named targets in the Findings list, a named former employer (Paradigm), a
  founded organization (SEAL), talks such as "How to Fight the Lazarus Group" (DC Privacy
  Summit), and press from Bloomberg, The Block, Decrypt and CoinTelegraph.
- **Contact:** A final Contact section, also in the top nav. Each channel is an icon plus the
  handle text, with no text labels: sam@samczsun.com, Signal (samczsun.01), Telegram, X, GitHub,
  LinkedIn and ENS (samczsun.eth).
- **Tone & type:** Plain text, single column, documentation-like. Headings are underlined with
  rules, list items use star markers, and every item follows the same title/summary/date rhythm.
  Confident and terse. (The font is a CSS variable; the specific face was not verified.)
- **Steal:** The Findings ledger: named target, one-line summary of the bug, date, link to the
  advisory or write-up. For mathcelo this maps to Trail of Bits audits, CVEs, tool releases and
  malware analyses. Audit clients and peers can judge depth in seconds, and every line leads to a
  piece of work. A Signal/email handle list also suits a blockchain-security audience.
- **Avoid:** Six equal-weight sections (including 12 press items) make one long scroll with no
  single "start here". Mathcelo has less volume and wants a visitor to read one piece, so he
  should feature one to three highlights above any list and skip a Press section.

### 2. Tavis Ormandy — https://lock.cmpxchg8b.com/

**Role:** Independent vulnerability researcher based in the San Francisco Bay Area (formerly
Google Project Zero, which the page does not state).

- **First screen:** A large "Welcome." heading, his name and in-page nav (About, Articles,
  Contact). Intro: "Hello, my name is Tavis Ormandy, I'm an independent vulnerability
  researcher." and "I'm originally from England, but I currently live in the San Francisco Bay
  Area."
- **Work & writing:** A reverse-chronological Articles list from May 2026 back to October 2020,
  grouped under month/year subheadings. Each entry is one bullet with an inline link (for example
  "I found an interesting CPU bug", July 2023; uMatrix; hiew; password managers; retro DOS/UNIX
  tools). No summaries or tags.
- **Credibility:** Almost entirely implicit. The work speaks for itself and a GitHub link sits in
  About. No employer, CVE list or talks are shown. This works only because his name is already
  known.
- **Contact:** A Contact section with one sentence inviting email (taviso@gmail.com, mailto
  link). GitHub and Twitter are linked from About. The footer repeats "HOME • ABOUT • CONTACT".
- **Tone & type:** Text-first, single column, plenty of whitespace, large underlined section
  headings, a small profile photo in About. Friendly and personal, close to an old-school
  homepage.
- **Steal:** A first-person sentence that states the role plainly, plus one human detail.
  Mathcelo could open with "I'm a security engineer at Trail of Bits and a PhD student at Ohio
  State", which tells recruiters and academics who he is immediately.
- **Avoid:** Relying on reputation instead of evidence. With no employer and no flagship work
  highlighted, the burden falls on the visitor. A recruiter coming from LinkedIn needs the Trail
  of Bits affiliation and a featured write-up on the first screen, not a bare chronological list.

### 3. William Woodruff — https://yossarian.net/

**Role:** Security and open-source engineer working on supply-chain and packaging security
(formerly an engineering director at Trail of Bits, which the page does not state).

- **First screen:** Title "william woodruff" and the subtitle "the personal website of william
  woodruff." underlined with equals signs, then lowercase section headings with link groups. No
  role statement or employer; it is a directory of links.
- **Work & writing:** Grouped link lists: "open source" (projects, docs, snippets, gems & shards &
  cargo), "personal" (about, blog & TILs, travels, multimedia), "professional" (résumé PDF, pubs &
  talks), "misc" (junk). No individual post or project appears on the home page.
- **Credibility:** Delegated to the résumé PDF and the "pubs & talks" page under "professional";
  package-registry links show shipped tooling. The home page itself says nothing about what he
  works on or where.
- **Contact:** A "contact" section with arrow-prefixed lines: william@yossarian.net, GitHub
  woodruffw, Mastodon @yossarian@yossarian.net, IRC yossarian @ libera.chat.
- **Tone & type:** Lowercase throughout, terminal/README look, ampersand-joined link groups, plain
  headings. Reads like a well-organized index file.
- **Steal:** A small labeled "professional" group with a résumé and a "pubs & talks" page.
  Mathcelo serves recruiters (résumé), academics (publications) and peers (code, writing) at once;
  one labeled group per audience lets each visitor find their path.
- **Avoid:** An index with no positioning. A first screen of category links with no sentence
  about who he is or where he works fails the "credible in seconds" test for visitors who do not
  already know the name.

### 4. Christoph Michel (cmichel) — https://cmichel.io/

**Role:** Independent smart-contract security researcher, auditor and developer; Code4rena top
earner.

- **First screen:** "Hi, I'm Christoph Michel 👋", then "I'm a security researcher 🏹🐛, developer
  👨‍💻, and author ✍️." and "Currently, I mostly work in software security and do open-source work
  👾 on an independent contractor basis." The intro paragraphs contain inline toggle buttons
  "hire me 🦸‍♂️" and "stalk me 🧟‍♂️" (buttons that expand text, not links). A separate social bar
  links RSS, Medium, Hive, GitHub, LinkedIn and others.
- **Work & writing:** One "Latest Articles" numbered list of 187 posts (Feb 2016 to Feb 2023).
  Each has a title, an optional excerpt, category tags (ETH, security, EOS, Business, Progress
  Report) and a date; only the newest five have images or excerpts. Security work appears as
  write-ups ("Ethernaut Solutions", "Damn Vulnerable DeFi Solutions", "Paradigm CTF 2021
  Solutions", "Replaying Ethereum Hacks"). No projects or audits page.
- **Credibility:** Buried in a post: "Code4rena - First 1M$ stats" ("After 14 months of grinding
  Code4rena audit contests I'm the first person to hit 1M$ in awards."). CTF solutions show skill.
  No employer, audit list or talks section.
- **Contact:** The "hire me" toggle and the social bar. No email address is shown.
- **Tone & type:** Casual and emoji-heavy, single text column, brand-colored social icons. Personal
  topics (monthly progress reports, life tracking) sit next to security write-ups.
- **Steal:** Putting the hiring question inside the intro. Audit clients need an obvious route to
  engage, so a "work with me" line next to mathcelo's intro (audits go through Trail of Bits)
  serves the "reach out" goal directly. Mathcelo's version should end in a real email link, not a
  toggle.
- **Avoid:** Mixing progress reports and old EOS/business posts with security work in one
  187-item feed, while the strongest credential (first to $1M on Code4rena) sits inside a post.
  Keep security and research work apart from personal content and put the best credential up
  front.

### 5. Zakir Durumeric — https://zakird.com/

**Role:** Assistant Professor of Computer Science at Stanford; Founder/CEO of Censys.

- **First screen:** Name, "Assistant Professor" / "Stanford Computer Science", email
  (zakir@cs.stanford.edu), "CoDa W346 | (650) 724-6279", nav (publications, cv, scholar) and a
  one-line bio: his research "focuses on Internet security, trust, and safety." The Censys
  founder role is in the bio on the first screen.
- **Work & writing:** Sections "Advising and Teaching", "Open Source Software and Data" and
  "Select Publications". Papers have linked title, author list, italic venue with month/year and
  bold awards; only a curated subset is shown, with the full list under "publications". Tools
  (ZMap, ZGrab, ZLint) have their own section with GitHub/project links.
- **Credibility:** Stanford title, Censys Founder/CEO, tools "used across the security industry",
  bold awards ("Best Paper Award", "Best Paper Honorable Mention", the IRTF prize), named students
  and alumni, courses with year ranges (CS155 2019–2027, CS356, CS249i).
- **Contact:** Mailto email, office and phone in the header block. No invitation to get in touch.
- **Tone & type:** Plain, utilitarian academic page: stacked header block, one headshot, bulleted
  lists, no marketing imagery.
- **Steal:** Tools get their own section next to a "Select" publications list. For mathcelo, a
  short tools block (Slither data-flow work, Slytherin, Burnyard) beside a few selected papers and
  posts lets an audit client or peer find a concrete artifact in one scroll.
- **Avoid:** Contact as a bare address block with no call to action. Mathcelo wants outreach, so
  the page should say what to reach out about (audits, research collaboration, hiring).

### 6. J. Alex Halderman — https://jhalderm.com/

**Role:** Bredt Family Professor of Computer Science & Engineering, University of Michigan;
director of the Center for Computer Security and Society.

- **First screen:** Headshot, name, "Bredt Family Professor of Computer Science & Engineering",
  "University of Michigan", the center directorship, and the lead-in "My research focuses on
  computer security and privacy" (election cybersecurity, censorship resistance, online crime).
- **Work & writing:** "Research and advising", "Teaching" (Fall 2026: EECS 388 and 498.9) and
  "Selected publications". Each publication has linked title, authors, italic venue/year/location,
  bold awards ("Best paper award", Pwnie and test-of-time awards) and links to PDFs and project
  sites (ZMap, Telex, Let's Encrypt, DROWN, DVSorder). Links "» all publications", "» curriculum
  vitae", "» past semesters". No talks section.
- **Credibility:** Endowed chair, center directorship, named projects inside paper entries,
  real-world outcomes (Curling v. Raffensperger expert report, a CISA advisory, Let's Encrypt), a
  Coursera course, lab members linked out.
- **Contact:** Obfuscated email "jhalderm at umich edu", phone shown as "734-647-[one eight zero
  six]", office address (Beyster Building, Room 4717, Ann Arbor), CV link.
- **Tone & type:** Traditional minimal academic page: one photo, large name underlined with rules,
  smaller underlined section headings, no sidebar.
- **Steal:** Put named projects and real-world outcomes inside each work entry, not just the
  venue. Mathcelo could tag each item with its impact (CVE, audited protocol, Trail of Bits post,
  venue) so a visitor sees the stakes without opening it.
- **Avoid:** The obfuscated email and phone/address block add friction, and talks are absent. A
  practitioner site aimed at clients and recruiters should use one-click contact and show talks
  when they exist.

### 7. Yan Shoshitaishvili — https://yancomm.net/

**Role:** Associate Professor at Arizona State University; angr co-creator; Shellphish; Order of
the Overflow (DEF CON CTF); pwn.college.

- **First screen:** A headshot (rotating between two images), a middot-separated text nav ("email
  · cv (pdf, html, 1-page) · bio · google scholar · papers · github · mastodon"), then a bio
  opening "I am an Associate Professor at Arizona State University." covering automated program
  analysis, vulnerability detection and leading a DARPA Cyber Grand Challenge team.
- **Work & writing:** Papers sit behind a single "papers" link. The work is told in prose through
  projects: angr ("powered hundreds of research papers", "thousands of security bugs"),
  Shellphish, Order of the Overflow, the CTF RadiOOO podcast, pwn.college. A section "So you want
  to be a hacker?" routes visitors: "... get into Cybersecurity!", "... compete in CTFs!", "... go
  to graduate school!".
- **Credibility:** Tool adoption (angr used "in research labs and companies around the world"),
  DARPA CGC, DEF CON CTF organizing, "dozens of research papers", a CV in three formats.
- **Contact:** Email (yans@asu.edu) in the nav and body, plus a section "Communicating with me:"
  that mentions roughly 150 emails a day and shows a joke graph of expected response time versus
  email size ("Use your best judgement for the x axis!").
- **Tone & type:** Casual and personal: single column, middot text nav, bold section titles,
  horizontal rules, exclamation points, a humorous inline graph.
- **Steal:** A visitor-routing section with one line per audience, and a contact note that sets
  expectations. Mathcelo could have three short lines (hiring, audit inquiry, research/PhD
  collaboration), each pointing to one piece of work or the right channel. Offering the CV as
  pdf / html / 1-page also helps recruiters.
- **Avoid:** Hiding papers behind one link and carrying all work in prose. A visitor arriving
  from a paper or a Trail of Bits post wants to see two or three named pieces immediately, listed
  inline.

### 8. Filippo Valsorda — https://filippo.io

**Role:** Cryptography engineer and professional open source maintainer; maintains the Go
cryptography standard library; led Go Security at Google until 2022; on Cloudflare's
Cryptography team until 2017.

- **First screen:** A logo with his name, then "I'm a cryptography engineer and professional open
  source maintainer.", past employers (Google Go Security lead, Cloudflare) and handles (GitHub and
  Twitch FiloSottile, Mastodon, Bluesky). (The hand-drawn style of the logo was not verified.)
- **Work & writing:** Headings Words, Software, Contacts, Other, Vulnerability tests. Words is one
  line pointing to words.filippo.io and the Cryptography Dispatches newsletter. Software lists
  linked project names with a one-line description each (mkcert: "A tool to easily generate TLS
  certificates for development"; age; Sunlight; yubikey-agent; mlkem768). Vulnerability tests links
  to his public checkers (/Heartbleed, /Ticketbleed, /CVE-2016-2107, /Badfish).
- **Credibility:** Named employers, Go standard library maintainership, widely used tools, and
  hosted test pages for well-known CVEs that act as proof of work rather than claims.
- **Contact:** A Contacts section with two email addresses obfuscated with "nospam.", the line "I
  like getting mail, especially postcards!", and mail-forwarding addresses in Beaverton, Oregon and
  Rome.
- **Tone & type:** Personal, quirky, low-design, a plain single column close to a 2010s homepage.
  (The specific fonts were not verified.)
- **Steal:** "Software" as name plus one-line purpose, and security work turned into runnable
  artifacts (the Heartbleed tester, `ssh whoami.filippo.io`). Mathcelo could list his tools the
  same way and link the repo or a demo, which peers trust more than prose.
- **Avoid:** Writing outsourced to a separate domain behind one line, so no post titles appear on
  the home page and a visitor cannot pick one piece to read. Also skip an "Other" grab-bag
  (/fakenews, /behindthesofa), which dilutes focus for recruiters and clients.

### 9. Brittany Chiang — https://brittanychiang.com

**Role:** Senior Frontend Engineer, Accessibility, at Klaviyo (previously Upstatement and an Apple
co-op). Included as a widely copied developer-portfolio reference, not a security peer.

- **First screen:** Name, role "Frontend Engineer", tagline "I build accessible, pixel-perfect
  experiences for the web.", a three-item nav (About, Experience, Projects) and social icons
  (GitHub, LinkedIn, CodePen, Instagram, Goodreads). The layout is known for an identity column
  that stays fixed while content scrolls (not re-verified).
- **Work & writing:** About, Experience, Projects, Writing. Experience has 6 entries with date
  range, title and linked company, a short description and skill tags, then "View Full Résumé".
  Projects has 4 with linked heading, description, preview image and metric badges, then "View
  Full Project Archive". Writing has 4 entries with thumbnail, year and linked title (2026,
  "Welcome to the AI Parade"; 2024; 2020; 2019).
- **Credibility:** Named employers in a reverse-chronological timeline and quantified badges
  ("100k+ Installs", "6k+ stars and 3k+ forks").
- **Contact:** Social icons only. No email address, mailto link or contact section.
- **Tone & type:** Polished, friendly product-portfolio feel. The colophon says the text is set in
  Inter and credits Figma, VS Code, Next.js, Tailwind and Vercel. (The dark navy palette was not
  re-verified.)
- **Steal:** A pinned identity column (name, one-line role, nav) beside scrolling evidence, plus
  quantified badges on work items. For mathcelo: "Security Engineer, Trail of Bits · PhD, Ohio
  State" pinned on the left, counts where they are real (audits, tool stars) on the right, and
  "View full résumé" as a secondary link for recruiters.
- **Avoid:** No direct contact channel, and a much-cloned template look. A security researcher
  should not read as a frontend portfolio theme, and an email line must be visible.

### 10. Paco Coursey — https://paco.me

**Role:** Design engineer and Webmaster at Linear; previously built the Vercel design system,
website and dashboard; author of cmdk and next-themes. Included as a reference for economy, not a
security peer.

- **First screen:** "Paco Coursey", an italic lead "Crafting interfaces." and two short lines:
  "Building polished software and web experiences. Experimenting with magical details in user
  interfaces. Webmaster at Linear." No nav bar; the page is short enough to be its own nav.
- **Work & writing:** Building, Projects, Writing, Now, Connect. Every item is a linked name plus
  one line (⌘K: "Composable command menu React component."; Next Themes: "Perfect dark mode in
  Next.js apps."). Writing shows 2 posts plus "All writing" ("Infrequent thoughts on design and
  code."). Building links to /craft.
- **Credibility:** Implicit: the current employer in the intro, past Vercel work, and open-source
  projects most frontend developers recognize. No metrics or logos.
- **Contact:** Connect: "Reach me at @pacocoursey" (Twitter) plus mailto:p@paco.me.
- **Tone & type:** Restrained and small: a narrow single column, lots of whitespace, small grey
  secondary text, and the closing line "Pray at the altar of hard work." Loads Inter, Söhne and
  Newsreader (the serif likely sets the italic lead).
- **Steal:** Every entry is exactly a name and one sentence, and the whole site fits about one
  screen. For mathcelo, one link and one line per audit, tool or paper lets a visitor scan in
  seconds. A "Now" section is a cheap way to signal current research focus to academics.
- **Avoid:** Unglossed project names that assume the visitor knows them. Audit clients will not
  know mathcelo's tools, so each entry needs context (client or protocol, finding severity,
  venue). A Twitter-first contact line is also wrong for recruiters; lead with email.

## What repeats

- **One sentence of positioning at the top.** samczsun, Tavis Ormandy, Christoph Michel, Zakir
  Durumeric, J. Alex Halderman, Yan Shoshitaishvili, Filippo Valsorda, Brittany Chiang and Paco
  Coursey all state the role in one line on the first screen. William Woodruff is the only one
  without it, and his page is the weakest for a visitor who does not know him.
- **Employer or institution named early.** samczsun (Paradigm, SEAL), Durumeric (Stanford,
  Censys), Halderman (Michigan), Shoshitaishvili (ASU), Valsorda (Google, Cloudflare), Chiang
  (Klaviyo), Coursey (Linear). Ormandy, Woodruff and cmichel omit it.
- **Single column, text first, few images.** samczsun, Ormandy, Woodruff, cmichel, Durumeric,
  Halderman, Shoshitaishvili, Valsorda and Coursey. Only Chiang uses a two-column layout and
  preview images.
- **Uniform entry format: linked title + one line + date or venue.** samczsun (title/summary/
  date), Valsorda (name/purpose), Coursey (name/sentence), Durumeric and Halderman (title/authors/
  venue/award), Chiang (title/description/tags).
- **Evidence grouped by type in separate sections.** samczsun (Writing, Findings, Talks, Press),
  Durumeric (tools, publications, teaching), Halderman (research, teaching, publications),
  Valsorda (Words, Software, Vulnerability tests), Coursey (Building, Projects, Writing, Now).
- **Curated list on the page, full list one click away.** samczsun ("Show all"), Durumeric ("Select
  Publications" plus a full page), Halderman ("Selected publications", "» all publications"),
  Chiang ("View Full Résumé", "View Full Project Archive"), Coursey ("All writing").
- **Tools as their own category.** Durumeric (Open Source Software and Data), Valsorda (Software,
  Vulnerability tests), Coursey (Projects), Woodruff (open source).
- **Contact as a list of handles, usually at the bottom.** samczsun, Woodruff, Valsorda, Coursey,
  Durumeric, Halderman, Ormandy. Only Shoshitaishvili says how to write to him, and only cmichel
  hints at hiring in the intro.
- **CV/résumé as a separate document.** Woodruff (PDF), Durumeric, Halderman,
  Shoshitaishvili (pdf, html, 1-page), Chiang.

## What nobody does well

None of the ten sites belongs to someone who is both an industry auditor and an academic
researcher at the same time, and the gaps follow from that.

- **Audit work and papers are never connected.** samczsun has Findings but no papers; Durumeric,
  Halderman and Shoshitaishvili have papers and tools but no client work. No site links a paper to
  the tool it produced, or a tool to the audits or bugs it found. Mathcelo has a direct line to
  draw: USENIX Security '23 paper, Slytherin and Slither data-flow work, Trail of Bits audits and
  blog post.
- **Co-authors and employer are not used as credibility.** Academic pages list authors as a
  formality and industry pages list employers as a line in the bio. None shows "with whom" as a
  signal across both worlds (for example Trail of Bits co-authors on an industry post next to
  academic co-authors on a paper).
- **No one says who should contact them for what.** Shoshitaishvili routes students and sets
  email expectations; cmichel has a hire-me toggle. Nobody separates "audit inquiry (goes through
  my employer)", "hiring / recruiting" and "research collaboration", even though those visitors
  want different things.
- **Confidential work is not handled.** Auditors often cannot name clients. samczsun only lists
  public disclosures. No site shows how to present private audit work (count, ecosystem, public
  reports only) without overstating it.
- **Dual status is not stated in one line.** Academic pages lead with a title and industry pages
  with a role. No one says "I do X at company and Y at university" as one sentence.

## Implications for mathcelo

**F1. State both roles in the first sentence.** Open the home page with a plain first-person line
that names Trail of Bits and the Ohio State PhD together (Tavis Ormandy's format, applied to both
roles). The current home page names Trail of Bits but describes Ohio State in the past tense;
the owner should confirm the current PhD status before the copy is written.

**F2. Feature one to three pieces of work on the home page.** Every site that buries its best work
(cmichel's Code4rena post, Valsorda's one-line "Words", Shoshitaishvili's papers link) makes the
"read one piece" goal harder. The home page currently links no individual piece. Candidates: the
Trail of Bits post, the USENIX Security '23 paper, and one tool.

**F3. Use one uniform entry format: linked title, one line of what it is, and an impact tag.** The
pattern from samczsun, Valsorda and Coursey, with Halderman's habit of putting outcomes inside the
entry. Tags such as venue, CVE, audited protocol or "Trail of Bits blog" let a visitor judge the
stakes without opening the link.

**F4. Add a Findings-style ledger for security work, starting small.** samczsun's Findings list
is the fastest credibility signal for audit clients and peers. Mathcelo can start with what is
public (Trail of Bits posts, public audit reports, tool releases) and grow it; it should only list
entries that can link to something public.

**F5. Give tools their own short section next to papers.** Following Durumeric and Valsorda: name
plus one-line purpose plus repo link, for Slither data-flow work, Slytherin and Burnyard. Older
student projects (Proofmatic, CatMap) belong on the about page or résumé, not the home page.

**F6. Connect papers, tools and audits explicitly.** This is the gap no site fills. Each paper or
tool entry can say what it led to or came from (for example the Solidity range-analysis tool and
the Slither work), and each publication can show co-authors with his name emphasized, as the
about page already does.

**F7. Put contact on the page body with a reason for each audience.** Today contact exists only in
the footer. Add a short block with three lines (audit inquiries, hiring, research collaboration),
each with the right channel and one sentence of expectation, following Shoshitaishvili. Lead with
a plain mailto email; do not obfuscate it (Halderman, Valsorda) or rely on social icons alone
(Chiang, cmichel).

**F8. Keep the curated-plus-full pattern.** Show a short selected list on the home page and link
"all notes", "all publications" and "résumé" for depth (samczsun, Durumeric, Halderman, Chiang).
Offer the résumé as a direct link for recruiters; Shoshitaishvili's multiple CV formats are a
nice-to-have.

**F9. Stay text-first and restrained; let the grid paper and colors carry the identity.** Nine of
ten sites are single-column and text-first. The existing palette and `blueprint-grid` background
already give mathcelo a distinct look, so the redesign does not need imagery or template chrome
that reads as a frontend portfolio (Chiang).

**F10. Do not add Press, Talks or personal sections until there is content for them.** samczsun's
six equal sections and cmichel's mixed 187-item feed show the cost of volume without hierarchy.
Add Talks when there are talks; keep personal posts out of the work lists.

**F11. Handle confidential audit work honestly.** Do not imply named clients. Describe audit work
by ecosystem and type, and link only public reports or posts.
