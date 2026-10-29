# Phase 0 — Content Inputs (Part 1) — Updated

> Updated from the latest resumes (IBM, Siemens, Zanskar/Nubra, Simnovus, Saviynt, FischerJordan, MoveInSync, Optum, NVIDIA, Arm, Palo Alto). Items marked **[VERIFY]** need your confirmation before the portfolio goes live; they are collected in the Notes section at the end.

## 1) Bio / Hero

- **Name:** Gautam Prabhu
- **Tagline:** Turning ideas into reliable systems
- **Hero one-liner:** Software Developer | Full-Stack, Backend & Systems | Cloud, AI Agents & Containers
- **Short bio (new):** CS student at Manipal Institute of Technology (CGPA 8.58) who builds and ships end to end: a workflow platform used by 500+ people, a containerized ERP backend on Kubernetes, microservice platforms on Kafka, an LLM multi-agent system, an explainable credit-risk ML service, and a Linux container runtime written from scratch in C.
- **Availability:** Seeking internship | Open to hire

---

## 2) Projects

> Suggested display order (strongest and most current first): 1 Credit Risk PD Platform, 2 OutSource, 3 Healthcare Microservices Platform, 4 JarvisAI, 5 Linux Container Runtime, 6 Real Estate Marketplace, 7 Smart Campus Network, 8 AI Resume Parser.

### Project 1 — Credit Risk PD Platform

- **Title:** Credit Risk PD Platform
- **Role:** Developer (ML + backend)
- **Short summary:** Explainable probability-of-default platform for 30K+ accounts, served through a FastAPI service with drift monitoring and experiment tracking.
- **Problem:** Credit-risk models are easy to over-state: a baseline that balanced classes (SMOTE) before splitting leaked information and looked better than it really was, and lenders also need explanations, calibrated probabilities and monitoring, not only a score.
- **Solution:** Replaced the baseline with leak-free train/validation/test splits and Optuna-tuned gradient-boosted models (LightGBM, XGBoost, CatBoost) with monotonic constraints and isotonic calibration. Added expected-loss decisioning (PD × LGD × EAD), a WoE/IV scorecard, SHAP reason codes and a fairlearn audit. Shipped through FastAPI with PSI drift monitoring, MLflow tracking and Dockerized CI.
- **Impact:** Test ROC-AUC 0.78, Gini 0.56, KS 0.43, with predicted PDs within 2% of observed default rates; 80%+ test coverage in CI. The champion/challenger comparison is offline on a held-out set (no live A/B test).
- **Tech stack:** Python, LightGBM, XGBoost, CatBoost, Optuna, SHAP, MLflow, FastAPI, Docker, GitHub Actions
- **Links:**
  - GitHub: https://github.com/gautamprabhu07/credit-risk-ml
  - Live demo: **[VERIFY — add the demo URL]**

### Project 2 — OutSource (Multi-Vendor E-Commerce Platform; formerly "Eshop")

- **Title:** OutSource — Multi-Vendor E-Commerce Platform
- **Role:** Full-Stack Developer
- **Short summary:** Nx monorepo for a multi-vendor marketplace: 3 Next.js apps (customer, vendor, admin) and 9 Express services behind an API gateway, with Kafka-based analytics and real-time chat.
- **Problem:** A marketplace needs separate experiences for customers, vendors and admins, plus analytics and chat that must not slow down the request path.
- **Solution:** Built the services behind a gateway with shared CORS and rate-limiting policy; used Kafka to decouple analytics ingestion and chat-message persistence (client-side batching, failure re-queuing, Redis event-id idempotency); built the three Next.js frontends, Recharts dashboards (orders by region, revenue, order growth) and WebSocket chat between vendors and customers; used Redis for OTP throttling, presence and payment-session state.
- **Impact:** 80+ REST endpoints; cut p50 query latency 59–68% with 14 database indexes; 192 unit and 28 integration tests with CI. A TensorFlow.js recommender (cosine similarity over a recency-decayed interaction profile) was built and tested but is not wired into the live app.
- **Tech stack:** TypeScript, Node.js, Express, Next.js, Nx, Prisma, MongoDB, PostgreSQL, Kafka, Redis, WebSockets, Recharts
- **Links:**
  - GitHub: https://github.com/gautamprabhu07/Ecom-SaaS

