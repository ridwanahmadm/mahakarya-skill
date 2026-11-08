---
name: mahakarya
description: World-class website revamp that adapts a reference site the user admires (a URL, a screen recording or screenshots) to the client's own brand, facts and audience, without copying it. Use when the user asks to revamp, remake or redesign a website "like" or "in the style of" another site, wants a site that makes a company look world-class to investors, buyers or partners, or says "mahakarya", "revamp", "kelas dunia", "seperti website ini". Orchestrates impeccable (craft, modes, verification) and hallmark (floor, sloplint) and adds five methods of its own: beat-sheet transposition of the reference, an identity lock, an audience objection ladder, a copy deck written in the reader's own words, and a visible placeholder protocol. Not for small edits to an existing design or for app/dashboard screens.
---

# Mahakarya

A revamp is judged by one test: a stranger who lands on the page believes, within ten seconds, that a serious company stands behind it, and knows the one thing to do next. Looking like the reference is not the goal. The reference supplies the **rhythm, craft level and motion grammar**; the client supplies **every fact, picture and word**.

This skill sits on top of two installed skills and never replaces them:

- **impeccable** owns craft: modes, the craft floor, new-work direction, critique, audit and the finish reviewer. Run `impeccable context` once and read `reference/craft-floor.md` before the first UI edit.
- **hallmark** owns the Floor (its 16 rules bind everything here) and `sloplint --render`.

Where this file and those disagree on craft, they win. Where they disagree on *what to show*, this file wins: it is the one that knows the audience and the reference.

## The six laws

1. **Transpose, never copy.** Take the reference's structure, pacing, type scale ratios and motion grammar. Never its copy, brand names, logos, photographs, icons or exact layout measurements. If a beat would read as "the reference with our logo", change its composition.
2. **Identity is locked, the world is free.** Colours, typefaces and logo the user pinned do not move. Canvas (light or dark), density, composition, motion, image treatment and section order are free. A reference accent colour is replaced by the brand accent at the same *role* (the one loud colour), never added beside it.
3. **Every claim has a source.** A fact on the page comes from the CMS, the client's own published material, or the user. Counts are derived from data, not typed. Anything else is a placeholder under the protocol below. Investment pages never show return, yield or guaranteed-income figures, not even as placeholders: those are regulated promises.
4. **One idea per screen, one signature per page.** Each screen answers one question for the audience. The page has one signature moment (the thing a visitor would describe to a friend), built from the client's strongest real material.
5. **Words are the design's first material.** The copy is written as a deck before the build, in the reader's own questions, specific instead of superlative, declarative instead of hedged ([references/copy.md](references/copy.md)). The page may make a visitor think "world-class"; it never says it.
6. **Motion explains, never decorates.** Every scroll-linked effect shows a relationship (a sequence, a scale, a hand-off). Transform and opacity only, progressive enhancement, a reduced-motion and a no-JS version that still read completely. No scroll hijacking: the wheel always moves the page.

## Flow

### 0. Pre-flight (read before asking)

- The project: framework, tokens (`globals.css`, `@theme`, `:root`), fonts, components, CMS collections and their real records, existing pages for this brand, `PRODUCT.md`, `DESIGN.md`.
- The brand truth: the client's own sites and social profiles (web search, the user's files). Record what is *confirmed*, what is *the company's own claim*, and what is *unknown*. Never theme a real brand from memory.
- The reference: run **Beat-sheet transposition, step A** ([references/beat-sheet.md](references/beat-sheet.md)). For a screen recording: `ffmpeg -i rec.mov -vf "fps=1.5,scale=1200:-1" frames/f_%03d.jpg`, then tile 2×2 sheets (`tile=2x2`) and read every sheet. For a URL: open it in the browser and scroll it at 1440 and 390.

### 1. Ask once, or infer

If the request already names the audience, the action and the reference, do not ask; state inferences in one line. Otherwise one message: audience, the one action, material available (photos, real numbers, documents), what is pinned (colour, type, logo).

### 2. Diagnose the old site (two minutes, written down)

