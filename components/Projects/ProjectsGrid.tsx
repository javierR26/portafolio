import { ProjectCard } from "./ProjectCard";
import { projects } from "@/data/projects";

export function ProjectsGrid() {
    return(
    <section id="Proyectos" className="w-full grid sm:grid-cols-2 sm:gap-1 md:grid-cols-3 md:gap-1 lg:grid-cols-4 gap-6">
      {projects.map(project => (
        <ProjectCard key={project.id} {...project}/>
      ))}
    </section>
    )
}