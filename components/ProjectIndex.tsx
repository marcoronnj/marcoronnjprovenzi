import Link from "next/link";
import type { Lang } from "@/lib/i18n";
import type { Project } from "@/data/projects";

type ProjectIndexProps = {
  lang: Lang;
  projects: Project[];
};

export function ProjectIndex({ lang, projects }: ProjectIndexProps) {
  return (
    <div className="project-index">
      {projects.map((project, index) => (
        <Link
          href={`/${lang}/projects/${project.slug}`}
          className="project-row"
          key={project.slug}
          style={{ "--accent": project.accent } as React.CSSProperties}
        >
          <span className="project-row__count">0{index + 1}</span>
          <span className="project-row__title">{project.title[lang]}</span>
          <span className="project-row__excerpt">{project.excerpt[lang]}</span>
          <span className="project-row__year">{project.year}</span>
        </Link>
      ))}
    </div>
  );
}