Five-second test on the current page: what company, what it offers, what to do next. List what fails, in one line each. Keep what works (real copy, real data wiring, forms, consent, routing). This list is the "improvements" ledger the new design must answer; anything not on it is not a reason to change.

### 3. Shape

1. **Material inventory** (hallmark § 2): real / pictures / absent.
2. **Objection ladder** ([references/trust-ladder.md](references/trust-ladder.md)): the five questions this audience asks before acting, in their words, and the section that answers each.
3. **Beat sheet, step B**: map each reference beat to a ladder rung and to real material. A beat with no material is dropped or becomes a labelled placeholder slot. A rung with no beat gets a new beat in the reference's grammar.
4. **Copy deck** ([references/copy.md](references/copy.md) § 1): every section's reader question, one-sentence answer, proof and action, in reading order, before any markup. Run the swap and so-what tests on it.
5. **Signature**: the strongest real thing, shown on the first screen.
6. **Identity lock table**: what is pinned (with token names) and what is free.

### 4. The Picks block (once)

```markdown
**Mahakarya**
- **Reference** · <site>, beats kept: <n>, dropped: <list>, added: <list>
- **Identity lock** · colours, type, logo (token names); canvas: <light|dark> because <reason>
- **Audience and action** · <who> → <the one action>; secondary: <one>
- **Signature** · <the moment>
- **Sections** · <ordered list, each with its ladder rung>
- **Material** · real / pictures / placeholders (count) / absent
- **Motion** · <the 3 to 5 scroll behaviours and what each explains>
- **Route** · <new route or replacement; old route kept for comparison unless told>
```

### 5. Build

- **Non-destructive by default.** Build the revamp on its own route beside the old page; switching the domain to it is a one-line change the user approves. Never delete a route without an approved file-level plan.
- **Hero first** (headline ≤ 7 words, one sentence ≤ 12 words, one or two actions, all visible at 1280×800), run `sloplint --stage hero`, then the rest.
- **Tokens first**: the stamp and tokens block at the top of the page's CSS (hallmark Floor 1 and 15); reuse the project's token names; append-only to shared stylesheets.
- **Type**: the pinned typeface family carries everything. A reference that relies on a condensed display face is matched by the same family's width axis or condensed cut (for Ubuntu: Ubuntu Sans `wdth 75`), never by a foreign face. Labels: the family's mono or body face, a step smaller, sentence case, untracked (hallmark Floor 9).
- **Motion recipes** ([references/motion.md](references/motion.md)): sticky stage + progress variable, horizontal track, crossfade story, marquee with a pause control. One client component per behaviour; server components for everything else.
- **Placeholders**: every unconfirmed fact goes through one content module and renders with a visible "Contoh" tag (see trust-ladder.md § Placeholder protocol). Stock stand-ins are credited in the footer.
- **Mobile is designed, not shrunk**: horizontal tracks become native swipe rows with snap; pinned stories become stacked panels; sticky elements become one bottom bar.

### 6. Verify (batched, at the sizes it ships)

1. `node <hallmark>/scripts/sloplint.mjs --url http://localhost:<port>/<route> --render` until 0 FAIL; fix or waive every REFLEX with a reason in the stamp.
2. `impeccable detect` on the route's files, and `node <mahakarya>/scripts/copylint.mjs <page files> --address anda|kamu` until clean or every hit is defended in one line.
3. axe (0 violations) and horizontal overflow (0) at 1440 and 390; keyboard pass through nav, tabs, accordions, carousels, form.
4. **Reference check**: screenshot each beat beside its reference frame. Pass when the rhythm and craft level match and nothing reads as copied.
5. **Ten-second test**: from the first screen alone, write what the company is, why to trust it, and the next step. If any is missing, fix the hero. Then read the whole page aloud once (copy.md § 5.6).
6. **Reduced motion and no-JS**: every section readable, nothing stuck invisible.
7. The impeccable finish reviewer in fresh context; act on its first word.

### 7. Hand over

A docs note (route, files, beat map, identity lock, placeholder list with where to fill each, verification numbers, open questions for the client), the Picks block updated with the outcome, and the material ask: the three photos or facts that would most raise the page.
