// app/_data/home-content.js
// Home page content. Every claim below comes from profile-info.md (or, for
// the two live-demo links and screenshots, from assets already in the project).

/** Disciplines from the hero one-liner, each with a verified proof. */
export const disciplines = [
  {
    id: 'full-stack',
    label: 'Full-Stack',
    proof:
      'Next.js and React frontends over Node.js, FastAPI and Spring Boot services, including three Next.js apps in OutSource alone.',
  },
  {
    id: 'backend',
    label: 'Backend',
    proof:
      '80+ REST endpoints on OutSource; 40+ APIs and 15+ relational models at GoPerch; JWT and role-based access throughout.',
  },
  {
    id: 'systems',
    label: 'Systems',
    proof:
      'A ~680-line Linux container runtime in C: 7 namespaces, cgroups v2 limits and a 19-rule seccomp-BPF filter.',
  },
  {
    id: 'cloud',
    label: 'Cloud',
    proof:
      'Docker, Kubernetes and GitHub Actions; AWS Academy Graduate, Cloud Architect (Feb 2026).',
  },
  {
    id: 'ai-agents',
    label: 'AI Agents',
    proof:
      'LangGraph routing across 9 agent nodes and 3 LLM providers, with Qdrant-backed RAG over uploaded PDFs.',
  },
  {
    id: 'containers',
    label: 'Containers',
    proof:
      'Dockerized services in JarvisAI and the credit-risk platform, a backend deployed to Kubernetes at GoPerch, and a runtime built without Docker.',
  },
];

/** What is happening right now. */
export const nowItems = [
  {
    title: 'Eventory',
    detail: 'Full-Stack Developer Intern · multi-vendor booking platform',
    meta: 'Ongoing',
  },
];

/**
 * Selected work, in the profile's suggested order. `image` is an existing
 * screenshot; projects without one get a spec card in the hover preview.
 * Links marked [VERIFY] in the profile (no URL yet) are left out.
 */
export const projects = [
  {
    id: 'credit-risk',
    title: 'Credit Risk PD Platform',
    role: 'ML + backend',
    metric: 'ROC-AUC 0.78 · Gini 0.56 · KS 0.43',
    summary: 'Explainable probability-of-default platform for 30K+ accounts',
    stack: ['Python', 'LightGBM', 'FastAPI', 'MLflow'],
    href: 'https://github.com/gautamprabhu07/credit-risk-ml',
  },
  {
    id: 'outsource',
    title: 'OutSource',
    role: 'Full-Stack',
    metric: '80+ endpoints · p50 query latency down 59–68%',
    summary: 'Multi-vendor marketplace: 3 Next.js apps, 9 Express services, Kafka',
    stack: ['TypeScript', 'Next.js', 'Kafka', 'Redis'],
    href: 'https://github.com/gautamprabhu07/Ecom-SaaS',
  },
  {
    id: 'healthcare',
    title: 'Healthcare Microservices Platform',
    role: 'Backend',
    metric: '32 REST endpoints · 9 Kafka listeners',
    summary: 'Seven Spring Boot services over REST, gRPC and Kafka',
    stack: ['Java 21', 'Spring Boot', 'gRPC', 'AWS CDK'],
    href: 'https://github.com/gautamprabhu07/Healthcare_Microservices',
  },
  {
    id: 'jarvis',
    title: 'JarvisAI',
    role: 'Multi-agent AI',
    metric: '9 agent nodes · 3 LLM providers',
    summary: 'LangGraph orchestration with RAG over uploaded PDFs',
    stack: ['LangGraph', 'Qdrant', 'Redis', 'Docker'],
    href: 'https://github.com/gautamprabhu07/Agentic-ai',
  },
  {
    id: 'container-runtime',
    title: 'Linux Container Runtime',
    role: 'Systems',
    metric: '~680 lines of C · 7 namespaces · 19-rule seccomp filter',
    summary: 'A container runtime built from scratch, without Docker',
    stack: ['C', 'cgroups v2', 'seccomp-BPF', 'iptables'],
  },
  {
    id: 'real-estate',
    title: 'Real Estate Marketplace',
    role: 'Full-Stack',
    metric: 'Stripe payments · real-time chat · map search',
    summary: 'Property platform with live buyer–seller messaging',
    stack: ['React', 'Node.js', 'MongoDB', 'Socket.IO'],
    href: 'https://urbanluxe.onrender.com/',
    image: '/images/thumbnails/project-4.png',
  },
  {
    id: 'smart-campus',
    title: 'Smart Campus Network',
    role: 'Network design',
    metric: 'Multi-VLAN · EIGRP · EtherChannel',
    summary: 'Multi-building campus network simulated in Cisco Packet Tracer',
    stack: ['Cisco Packet Tracer', 'EIGRP', 'VLANs'],
    href: 'https://github.com/gautamprabhu07/Smart_campus_network',
  },
  {
    id: 'resume-parser',
    title: 'AI Resume Parser & Job Finder',
    role: 'NLP',
    metric: 'Multi-format parsing with confidence handling',
    summary: 'Extracts structured data from PDF/DOC resumes',
    stack: ['React', 'Python', 'Flask', 'spaCy'],
    href: 'https://resparse-m6oh.vercel.app/',
    image: '/images/thumbnails/project-3.png',
  },
];
