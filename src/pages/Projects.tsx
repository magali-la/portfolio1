import ProjectCard from "../components/Projects/ProjectCard";
import { projects } from "../data/portfolio";

export default function Projects() {

    return (
        <section id="projects" aria-label="projects section" className="flex flex-col items-center scroll-mt-24 px-8 md:px-10">
            <h2 className="text-pomegranate font-black text-4xl mb-2 text-center">Featured Projects</h2>

            {/* all the projects mapped */}
            <div className="w-full flex flex-col gap-10">
                {/* second argument in map is index, pass it down to control the alternating postcard stack and details */}
                {projects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index}/>
                ))}
            </div>
        </section>
    )
}