# R150.52F — Human skills ontology and Jami-Mani audit
Date 2026-11-28. Status PROPOSED / internal register audit. B10 canonical registry custodian; B02 ontology review; B13 pedagogy; B11 RKU; B20 evidence. Preserve R150.52A–E, all prior IDs, and branch hierarchy. No external primary-source review in this step.
## Directly reopened source documents
- R150_52B_PSYCHOLOGY_HELPING_SKILLS_ATLAS.md blob 1b1d7cf316c93c9f1905a61de05d603ea965d74e (HS01–28).
- R150_52D_LIFE_SKILLS_ENCYCLOPEDIA.md blob 730fd26b9f60ed5a55b5576ce3293f47bef66da1 (HS29–65).
- R150_52E_HUMAN_DEVELOPMENT_SKILLS.md blob bf165387fbd0cf8aaca681fbcabbc39b670ebe27 (HS66–89).
All in surau-shift/docs on feature/surau-shift. Internal proposed registries, not clinical or empirical validation.
## Distinguish types
DISCIPLINE (field of inquiry), KNOWLEDGE (source-backed concept or claim), SKILL (learned performance), COMPETENCY (contextual performance with knowledge, skill, role and criteria), ETHICAL_PRINCIPLE (normative adab), SERVICE (voluntary action/output), GOVERNANCE_DUTY (institutional responsibility). Classification is not a discipline hierarchy. HS entries include multiple types and require separate tagging. No automatic KU, independent discipline, professional credential or new Forge.
## Primary routing partition (one home per entry; secondary relations allowed)
| Group | Scope | Entry IDs | Count | Role | Program lead |
|---|---|---|---:|---|---|
| SK01 | Help-seeking, mental health literacy and personal privacy | HS01, HS02, HS03, HS04, HS07, HS08, HS31, HS51, HS52, HS65, HS70 | 11 | PUBLIC | B10 |
| SK02 | Self-management and everyday wellbeing | HS05, HS29, HS30, HS32, HS41, HS44, HS45, HS47 | 8 | PUBLIC | B10 |
| SK03 | Communication, relationships and inclusion | HS06, HS36, HS37, HS38, HS39, HS40, HS42, HS43, HS49, HS50, HS54, HS55, HS63, HS64, HS68, HS69, HS71, HS85 | 18 | PUBLIC | B10 |
| SK04 | Thinking, inquiry and learning | HS33, HS34, HS35, HS46, HS56, HS57, HS72, HS73, HS74, HS75, HS76, HS77 | 12 | PUBLIC | B13 |
| SK05 | Practical, digital and financial literacy | HS48, HS58, HS59, HS60, HS61, HS88, HS89 | 7 | PUBLIC | B13 |
| SK06 | Career exploration and project competence | HS78, HS79, HS80, HS81, HS82, HS83 | 6 | PUBLIC | B11 |
| SK07 | Community participation, culture and sustainability | HS53, HS62, HS84, HS86, HS87 | 5 | PUBLIC | B11 |
| SK08 | Supervised adult nonclinical helping | HS09, HS10, HS11, HS12, HS13, HS14, HS15, HS16, HS17, HS18, HS19, HS20 | 12 | ADULT_SUPERVISED | B10 |
| SK09 | Institutional governance and quality | HS21, HS22, HS23, HS24, HS25, HS26, HS27, HS28 | 8 | SYSTEM | B10 |
| SK10 | Adult caregiving and nonviolent guidance | HS66, HS67 | 2 | ADULT_CAREGIVER | B13 |
Coverage test: 89 entries, 89 unique IDs, missing=0, repeated primary assignment=0. 67 public literacy/learning, 12 supervised adult helping, 8 system responsibilities, 2 adult caregiving. This checks routing completeness only, not semantic uniqueness or validity. Public age-appropriate education; no crisis response duties for minors, compulsory work or private disclosures. B10 retains canonical records; program leads coordinate delivery, not duplicated registries.
## Overlap decisions (candidate, no destructive merge)
HS07/51 PARTIAL_OVERLAP (inclusion plus stigma vs stigma); HS02/31 COMPLEMENTARY (express vs identify); HS01/08/52/70 RELATED (seek help, know routes, professional help, involve trusted adult); HS06/12 ROLE_SPECIFIC (public vs adult helper); HS04/26 ROLE_SPECIFIC (personal vs institution); HS09/64 ROLE_SPECIFIC (adult helper consent vs general literacy); HS44/73 SPECIALIZATION (general vs study goals); HS41/75 RELATED (setbacks vs learning strategy); HS50/85 RELATED (respect vs intercultural communication); HS63/86 RELATED (express accessibility need vs plan); HS58/88 RELATED (budget vs compare costs/benefits); HS57/89 SPECIALIZATION (verification vs commercial claims); HS52/18 ROLE_SPECIFIC (seek vs refer); HS70/08 RELATED; HS89/59 RELATED; HS38/20 ROLE_SPECIFIC (relationship vs helper boundaries); HS55/71 CONTEXTUAL (peaceful conflict vs family decisions). No exact synonym asserted pending definitions and expert review.
## Candidate schema (reuse M7)
skill_id, original_label, source_doc_and_locator, entity_type, primary_group, secondary_links, role, scope, observable_learning_objective, prerequisites, linked_KU_ids (empty until verified), linked_LU_ids, candidate_forge_path (not approved taxonomy), maqasid_hypothesis, RKU_application, exclusions, source_evidence_ids, validation_status, adoption_status, reviewer. Use UNVALIDATED for new semantic claims; RESEARCH adoption, separate from validation. Source != Evidence != Claim != Validation. No spiritual or mental state score, automatic diagnosis or credential.
## Mapping examples (logical candidate links; no new Forge)
HS57 verify sources -> B02 epistemology and relevant B03–08 discipline tools; LU-LS01; RKU research literacy. HS74 organize notes -> B05 language and B13 pedagogy; LU-LS06; study documentation. HS78 career exploration -> B11/B13; LU-LS07; optional RKU exploration, no fixed career label. HS86 accessible planning -> B11/B13; LU-LS08; inclusive community library. HS58 budgeting -> B08 mathematics/B11; LU-LS04/09; fictional resource allocation. HS66 caregiving -> B13 adult education; no youth caregiving responsibility. HS25 clinical review -> qualified professionals and institutional governance, not learner competency.
Forge/Ibu/Anak/Cucu/Fashl classify disciplines and knowledge topics (candidate links only), KU describes supported knowledge, LU specifies educational activity, HS describes intended performance, RKU links skills to voluntary safe application. Do not force skill clusters into five IQRA domains or create a new DNA.
## Next gates
Define each HS with Jami-Mani scope and observable task, resolve overlap without deleting history, map verified KU/LU only, age and role restrictions, clinical/educator/safeguarding review where relevant, source and licensing audit. No private patient data, automated triage, spiritual scoring, unsupervised clinical care, new branch, app deployment, or main merge. Public education free to access; no promise of free therapy. No user-level ranking or clinical outcome claims.
