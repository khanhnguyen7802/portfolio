"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import { skills } from "@/data/skills";
import { cn } from "@/lib/utils";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiGnubash,
  SiDatabricks,
  SiApachespark,
  SiApacheairflow,
  SiDbt,
  SiGooglecloud,
  SiDocker,
  SiPostgresql,
  SiDuckdb,
  SiMongodb,
  SiGit,
  SiLinux,
  SiApachesuperset,
} from "react-icons/si";
import { FaJava, FaMicrosoft } from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import { TbBrandAzure } from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";
import type { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
  Python: SiPython,
  SQL: TbSql,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  Java: FaJava,
  Bash: SiGnubash,
  Databricks: SiDatabricks,
  "Microsoft Fabric": FaMicrosoft,
  "Apache Spark": SiApachespark,
  "Apache Airflow": SiApacheairflow,
  "Apache Superset": SiApachesuperset,
  dbt: SiDbt,
  Azure: TbBrandAzure,
  "Google Cloud": SiGooglecloud,
  Docker: SiDocker,
  PostgreSQL: SiPostgresql,
  DuckDB: SiDuckdb,
  MongoDB: SiMongodb,
  "ADLS Gen 2": VscAzure,
  Git: SiGit,
  Linux: SiLinux,
};

export default function TechnologiesSection() {
  const categories = Array.from(new Set(skills.map((s) => s.category)));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {categories.map((category, i) => (
        <AnimatedSection key={category} delay={i * 0.08}>
          <div className="p-5 rounded-xl border border-border bg-card h-full">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills
                .filter((s) => s.category === category)
                .map((skill) => {
                  const Icon = iconMap[skill.name];
                  return (
                    <div
                      key={skill.name}
                      title={skill.name}
                      className={cn(
                        "flex items-center gap-2 px-3 py-1.5 rounded-lg",
                        "bg-muted/50 border border-border/50",
                        "text-sm text-muted-foreground",
                        "hover:border-accent/40 hover:text-foreground transition-colors"
                      )}
                    >
                      <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center text-accent">
                        {Icon ? (
                          <Icon className="w-4 h-4" />
                        ) : (
                          <span className="text-xs font-bold">
                            {skill.name.charAt(0)}
                          </span>
                        )}
                      </div>
                      <span className="text-xs font-medium">{skill.name}</span>
                    </div>
                  );
                })}
            </div>
          </div>
        </AnimatedSection>
      ))}
    </div>
  );
}
