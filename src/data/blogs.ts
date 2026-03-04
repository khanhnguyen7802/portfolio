import { BlogPost } from "@/types";

export const blogs: BlogPost[] = [
  {
    title: "Building a Modern Data Platform from Scratch",
    description:
      "A comprehensive guide on designing and implementing a data platform using the modern data stack, covering ingestion, transformation, and serving layers.",
    type: "Cloud",
    image: "/images/blogs/data-platform.png",
    link: "https://medium.com/@yourusername/building-data-platform",
  },
  {
    title: "Apache Airflow Best Practices for Production",
    description:
      "Lessons learned from running Airflow in production at scale, including DAG design patterns, monitoring strategies, and common pitfalls to avoid.",
    type: "Infrastructure",
    image: "/images/blogs/airflow-practices.png",
    link: "https://medium.com/@yourusername/airflow-best-practices",
  },
  {
    title: "Data Quality at Scale with Great Expectations",
    description:
      "How we implemented automated data quality checks across 200+ tables using Great Expectations, integrated with our Airflow pipelines.",
    type: "Data Engineering",
    image: "/images/blogs/data-quality.png",
    link: "https://medium.com/@yourusername/data-quality-at-scale",
  },
  {
    title: "Migrating from Batch to Real-Time Streaming",
    description:
      "Our journey migrating critical data pipelines from batch processing to real-time streaming using Kafka and Spark Structured Streaming.",
    type: "Streaming",
    image: "/images/blogs/batch-to-streaming.png",
    link: "https://medium.com/@yourusername/batch-to-streaming",
  },
  {
    title: "Cost Optimization Strategies for Cloud Data Warehouses",
    description:
      "Practical strategies that helped us reduce our Snowflake and BigQuery costs by 40% without sacrificing query performance.",
    type: "Cloud",
    image: "/images/blogs/cost-optimization.png",
    link: "https://medium.com/@yourusername/cloud-cost-optimization",
  },
];
