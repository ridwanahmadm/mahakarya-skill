# Mahakarya

**An AI agent skill for website revamps that look like the work of a world-class studio, without copying anyone and without inventing facts.**

*Mahakarya* is Indonesian for "masterpiece".

---

## What is Mahakarya?

Say you have a company website that doesn't inspire confidence, and you've found another site you really admire. Mahakarya guides your AI agent through the revamp the way a design director would:

1. **It studies the reference site.** It takes the rhythm, the level of craft and the motion. It does not take the text, logos, photos or exact layout.
2. **It locks the client's identity.** Pinned colors, typefaces and logo never change.
3. **It fills the page with the client's own facts:** CMS data, the client's documents, or answers from you.
4. **It writes copy that talks to the reader directly.** It should read like a person across the table, not like a brochure.

The bar is simple. Within 10 seconds of landing on the page, a stranger should believe a serious company is behind it and know the one thing to do next.

## Best for

- Revamping company or brand websites read by **investors, property buyers, partners, or high-value clients**
- Trust-driven businesses such as real estate, developers, investment, professional services, B2B, hospitality and education
- **"Make it like this site"** requests, from a URL, a screen recording or screenshots
- **Brand families**, where a parent company and its sub-brands should feel related but stay easy to tell apart
- **Writing or auditing website copy**. The copy method and `copylint` work on their own.

## Not a good fit for

- Dashboards, apps or admin screens
- Small tweaks, like changing a color or a single button
- Sites with no real material yet. Mahakarya will not make up numbers, testimonials or client logos, so the result is only as good as the photos and facts you have.

## The six laws

| Law | In practice |
|---|---|
| **Transpose, never copy** | Take the structure and pacing, never the text, logos, photos or exact measurements |
| **Identity is locked, the world is free** | Colors, type and logo stay. Canvas, composition and motion can change |
| **Every claim has a source** | Numbers come from data. Anything unconfirmed shows as a visible placeholder. Investment pages never show return or yield promises |
| **One idea per screen** | Each screen answers one reader question. Each page has one signature moment |
| **Words are the first material** | Copy is written before the design, from the reader's own questions |
| **Motion explains, never decorates** | Scroll effects show a sequence or relationship. The page still reads fully without JavaScript and with reduced motion |

## How it works

1. **Pre-flight.** The agent reads the project: framework, color tokens, fonts, CMS data. It records what is confirmed, what the company only claims, and what is unknown.
2. **Ask once, if needed.** Who the reader is, the one action the page should drive, what material exists, and what is pinned.
3. **Diagnose the old site.** It runs a five-second test on the current page: who the company is, what it sells, and what to do next. It notes what fails and keeps what works.
4. **Shape the page:**
   - a material inventory, sorted into real, pictures and absent
   - an **objection ladder**: the five questions readers ask before acting, such as "Is this safe?" or "Who manages it after it's built?"
   - a **beat sheet** that maps each section of the reference to a reader question and to real material
   - a **copy deck** that gives each section a question, a one-sentence answer, the proof and the action
5. **Picks block.** A one-screen summary of every decision, so you can redirect before anything is built.
6. **Build** on a new route next to the old page, so nothing is deleted. The hero comes first, then the rest of the page.
7. **Verify:**
   - design lint with Hallmark's `sloplint`
   - copy lint with `copylint`
   - accessibility with axe
   - no horizontal scroll on desktop or phone
   - the 10-second test
8. **Hand-over:** notes, a list of placeholders, and the three photos or facts that would improve the page most.

## What's in the repo

```
mahakarya/
├── SKILL.md                    ← main instructions for the agent
├── references/
│   ├── beat-sheet.md           ← mapping a reference site to the client's material
│   ├── trust-ladder.md         ← reader objection ladder and placeholder rules
│   ├── copy.md                 ← copywriting method (7 rules, banned words, checks)
│   └── motion.md               ← scroll-motion recipes
└── scripts/
    └── copylint.mjs            ← automated copy checker (Node.js)
```

## Installation

### Claude Code (full experience)

Mahakarya was built for Claude Code. Copy the `mahakarya` folder into your skills folder:

```bash
git clone https://github.com/ridwanahmadm/mahakarya-skill.git
mkdir -p ~/.claude/skills
cp -R mahakarya-skill/mahakarya ~/.claude/skills/
```

To use it in one project only, copy it to `.claude/skills/` inside that project instead.

Start a new session, then type `/mahakarya` or just ask:

> Revamp my website at `src/app/page.tsx` in the style of https://example-reference.com. The readers are potential investors.

**Companion skills.** Mahakarya is designed to sit on top of two other skills:

- **impeccable**, for design craft and verification: [github.com/pbakaus/impeccable](https://github.com/pbakaus/impeccable)
- **hallmark**, for the design floor and the `sloplint` checker: [github.com/nutlope/hallmark](https://github.com/nutlope/hallmark)

Mahakarya still works without them. Its own methods still apply: beat sheet, objection ladder, copy deck and `copylint`. The verification steps that come from Hallmark and Impeccable are skipped.

### Codex CLI, Gemini CLI, Cursor, Windsurf, Cline and other agents

Other agents don't load skills automatically. The skill is plain Markdown, though, so any agent can read it.

**Option 1: add it to your project and point your agent's instruction file at it**

```bash
git clone https://github.com/ridwanahmadm/mahakarya-skill.git
mkdir -p .skills
cp -R mahakarya-skill/mahakarya ./.skills/
```

Then add the line below to your agent's instruction file:

| Agent | Instruction file |
|---|---|
| Codex CLI | `AGENTS.md` |
| Gemini CLI | `GEMINI.md` |
| Cursor | `.cursor/rules/mahakarya.mdc` |
| Windsurf | `.windsurfrules` |
| Cline | `.clinerules` |
| GitHub Copilot | `.github/copilot-instructions.md` |

```markdown
For any website revamp or redesign task, read and follow `.skills/mahakarya/SKILL.md`
and the files in `.skills/mahakarya/references/` before starting.
```

**Option 2: no install.** In ChatGPT, Claude.ai or Gemini on the web, upload `SKILL.md` and `references/copy.md`, then say: *"Follow the method in these files to revamp my website."* You can't run `copylint` there, but the copy rules still apply.

### Running copylint on its own

Requires Node.js 18 or newer:

```bash
node mahakarya/scripts/copylint.mjs src/app/page.tsx --address anda
```

- `--address` checks that one form of address is used throughout: `anda` (formal "you") or `kamu` (casual "you").
- It reads the visible text in `.tsx`, `.ts`, `.jsx`, `.js`, `.md` and `.html` files.
- It flags:
  - hype words ("world-class", "best-in-class")
  - hedges ("we strive to")
  - stiff, bureaucratic phrasing
  - template shapes ("not just X, but Y")
  - vague buttons ("Learn more")
  - overly long sentences
  - em-dashes, exclamation marks and emoji

## Notes

- **The copy rules and word lists are written for Indonesian websites**, with some English hype words included. For other languages, adapt `references/copy.md` and the word lists in `scripts/copylint.mjs`.
- **Investment pages never show return, yield or passive-income figures.** This is on purpose, because these are regulated claims in most countries.

## License

MIT. Free to use, modify and share.