### Project 3 — Healthcare Microservices Platform

- **Title:** Healthcare Microservices Platform
- **Role:** Backend Developer
- **Short summary:** Seven Spring Boot services (gateway plus six domain services) for appointments, patients, billing, analytics and notifications, communicating over REST, gRPC and Kafka.
- **Problem:** Concurrent bookings can double-book a doctor or patient, and event-driven services must stay correct under retries and redelivery.
- **Solution:** Database-per-service design with a JWT/RBAC gateway; PostgreSQL advisory locks (doctor and patient keys sorted to avoid deadlock) plus `@Version` optimistic locking to prevent double-booking; Kafka events published only after the transaction commits; idempotent consumers using dedup tables; Resilience4j retry and circuit breaker on service calls; infrastructure defined as code with AWS CDK (Java) and validated on LocalStack.
- **Impact:** 32 REST endpoints and 9 Kafka listeners; conflicting bookings return 409 instead of silently overwriting; tested with JUnit 5 and Testcontainers. The CDK stack was validated on LocalStack only (not deployed to real AWS).
- **Tech stack:** Java 21, Spring Boot 3, Spring Cloud Gateway, PostgreSQL, Kafka, gRPC, Resilience4j, Docker, AWS CDK, LocalStack, JUnit 5, Testcontainers
- **Links:**
  - GitHub: https://github.com/gautamprabhu07/Healthcare_Microservices

### Project 4 — Multi-Agent AI Orchestration Platform (JarvisAI)

- **Title:** JarvisAI — Multi-Agent AI Orchestration Platform
- **Role:** Developer
- **Short summary:** LangGraph-based platform that routes each request to the right specialized agent and answers questions over uploaded PDFs with RAG.
- **Problem:** One LLM prompt does not fit every task; requests need to reach the right agent and model, with memory, rate limits and billing handled outside the agents.
- **Solution:** Designed a LangGraph routing layer across 9 agent nodes and 3 LLM providers (Groq, Gemini, DeepSeek) using a 3-tier resolution strategy (intent, file type or explicit choice). Built a Qdrant-backed RAG pipeline (chunking, embeddings, similarity retrieval) for PDF Q&A, kept separate from Redis-based short-term conversation memory. Structured the backend as 5 Dockerized services (gateway, auth, chat, billing, agent service) with Redis session auth, per-agent rate limiting and S3 artifact storage.
- **Impact:** Working multi-agent system with swappable models and agents; per-user, per-agent quotas enforced through Redis (6 request types, 3–20 requests/min).
- **Tech stack:** LangGraph, Node.js, Express, Qdrant, Redis, AWS S3, Docker
- **Links:**
  - GitHub: https://github.com/gautamprabhu07/Agentic-ai

### Project 5 — Linux Container Runtime Built From Scratch

