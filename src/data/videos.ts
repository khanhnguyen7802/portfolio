import { Video } from "@/types";

export const videos: Video[] = [
  {
    title: "Building Scalable Data Pipelines with Apache Spark",
    description:
      "Conference talk on designing and optimizing Spark-based data pipelines for production workloads, covering partitioning strategies and resource tuning.",
    thumbnail: "/images/videos/spark-talk.png",
    link: "https://www.youtube.com/watch?v=example1",
    category: "Conference Talk",
  },
  {
    title: "Modern Data Stack Workshop: From Ingestion to Insights",
    description:
      "Hands-on workshop demonstrating how to build a complete data pipeline using Airbyte, dbt, and Snowflake in under an hour.",
    thumbnail: "/images/videos/mds-workshop.png",
    link: "https://www.youtube.com/watch?v=example2",
    category: "Workshop",
  },
  {
    title: "Data Engineering with Python: Best Practices",
    description:
      "Webinar covering Python best practices for data engineers, including testing strategies, project structure, and performance optimization.",
    thumbnail: "/images/videos/python-de.png",
    link: "https://www.youtube.com/watch?v=example3",
    category: "Webinar",
  },
];
