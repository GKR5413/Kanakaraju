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
    co: "Arm",
    logo: asset("/assets/logo-arm.png"),
    role: "GenAI Engineer",
    when: "Sep 2024 — Present",
    loc: "San Jose, CA",
    project: "Arm MCP Server & Cloud Migration Agents",
    desc: "Architected the Arm MCP Server and the agentic retrieval stack behind it — letting AI agents inside IDEs discover and chain cloud migration workflows that move production workloads from x86 to Arm across AWS Graviton, Google Axion and Azure Cobalt 100.",
    highlights: [
      "Architected the <b>Arm MCP Server</b> in Python + FastMCP so IDE agents discover and chain migration workflows — developer onboarding time down <b>60%</b>.",
      "Standardized <b>MCP + JSON-RPC</b> tool calling across GitHub Copilot, Claude Code, Kiro CLI and Gemini CLI, compressing migration analysis and refactoring for Graviton, Axion and Cobalt 100.",
      "Built a containerized <b>Milvus</b> RAG knowledge base over Arm docs with LlamaIndex orchestration and LangSmith tracing — LLM code hallucinations down <b>85%</b> at lower prompt-token cost.",
      "Curated <b>12K instruction pairs</b> from Arm docs and Neo4j graph triples and fine-tuned <b>Llama 3 8B</b> via LoRA (rank 16) — domain accuracy <b>52% → 70%</b> on a held-out 200-query benchmark.",
      "Benchmarked BGE-large, E5-large and text-embedding-3, then fine-tuned the selected bi-encoder with contrastive learning on hard negatives mined from failed retrievals — <b>Recall@5 +15 points</b> over baseline.",
      "Added <b>Cohere Rerank</b> via Amazon Bedrock as a second stage over hybrid BM25 + dense retrieval, tuning chunk size and overlap for code-heavy docs — higher top-3 precision and fewer tokens per query for ~100ms added latency.",
      "Orchestrated multi-agent workflows on <b>GPT-5 and Claude via Bedrock</b> with LangChain + LangGraph, served open-source models on <b>vLLM</b> for low-latency inference, and delegated agent roles through CrewAI and AutoGen.",
      "Built <b>Tesseract OCR</b> pipelines to fold multi-format internal docs into the vector store, with Python jobs regenerating Milvus embeddings on every documentation update at <b>zero user-facing downtime</b>.",
      "Embedded AWS Copilot CLI and Terraform into the retrieval layer behind guardrails, policy models and audit trails so autonomous agents emit only <b>least-privilege IAM</b> infrastructure.",
      "<b>LLVM-MCA</b> accelerated assembly-level benchmarking <b>4×</b>; sysreport and Arm Performix exposed as callable AI functions replaced <b>6 hours</b> of manual telemetry with real-time profiling.",
      "Shipped offline/online eval harnesses plus a CI pipeline running regression tests and prompt-version A/B comparisons before every release, with production observability on <b>EKS and ECS</b> tracking SLOs, agent health and telemetry.",
    ],
    links: [
      { label: "github.com/arm/mcp", href: "https://github.com/arm/mcp", kind: "code" },
      { label: "armlimited/arm-mcp", href: "https://hub.docker.com/r/armlimited/arm-mcp", kind: "package" },
    ],
    tech: [
      "Python", "FastMCP", "MCP", "JSON-RPC", "LangChain", "LangGraph", "LlamaIndex",
      "LangSmith", "Milvus", "RAG", "Cohere Rerank", "GPT-5", "Claude", "Amazon Bedrock",
      "Llama 3 8B", "LoRA", "QLoRA", "vLLM", "CrewAI", "AutoGen", "Neo4j", "Tesseract",
      "Terraform", "AWS Copilot CLI", "EKS", "ECS", "Graviton", "Google Axion",
      "Azure Cobalt 100", "LLVM-MCA",
    ],
  },
  {
    co: "FIS Global",
    logo: asset("/assets/logo-fis.png"),
    role: "Machine Learning Engineer",
    when: "Jun 2022 — Jul 2023",
    loc: "India",
    project: "FraudSight for Worldpay",
    desc: "Real-time fraud detection and risk scoring across billions of payment transactions — end-to-end ML from large-scale feature engineering to sub-100ms inference, under PCI DSS, PSD2 SCA and 3-D Secure constraints.",
    highlights: [
      "Engineered the <b>FraudSight</b> real-time risk scoring engine (Adaptive Behavioral Analytics, scikit-learn, ensemble XGBoost) on billions of transactions — fraud chargebacks cut by <b>up to 95%</b>.",
      "Designed feature engineering pipelines on Spark, PySpark and Databricks Lakehouse over <b>40B+</b> annual transactions, feeding Snowflake for identity profiling and model training.",
      "Built <b>RNN Deep Behavioral Networks</b> (TensorFlow + Keras) on SageMaker to model cardholder transaction sequences, catching botnet attacks in real time while reducing false declines.",
      "Deployed FastAPI + Featurespace ARIC inference microservices on EKS behind Java Spring Boot gateway services — <b>sub-100ms</b> scoring latency via optimized serialization and batch prediction paths.",
      "Integrated predictive risk scores into the core payments gateway with Python and SQL, monitored via CloudWatch — securing billions in GMV at <b>99.99%</b> uptime.",
      "Automated retraining, hyperparameter tuning, experiment tracking and drift monitoring with SageMaker Pipelines, MLflow and Airflow for full regulatory auditability across model versions.",
      "Defined typed API contracts and backend endpoints for the React + TypeScript analyst dashboard, surfacing live drift metrics, model version history and flagged transaction reviews.",
      "Designed secure event-driven ML orchestration with Java, Spring Boot and Kafka — multi-threaded distributed services built for high reliability and horizontal scaling.",
      "Aligned models to <b>PCI DSS, PSD2 SCA and 3-D Secure</b>, implementing PII controls and <b>SHAP-based reason codes</b> for declined transactions with full model lineage for audit.",
    ],
    tech: [
      "Python", "Scikit-learn", "XGBoost", "TensorFlow", "Keras", "SageMaker",
      "SageMaker Pipelines", "Apache Spark", "PySpark", "Databricks Lakehouse",
      "Snowflake", "FastAPI", "Java", "Spring Boot", "Kafka", "EKS",
      "Featurespace ARIC", "MLflow", "Airflow", "CloudWatch", "SHAP", "PCI DSS",
    ],
  },
  {
    co: "Walmart",
    logo: asset("/assets/logo-walmart.png"),
    role: "Machine Learning Engineer",
    when: "Aug 2019 — May 2022",
    loc: "India",
    project: "Demand Forecasting & Catalog Intelligence",
    desc: "Owned demand forecasting and catalog enrichment for supply chain operations — end-to-end pipelines on GCP covering validation, feature generation, training, drift monitoring and automated retraining over terabyte-scale daily data.",
    highlights: [
      "Owned the end-to-end <b>demand forecasting pipeline</b> — validation, feature generation, training, deployment, drift monitoring and automated retraining — lifting forecast accuracy <b>~15%</b> and cutting manual replenishment planning.",
      "Contributed to a multi-modal <b>catalog enrichment pipeline</b> on GCP processing unstructured text and image data to close metadata gaps, supporting an estimated <b>$20M+</b> annual GMV uplift.",
      "Built time-series models (<b>Prophet, ARIMA</b>) on Vertex AI, orchestrating training, validation and experiment tracking through <b>Kubeflow Pipelines</b> and Airflow DAGs for automated retraining.",
      "Trained distributed forecasting models across an estimated <b>2 TB of daily</b> transaction and inventory data with PySpark, Dask and Ray — training time down <b>~40%</b>.",
      "Redesigned <b>BigQuery</b> partitioning and clustering across a multi-terabyte dataset — query costs down <b>~25%</b> — and built a centralized feature store to standardize reuse across forecasting models.",
      "Built Airflow, BigQuery and GCS workflows producing <b>TFRecords</b> for TPU training, integrating Multi-Task Learning frameworks to balance relevance against personalization.",
      "Implemented <b>label-aware BERT</b> architectures to extract fine-grained product attributes from raw seller descriptions and customer reviews, cutting dependency on manual data across catalog pipelines.",
      "Developed a computer vision pipeline (<b>STN, CNNs, BiLSTM</b>) to extract text and attributes from product images, resolving listings with missing or unstructured metadata.",
      "Migrated keyword-based search to <b>semantic search</b>, contributing to indexing and retrieval optimization over millions of dense vectors on Milvus and FAISS.",
      "Converted pandas workloads to PySpark for distributed processing, provisioned infrastructure with Terraform, and enforced code quality with pytest, Poetry and UV across parameterized, cache-aware KFP pipelines.",
    ],
    tech: [
      "Python", "PySpark", "Dask", "Ray", "Prophet", "ARIMA", "BERT", "CNN", "BiLSTM",
      "STN", "Vertex AI", "Kubeflow Pipelines", "Apache Airflow", "BigQuery", "GCS",
      "TFRecords", "Milvus", "FAISS", "Feature Store", "Terraform", "pytest", "Poetry", "UV",
    ],
  },
  {
    co: "Walmart",
    logo: asset("/assets/logo-walmart.png"),
    role: "Python Developer Intern",
    when: "Feb 2019 — Aug 2019",
    loc: "India",
    project: "Supplier & Inventory Data Pipelines",
    desc: "Data cleaning, ETL and validation for supplier and inventory datasets on the Hadoop stack, raising input data quality for downstream retail analytics workflows.",
    highlights: [
      "Built data cleaning and preprocessing scripts (<b>pandas, NumPy</b>) to standardize raw supplier and inventory datasets in Hive, improving input quality for downstream analytics.",
      "Developed <b>PySpark + HiveQL</b> ETL pipelines on Hadoop for large-scale retail transaction data — processing time down <b>~30%</b>.",
      "Implemented automated validation checks in Python and SQL to flag supplier data inconsistencies, lifting data quality scores across Hive tables <b>~20%</b>.",
    ],
    tech: [
      "Python", "pandas", "NumPy", "PySpark", "HiveQL", "Hive", "Hadoop", "SQL", "ETL",
    ],
  },
];

export const LOGO_MARQUEE = [
  { name: "Arm", src: asset("/assets/logo-arm.png") },
  { name: "FIS Global", src: asset("/assets/logo-fis.png") },
  { name: "Walmart", src: asset("/assets/logo-walmart.png") },
];
