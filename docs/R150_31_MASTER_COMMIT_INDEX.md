# R150.31 — Master Commit Index Throwbadly
2026-11-27. Addendum, not replacement of historical ledgers. User instruction: organize all previously requested commits as well as possible. No history rewrite, squash, branch deletion, force push or merge. Scope remains Sumatera.
## Historical registers retained
- [R150.27A ledger](R150_27A_COMMIT_LEDGER.json), [R150.27B roadmap](R150_27B_COMMIT_ROADMAP.md), [R150.27C historical index](R150_27C_PROJECT_COMMIT_INDEX.md), [R150.27D SP01–12](R150_27D_MANDATE_RETENTION_AND_BRANCH_ISOLATION.md).
- [R150.28A recovered requirements](R150_28A_FALLBACK_MANDATE_RECOVERY.json), [R150.28B-5 71 units](R150_28B_5_MERGE_SEGMENTATION_REGISTER.json), [crosswalk](R150_28B_6_MANDATE_SOURCE_BRANCH_CROSSWALK.json), [R150.28B-6A live reconciliation](R150_28B_6A_LIVE_BRANCH_RECONCILIATION.json).
- All 71 units, 34 candidate requirements, 12 SP, 25 roadmap entries and RBX01–10 remain in their original registers. Their counts describe registers, not independent features or validated results.
## Live branch snapshot
Compared all 20 non-main branches in two batches during this session; baseline main 6d37763c8cb63f70db5bef951a0050b2a3692e93. Counts below precede R150.31A and this index, not atomic transaction; parallel work possible. All behind=0 in these checks. 112 summed ahead commits (not deduplicated SHA total), 116 summed changed paths.
| Branch | Ahead | Changed paths |
|---|---:|---:|
| feat/fahimuunal-vercel | 0 | 0 |
| feature/alam | 1 | 1 |
| feature/hadis | 7 | 16 |
| feature/iqra-go | 1 | 1 |
| feature/khidmah-lingkungan-padang-longang | 0 | 0 |
| feature/kitab-iqra | 13 | 13 |
| feature/lughah | 1 | 1 |
| feature/matematika | 1 | 1 |
| feature/offline-android | 1 | 1 |
| feature/peradaban | 1 | 1 |
| feature/pustaka-rehat | 1 | 1 |
| feature/quran | 1 | 1 |
| feature/raudhah-media | 1 | 1 |
| feature/raudhah-pedagogy | 8 | 8 |
| feature/riset-malaka | 1 | 1 |
| feature/roblox-learning | 3 | 3 |
| feature/surau-shift | 30 | 30 |
| feature/tan-project | 3 | 3 |
| hurairah-web-stable | 1 | 1 |
| raudhah-integrated | 37 | 32 |
## Newest source and decision index
12 SHA objects rechecked in this session (R150.28C-1/2 and R150.30/A/B/C/D/F/G/H/I/J); R150.30K verified by branch head and file; R150.31A newly committed. R150.30E file exists in branch diff and read back, blob 10d666f8afba0f0d6b05984480ce4330341b9c7f; exact commit SHA still unknown, search returned none. Do not treat blob as commit.
| ID | Work | Branch | Commit / document |
|---|---|---|---|
| R150.28C-1 | 181 identitas Anak | feature/kitab-iqra | [9d7d56b](https://github.com/hajighozi/AL-MUDDAKIR-/commit/9d7d56b34cc7af07d1dc7e9ebd6f2758a318ada0) · [file](https://github.com/hajighozi/AL-MUDDAKIR-/blob/feature/kitab-iqra/docs/kitab-iqra/R150_28C_1_RECOVERED_ANAK_HEADINGS.json) |
| R150.28C-2 | Pilot Nahwu Sharaf Balaghah | feature/kitab-iqra | [7badef5](https://github.com/hajighozi/AL-MUDDAKIR-/commit/7badef5f46ae4b14327972dc729222b1b5487b0e) · [file](https://github.com/hajighozi/AL-MUDDAKIR-/blob/feature/kitab-iqra/docs/kitab-iqra/R150_28C_2_BAHASA_ARAB_PILOT_CROSSWALK.json) |
| R150.30 | Ikhwan setelah Murabbi | feature/surau-shift | [896e840](https://github.com/hajighozi/AL-MUDDAKIR-/commit/896e840fab9659008be5b811b7fa2fc762893f4d) · [file](https://github.com/hajighozi/AL-MUDDAKIR-/blob/feature/surau-shift/surau-shift/docs/R150_30_IKHWAN_HUMAN_CORE.md) |
| R150.30A | Pengaruh pergaulan | feature/surau-shift | [5fc09c8](https://github.com/hajighozi/AL-MUDDAKIR-/commit/5fc09c849d4dd9ab8a0f81a52aca0a2a3f0eef4c) · [file](https://github.com/hajighozi/AL-MUDDAKIR-/blob/feature/surau-shift/surau-shift/docs/R150_30A_IKHWAN_PREVENTIVE_PEER_SUPPORT.md) |
| R150.30B | Komunitas internasional | feature/surau-shift | [0a46a47](https://github.com/hajighozi/AL-MUDDAKIR-/commit/0a46a470cb3f5dba560efb0b8007a20750a2c4d3) · [file](https://github.com/hajighozi/AL-MUDDAKIR-/blob/feature/surau-shift/surau-shift/docs/R150_30B_INTERNATIONAL_COMMUNITY_PRINCIPLES.md) |
| R150.30C | Atlas komunitas spiritual | feature/surau-shift | [5200136](https://github.com/hajighozi/AL-MUDDAKIR-/commit/5200136a03408a7e347566965f00cd500942615c) · [file](https://github.com/hajighozi/AL-MUDDAKIR-/blob/feature/surau-shift/surau-shift/docs/R150_30C_SPIRITUAL_COMMUNITY_ATLAS.md) |
| R150.30D | Manhaj Badunsanak | feature/surau-shift | [7f4fb91](https://github.com/hajighozi/AL-MUDDAKIR-/commit/7f4fb916bc2580a583c34df6ad7ac10675d402f5) · [file](https://github.com/hajighozi/AL-MUDDAKIR-/blob/feature/surau-shift/surau-shift/docs/R150_30D_MANHAJ_BADUNSANAK.md) |
| R150.30E | Kriteria persahabatan | feature/surau-shift | SHA pending · [file](https://github.com/hajighozi/AL-MUDDAKIR-/blob/feature/surau-shift/surau-shift/docs/R150_30E_IKHWAN_COMPANIONSHIP_CRITERIA.md) |
| R150.30F | Misi pertama Tark al-Ma'asi | feature/surau-shift | [f43a2e4](https://github.com/hajighozi/AL-MUDDAKIR-/commit/f43a2e4a8ab3ba1d6db7d5353e6853c08e7aff32) · [file](https://github.com/hajighozi/AL-MUDDAKIR-/blob/feature/surau-shift/surau-shift/docs/R150_30F_TARK_AL_MAASI_IKHWAN.md) |
| R150.30G | Majelis dzikir mingguan | feature/surau-shift | [c6969f5](https://github.com/hajighozi/AL-MUDDAKIR-/commit/c6969f5f3b9c190a9e534fba51ca276cb72d9c4f) · [file](https://github.com/hajighozi/AL-MUDDAKIR-/blob/feature/surau-shift/surau-shift/docs/R150_30G_WEEKLY_DHIKR_SUHBAH.md) |
| R150.30H | Ekonomi dan pembangunan | feature/surau-shift | [69e3f2e](https://github.com/hajighozi/AL-MUDDAKIR-/commit/69e3f2e266a1be3cf42914a27bac175d06023f31) · [file](https://github.com/hajighozi/AL-MUDDAKIR-/blob/feature/surau-shift/surau-shift/docs/R150_30H_IKHWAN_ECONOMY_CIVILIZATION.md) |
| R150.30I | Keluarga Ikhwan pertama | feature/surau-shift | [3b5de3c](https://github.com/hajighozi/AL-MUDDAKIR-/commit/3b5de3cdd73cd9ea18e4e546c3fb64e9237a082e) · [file](https://github.com/hajighozi/AL-MUDDAKIR-/blob/feature/surau-shift/surau-shift/docs/R150_30I_FAMILY_FIRST_IKHWAN.md) |
| R150.30J | Fiqh Dakwah capstone | feature/raudhah-pedagogy | [378a62f](https://github.com/hajighozi/AL-MUDDAKIR-/commit/378a62fd7828a49fb04606ed687c27faaacd9189) · [file](https://github.com/hajighozi/AL-MUDDAKIR-/blob/feature/raudhah-pedagogy/docs/pedagogy/R150_30J_FIQH_DAKWAH_CAPSTONE.md) |
| R150.30K | Mabadi Asyarah Fiqh Dakwah | feature/raudhah-pedagogy | [e53e3da](https://github.com/hajighozi/AL-MUDDAKIR-/commit/e53e3dac8864eb12a95e7aaf87f430be5560c083) · [file](https://github.com/hajighozi/AL-MUDDAKIR-/blob/feature/raudhah-pedagogy/docs/pedagogy/R150_30K_FIQH_DAKWAH_MABADI_AUDIT.md) |
| R150.31A | Indeks pembacaan lengkap | feature/surau-shift | [45704a3](https://github.com/hajighozi/AL-MUDDAKIR-/commit/45704a3685f6b0f6d68aa693c97dfc349251c30a) · [file](https://github.com/hajighozi/AL-MUDDAKIR-/blob/feature/surau-shift/surau-shift/docs/README.md) |
## Decision hierarchy (curriculum, not rank of persons)
Purpose ridha Allah; Murabbi first relational guide, Ikhwan second relational core, family first circle of care; IQRA/FAHM/TAZKIYAH/KHIDMAH continuous; Surau first mission leaving wrongdoing via voluntary good and permissible activities; weekly gathering supports companionship; civil economic cooperation and service; Fiqh Dakwah final advanced curricular lesson after demonstrated field-appropriate Khidmah, not universal condition for ordinary good counsel. Proposed names, methods, evidence and legal interpretations remain subject to review. No faith scoring, coercion, isolation, compulsory labor or financial allegiance.
## Queue and gates (no task dropped)
- R150.28A full ZIP access/inventory/hash/attribution blocked; R150.28B partial source segmentation; 27 historical SHA links still unresolved (plus R150.30E separately). Preserve earlier snapshots.
- R150.28C-3: original 398 list remains incomplete; 181 numbered headings recovered (read register), 3 pilot concepts / 11 Fashl crosswalk, not validated. Continue 12 Arabic Anak and missing original lists; no invented candidates.
- R150.28D/E: turats, glossary and domain reconciliation; R151A/B identity, teacher competence and safeguarding; R152A/B source mappings and pedagogy; R153A/B original Fahimuunal code and review scheduling still gated; R153C Maqra500+100 (parallel catalog 001–004 from prior verified snapshot); R153D Lughah; R154A–H civil service, Surau, nature, culture, mathematics, library, optional game, 12 cycles; R155–157 tests, pilot, approved PRs.
- SP01–12 retained; RBX01/02 committed draft/code not Studio tested, RBX03–10 pending; SP07 Codex workflow; offline APK and media rights, Malaka historic evidence. No new Vercel deployment.
- IKH01–03, IKH-ECO01–04, FD01–03 retain source review and acceptance gates; FD01 partial R150.30K; FD02 next draft observable Khidmah rubric, FD03 advanced syllabus, without altering the original R150.28C-3 audit priority.
## Operational discipline
Use logical single-topic commits with stable task ID, branch, source, scope, actual test results, limitations and next step. Keep historical decisions and prototypes separate from verified evidence. Review semantic conflict even if paths differ; no automatic merging. No private files or pupil data. No runtime test or expert validation performed for this index. 
