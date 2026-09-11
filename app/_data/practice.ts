/* Content for the Daftar site. Shared by the home page and the scope builder
   so the four service lines stay in step across both. Copy is deliberately
   free of hyphens and dashes, and kept short: this is the marketing surface,
   not the knowledge articles. */

export type ServiceKey = "statements" | "audit" | "review" | "transaction";

export type Service = {
  label: string;
  ref: string;
  blurb: string;
  outcome: string;
  included: string[];
  excluded: string[];
  deliverable: string;
};

/* Ordered by the house catalogue: A/01, A/02, A/03, C/03. */
export const SERVICE_ORDER: ServiceKey[] = ["statements", "review", "audit", "transaction"];

export const SERVICES: Record<ServiceKey, Service> = {
  statements: {
    label: "Financial statements",
    ref: "A/01",
    blurb: "A full IFRS set, tied to the trial balance, ready for the auditor.",
    outcome: "A complete IFRS set your auditor can work from.",
    included: [
      "Mapping the trial balance to the statement lines",
      "Drafting the statements and the notes",
      "Schedules for the balances that carry judgment",
    ],
    excluded: ["Bookkeeping", "The audit opinion"],
    deliverable: "The statement set and the working file",
  },
  audit: {
    label: "Audit readiness",
    ref: "A/03",
    blurb: "Preparation before the auditor arrives, so the audit runs on your calendar.",
    outcome: "A prepared file and a list of open items, so the audit starts on evidence.",
    included: [
      "A walk through what the auditor will test first",
      "The request list answered in advance, with evidence",
      "A memo on the positions likely to be challenged",
    ],
    excluded: ["Acting as your auditor", "Signing an opinion"],
    deliverable: "The audit file and an open item register",
  },
  review: {
    label: "Technical review",
    ref: "A/02",
    blurb: "A second read on a number or a treatment, written to hold up.",
    outcome: "An independent view, with reasoning your auditor or board can follow.",
    included: [
      "Reading the position and the evidence behind it",
      "A written conclusion with the standard references",
      "The alternatives, and why they were set aside",
    ],
    excluded: ["Preparing the underlying records", "Representing you to the regulator"],
    deliverable: "A technical memo with references",
  },
  transaction: {
    label: "Quality of earnings",
    ref: "C/03",
    blurb: "A focused read on earnings quality, working capital, and the adjustments that matter.",
    outcome: "A clear view of maintainable earnings and the risks behind the reported result.",
    included: [
      "Testing reported earnings and normalising adjustments",
      "Reading working capital and cash conversion",
      "Tracing the findings to the records and management explanations",
    ],
    excluded: ["Legal and tax due diligence", "A valuation or assurance opinion"],
    deliverable: "A quality of earnings report and supporting workbook",
  },
};

export const FOCUS = [
  { key: "first", label: "First year under IFRS", adds: "Opening balances and transition disclosures" },
  { key: "group", label: "Group with subsidiaries", adds: "Consolidation, eliminations, group level checks" },
  { key: "open", label: "Auditor questions still open", adds: "A response file for the points raised" },
  { key: "board", label: "Board or investor deadline", adds: "A summary for readers outside finance" },
  { key: "thin", label: "The team is stretched", adds: "We prepare, your team reviews" },
] as const;

export const TIMING = [
  {
    key: "explore",
    code: "T0",
    label: "Still exploring",
    duration: "Two to three weeks once we start",
    next: "We reply in two working days with a read on fit.",
  },
  {
    key: "quarter",
    code: "T1",
    label: "This quarter",
    duration: "Three to four weeks end to end",
    next: "Scope and fee in writing before work starts.",
  },
  {
    key: "urgent",
    code: "T2",
    label: "Urgent",
    duration: "A first pass inside one week",
    next: "Send it today. We take urgent work only when we can staff it.",
  },
] as const;

export const NOTES: { tag: string; title: string; href?: string }[] = [
  {
    tag: "IFRS 18",
    title: "The comparative year is 2026",
    href: "/knowledge/ifrs-18-transition-2026",
  },
  {
    tag: "KSA",
    title: "Electronic invoicing waves",
    href: "/knowledge/saudi-compliance-2026",
  },
  {
    tag: "Audit",
    title: "The audit readiness checklist",
    href: "/knowledge/audit-readiness-checklist",
  },
  {
    tag: "KSA",
    title: "The Phase 2 readiness checklist",
    href: "/knowledge/saudi-e-invoicing-phase-2-checklist",
  },
];

export const FAQ = [
  {
    num: "01",
    q: "What does Daftar do?",
    a: "Statements, audit preparation, technical review, deal numbers. We take the problem, not the function.",
  },
  {
    num: "02",
    q: "When should we reach out?",
    a: "Before the deadline, not during. The earlier the read, the cheaper the fix.",
  },
  {
    /* The non-attest boundary is otherwise only in the footer disclaimer, and
       it is the question a first time client actually asks. The three dropped
       questions each restated a commitment in section 03 word for word. */
    num: "03",
    q: "Do you audit the file?",
    a: "No. Daftar is a non-attest practice. We prepare and review. We do not audit, and we do not sign an opinion.",
  },
];

export const STEPS = [
  {
    num: "01",
    title: "A short call",
    body: "Twenty minutes, and a straight answer on whether to take it.",
  },
  {
    num: "02",
    title: "Scope in writing",
    body: "What we solve, what we exclude, what you get, the fee. Nothing starts before that.",
  },
  {
    num: "03",
    title: "The work, in the open",
    body: "One senior contact, and a file you watch as it develops.",
  },
  {
    num: "04",
    title: "Handover",
    body: "The deliverable, the workings, and how to run it again.",
  },
];

export const EMAIL = "ahmad@daftaradvisory.com";
