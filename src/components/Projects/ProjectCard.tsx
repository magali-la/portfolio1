import type { Project } from "../../data/portfolio";
import PostcardStack from "./PostcardStack";

// the project card holds both columns - the postcard stack and the general description, so it needs to pass down whatever project is being mapped in Projects.tsx
interface ProjectCardProps {
    project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="flex flex-col md:flex-row items-start gap-10">
            {/* postcard stack - left */}
            <PostcardStack project={project}/>

            {/* project details - right */}
            <div className="flex flex-col gap-4 w-full">
                <h3 className="text-3xl">{project.title}</h3>
                <p className="text-lg">{project.desc}</p>
                {/* tech stack - mapped tags*/}
                <h4 className="text-2xl">Tech Stack</h4>
                <div className="grid grid-cols-2 gap-x-6">
                    {project.stack.map((skill) => (
                        <p className="text-lg">{skill}</p>
                    ))}
                </div>

                {/* links to github & live site */}
                <div className="flex flex-row gap-6">
                    <a href={project.github} target="_blank">Github</a>
                    <a href={project.live} target="_blank">Live Site</a>
                </div>
            </div>
        </div>
    )
}