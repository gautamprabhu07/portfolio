// app/(in-progress)/about/_components/journey/chapters.js
// Content comes from profile-info.md and the original about page.

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
    mark: '2021',
    tick: '2021',
    kind: 'Education',
    title: 'Vidyodaya Pre-University College, Udupi',
    subtitle: 'Pre-University (2nd PUC), PCMB',
    dates: '2021 – 2023',
    notes: ['Before that: ICSE at Silas International School.'],
  },
  {
    id: 'diploma',
    mark: '2022',
    tick: '2022',
    kind: 'Education',
    title: 'Dr. T.M.A. Pai Polytechnic, Manipal',
    subtitle: 'Diploma, Computer Science',
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
    subtitle: 'Bachelor of Technology (B.Tech), Computer Science',
    dates: 'July 2024 – May 2027',
    notes: [
      'Focus on core computer science subjects, software engineering, and systems fundamentals.',
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
      'Designed and implemented a full-stack Letter of Recommendation system with role-based access for alumni, faculty, and administrators.',
      'Built secure backend APIs with JWT authentication, RBAC enforcement, and automated email notification workflows.',
      'Implemented document upload, validation, and controlled access for sensitive academic records on an institutional deployment.',
      'Deployed and tested the system on university servers under production-like constraints and tight academic deadlines.',
    ],
  },
  {
    id: 'goperch',
    mark: 'Jan 26',
    tick: 'Jan 2026',
    kind: 'Experience',
    title: 'GoPerch',
    subtitle: 'Full-Stack Intern',
    dates: 'Jan 2026 – Ongoing',
    notes: [
      'Developed a full-stack ERP platform with FastAPI backend, Next.js (TypeScript) frontend, and PostgreSQL for inventory, orders, and multi-entity management.',
      'Designed REST APIs with JWT-based authentication and role-based access control for admin and employee workflows.',
      'Implemented order lifecycle tracking, barcode-based operations, and status-driven business logic to streamline internal processes.',
      'Integrated database schema design, validation layers, and error handling to ensure data integrity and reliable backend operations.',
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
