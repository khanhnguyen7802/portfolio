import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Spotify Wrapped",
    description:
      "SpotifyWrapped analyzes and tracks your Spotify statistics and listening habits. \
      It replicates the real SpotifyWrapped but in a narrower interval. \
      A data pipeline that is scheduled to get data from your Spotify, extract the data, load the raw data and perform transformation (ELT).",
    image: "/images/projects/spotify-wrapped.png",
    tags: ["Azure VM", "Docker", "Airflow", "Databricks", "ADLS Gen2"],
    links: [
      { text: "GitHub", href: "https://github.com/khanhnguyen7802/SpotifyWrapped" },
      // { text: "Blog Post", href: "#" },
    ],
  },
  {
    title: "Logistics Tracking Analytics",
    description:
      "An integrated DE + DA project building an automated data pipeline to power scalable analytics and executive-ready dashboards for logistics operations.",
    image: "/images/projects/logistics-tracking.png",
    tags: ["Python", "DuckDB", "Airflow", "Apache Superset", "dbt"],
    links: [
      { text: "GitHub", href: "https://github.com/khanhnguyen7802/logistics-analytics" },
      // { text: "Live Demo", href: "#" },
    ],
  },
  {
    title: "Formula1 Racing Pipeline ",
    description:
      "A data pipeline that processes F1 races (2021) in medallion architecture. \
      Eventually, dashboards and charts are generated to provide visualization.",
    image: "/images/projects/f1-race.png",
    tags: ["Databricks", "PySpark", "ADLS Gen2", "Data Vault", "Azure Data Factory"],
    links: [
      { text: "GitHub", href: "https://github.com/khanhnguyen7802/DataEngineer101/tree/main/databricks" },
    ],
  },
  {
    title: "Job Posting Platform",
    description:
      "An online platform where companies can find and assign employees (i.e., students) with specific tasks. \
      Students then are paid based on the contract. If there are conflicts, the platform admin will be responsible for resolving appeals.",
    image: "/images/projects/earnit.png",
    tags: ["HTML", "CSS", "JavaScript", "Java", "Bootstrap Studio"],
    links: [
      { text: "GitHub", href: "https://github.com/khanhnguyen7802/Module4-EarnIt" },
      // { text: "Live Demo", href: "#" },
    ],
  },
  {
    title: "Safe Lock",
    description:
      "DIY safe lock that uses servo to automate locking, a keypad switch to type password, LED screen to display the operation and GPS for tracking.",
    image: "/images/projects/safe-lock.png",
    tags: ["Python", "Java", "JavaScript", "Google Map API"],
    links: [
      { text: "GitHub", href: "https://github.com/khanhnguyen7802/Module5-SafeLock" },
    ],
  },
  {
    title: "Portfolio",
    description:
      "Self-portfolio with the help of AI.",
    image: "/images/projects/portfolio.png",
    tags: ["Nextjs", "React", "TypeScript", "JavaScript"],
    links: [
      { text: "GitHub", href: "https://github.com/khanhnguyen7802/portfolio" },
      { text: "Link demo", href: "#" },
    ],
  },
  {
    title: "Strukton Train",
    description:
      "A Proof of Concept (PoC) illustrates the train shunting process in real life from Strukton.",
    image: "/images/projects/strukton.png",
    tags: ["Vue", "C#", ".NET", "Microsoft SQL Server"],
    links: [
      { text: "GitHub", href: "https://github.com/khanhnguyen7802/strukton" },
      // { text: "Link demo", href: "#" },
    ],
  },
];
