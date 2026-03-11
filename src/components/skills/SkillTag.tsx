import { motion } from "motion/react"

// props to pass through
interface SkillTagProps {
    name: string,
    color: string
}

export default function SkillTag({ name, color }: SkillTagProps) {
    // set variables for conditional styling
    let shadowClass = "";
    let borderClass = "";

    // add lighter border and darker shadow so colors don't blend when bg is coffee
    if (color === "bg-coffee") {
        shadowClass = 'shadow-3d-dark';
        borderClass = 'border-cream/10';
    } else {
        shadowClass = 'shadow-3d-sm';
        borderClass = 'border-coffee/50';
    }

    return (
        <motion.div className={`flex items-center gap-2 py-2 pl-1 pr-4 rounded-r-xl font-semibold text-cream border-2 ${color} ${borderClass} ${shadowClass} relative overflow-hidden cursor-default`}
            // hover effect, slight scale and rotate
            whileHover={{ scale: 1.05, rotate: -1 }}
            transition={{ duration: 0.4 }}
        >
            {/* plastic texture */}
            <div className="plastic-texture"></div>

            {/* the eyelet on the left of the tag - the transparent hole as pseudo in css */}
            <div className="bg-cream rounded-full size-5 shrink-0 flex items-center justify-center skill-hole" aria-hidden="true"></div>
            {name}
        </motion.div>
    )
}