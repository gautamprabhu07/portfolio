// app/(in-progress)/about/_components/journey/chapters.js
// Content comes from profile-info.md (education + experience sections).

/**
 * @typedef {Object} Chapter
 * @property {string} id
 * @property {string} mark       Large outline numeral on the panel
 * @property {string} tick       Short label on the progress ruler
 * @property {'Education' | 'Experience' | 'Now'} kind
 * @property {string} title
 * @property {string} [subtitle]
 * @property {string} [dates]
 * @property {string[]} [notes]
 */

/** @type {Chapter[]} */
export const chapters = [
  {
    id: 'puc',
    mark: '2022',
    tick: '2022',
    kind: 'Education',
    title: 'Vidyodaya Pre-University College, Udupi',
    subtitle: 'Pre-University (2nd PUC), PCMB · 97.69%',
    dates: 'Completed 2022',
    notes: ['Before that: ICSE at Silas International School, 2020 · 95%.'],
  },
  {
    id: 'diploma',
    mark: '2022–24',
    tick: '2022–24',
    kind: 'Education',
    title: 'Dr. T.M.A. Pai Polytechnic, Manipal',
    subtitle: 'Diploma, Computer Science · CGPA 9.93 (distinction)',
    dates: '2022 – 2024',
    notes: [
      'Built strong foundations in programming, data structures, databases, and computer networks.',
      'Completed multiple full-stack and systems-oriented academic and practical projects.',
    ],
  },
  {
    id: 'btech',
    mark: '2024',
    tick: '2024',
    kind: 'Education',
    title: 'Manipal Institute of Technology',
    subtitle: 'Bachelor of Technology (B.Tech), Computer Science · CGPA 8.58',
    dates: 'July 2024 – May 2027',
    notes: [
      'Core computer science and systems: DSA, operating systems, computer networks, DBMS, OOP and software engineering. 200+ DSA problems solved.',
      'Building production-level projects and internships alongside coursework.',
    ],
  },
  {
    id: 'mit-lor',
    mark: 'Dec 25',
    tick: 'Dec 2025',
    kind: 'Experience',
    title: 'Manipal Institute of Technology',
    subtitle: 'Full-Stack Developer · Letter of Recommendation System',
    dates: 'Dec 2025 – Ongoing',
    notes: [
      'Built a multi-role workflow platform serving 500+ live users (student, faculty, clerk, dean, admin), replacing manual email/Excel tracking with an automated 5-step lifecycle and audit trails (Node.js, Express, TypeScript, MongoDB).',
      'Secured 5 privilege levels with JWT (access and refresh tokens), RBAC route guards and rate-limited login.',
      'Cron-scheduled SendGrid reminders cut manual follow-up effort by about 70%; document upload, validation and controlled access protect sensitive academic records.',
      'Demoed the workflow to faculty before building, then deployed and tested on university servers under production-like constraints.',
    ],
  },
  {
    id: 'goperch',
    mark: 'Jan 26',
    tick: 'Jan 2026',
    kind: 'Experience',
    title: 'GoPerch Innovations Pvt. Ltd.',
    subtitle: 'Full-Stack Developer Intern',
    dates: 'Dec 2025 – Jan 2026',
    notes: [
      'Engineered 40+ REST APIs and 15+ relational models (FastAPI, SQLAlchemy, PostgreSQL) for a multi-nursery ERP, secured with JWT and 4+ role-based access levels; built the Next.js/TypeScript inventory module.',
      'Removed stock race conditions with an order state machine using SELECT FOR UPDATE row locking; traced ordered-vs-live inventory discrepancies to root cause.',
      'Wrote 100+ Pytest tests (85%+ coverage) and Gherkin-style BDD scenarios for inventory and order rules, plus frontend tests.',
      'Containerized the backend with Docker and deployed it to Kubernetes, automating builds and deploys with Bash; delivered 25+ requirements across 5+ Agile sprints.',
    ],
  },
  {
    id: 'eventory',
    mark: 'Ongoing',
    tick: 'Ongoing',
    kind: 'Experience',
    title: 'Eventory',
    subtitle: 'Full-Stack Developer Intern · Eventory V2, multi-vendor booking platform',
    dates: 'Ongoing',
    notes: [
      'Raised 30+ pull requests, most merged to production through code review and daily standups, on a live multi-vendor event-booking platform (Node.js, Express, MongoDB, TypeScript, Next.js, AWS Cognito).',
      'Closed an authentication gap where customer JWTs were signed but never verified: added jwt.verify() middleware, role-claim enforcement and ownership guards against IDOR/ID-enumeration.',
      'Built the vendor-side booking backend, unifying 6 vendor package schemas in one Mongoose discriminator model; flagged an unresolved read-then-write (TOCTOU) race in the availability check.',
      'Implemented UI from Figma designs in Next.js and Tailwind CSS; traced a 6x pricing discrepancy (INR 127 vs INR 800) in a fee specification to a formula that dropped two of three terms.',
    ],
  },
  {
    id: 'now',
    mark: 'Now',
    tick: 'Now',
    kind: 'Now',
    title: 'Seeking internship · Open to hire',
    subtitle: 'Turning ideas into reliable systems.',
  },
];
