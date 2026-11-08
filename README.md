# Mahakarya

**Skill AI untuk merombak website supaya terlihat seperti karya studio kelas dunia, tanpa menjiplak dan tanpa mengarang fakta.**

> English summary: Mahakarya is an agent skill for website revamps. You show it a site you admire; it borrows that site's rhythm, craft level and motion, then rebuilds the page with your client's own brand, facts, photos and words. It never copies the reference and never invents numbers, testimonials or logos. Works best with Claude Code; the method files can be used by any AI agent.

---

## Apa itu Mahakarya?

Bayangkan Anda punya website perusahaan yang "kurang meyakinkan", lalu Anda melihat website lain yang sangat Anda kagumi. Mahakarya membantu AI mengerjakan revamp dengan cara seorang direktur desain:

1. **Mempelajari situs acuan.** Yang diambil ritmenya, tingkat kerapiannya, dan gaya geraknya. Teks, logo, foto, dan tata letak persisnya tidak diambil.
2. **Mengunci identitas klien.** Warna, huruf, dan logo yang sudah ditetapkan tidak berubah.
3. **Mengisi halaman dengan fakta klien sendiri:** data dari CMS, dokumen klien, atau jawaban Anda.
4. **Menulis copy seperti orang yang bicara langsung kepada pembaca**, bukan seperti brosur.

Ujiannya sederhana: **orang asing yang membuka halaman itu percaya dalam 10 detik bahwa ada perusahaan serius di baliknya, dan tahu satu hal yang harus ia lakukan berikutnya.**

## Paling cocok untuk

- Revamp website perusahaan atau brand yang dibaca **investor, pembeli properti, mitra, atau klien bernilai besar**
- Bisnis yang hidup dari kepercayaan: properti, developer, investasi, jasa profesional, B2B, hospitality, pendidikan
- Permintaan **"buat seperti website ini"**, dari URL, rekaman layar, atau screenshot
- **Keluarga brand**: induk dan anak usaha yang harus terasa satu keluarga tetapi tetap mudah dibedakan
- **Menulis atau mengaudit copy website**, karena metode copy dan `copylint` bisa dipakai sendiri

## Kurang cocok untuk

- Dashboard, aplikasi, atau layar admin
- Perubahan kecil, misalnya ganti warna atau satu tombol
- Website yang belum punya materi nyata. Mahakarya menolak mengarang angka, testimoni, atau logo klien, jadi hasilnya sebaik foto dan fakta yang tersedia.

## Enam prinsipnya

| Prinsip | Artinya dalam praktik |
|---|---|
| **Adaptasi, jangan jiplak** | Ambil struktur dan iramanya, bukan teks, logo, foto, atau ukuran persisnya |
| **Identitas dikunci, suasana bebas** | Warna, huruf, dan logo tetap. Kanvas, komposisi, dan gerak boleh berubah |
| **Setiap klaim punya sumber** | Angka datang dari data. Yang belum pasti tampil sebagai placeholder yang jelas. Halaman investasi tidak pernah menampilkan janji imbal hasil |
| **Satu ide per layar** | Setiap layar menjawab satu pertanyaan pembaca. Setiap halaman punya satu momen khas |
| **Kata adalah bahan desain pertama** | Copy ditulis sebelum desain dibuat, dari pertanyaan pembaca sendiri |
| **Gerak menjelaskan, bukan menghias** | Animasi saat menggulir harus menunjukkan urutan atau hubungan. Halaman tetap utuh tanpa JavaScript dan saat reduced motion |

## Alur kerjanya

1. **Pra-cek.** Membaca proyek: framework, token warna, huruf, data CMS. Mencatat mana fakta yang pasti, mana klaim perusahaan, dan mana yang belum diketahui.
2. **Bertanya sekali saja**, bila perlu: siapa pembacanya, satu aksi yang diinginkan, materi apa yang ada, dan apa yang dikunci.
3. **Diagnosis situs lama.** Lima detik di halaman lama: apa perusahaannya, apa yang dijual, apa langkah berikutnya. Apa yang gagal dicatat, apa yang berfungsi dipertahankan.
4. **Membentuk halaman:**
   - inventaris materi (nyata, gambar, belum ada)
   - **tangga keberatan**: lima pertanyaan pembaca sebelum bertindak, misalnya "Ini aman nggak?" atau "Siapa yang ngurus setelah jadi?"
   - **beat sheet**: setiap bagian situs acuan dipetakan ke pertanyaan pembaca dan materi nyata
   - **copy deck**: setiap bagian ditulis sebagai pertanyaan, jawaban satu kalimat, bukti, dan aksi
5. **Ringkasan keputusan (Picks block)**, supaya Anda bisa mengoreksi arah sebelum dibangun.
6. **Membangun** di rute baru di samping halaman lama, jadi halaman lama tidak dihapus. Hero dibuat dulu, baru bagian lainnya.
7. **Verifikasi:**
   - pemeriksaan desain dengan sloplint (dari Hallmark)
   - `copylint` untuk copy
   - aksesibilitas dengan axe
   - tidak ada scroll horizontal di desktop dan ponsel
   - uji 10 detik
