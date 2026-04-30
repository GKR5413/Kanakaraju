export interface ExperienceEntry {
  co: string;
  logo: string;
  role: string;
  when: string;
  loc: string;
  project: string;
  desc: string;
  highlights: string[];
  tech: string[];
}

export const EXPERIENCE: ExperienceEntry[] = [
  {
    co: "Arm",
    logo: "/Kanakaraju/assets/logo-arm.png",
    role: "Senior GenAI Engineer",
    when: "Sep 2025 — Present",
    loc: "Austin, TX",
    project: "Arm MCP Server & Cloud Migration Assistant Custom Agent",
    desc: "Led development of the Arm MCP Server enabling autonomous AI agents to migrate cloud applications from x86 to Arm — wired into GitHub Copilot, Claude Code, Kiro CLI and Gemini CLI to scan repos, validate Docker compatibility, and translate x86 code into Arm equivalents.",
    highlights: [
      "Designed the <b>Arm MCP Server</b> in Python + FastMCP with a centralized server.py — cut developer onboarding by <b>60%</b>.",
      "Standardized tool calling via <b>MCP + JSON-RPC</b> across Copilot, Claude Code, Kiro and Gemini CLIs for AWS Graviton, Google Axion and Azure Cobalt 100.",
      "Containerized RAG knowledge base on <b>Milvus</b> — reduced LLM code hallucinations <b>85%</b> across a 200-query benchmark.",
      "Automated x86→Arm scanning via migrate-ease in a custom MCP pipeline — turned <b>days of code review into under 2 hours</b> of guided refactoring.",
      "Skopeo + check-image multi-agentic tool cut pre-deployment architecture validation by <b>75%</b>.",
      "Dual-arch Docker Buildx (linux/amd64 + linux/arm64) reduced cross-platform build failures by <b>80%</b>.",
      "LLVM-MCA integration accelerated assembly-level benchmarking <b>4×</b>; sysreport + Arm Performix replaced <b>6+ hours</b> of manual telemetry.",
      "Partnered with DevOps to migrate <b>50+ legacy x86 microservices</b> to Arm in the first quarter; SOC 2 + GDPR-compliant deployment via Zero Trust RBAC on Amazon EKS.",
    ],
    tech: [
      "FastMCP", "MCP", "JSON-RPC", "Milvus", "RAG", "GPT-4", "Claude Sonnet/Opus",
      "Copilot", "Kiro CLI", "Gemini CLI", "Docker Buildx", "Skopeo", "Terraform",
      "AWS Copilot CLI", "EKS", "ECS", "Graviton", "LLVM-MCA", "Python", "asyncio",
      "SOC 2", "GDPR",
    ],
  },
  {
    co: "State Street",
    logo: "/Kanakaraju/assets/logo-statestreet.png",
    role: "AI Development & Platform Engineer",
    when: "Aug 2024 — Sep 2025",
    loc: "Boston, MA",
    project: "Alpha Data Platform (ADP)",
    desc: "Architected the GenAI infrastructure powering Alpha Data Platform — turning unstructured financial data into compliant, hallucination-minimized natural-language insight on Snowflake, Databricks and Azure OpenAI.",
    highlights: [
      "Natural-language queries over Snowflake-powered financial data lakes via Python + FastAPI — <b>70%</b> faster time-to-insight.",
      "Deterministic RAG on <b>Azure OpenAI GPT-4 + Azure AI Search + FAISS + Pinecone</b> — near-zero hallucination, sub-second retrieval.",
      "Stateful multi-agent workflows in <b>LangChain + LangGraph</b> monitored <b>10+ global asset portfolios</b> with full conversation memory.",
      "Azure AI Document Intelligence + Databricks ai_parse_document automated legal covenant extraction — manual processing time down <b>80%</b>.",
      "Deep-learning anomaly detection (PyTorch + TensorFlow) hit <b>99.6%</b> true-exception capture, eliminated <b>87%</b> of false positives.",
      "Backstage + Crossplane Golden Paths cut environment provisioning by <b>65%</b> — compliant AI microservices in under 10 min.",
      "<b>Databricks AI Gateway</b> enforced PII/MNPI compliance on <b>100%</b> of external LLM traffic with full Unity Catalog audit logging.",
    ],
    tech: [
      "Python", "FastAPI", "Azure OpenAI", "GPT-4", "LangChain", "LangGraph",
      "Snowflake", "Databricks", "PyTorch", "TensorFlow", "Pinecone", "FAISS",
      "AKS", "Terraform", "Crossplane", "Argo CD", "GitHub Actions", "Backstage",
      "MLflow", "Prometheus", "Elasticsearch",
    ],
  },
  {
    co: "FIS Global",
    logo: "/Kanakaraju/assets/logo-fis.png",
    role: "Machine Learning Engineer",
    when: "Jun 2022 — Jul 2023",
    loc: "India",
    project: "FraudSight for WorldPay",
    desc: "Real-time fraud detection and risk scoring across billions of payment transactions — end-to-end ML pipelines from large-scale feature engineering to low-latency inference, with strict MLOps + regulatory compliance.",
    highlights: [
      "Engineered the <b>FraudSight</b> risk scoring engine (Adaptive Behavioral Analytics + ensemble XGBoost) on billions of labeled outcomes — chargebacks down <b>up to 95%</b> for tier-one merchants.",
      "<b>RNN Deep Behavioral Networks</b> (TensorFlow + Keras) on SageMaker modeled temporal cardholder sequences to catch botnet patterns and reduce false declines.",
      "Distributed feature pipelines on Spark + PySpark + Databricks Lakehouse extracted signals from <b>40B+</b> annual transactions across gateway, acquiring and issuer streams.",
      "FastAPI + Featurespace ARIC inference microservices on EKS — <b>sub-100ms</b> scoring latency via optimized serialization and batch prediction paths.",
      "Automated retraining, hyperparameter tuning, drift monitoring with SageMaker Pipelines + MLflow + Airflow — full regulatory auditability.",
      "<b>99.99%</b> uptime on the core payments gateway integration securing billions in GMV.",
    ],
    tech: [
      "Python", "Scikit-learn", "XGBoost", "Pandas", "TensorFlow", "Keras",
      "SageMaker", "SageMaker Pipelines", "Spark", "PySpark", "Databricks Lakehouse",
      "Snowflake", "FastAPI", "EKS", "Featurespace ARIC", "MLflow", "Airflow", "CloudWatch",
    ],
  },
  {
    co: "enGen Global",
    logo: "/Kanakaraju/assets/logo-engen.png",
    role: "Data Engineer",
    when: "Aug 2019 — May 2022",
    loc: "India",
    project: "Enterprise Health Solution Platform",
    desc: "Python data engineering, ML and automated workflows on a HIPAA / HITRUST-certified health plan administration platform serving <b>13 enterprise clients and 10M+ members</b>.",
    highlights: [
      "ETL pipelines processing <b>260M+</b> annual records (pandas, NumPy, SQLAlchemy) — <b>30%</b> faster transform cycles via query optimization.",
      "Metadata-driven <b>PySpark + dbt</b> ingestion framework transforming healthcare records into SCD Type 2 dimensional models on <b>Apache Iceberg + BigQuery</b> lakehouses.",
      "Anomaly detection (scikit-learn, XGBoost, Isolation Forest) on transactional data — manual review volume down <b>30%</b> across multi-tenant pipelines.",
      "PySpark distributed jobs on 10M+ records via partitioning, broadcast joins and lazy eval — <b>40%</b> better batch throughput.",
      "Airflow DAGs + Python rule engines automated quality reporting across 13 clients — turnaround dropped from weeks to under <b>48 hours</b>.",
      "Compliant data handling with PII de-identification, RBAC, and audit logging — <b>100%</b> pass rate on regulatory + HIPAA / HITRUST audit cycles.",
    ],
    tech: [
      "Python", "pandas", "NumPy", "SQLAlchemy", "PySpark", "dbt", "Apache Iceberg",
      "BigQuery", "Oracle", "Teradata", "scikit-learn", "XGBoost", "Isolation Forest",
      "Spark", "Airflow", "IBM UrbanCode Deploy", "IBM BPM", "HIPAA", "HITRUST CSF", "RBAC",
    ],
  },
  {
    co: "Meesho",
    logo: "/Kanakaraju/assets/logo-meesho.png",
    role: "Associate Data Engineer",
    when: "Jun 2017 — Aug 2019",
    loc: "India",
    project: "Cloud Data Warehousing & Legacy Bottleneck Resolution",
    desc: "Migrated foundational data storage from legacy pre-aggregated databases to scalable cloud data warehouses and real-time analytics, supporting petabyte-scale processing and billions of daily interaction events.",
    highlights: [
      "Advanced ETL on <b>Python + Google BigQuery</b> at petabyte scale — enabled real-time data processing and significantly cut MTTR for platform incidents.",
      "Integrated <b>Trino + Metabase</b> to offload massive historical queries — served <b>13M+</b> analytical queries in 10 months under strict data governance.",
      "Spearheaded the NRT analytics platform migration from <b>Apache Druid + Flink</b> to <b>Apache Pinot</b> — enabling event-level clickstream analysis and instant RCA.",
      "Assisted in deploying <b>Prism Query Federator</b> with Request Coalescing to unify high-concurrency queries across Pinot and the historical lake without backend overload.",
      "Implemented PII masking and governance protocols across cloud analytics pipelines for strict compliance.",
    ],
    tech: [
      "Google BigQuery", "Apache Pinot", "Trino", "Apache Flink", "Apache Druid",
      "Prism Query Federator", "Python", "Advanced SQL", "Metabase", "GCP", "PII Masking",
    ],
  },
];

export const LOGO_MARQUEE = [
  { name: "Arm", src: "/Kanakaraju/assets/logo-arm.png" },
  { name: "State Street", src: "/Kanakaraju/assets/logo-statestreet.png" },
  { name: "FIS Global", src: "/Kanakaraju/assets/logo-fis.png" },
  { name: "enGen Global", src: "/Kanakaraju/assets/logo-engen.png" },
  { name: "Meesho", src: "/Kanakaraju/assets/logo-meesho.png" },
];
