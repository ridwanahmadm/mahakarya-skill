#!/usr/bin/env node
// copylint: mechanical check for landing-page copy (mahakarya references/copy.md § 5).
// Usage: node copylint.mjs <file...> [--address anda|kamu]
// Reads visible strings from .tsx/.ts/.jsx/.js (JSX text and string literals), .md and .html,
// and flags hype words, hedges, template shapes, long sentences, vague buttons and mixed address.
import { readFileSync } from 'node:fs'

const args = process.argv.slice(2)
const addrFlag = args.indexOf('--address')
const address = addrFlag >= 0 ? args[addrFlag + 1] : null
const files = args.filter((a, i) => !a.startsWith('--') && !(addrFlag >= 0 && i === addrFlag + 1))
if (!files.length) {
  console.error('usage: copylint.mjs <file...> [--address anda|kamu]')
  process.exit(2)
}

const RULES = [
  { id: 'hype', why: 'unprovable superlative; replace it with the fact that earned it', re: /\b(kelas dunia|terbaik|terdepan|terpercaya|nomor satu|no\.? ?1|inovatif|revolusioner|solusi (terbaik|terlengkap|tepat)|wujudkan impian|hunian impian|investasi masa depan|masa depan cerah|tak tertandingi|luar biasa|sempurna|world[- ]class|best[- ]in[- ]class|industry[- ]leading|cutting[- ]edge|seamless(ly)?|unlock|empower|elevate|next[- ]level|game[- ]changer|state[- ]of[- ]the[- ]art)\b/i },
  { id: 'hedge', why: 'hedge or throat-clearing; say it as a statement', re: /\b(berupaya|berkomitmen untuk|diharapkan dapat|semoga dapat|selamat datang di|kami adalah perusahaan|yang bergerak di bidang|hadir untuk|hadir sebagai)\b/i },
  { id: 'bureaucratic', why: 'stiff register; rewrite as spoken Indonesian', re: /\b(merupakan|melakukan pembelian|memberikan pelayanan|dalam rangka|adapun|yang mana|dengan demikian)\b/i },
  { id: 'template', why: 'template shape; keep at most one per page, and only with a fact', re: /\b(bukan sekadar|lebih dari sekadar|tidak hanya\b.*\b(tetapi|tapi|melainkan) juga|mengapa memilih kami|kenapa memilih kami)\b/i },
  { id: 'label-heading', why: 'category label as a heading; write a statement', re: /^(layanan kami|tentang kami|keunggulan( kami)?|visi (dan|&) misi|produk kami)$/i },
  { id: 'vague-cta', why: 'button names no next step', re: /^(pelajari lebih lanjut|selengkapnya|klik di sini|submit|kirim|learn more|click here|read more)$/i },
  { id: 'punctuation', why: 'em-dash, exclamation or emoji reads as generated copy', re: /—|!(\s|$)|[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u },
  { id: 'triplet', why: 'adjective triplet; one proven fact beats three adjectives', re: /\b(aman|nyaman|strategis|modern|asri|eksklusif|mewah|elegan|terjangkau|premium|bersih|lengkap)\b,\s*(aman|nyaman|strategis|modern|asri|eksklusif|mewah|elegan|terjangkau|premium|bersih|lengkap)\b,?\s*(dan|&)\s*(aman|nyaman|strategis|modern|asri|eksklusif|mewah|elegan|terjangkau|premium|bersih|lengkap)\b/i },
]

const strip = (t) => t.replace(/\{[^{}]*\}/g, 'X').replace(/\s+/g, ' ').trim()
const looksLikeCopy = (t) => /[a-zA-Z]{3,}\s+[a-zA-Z]{2,}/.test(t) && !/^[\w./:@#?=&%-]+$/.test(t) && !/^(g2-|data-|aria-|https?:|\/|#|\.)/.test(t) && !/[{};]|=>|\bimport\b|\bclassName\b/.test(t)

function strings(src, file) {
  if (/\.(md|html?)$/.test(file)) return src.split('\n').map((t, i) => ({ t: t.replace(/<[^>]+>/g, ' '), line: i + 1 }))
  const out = []
  const lines = src.split('\n')
  lines.forEach((ln, i) => {
    if (/^\s*(\/\/|\*|\/\*)/.test(ln)) return
    for (const m of ln.matchAll(/(['"`])((?:\\.|(?!\1).){6,})\1/g)) out.push({ t: m[2], line: i + 1 })
    for (const m of ln.matchAll(/>([^<>{}]{6,})</g)) out.push({ t: m[1], line: i + 1 })
    const bare = ln.trim()
    if (!/[<>{}=;()]/.test(bare) && /^[A-Z][^'"`]*[a-z]/.test(bare) && bare.split(' ').length > 2) out.push({ t: bare, line: i + 1 })
  })
  return out
}

let hits = 0
for (const file of files) {
  const src = readFileSync(file, 'utf8')
  const seen = new Set()
  let anda = 0
  let kamu = 0
  for (const { t: raw, line } of strings(src, file)) {
    const t = strip(raw)
    if (!looksLikeCopy(t)) continue
    const key = `${line}:${t}`
    if (seen.has(key)) continue
    seen.add(key)
    if (/\bAnda\b/.test(t)) anda++
    if (/\b(kamu|kau)\b/i.test(t)) kamu++
    for (const r of RULES) {
      if (r.re.test(t)) {
        hits++
        console.log(`  ${r.id.padEnd(13)} ${file}:${line}  "${t.slice(0, 90)}"  · ${r.why}`)
      }
    }
    for (const sentence of t.split(/(?<=[.?])\s+/)) {
      const n = sentence.split(/\s+/).filter(Boolean).length
      if (n > 25) {
        hits++
        console.log(`  long         ${file}:${line}  ${n} words: "${sentence.slice(0, 70)}..."  · split it; one idea per sentence`)
      }
    }
  }
  if (anda && kamu) {
    hits++
    console.log(`  address      ${file}  mixes "Anda" (${anda}) and "kamu" (${kamu})  · one reader, one form of address`)
  }
  if (address === 'anda' && kamu) console.log(`  address      ${file}  uses "kamu" on an "Anda" page`)
  if (address === 'kamu' && anda) console.log(`  address      ${file}  uses "Anda" on a "kamu" page`)
}
console.log(`copylint: ${hits} finding(s) across ${files.length} file(s).`)
process.exit(hits ? 1 : 0)
