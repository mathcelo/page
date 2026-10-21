# Shell (key: `terminal`)

**Thesis:** the site is one well-made terminal window on grid paper, where every section is a
command and its output, so a security reader feels at home and a recruiter still reads plain
facts first.

## Rationale

- **One window, single column, text first (F9).** Every page sits inside one bordered window
  on the existing `blueprint-grid` canvas, with the existing palette unchanged. The nav is the
  window's tab bar (`1:home 2:about 3:blog`, current path on the right) and the footer is its
  status line. No imagery beyond the portrait, no template chrome.
- **Role and employer on the first screen (F1, "Employer named early").** `whoami` prints the
  name, "Security engineer @ Trail of Bits" and the existing tagline. The Ohio State sentence is
  kept verbatim in its current tense, because the brief forbids tense changes; F1's dual-role
  line needs the owner's confirmation first, as the research itself notes.
- **One piece of work is one click from home (F2, F8).** `ls work/selected/` lists the Trail
  of Bits blog posts (the USENIX Security '23 paper stays on about), followed by "all notes" and
  "experience, projects & publications" links. The home page previously linked no work.
- **Uniform entry format (F3).** A single `ListingEntry` row (facts column, linked title,
  byline) is used for selected work, publications and notes, so the three read the same way.
- **Co-authors as credibility (F6, "What nobody does well").** Every byline shows the full
  author list with the owner's name emphasised, on industry and academic work alike. On the about
  page the "Burnyard" timeline chip now links to the Burnyard project entry, connecting the
  doctoral work to the tool it produced.
- **Contact in the page body (F7).** Home ends with `cat contact`: email first as a plain
  mailto, then LinkedIn and GitHub with readable URLs. About ends with a man-page `SEE ALSO`
  that repeats it. No per-audience routing copy was added, since that would be a new claim.
- **Nothing added without content (F10, F11).** No talks, press, findings ledger or client
  names; only items that already exist and link somewhere public.
- **Legibility over theatre.** Prompts (`~ $ cat background.txt`) are `aria-hidden` set
  dressing; every heading's accessible name is the plain label (`# background`,
  `# selected work`). No typing animation; the only motion is a blinking cursor at the end of
  the home page, disabled under `prefers-reduced-motion`.
- **Type rule.** JetBrains Mono is the primary face (names, headings, facts, metadata, nav).
  Space Grotesk is used only for running prose of a sentence or more: bios, job and project
  descriptions, the notes intro and post bodies.

## What changed per page

- **Shell (layout, nav, footer):** window frame with offset shadow, sticky tab bar with
  `aria-current`, a "skip to content" link, status-line footer with the same three contacts.
- **Home:** `whoami` identity block with the h1; the portrait as a small window titled
  `portrait.webp` / `portrait.txt` with a "click or press enter / photo ⇄ ascii" caption;
  `cat background.txt` with the verbatim bio; selected work; contact; idle prompt.
  On phones the portrait sits between the identity and the bio.
- **About:** a man page. `MORALES(1)` header and footer lines, the existing h1, then
  DESCRIPTION (verbatim bio), EXPERIENCE & EDUCATION (period column, role, institution, meta,
  description, `see:` links), PUBLICATIONS, SELECTED PROJECTS (anchored), SKILLS (key/value
  lines, LaTeX wordmark kept), RECOGNITION, SEE ALSO.
- **Blog:** `ls -t notes/`, the "Notes" h1 and intro, a column header (date / source, title) on
  wide screens, then the external Trail of Bits post and the local posts as listing rows.
- **Post page:** back link, `cat <slug>.mdx` prompt, date and tags, mono title, excerpt, then
  the article in Space Grotesk with mono headings at a 720px measure.
- **/research/:** `cd research/` prompt, the same "This page moved" copy and meta refresh.

## Code

- New components: `ShellPrompt`, `CommandHeading`, `ListingEntry`, `AuthorList`,
  `ContactList`, `ManSection`. Restyled: `SiteNav`, `SiteFooter`, `ProfileFrame`,
  `TimelineRow`, `ProjectCard`.
- Deleted (no longer used): `MetaRow`, `SectionRow`, `WritingCard`, `BlogPostCard`, `Tag`,
  and the entry animations and button shadow in `tailwind.config.ts`.
- The external Trail of Bits post moved from `blog/page.tsx` into `EXTERNAL_WRITING` in
  `src/content/resume.ts` so home and blog share one record. No text changed.
- No dependency, font, palette or route changes. Tests unchanged.

## Known limitations

- Light scheme only; no dark mode.
- Old labels "About me", "Read my notes", the `01-04` project numbers and
  `img/mathcelo.png` are gone, replaced by structural labels.
- The short blog index leaves grid paper visible below the window on large screens.
- The prompt lines are decorative and hidden from screen readers; a screen-reader user does not
  get the "shell" framing, only the content.
- `ListingEntry` titles are mono at 18-20px; very long titles wrap to two or three lines on
  phones.
