import ProjectCard from "../components/Projects/ProjectCard";
import { projects } from "../data/portfolio";

export default function Projects() {

    return (
        <section id="projects" aria-label="projects section" className="flex flex-col items-center scroll-mt-24 px-8 md:px-10">
            <h2 className="text-pomegranate font-black text-4xl mb-2 text-center">Featured Projects</h2>

            {/* all the projects mapped */}
            <div className="w-full flex flex-col gap-6 items-center md:items-stretch">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project}/>
                ))}
            </div>
        </section>
    )
}