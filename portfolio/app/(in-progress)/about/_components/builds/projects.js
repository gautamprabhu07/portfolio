// app/(in-progress)/about/_components/builds/projects.js
// Condensed from profile-info.md (section 2). Display order follows the
// file's suggested order. Links marked [VERIFY] in the source are omitted.

/**
 * @typedef {Object} Project
 * @property {string} id
 * @property {string} title
 * @property {string} role
 * @property {string} summary
 * @property {string} impact
 * @property {string[]} stack
 * @property {{ label: string, href: string }[]} links
 */

/** @type {Project[]} */
export const projects = [
  {
    id: 'credit-risk',
    title: 'Credit Risk PD Platform',
    role: 'Developer (ML + backend)',
    summary:
      'Explainable probability-of-default platform for 30K+ accounts, served through a FastAPI service with drift monitoring and experiment tracking. Replaced a leaky SMOTE-before-split baseline with leak-free splits, tuned gradient-boosted models, calibration, expected-loss decisioning, SHAP reason codes and a fairness audit.',
    impact:
      'Test ROC-AUC 0.78, Gini 0.56, KS 0.43, with predicted PDs within 2% of observed default rates; 80%+ test coverage in CI. The champion/challenger comparison is offline on a held-out set (no live A/B test).',
    stack: [
      'Python',
      'LightGBM',
      'XGBoost',
      'CatBoost',
      'Optuna',
      'SHAP',
      'MLflow',
      'FastAPI',
      'Docker',
      'GitHub Actions',
    ],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/gautamprabhu07/credit-risk-ml',
      },
    ],
  },
  {
    id: 'outsource',
    title: 'OutSource',
    role: 'Full-Stack Developer',
    summary:
      'Multi-vendor e-commerce marketplace in an Nx monorepo: 3 Next.js apps (customer, vendor, admin) and 9 Express services behind an API gateway, with Kafka-based analytics and real-time vendor-customer chat. Kafka decouples analytics ingestion and chat persistence from the request path; Redis handles OTP throttling, presence and payment-session state.',
    impact:
      '80+ REST endpoints; cut p50 query latency 59–68% with 14 database indexes; 192 unit and 28 integration tests with CI.',
    stack: [
      'TypeScript',
      'Node.js',
      'Express',
      'Next.js',
      'Nx',
      'Prisma',
      'MongoDB',
      'PostgreSQL',
      'Kafka',
      'Redis',
      'WebSockets',
      'Recharts',
    ],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/gautamprabhu07/Ecom-SaaS',
      },
    ],
  },
  {
    id: 'healthcare',
    title: 'Healthcare Microservices Platform',
    role: 'Backend Developer',
    summary:
      'Seven Spring Boot services (gateway plus six domain services) for appointments, patients, billing, analytics and notifications over REST, gRPC and Kafka. PostgreSQL advisory locks plus optimistic locking prevent double-booking; events publish only after commit, consumers are idempotent, and infrastructure is defined as code with AWS CDK.',
    impact:
      '32 REST endpoints and 9 Kafka listeners; conflicting bookings return 409 instead of silently overwriting; tested with JUnit 5 and Testcontainers. The CDK stack was validated on LocalStack only (not deployed to real AWS).',
    stack: [
      'Java 21',
      'Spring Boot 3',
      'Spring Cloud Gateway',
      'PostgreSQL',
      'Kafka',
      'gRPC',
      'Resilience4j',
      'Docker',
      'AWS CDK',
      'LocalStack',
      'JUnit 5',
      'Testcontainers',
    ],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/gautamprabhu07/Healthcare_Microservices',
      },
    ],
  },
  {
    id: 'jarvis',
    title: 'JarvisAI',
    role: 'Developer',
    summary:
      'Multi-agent AI orchestration platform: a LangGraph routing layer across 9 agent nodes and 3 LLM providers (Groq, Gemini, DeepSeek), plus a Qdrant-backed RAG pipeline for PDF Q&A. The backend is 5 Dockerized services with Redis session auth, per-agent rate limiting and S3 artifact storage.',
    impact:
      'Working multi-agent system with swappable models and agents; per-user, per-agent quotas enforced through Redis (6 request types, 3–20 requests/min).',
    stack: ['LangGraph', 'Node.js', 'Express', 'Qdrant', 'Redis', 'AWS S3', 'Docker'],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/gautamprabhu07/Agentic-ai',
      },
    ],
  },
  {
    id: 'container-runtime',
    title: 'Linux Container Runtime',
    role: 'Systems Developer',
    summary:
      'A ~680-line container runtime in C, built from scratch without Docker. It isolates with 7 kernel namespaces, 20 dropped capabilities and a 19-rule seccomp-BPF filter, enforces cgroup v2 limits, and builds container networking from bridge, veth and iptables NAT.',
    impact:
      'Validated by a 5-check automated test suite run from the host. Root-caused a CAP_NET_RAW failure to a namespace-ownership rule in the kernel\'s capability check and fixed it with a per-namespace sysctl, keeping a graceful fallback on hosts without unprivileged user namespaces.',
    stack: ['C', 'libseccomp', 'libcap', 'Linux namespaces', 'cgroups v2', 'iptables', 'WSL2 / Ubuntu'],
    links: [],
  },
  {
    id: 'real-estate',
    title: 'Real Estate Marketplace',
    role: 'Full-Stack Developer',
    summary:
      'Full-stack property platform with bcrypt + JWT authentication (httpOnly cookies), resource-level authorization, Stripe payments, real-time chat with Socket.IO, media uploads and map-based property search.',
    impact:
      'End-to-end transaction workflow, real-time messaging, secure payments and backend APIs that simulate a production-grade property marketplace; live demo deployed.',
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Prisma', 'Socket.IO', 'Stripe', 'Cloudinary'],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/gautamprabhu07/Real-estate',
      },
      { label: 'Live demo', href: 'https://urbanluxe.onrender.com/' },
    ],
  },
  {
    id: 'smart-campus',
    title: 'Smart Campus Network',
    role: 'Network Designer & Implementer',
    summary:
      'Enterprise-style multi-building campus network with per-department VLANs, inter-VLAN routing, EIGRP dynamic routing between distribution layers, EtherChannel link aggregation and port security, simulated in Cisco Packet Tracer.',
    impact:
      'Multi-VLAN, multi-router topology with redundancy planning and secure access control, with end-to-end connectivity validated across services.',
    stack: ['Cisco Packet Tracer', 'EIGRP', 'VLANs', 'Inter-VLAN routing', 'EtherChannel', 'Port security'],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/gautamprabhu07/Smart_campus_network',
      },
    ],
  },
  {
    id: 'resume-parser',
    title: 'AI Resume Parser & Job Finder',
    role: 'Developer',
    summary:
      'AI-powered web application that extracts structured data (skills, experience, education, contact details) from PDF/DOC resumes using NLP and enables job matching, with validation, confidence handling and fallbacks for unreliable inputs.',
    impact:
      'Handled unstructured resume formats with error-resilient parsing, multi-format file support, and confidence-aware extraction.',
    stack: ['React', 'Python', 'Flask', 'spaCy', 'NLP', 'REST APIs'],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/gautamprabhu07/Resume-parser-job-search',
      },
      { label: 'Live demo', href: 'https://resparse-m6oh.vercel.app/' },
    ],
  },
];
