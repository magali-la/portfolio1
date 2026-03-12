import { motion } from "motion/react"

// project link buttons need to take in the link (project.github or project.link) & take in the type of button for color styling
interface ProjectLinkProps {
    href: string,
    label: string,
}

export default function ProjectLink({ href, label }: ProjectLinkProps) {

    return (
        <motion.a href={href} target="_blank" className={`flex items-center w-fit gap-3 py-3 px-7 rounded-xl text-lg font-semibold shadow-3d-sm hover:shadow-3d-blur border-2 border-cream/40 text-cream ${label === "GitHub Repo" ? 'bg-wave': 'bg-cactus'}`}
            // motion animations for hover - scale down
            whileHover={{ scale: 0.95 }}
            // add mobile scale effect
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
        >
            {/* add the relavant bootstrap icon via conditional */}
            <i className={`bi ${label === "GitHub Repo" ? 'bi-github': 'bi-globe2'}`}></i>
            {label}
        </motion.a>
    )
}