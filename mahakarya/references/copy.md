# Copy: natural, confident, clear, never a template

The page's words are the part a visitor actually reads. A world-class page sounds like a capable person talking to one respected reader across a table, not like a brochure. This file is the method; `scripts/copylint.mjs` is the mechanical check.

Sources this distils: Copyhackers / Joanna Wiebe (one reader, one goal, the reader's own words, specificity over cleverness), Unbounce's "words to stop using", objection-handling swipe files (answer each doubt where it arises), the five-second test. Re-read them when a page is copy-heavy; never quote them on the page.

## 1. Before writing a line: the copy deck

Write the copy as one plain document before the build, section by section, in reading order. For each section, one row:

| Section | The reader's question (their words) | The answer (one sentence) | The proof beside it | The action |
|---|---|---|---|---|

- The **reader's question** comes from the objection ladder (`trust-ladder.md`). Write it the way the reader would type it into WhatsApp: "Ini aman nggak?", "Siapa yang ngurus setelah jadi?", "Bisa lihat lokasinya dulu?"
- The **answer** is a statement, not a promise. If it cannot be said in one sentence, the section is doing two jobs: split it or cut one.
- The **proof** is a fact from the inventory (a count from the CMS, a named place, a document, a process step). A claim with no proof beside it is cut or rewritten until it is a fact.
- One **action** per section at most, named for what happens next.

The deck is where the copy is judged; the build only places it.

## 2. The seven rules

1. **One reader, one goal.** Address one person ("Anda" for investors and partners, "kamu" for students and young renters; never both on one site). Every section moves that person one step toward the page's one action.
2. **Clear beats clever.** The headline may be a line with rhythm; the sentence under it must say plainly what the company does, for whom, and where. Five-second test: a stranger can repeat what you sell.
3. **Specific beats superlative.** Replace every adjective with the fact that earned it. Not "lokasi strategis" but "dua menit ke gerbang utama IPB". Not "pengelolaan profesional" but "kami memasarkan kamar, membersihkan, menjaga keamanan, dan melapor kepada pemilik". Numbers come from data, places are named, processes are listed.
4. **Confident means declarative.** Subject, active verb, present tense: "Kami membangun", "Anda menerima". No hedges ("berupaya", "berkomitmen untuk", "diharapkan dapat", "insyaallah" as a softener in commercial claims), no throat-clearing ("Selamat datang di", "Kami adalah perusahaan yang bergerak di bidang"). Confidence also means saying the limit plainly: "Kami tidak menjanjikan angka hasil" is a confident sentence.
5. **Answer doubts where they arise.** Fit and trust high on the page. Effort and risk under the button ("Bertanya tidak mengikat"). Price and terms beside the price. Timing at the last action. Three precise answers beat eight vague ones; a distant FAQ is the backup, not the plan.
6. **Show the contrast, not the boast.** The strongest confident line names what the reader is used to and how this is different ("Pengembang biasanya pamit setelah kunci diserahkan. Kami justru mulai di situ."). Never name or mock a competitor.
7. **Buttons say what happens next.** Verb + object, from the reader's side: "Lihat cara berinvestasi", "Tanya unit yang tersedia", "Jadwalkan kunjungan". Never "Pelajari lebih lanjut", "Klik di sini", "Submit", "Selengkapnya" alone. The same destination keeps the same label everywhere.

## 3. What makes copy sound like a template (cut on sight)

**Hype words** (unprovable, so unbelievable): kelas dunia, terbaik, terdepan, terpercaya, nomor satu, premium (unless it is a named product tier), eksklusif (unless it is the product's own name), inovatif, revolusioner, solusi, wujudkan impian, hunian impian, investasi masa depan, masa depan cerah, tak tertandingi, luar biasa, sempurna; world-class, best-in-class, leading, cutting-edge, seamless, unlock, empower, elevate, next-level, game-changer.

The page may *make* a visitor think "this is world-class"; it may never *say* it.

**Template shapes**:
- the adjective triplet: "aman, nyaman, dan strategis" (one proven fact beats three adjectives)
- "Bukan sekadar X, tapi juga Y" / "Lebih dari sekadar X" / "Tidak hanya X, melainkan Y" (once a page at most, and only when Y is a fact)
- "Mengapa memilih kami?" and other rhetorical section titles
- opening with the company ("Fatih Group adalah...") instead of with what the reader gets
- a heading that is a category label ("Layanan Kami", "Tentang Kami", "Keunggulan") instead of a statement
- em-dashes and "—" chains, exclamation marks, emoji

**Bureaucratic Indonesian** (rewrite to spoken register, still polite): "merupakan" → "adalah" or restructure; "melakukan pembelian" → "membeli"; "memberikan pelayanan" → "melayani"; "dalam rangka" → "untuk"; "adapun", "yang mana", "sehingga dengan demikian" → cut; passive chains "telah dilakukannya" → active.

## 4. Rhythm

- One idea per sentence. Most sentences 8 to 18 words; none over 25. Vary length: a short line after two longer ones lands.
- Headlines: seven words or fewer, a full stop if it is a statement. Section heads are statements the reader could quote.
- Read every line aloud. If you would not say it to the reader's face across a table, rewrite it.
- Numbers as numerals ("4 properti", "2 menit"); units spelled the way the reader says them.

## 5. The checks (run on the copy deck, then on the built page)

1. **Five-second test**: from the hero alone, write what the company sells, to whom, and the next step.
2. **Swap test**: put a competitor's name in place of the client's. Any line that still works is generic: rewrite it with a fact only this client has.
3. **So-what test**: after each claim, ask "so what for the reader?" If the answer is not on the page, add it or cut the claim.
4. **Proof test**: every claim has its fact in the same block. No fact, no claim.
5. **Hype and hedge scan**: `node <mahakarya>/scripts/copylint.mjs <files>` flags hype words, hedges, template shapes, long sentences, vague buttons and mixed address. Fix every hit or defend it in one line.
6. **Aloud test**: read the page top to bottom aloud once. Mark every line that made you slow down; rewrite those.

## 6. Investor pages in particular

- Lead with the model (who builds, who owns, who manages), not with the company's history.
- State what the investor does and what the company does, in that order of effort: "Anda memilih unit. Kami membangun, mengisi kamar, dan melapor."
- Never a return, yield, payback period or "passive income" promise, not even as an example (regulated claims). Say what the return depends on and that the assumptions are shown openly.
- Legal status, akad type and site visits are answered on the page in plain words, beside the action.
- The final action lowers the cost of asking: who replies, when, through which channel, and that asking does not bind.