8. **Serah terima:** catatan, daftar placeholder, dan tiga foto atau fakta yang paling akan meningkatkan halaman.

## Isi repositori

```
mahakarya/
├── SKILL.md                    ← instruksi utama untuk agent
├── references/
│   ├── beat-sheet.md           ← cara memetakan situs acuan ke materi klien
│   ├── trust-ladder.md         ← tangga keberatan pembaca dan aturan placeholder
│   ├── copy.md                 ← metode menulis copy (7 aturan, kata yang dilarang, uji)
│   └── motion.md               ← resep gerak saat menggulir
└── scripts/
    └── copylint.mjs            ← pemeriksa copy otomatis (Node.js)
```

## Instalasi

### Claude Code (paling lengkap)

Mahakarya dibuat untuk Claude Code. Salin folder `mahakarya` ke folder skills:

```bash
git clone https://github.com/ridwanahmadm/mahakarya-skill.git
mkdir -p ~/.claude/skills
cp -R mahakarya-skill/mahakarya ~/.claude/skills/
```

Untuk satu proyek saja, salin ke `.claude/skills/` di dalam proyek itu.

Mulai sesi baru, lalu pakai dengan mengetik `/mahakarya`, atau minta langsung:

> Revamp website saya di `src/app/page.tsx` seperti https://contoh-situs-acuan.com. Pembacanya calon investor.

**Skill pendamping.** Mahakarya dirancang di atas dua skill lain:

- **impeccable**, untuk kualitas desain dan verifikasi: [github.com/pbakaus/impeccable](https://github.com/pbakaus/impeccable)
- **hallmark**, untuk aturan dasar desain dan pemeriksa `sloplint`

Tanpa keduanya, Mahakarya tetap jalan. Metodenya (beat sheet, tangga keberatan, copy deck, `copylint`) tetap dipakai, tetapi langkah verifikasi dari Hallmark dan Impeccable akan dilewati.

### Codex CLI, Gemini CLI, Cursor, Windsurf, Cline, dan agent lain

Agent selain Claude Code tidak memuat skill secara otomatis, tetapi isinya cukup Markdown biasa yang bisa dibaca agent mana pun.

**Cara 1: taruh di proyek, lalu rujuk dari file instruksi agent**

```bash
git clone https://github.com/ridwanahmadm/mahakarya-skill.git
cp -R mahakarya-skill/mahakarya ./.skills/
```

Lalu tambahkan baris ini ke file instruksi agent Anda:

| Agent | File instruksi |
|---|---|
| Codex CLI | `AGENTS.md` |
| Gemini CLI | `GEMINI.md` |
| Cursor | `.cursor/rules/mahakarya.mdc` |
| Windsurf | `.windsurfrules` |
| Cline | `.clinerules` |
| GitHub Copilot | `.github/copilot-instructions.md` |

```markdown
Untuk tugas revamp atau redesign website, baca dan ikuti `.skills/mahakarya/SKILL.md`
beserta file di `.skills/mahakarya/references/` sebelum mulai.
```

**Cara 2: tanpa instalasi.** Untuk ChatGPT, Claude.ai, atau Gemini di web, unggah `SKILL.md` dan `references/copy.md` ke percakapan, lalu tulis: *"Ikuti metode di file ini untuk merombak website saya."* Alat `copylint` tidak bisa dijalankan di sini, tetapi aturan copy-nya tetap bisa diterapkan.

### Menjalankan copylint sendiri

Butuh Node.js 18 atau lebih baru:

```bash
node mahakarya/scripts/copylint.mjs src/app/page.tsx --address anda
```

- `--address anda` atau `--address kamu` memeriksa sapaan supaya konsisten.
- `copylint` membaca teks yang tampil di file `.tsx`, `.ts`, `.jsx`, `.js`, `.md`, dan `.html`.
- Yang ditandai:
  - kata hype ("terbaik", "kelas dunia")
  - kalimat ragu-ragu ("berupaya", "diharapkan dapat")
  - bahasa birokratis ("merupakan", "melakukan pembelian")
  - pola template ("bukan sekadar…")
  - tombol yang kabur ("Selengkapnya")
  - kalimat terlalu panjang
  - em-dash, tanda seru, dan emoji

## Catatan

- **Contoh dan aturan copy berbahasa Indonesia.** Untuk bahasa lain, sesuaikan `references/copy.md` dan daftar kata di `scripts/copylint.mjs`.
- **Halaman investasi tidak pernah menampilkan angka imbal hasil, yield, atau janji pendapatan pasif.** Ini disengaja, karena klaim seperti itu diatur regulator.

## Lisensi

MIT. Bebas dipakai, diubah, dan dibagikan.
