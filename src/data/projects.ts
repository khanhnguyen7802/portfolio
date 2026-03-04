import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Real-Time Data Pipeline",
    description:
      "Built a real-time streaming data pipeline using Apache Kafka and Spark Structured Streaming. Processes millions of events per day with sub-second latency, feeding data into a Snowflake data warehouse for analytics.",
    image: "/images/projects/data-pipeline.png",
    tags: ["Apache Kafka", "Spark", "Snowflake", "Python", "Docker"],
    links: [
      { text: "GitHub", href: "https://github.com/yourusername/data-pipeline" },
      { text: "Blog Post", href: "#" },
    ],
  },
  {
    title: "Cloud Data Lakehouse",
    description:
      "Designed and implemented a modern data lakehouse architecture on AWS using Delta Lake, consolidating data from 15+ sources. Reduced query times by 70% and storage costs by 40%.",
    image: "/images/projects/data-lakehouse.png",
    tags: ["AWS", "Delta Lake", "Terraform", "Airflow", "dbt"],
    links: [
      { text: "GitHub", href: "https://github.com/yourusername/data-lakehouse" },
      { text: "Live Demo", href: "#" },
    ],
  },
  {
    title: "ETL Orchestration Framework",
    description:
      "Created a reusable ETL orchestration framework with Apache Airflow, supporting dynamic DAG generation and automated data quality checks across multiple environments.",
    image: "/images/projects/etl-framework.png",
    tags: ["Airflow", "Python", "PostgreSQL", "Docker", "CI/CD"],
    links: [
      { text: "GitHub", href: "https://github.com/yourusername/etl-framework" },
    ],
  },
  {
    title: "Analytics Dashboard Platform",
    description:
      "Developed a self-service analytics dashboard platform with embedded visualizations, serving 500+ internal users. Built on a modern data stack with dbt transformations and Looker.",
    image: "/images/projects/analytics-dashboard.png",
    tags: ["dbt", "BigQuery", "Looker", "Python", "GCP"],
    links: [
      { text: "GitHub", href: "https://github.com/yourusername/analytics-dashboard" },
      { text: "Live Demo", href: "#" },
    ],
  },
  {
    title: "Data Quality Monitoring System",
    description:
      "Implemented an automated data quality monitoring and alerting system that validates data freshness, completeness, and accuracy across 200+ tables in production.",
    image: "/images/projects/data-quality.png",
    tags: ["Great Expectations", "Python", "Slack API", "Airflow"],
    links: [
      { text: "GitHub", href: "https://github.com/yourusername/data-quality" },
    ],
  },
  {
    title: "ML Feature Store",
    description:
      "Built a centralized feature store for machine learning teams, enabling feature reuse across projects. Supports batch and real-time feature serving with versioning and monitoring.",
    image: "/images/projects/feature-store.png",
    tags: ["Feast", "Redis", "Spark", "Kubernetes", "Python"],
    links: [
      { text: "GitHub", href: "https://github.com/yourusername/feature-store" },
      { text: "Documentation", href: "#" },
    ],
  },
  {
    title: "Data Catalog & Lineage Tool",
    description:
      "Created an internal data catalog with automated lineage tracking that maps data flow from source to dashboard, improving data discovery and compliance efforts.",
    image: "/images/projects/data-catalog.png",
    tags: ["Python", "Neo4j", "React", "FastAPI", "Docker"],
    links: [
      { text: "GitHub", href: "https://github.com/yourusername/data-catalog" },
    ],
  },
  {
    title: "Serverless Data API",
    description:
      "Designed a serverless REST API for data access using AWS Lambda and API Gateway, enabling teams to query curated datasets without direct database access.",
    image: "/images/projects/serverless-api.png",
    tags: ["AWS Lambda", "API Gateway", "DynamoDB", "Python", "Terraform"],
    links: [
      { text: "GitHub", href: "https://github.com/yourusername/serverless-api" },
      { text: "API Docs", href: "#" },
    ],
  },
];
