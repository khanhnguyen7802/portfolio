import { BlogPost } from "@/types";

export const blogs: BlogPost[] = [
  {
    title: "Introduction to Docker",
    description:
      "A brief introduction to Docker, including installation guides.",
    type: "Containerization",
    image: "/images/blogs/docker.png",
    link: "https://medium.com/towards-data-engineering/understanding-docker-from-its-roots-part-1-44ed1e111313",
  },
  {
    title: "Road to advanced SQL",
    description:
      "Overall roadmap to master SQL, with advanced techniques and practice exercises.",
    type: "Queries",
    image: "/images/blogs/sql.png",
    link: "https://medium.com/learning-data/sql-queries-can-do-more-than-what-you-thought-c271898d8ee9",
  },
  {
    title: "Introduction to Airflow 3.0",
    description:
      "A brief introduction and installation guide to Airflow 3 - a popular orchestration tool.",
    type: "Orchestration",
    image: "/images/blogs/airflow.png",
    link: "https://medium.com/learning-data/apache-airflow-3-0-a-general-to-deep-picture-part-1-d09cee921cd7",
  },
  {
    title: "All about SQL JOINS",
    description:
      "Explanation of different types of SQL JOINs and their use cases. Comprehensive illustration is included.",
    type: "Queries",
    image: "/images/blogs/sql-joins.png",
    link: "https://medium.com/towards-data-engineering/sql-joins-do-you-know-them-all-0de5cd1aee3b",
  },
  // {
  //   title: "Cost Optimization Strategies for Cloud Data Warehouses",
  //   description:
  //     "Practical strategies that helped us reduce our Snowflake and BigQuery costs by 40% without sacrificing query performance.",
  //   type: "Cloud",
  //   image: "/images/blogs/cost-optimization.png",
  //   link: "https://medium.com/@yourusername/cloud-cost-optimization",
  // },
];
