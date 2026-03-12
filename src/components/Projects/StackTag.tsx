import { motion } from "motion/react"

// props to pass through
interface StackTagProps {
    name: string,
    color: string
}

export default function StackTag({ name, color }: StackTagProps) {

    return (
        <motion.div className={`${color} py-1 px-2 rounded-xl shadow-3d-sm font-normal text-cream border-2 border-coffee/40 relative overflow-hidden cursor-default`}
            // hover effect, slight scale and rotate
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ duration: 0.4 }}
        >
            {/* plastic texture */}
            <div className="plastic-texture"></div>
            {name}
        </motion.div>
    )
}