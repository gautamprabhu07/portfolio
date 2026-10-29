// app/(in-progress)/about/_components/approach/groups.js
// Skills and certifications from profile-info.md, grouped into "layers".
// Descriptions are drawn from the bio, projects and original focus areas.

/**
 * @typedef {Object} Group
 * @property {string} id
 * @property {string} title
 * @property {string} [description]
 * @property {{ label?: string, items: string[] }[]} [sections]
 * @property {{ name: string, issuer: string, date?: string, href?: string }[]} [certifications]
 */

/** @type {Group[]} */
export const groups = [
  {
    id: 'backend',
    title: 'Backend systems',
    description:
      'Designing resilient APIs, authentication flows, and data models that scale with real-world constraints.',
    sections: [
      {
        label: 'Backend & APIs',
        items: [
          'Node.js / Express.js',
          'FastAPI',
          'Spring Boot (Spring Cloud Gateway)',
          'REST APIs',
          'gRPC',
          'Microservices',
          'JWT authentication',
          'Role-based access control',
          'Database design',
        ],
      },
      {
        label: 'Databases & messaging',
        items: [
          'PostgreSQL',
          'MySQL',
          'MongoDB',
          'Redis',
          'Kafka',
          'Prisma / SQLAlchemy / Mongoose',
        ],
      },
    ],
  },
  {
    id: 'product',
    title: 'Product engineering',
    description:
      'Bridging UX and implementation details to ship interfaces that feel fast, clean, and reliable.',
    sections: [
      {
        items: [
          'React.js',
          'Next.js',
          'HTML5',
          'CSS3',
          'Tailwind CSS',
          'Recharts',
          'Figma-to-UI implementation',
          'Responsive design',
        ],
      },
    ],
  },
  {
    id: 'ai',
    title: 'AI & data',
    description:
      'An LLM multi-agent system and an explainable credit-risk ML service.',
    sections: [
      {
        items: [
          'LangGraph (multi-agent orchestration)',
          'RAG (Qdrant vector database)',
          'LLM APIs (Gemini, Groq, DeepSeek)',
          'MCP',
          'Scikit-learn',
          'XGBoost',
          'LightGBM',
          'Optuna',
          'SHAP',
          'MLflow',
          'PyTorch',
          'TensorFlow',
        ],
      },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    description:
      'Deploying and maintaining services with CI/CD workflows and production readiness in mind.',
    sections: [
      {
        items: [
          'Docker',
          'Kubernetes',
          'GitHub Actions (CI/CD)',
          'AWS (EC2, S3, Cognito)',
          'AWS CDK (validated on LocalStack)',
          'Linux',
          'Bash deployment scripting',
        ],
      },
    ],
  },
  {
    id: 'systems',
    title: 'Systems & networking',
    description: 'A Linux container runtime written from scratch in C.',
    sections: [
      {
        items: [
          'Linux internals: namespaces, capabilities, cgroups v2, seccomp-BPF',
          'Concurrency control (advisory, optimistic and row-level locking)',
          'TCP/IP',
          'VLANs',
          'Inter-VLAN routing',
          'EIGRP',
          'EtherChannel',
          'NAT / iptables',
          'Cisco Packet Tracer',
        ],
      },
    ],
  },
  {
    id: 'craft',
    title: 'Languages & craft',
    sections: [
      {
        label: 'Languages',
        items: ['Python', 'Java', 'C / C++', 'TypeScript', 'JavaScript', 'SQL', 'Bash'],
      },
      {
        label: 'Testing & practices',
        items: [
          'Pytest',
          'JUnit 5',
          'Testcontainers',
          'Integration and API testing',
          'Agile / Scrum',
          'Code reviews',
          'AI-assisted development (Claude Code)',
        ],
      },
      {
        label: 'Tools',
        items: [
          'Git',
          'GitHub',
          'Postman',
          'VS Code',
          'Firebase',
          'Socket.IO / WebSockets',
          'Stripe API',
        ],
      },
    ],
  },
  {
    id: 'certifications',
    title: 'Certifications',
    certifications: [
      {
        name: 'Agentic AI Projects: FastAPI, MCP, AWS Deploy & Gemini 3',
        issuer: 'Udemy',
        date: 'Aug 2026',
        href: 'https://www.udemy.com/certificate/UC-8d7afb15-8296-4e79-9158-fdf56545112a/',
      },
      {
        name: 'Big Data Integration and Processing',
        issuer: 'UC San Diego via Coursera',
        date: 'Apr 2026',
        href: 'https://www.coursera.org/account/accomplishments/verify/O78NMW2CEOX5',
      },
      {
        name: 'AWS Academy Graduate: Cloud Architect',
        issuer: 'AWS Academy',
        date: 'Feb 2026',
        href: 'https://drive.google.com/file/d/1vtSmEQE_33aqXMpv9qTWTB1hks_4Jfqu/view',
      },
      {
        name: 'Foundations in Enterprise Risk Management (course)',
        issuer: 'Institute of Risk Management',
      },
    ],
  },
];
