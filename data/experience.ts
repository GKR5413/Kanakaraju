import { asset } from "@/lib/asset";

export interface ExperienceLink {
  label: string;
  href: string;
  kind: "code" | "package";
}

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
  links?: ExperienceLink[];
}

export const EXPERIENCE: ExperienceEntry[] = [
  {
    co: "RSM US LLP",
    logo: asset("/assets/logo-rsm.png"),
    role: "Senior Generative AI Engineer",
    when: "Oct 2026 — Present",
    loc: "Irvine, CA",
    project: "Project Phoenix — RSM's Internal AI Platform",
    desc: "Sole architect of the MCP, LLM and tool calling layer for Project Phoenix, a POC for RSM's internal AI platform planned to give 15K clients and stakeholders natural language access to insights from tax filings, ledgers and invoices. Leading 2 engineers.",
    highlights: [
      "Architect the Python <b>MCP server</b> and tool calling layer, exposing <b>pgvector</b> search on PostgreSQL, MongoDB metadata lookups and Amazon S3 document fetch as typed tools for <b>Claude and Gemini</b> to query tax filings, ledgers, invoices and other financial documents.",
      "Build the <b>multi-agent flow in LangGraph</b> with planner, validator, tester and summarizer agents — masking <b>PII</b> before any model call and enforcing <b>role-based permissions</b> so users see only the client data they are entitled to, with prompt injection checks and a full audit log.",
      "Connect the LLM layer to the ingestion pipeline: <b>Amazon Textract</b> and Python parsers for OCR, small language models for document classification, OpenAI <b>text-embedding-3-large</b> chunks in pgvector and parsed files in S3, running on <b>Amazon ECS</b>.",
      "Design evaluation for <b>finance-grade accuracy</b>: a golden set stratified by document type and verified by tax and audit reviewers, scored offline on retrieval recall, groundedness, citation accuracy and exact match on figures, plus <b>cross-client data leakage</b> tests and online scoring of sampled LangSmith traces.",
    ],
    tech: [
      "Python", "MCP", "Tool Calling", "LangGraph", "Claude", "Gemini", "pgvector",
      "PostgreSQL", "MongoDB", "Amazon S3", "Amazon Textract", "text-embedding-3-large",
      "Small Language Models", "Amazon ECS", "LangSmith", "PII Masking", "RBAC",
    ],
  },
  {
    co: "Arm",
    logo: asset("/assets/logo-arm.png"),
    role: "Generative AI Engineer",
    when: "Sep 2024 — Oct 2026",
    loc: "San Jose, CA",
    project: "Arm MCP Server & Cloud Migration Agents",
    desc: "Led 3 engineers on an 18-developer team building the Arm MCP Server and its agent, retrieval and fine-tuned LLM stack — letting AI agents automate x86 to Arm cloud migration for <b>35,000 developers</b> at roughly <b>1M monthly queries</b>, cutting migration effort <b>90%</b>.",
    highlights: [
      "Built the <b>Arm MCP Server</b> in Python with FastMCP, standardizing Model Context Protocol and JSON-RPC function calling so GitHub Copilot, Claude Code, Codex, Kiro CLI and Gemini CLI all drive the same migration toolchain for AWS Graviton, Google Axion and Azure Cobalt — developer onboarding down <b>60%</b>.",
      "Orchestrated multi-agent migration workflows in <b>LangGraph</b> with ReAct-style tool use and context window management across long build logs — multi-turn execution failures down <b>35%</b> on a 200-query benchmark.",
      "Served open-source LLMs on <b>vLLM across H100 GPUs</b> with continuous batching and cost-aware model routing, falling back to GPT-5 and Claude on Amazon Bedrock and Azure OpenAI when a task exceeded local model capability.",
      "Fine-tuned <b>Llama 3 8B</b> on H100s with LoRA (rank 16) and QLoRA in PyTorch and Hugging Face PEFT, on <b>18K supervised instruction pairs</b> curated from Arm docs and Neo4j graph triples — domain accuracy <b>52% → 70%</b> on a held-out benchmark.",
      "Engineered the <b>RAG service</b> on Milvus and LlamaIndex over an Amazon Textract ingestion pipeline, with hybrid BM25 + dense retrieval, Cohere reranking and zero-downtime refresh — LLM hallucinations down <b>85%</b> with fewer prompt tokens per query.",
      "Benchmarked BGE-large, E5-large and text-embedding-3, then fine-tuned the selected bi-encoder with contrastive learning on hard negatives mined from production retrieval failures — <b>Recall@5 +15 points</b>.",
      "Built the <b>LLM-as-a-judge</b> evaluation harness on a 200-query golden dataset covering agent reasoning, tool invocation accuracy and context limits, and made it the <b>CI release gate</b> with Argo CD promotion so regressions never reach developers.",
      "Hardened agents for autonomous operation with sandboxed MCP servers, policy and permission models, prompt injection safeguards and audit trails on every tool call, so agent-generated Terraform stays within <b>least-privilege IAM</b> and approved regions.",
      "Owned production observability on <b>Amazon EKS</b> with Prometheus and Grafana, tracking SLOs/SLIs and agent health, and led root-cause analysis on non-deterministic agent failures in customer environments.",
      "Encoded <b>C++</b> migration rules into the agent toolchain and exposed LLVM-MCA, sysreport and Arm Performix as callable tools, automating SSE to NEON/SVE2 translation and -mcpu tuning for <b>4×</b> faster assembly-level benchmarking.",
    ],
    links: [
      { label: "github.com/arm/mcp", href: "https://github.com/arm/mcp", kind: "code" },
      { label: "armlimited/arm-mcp", href: "https://hub.docker.com/r/armlimited/arm-mcp", kind: "package" },
    ],
    tech: [
      "Python", "C++", "FastMCP", "MCP", "JSON-RPC", "LangGraph", "LlamaIndex",
      "LangSmith", "Milvus", "RAG", "Cohere Rerank", "GPT-5", "Claude", "Amazon Bedrock",
      "Azure OpenAI", "Llama 3 8B", "PyTorch", "PEFT", "LoRA", "QLoRA", "vLLM", "H100",
      "Neo4j", "Amazon Textract", "Terraform", "EKS", "Prometheus", "Grafana", "Argo CD",
      "Graviton", "Google Axion", "Azure Cobalt", "LLVM-MCA",
    ],
  },
  {
    co: "FIS Global",
    logo: asset("/assets/logo-fis.png"),
    role: "Machine Learning Engineer II",
    when: "Jun 2022 — Jul 2023",
    loc: "Remote",
    project: "FraudSight — Behavioral Risk Engine",
    desc: "Built deep learning and ensemble models plus the real-time scoring services behind FraudSight, a behavioral analytics risk engine covering <b>40B+ annual transactions</b> — a product that cut fraud chargebacks by <b>up to 95%</b>.",
    highlights: [
      "Built <b>RNN-based Deep Behavioral Networks</b> in TensorFlow and Keras on AWS SageMaker to model cardholder transaction sequences, catching fraud and botnet attacks in real time while reducing false declines.",
      "Deployed FastAPI and Flask inference services on <b>Kubernetes (EKS)</b> behind Spring Boot gateways, fixing model serialization and batch prediction paths to reach <b>sub-100ms</b> scoring at <b>99.99%</b> uptime.",
      "Trained <b>Scikit-learn and XGBoost</b> ensembles on Adaptive Behavioral Analytics features in Snowflake for identity and risk scoring.",
      "Designed feature pipelines on Apache Spark, PySpark and <b>Databricks Lakehouse</b>, delivering behavioral and identity features into Snowflake for both training and real-time scoring.",
      "Automated retraining, hyperparameter tuning, experiment tracking and drift monitoring with SageMaker Pipelines, <b>MLflow</b>, Airflow and CloudWatch, versioning datasets, features and models for audit and rollback.",
      "Implemented <b>SHAP-based reason codes</b> for declined transactions plus PII controls and model lineage for <b>PCI DSS and PSD2 SCA</b> audits.",
      "Defined typed API contracts with fraud analysts for an internal dashboard showing live drift metrics and model versions.",
    ],
    tech: [
      "Python", "TensorFlow", "Keras", "RNN", "Scikit-learn", "XGBoost", "SageMaker",
      "SageMaker Pipelines", "Apache Spark", "PySpark", "Databricks Lakehouse",
      "Snowflake", "FastAPI", "Flask", "Spring Boot", "EKS", "MLflow", "Airflow",
      "CloudWatch", "SHAP", "PCI DSS",
    ],
  },
  {
    co: "Walmart",
    logo: asset("/assets/logo-walmart.png"),
    role: "Machine Learning Engineer",
    when: "Jan 2020 — Jun 2022",
    loc: "Remote",
    project: "Catalog Enrichment & Demand Forecasting",
    desc: "Owned catalog enrichment and demand forecasting on GCP, lifting forecast accuracy <b>15%</b> on models supporting <b>$20M+</b> in annual GMV.",
    highlights: [
      "Moved product search from keyword matching to <b>semantic retrieval</b> over millions of dense embeddings in Milvus and FAISS, working on vector index design and retrieval optimization.",
      "Built <b>label-aware BERT</b> attribute extraction from seller descriptions and customer reviews, plus a CNN, BiLSTM and STN vision pipeline reading attributes off product images, closing catalog metadata gaps.",
      "Designed demand forecasting pipelines with <b>Prophet and ARIMA</b> on Vertex AI, orchestrated through Kubeflow Pipelines and Airflow for automated training, validation and retraining.",
      "Scaled distributed training across <b>2 TB of daily</b> transaction and inventory data with PySpark, Dask and Ray — training time down <b>40%</b> for labor and inventory planning across fulfillment operations.",
      "Instrumented pipelines with Airflow data quality checks, Vertex AI model monitoring and BigQuery drift dashboards, auto-triggering retraining — stale-model incidents down <b>30%</b> across hundreds of item-store models.",
      "Redesigned <b>BigQuery</b> partitioning and clustering on a multi-terabyte dataset to cut query cost <b>25%</b>, and built a feature store with versioned, point-in-time correct features shared across forecasting and ranking models.",
    ],
    tech: [
      "Python", "PySpark", "Dask", "Ray", "Prophet", "ARIMA", "BERT", "CNN", "BiLSTM",
      "STN", "Vertex AI", "Kubeflow Pipelines", "Apache Airflow", "BigQuery", "GCS",
      "Milvus", "FAISS", "Feature Store",
    ],
  },
];

export const LOGO_MARQUEE = [
  { name: "RSM US LLP", src: asset("/assets/logo-rsm.png") },
  { name: "Arm", src: asset("/assets/logo-arm.png") },
  { name: "FIS Global", src: asset("/assets/logo-fis.png") },
  { name: "Walmart", src: asset("/assets/logo-walmart.png") },
];
