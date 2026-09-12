/* Content for the Daftar site. Shared by the home page and the scope builder
   so the five service lines stay in step across both. Copy is deliberately
   free of hyphens and dashes, and kept short: this is the marketing surface,
   not the knowledge articles. */

export type ServiceKey = "statements" | "audit" | "review" | "group" | "transaction";

export type Service = {
  label: string;
  ref: string;
  blurb: string;
  outcome: string;
  included: string[];
  excluded: string[];
  deliverable: string;
};

/* Ordered by the house catalogue: A/01, A/02, A/03, A/04, C/03. */
export const SERVICE_ORDER: ServiceKey[] = ["statements", "review", "audit", "group", "transaction"];

export const SERVICES: Record<ServiceKey, Service> = {
  statements: {
    label: "Financial statements",
    ref: "A/01",
    blurb: "Financial statements prepared from the trial balance under the applicable reporting framework, with workings an auditor can follow.",
    outcome: "A complete financial statement package, tied to the underlying records and prepared for audit or management review.",
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
    blurb: "Preparation before fieldwork starts, reducing avoidable delays once the auditor arrives.",
    outcome: "A prepared file and a list of open items, so the audit starts on evidence.",
    included: [
      "A walkthrough of balances and areas likely to receive audit attention",
      "The audit request list prepared in advance, with supporting evidence organised and gaps identified",
      "A memo on the positions likely to be challenged",
    ],
    excluded: ["Acting as your auditor", "Signing an opinion"],
    deliverable: "The audit file and an open item register",
  },
  review: {
    label: "Accounting and IFRS technical advice",
    ref: "A/02",
    blurb: "A second read on a number or a treatment, written to hold up.",
    outcome: "An objective view, with reasoning your auditor, management, or board can follow.",
    included: [
      "Reading the position and the evidence behind it",
      "A written conclusion with the standard references",
      "The alternatives, and why they were set aside",
    ],
    excluded: ["Preparing the underlying records", "Representing you to the regulator"],
    deliverable: "A technical memo with references",
  },
  group: {
    label: "Group reporting and consolidation",
    ref: "A/04",
    blurb: "A controlled group close from entity trial balances through eliminations to consolidated reporting.",
    outcome: "A traceable consolidation file that management and the auditor can follow from entity balances to the group result.",
    included: [
      "Group reporting pack and trial balance mapping",
      "Intercompany matching and consolidation eliminations",
      "Investment, equity, NCI, and group level reconciliation checks where applicable",
      "Consolidated cash flow and supporting bridges where in scope",
    ],
    excluded: ["Subsidiary bookkeeping", "The group audit opinion"],
    deliverable: "The consolidation workbook, elimination schedules, and group reporting support file",
  },
  transaction: {
    label: "Quality of earnings",
    ref: "C/03",
    blurb: "A focused analysis of recurring earnings, working capital, cash conversion, and the adjustments that matter.",
    outcome: "A supported view of recurring earnings and the adjustments or risks affecting the reported result.",
    included: [
      "Revenue and margin analysis, with reported to adjusted earnings bridges where relevant",
      "Assessment of recurring and nonrecurring items and proposed normalising adjustments",
      "Working capital and cash conversion analysis",
      "Tracing the findings to the records and management explanations",
    ],
    excluded: [
      "Legal, tax, or commercial due diligence",
      "Valuation",
      "An audit, review, or assurance conclusion",
      "Independent verification of information not available from the agreed records",
    ],
    deliverable: "A quality of earnings report and supporting workbook",
  },
};

export const FOCUS = [
  { key: "first", label: "First year under IFRS", adds: "Transition assessment, opening IFRS position, accounting policy conversion, required reconciliations, and transition disclosures" },
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
    title: "Why the 2026 comparative matters now",
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
    a: "Financial statements, technical accounting, audit preparation, group reporting, and deal analysis. We take the problem, not the function.",
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
    a: "No. Daftar is a non-attest practice. We prepare and advise. We do not audit, perform an assurance engagement, or sign an opinion.",
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