- **Title:** Linux Container Runtime Built From Scratch
- **Role:** Systems Developer
- **Short summary:** A ~680-line container runtime in C that isolates and limits a process using kernel primitives, without Docker.
- **Problem:** Containers are usually used as a black box; the goal was to understand isolation, privilege and resource control at the kernel level.
- **Solution:** Spawns the containerized child with `clone()`, reaps it with `waitpid()` and starts the target with `execve()`, using a `socketpair` for parent-child synchronization. Isolates with 7 kernel namespaces, 20 dropped capabilities and a 19-rule seccomp-BPF filter; enforces cgroup v2 limits (memory, process count, CPU quota); builds container networking from bridge, veth and iptables NAT.
- **Impact:** Validated by a 5-check automated test suite run from the host. Root-caused a `CAP_NET_RAW` failure to a namespace-ownership rule in the kernel's capability check and fixed it with a per-namespace sysctl, keeping a graceful fallback on hosts without unprivileged user namespaces.
- **Tech stack:** C, libseccomp, libcap, Linux namespaces, cgroups v2, iptables, WSL2/Ubuntu
- **Links:**
  - GitHub: **[VERIFY — add the repository URL]** (resumes link only to https://github.com/gautamprabhu07)

### Project 6 — Real Estate Marketplace Platform (BUILDING CO.)

- **Title:** Real Estate Marketplace Platform
- **Role:** Full-Stack Developer
- **Short summary:** Full-stack real estate platform with authentication, payments, real-time chat and location-based property discovery.
- **Problem:** Traditional property listing platforms lack integrated communication, secure payments, and real-time interaction between buyers and sellers, leading to fragmented workflows.
- **Solution:** Developed a full-stack marketplace with bcrypt + JWT authentication (httpOnly cookies), resource-level authorization, property CRUD, saved listings de-duplicated with a composite key, Stripe payments, real-time chat with Socket.IO, media uploads and map-based property search.
- **Impact:** End-to-end transaction workflow, real-time messaging, secure payments and backend APIs that simulate a production-grade property marketplace; live demo deployed.
- **Tech stack:** React, Node.js, Express.js, MongoDB, Prisma, Socket.IO, Stripe, Cloudinary
- **Links:**
  - GitHub: https://github.com/gautamprabhu07/Real-estate
  - Live demo: https://urbanluxe.onrender.com/

### Project 7 — Smart Campus Network Design

- **Title:** Smart Campus Network Design
- **Role:** Network Designer & Implementer
- **Short summary:** Enterprise-style campus network with segmented VLAN architecture, dynamic routing and secure inter-building connectivity, simulated in Cisco Packet Tracer.
- **Problem:** Large campuses need scalable, secure and fault-tolerant networks that support many departments and devices without congestion, broadcast storms or security risks.
- **Solution:** Designed a multi-building network with per-department VLANs, inter-VLAN routing, EIGRP dynamic routing between distribution layers, EtherChannel link aggregation and port security, and validated end-to-end connectivity across services.
- **Impact:** Multi-VLAN, multi-router topology with redundancy planning and secure access control, simulating an enterprise-grade campus network.
- **Tech stack:** Cisco Packet Tracer, EIGRP, VLANs, Inter-VLAN Routing, EtherChannel, Port Security
- **Links:**
  - GitHub: https://github.com/gautamprabhu07/Smart_campus_network
- **[VERIFY]:** earlier resumes described this project with RIPv2, DHCP and DNS instead of EIGRP/EtherChannel; confirm which protocols the final design uses.

### Project 8 — AI Resume Parser & Job Finder

- **Title:** AI Resume Parser & Job Finder
- **Role:** Developer
- **Short summary:** AI-powered web application that extracts structured data from resumes and enables intelligent job matching using NLP techniques.
- **Problem:** Recruiters and applicants struggle to extract structured information from unformatted resumes, leading to manual effort, parsing errors, and inefficient candidate screening.
- **Solution:** Built a resume parsing system using NLP to extract skills, experience, education, and contact details from PDF/DOC files, with validation, confidence handling, and fallback mechanisms for unreliable inputs.
- **Impact:** Handled unstructured resume formats with error-resilient parsing, multi-format file support, and confidence-aware extraction, enabling reliable structured data generation from noisy inputs.
- **Tech stack:** React, Python, Flask, spaCy, NLP, REST APIs
- **Links:**
  - GitHub: https://github.com/gautamprabhu07/Resume-parser-job-search
  - Live demo: https://resparse-m6oh.vercel.app/

---

## 3) Experience

> Order: most recent first. Certificate links are on your resumes and can be shown as "View certificate" buttons.

### Experience 1 — Eventory V2 (Multi-Vendor Booking Platform)

- **Company/Institution:** Eventory (eventory.in)
- **Role title:** Full-Stack Developer Intern (titled "Backend Developer Intern" on some resumes)
- **Dates:** **[VERIFY — add start month]** – Ongoing
- **Bullets:**
  - Raised 30+ pull requests, most merged to production through team code review and daily standups, on a live multi-vendor event-booking platform (Node.js, Express, MongoDB, TypeScript, Next.js, AWS Cognito).
  - Closed an authentication gap where customer JWTs were signed but never verified: added `jwt.verify()` middleware, role-claim enforcement against cross-role token reuse, and ownership guards that prevent IDOR/ID-enumeration.
  - Built the vendor-side booking backend, unifying 6 vendor package schemas in one Mongoose discriminator model; flagged an unresolved read-then-write (TOCTOU) race in the availability check as the basis for a transactional fix.
  - Implemented UI from Figma designs in Next.js and Tailwind CSS; audited a multi-table fee specification against two production implementations and traced a 6x pricing discrepancy (INR 127 vs INR 800) to a formula that dropped two of three terms, documenting it for the product manager.

### Experience 2 — GoPerch Innovations Pvt. Ltd.

- **Company/Institution:** GoPerch Innovations Pvt. Ltd.
- **Role title:** Full-Stack Developer Intern
- **Dates:** Dec 2025 – Jan 2026
- **Bullets:**
  - Engineered 40+ REST APIs and 15+ relational models (FastAPI, SQLAlchemy, PostgreSQL) for a multi-nursery ERP, secured with JWT authentication and 4+ role-based access levels; built the Next.js/TypeScript inventory module and covered order lifecycle, barcode-based operations and status-driven business logic.
  - Removed stock race conditions with an order state machine using `SELECT FOR UPDATE` row locking; traced ordered-vs-live inventory discrepancies to root cause.
  - Wrote 100+ Pytest tests (85%+ coverage) and Gherkin-style BDD scenarios for inventory and order rules, plus frontend tests.
  - Containerized the backend with Docker and deployed it to Kubernetes, automating builds and deploys with Bash; delivered 25+ requirements across 5+ Agile sprints with code reviews.

### Experience 3 — MIT Letter of Recommendation System (Institutional Project)

- **Company/Institution:** Manipal Institute of Technology
- **Role title:** Full-Stack Developer (Institutional Project)
- **Dates:** Dec 2025 – Ongoing
- **Bullets:**
  - Built a multi-role workflow platform serving 500+ live users (student, faculty, clerk, dean, admin), replacing manual email/Excel tracking with an automated 5-step lifecycle and full audit trails (Node.js, Express, TypeScript, MongoDB).
  - Secured 5 privilege levels with JWT (access and refresh tokens), RBAC route guards and rate-limited login; structured the code into controllers, services, middleware and models.
  - Cron-scheduled SendGrid reminders cut manual follow-up effort by about 70%; document upload, validation and controlled access protect sensitive academic records.
  - Demoed the workflow to faculty before building, then deployed and tested on university servers under production-like constraints and tight academic deadlines.
- **[VERIFY]:** your earlier draft listed roles as "alumni, faculty and administrators"; the resumes list student/faculty/clerk/dean/admin. The version above follows the resumes.

---

## 4) Education

### Education 1 — B.Tech

- **Institution:** Manipal Institute of Technology
- **Degree/Course:** Bachelor of Technology (B.Tech) — Computer Science
- **Dates:** July 2024 – May 2027
- **Score:** CGPA 8.58
- **Bullets:**
  - Coursework: Data Structures & Algorithms, Operating Systems, Computer Networks, DBMS, OOP, Software Engineering.
  - 200+ DSA problems solved (Striver's SDE sheet: trees, graphs, DP, binary search, sliding window, backtracking).
  - Building production-level projects and internships alongside coursework.

### Education 2 — Diploma

- **Institution:** Dr. T.M.A. Pai Polytechnic, Manipal
- **Degree/Course:** Diploma — Computer Science
- **Dates:** 2022 – 2024
- **Score:** CGPA 9.93 (first class with distinction)
- **Bullets:**
  - Built strong foundations in programming, data structures, databases, and computer networks.
  - Completed multiple full-stack and systems-oriented academic and practical projects.

### Education 3 — Pre-University (PUC)

- **Institution:** Vidyodaya Pre-University College, Udupi
- **Degree/Course:** Pre-University (2nd PUC), PCMB — Karnataka State Board
- **Dates:** Completed 2022 (**[VERIFY]**: your earlier draft said 2021 – 2023)
- **Score:** 97.69%

### Education 4 — School

- **Institution:** Silas International School
- **Board:** ICSE (Class X)
- **Year:** 2020
- **Score:** 95%

---

## 5) Skills

### Languages

- Python
- Java
- C / C++
- TypeScript
- JavaScript
- SQL
- Bash

### Backend & APIs

- Node.js / Express.js
- FastAPI
- Spring Boot (Spring Cloud Gateway)
- REST APIs
- gRPC
- Microservices
- JWT Authentication
- Role-Based Access Control (RBAC)
- Database Design

### Frontend

- React.js
- Next.js
- HTML5
- CSS3
- Tailwind CSS
- Recharts
- Figma-to-UI implementation
- Responsive design

### AI & Data

- LangGraph (multi-agent orchestration)
- RAG (Qdrant vector database)
- LLM APIs (Gemini, Groq, DeepSeek)
- MCP
- Scikit-learn, XGBoost, LightGBM, Optuna, SHAP
- MLflow
- PyTorch, TensorFlow

### Cloud / DevOps

- Docker
- Kubernetes
- GitHub Actions (CI/CD)
- AWS (EC2, S3, Cognito; AWS Academy Cloud Architect)
- AWS CDK (infrastructure as code, validated on LocalStack)
- Linux
- Bash deployment scripting

### Databases & Messaging

- PostgreSQL
- MySQL
- MongoDB
- Redis
- Kafka
- Prisma / SQLAlchemy / Mongoose (ORMs)

### Systems & Networking

- Linux internals: namespaces, capabilities, cgroups v2, seccomp-BPF
- Concurrency control (advisory, optimistic and row-level locking)
- TCP/IP, VLANs, inter-VLAN routing, EIGRP, EtherChannel, NAT/iptables
- Cisco Packet Tracer

### Testing & Practices

- Pytest, JUnit 5, Testcontainers
- Integration and API testing
- Agile/Scrum, code reviews
- AI-assisted development (Claude Code)

### Tools / Other

- Git, GitHub
- Postman
- VS Code
- Firebase
- Socket.IO / WebSockets
- Stripe API

---

## 6) Certifications

- **AWS Academy Graduate — Cloud Architect** (AWS Academy, Feb 2026): https://drive.google.com/file/d/1vtSmEQE_33aqXMpv9qTWTB1hks_4Jfqu/view
- **Big Data Integration and Processing** (UC San Diego via Coursera, Apr 2026): https://www.coursera.org/account/accomplishments/verify/O78NMW2CEOX5
- **Agentic AI Projects: FastAPI, MCP, AWS Deploy & Gemini 3** (Udemy, Aug 2026): https://www.udemy.com/certificate/UC-8d7afb15-8296-4e79-9158-fdf56545112a/
- **Foundations in Enterprise Risk Management** (Institute of Risk Management): course, not a certificate, so list it under "Courses"

---

## 7) Contact

- **Email:** gautamprabhumit@gmail.com
- **Phone:** +91 80738 70925
- **Location:** Manipal, Karnataka, India
- **Social links:**
  - GitHub: https://github.com/gautamprabhu07
  - LinkedIn: https://www.linkedin.com/in/gautamphere
  - Website: https://gautamprabhu.dev

---

## Notes

- Project screenshots can be added later (hover/preview behavior to be decided during UI implementation).
- **To verify before publishing:**
  1. Credit Risk live demo URL.
  2. Container runtime GitHub repo URL.
  3. Eventory start month.
  4. Smart Campus Network protocols (EIGRP/EtherChannel vs RIPv2/DHCP/DNS).
  5. LoR system roles (resumes list five: student/faculty/clerk/dean/admin).
  6. PUC dates (2022 completion on resumes vs 2021 – 2023 in the earlier draft).
  7. GoPerch dates (Dec 2025 – Jan 2026 on resumes; the earlier draft said Jan 2026 – Ongoing).
- Dropped from this version for lack of evidence: "AWS (Cloud Fundamentals — Learning)" (replaced by what you have actually used) and the earlier "Backend Deployment Basics" wording (replaced by the Docker/Kubernetes/Bash work at GoPerch).
