import type { Project } from "../../data/portfolio";
import PostcardStack from "./PostcardStack";
import ProjectLink from "./ProjectLink";
import StackTag from "./StackTag";

// the project card holds both columns - the postcard stack and the general description, so it needs to pass down whatever project is being mapped in Projects.tsx
interface ProjectCardProps {
    project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="flex flex-col md:flex-row items-start gap-10 w-full">
            {/* postcard stack - left */}
            <PostcardStack project={project}/>

            {/* project details - right */}
            <div className="flex flex-col gap-4 sm:gap-6 w-full">
                <h3 className="text-3xl">{project.title}</h3>
                <p className="text-lg">{project.desc}</p>

                {/* tech stack - mapped tags*/}
                <div className="space-y-3">
                    <h4 className="text-2xl">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                        {project.stack.map((skill) => (
                            <StackTag key={skill} name={skill} color={project.stackColor}/>
                        ))}
                    </div>
                </div>

                {/* links to github & live site */}
                <div className="space-y-3">
                    <h4 className="text-2xl">Links</h4>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                        <ProjectLink href={project.github} label="GitHub Repo" />
                        <ProjectLink href={project.live} label="Live Site" />
                    </div>
                </div>
            </div>
        </div>
    )
}