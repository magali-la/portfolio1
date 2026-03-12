import { motion } from "motion/react"

export default function Contact() {
    return (
        <footer id="contact" className="relative bg-eggplant/50 scroll-mt-24">
            {/* noise texture */}
            <div className="noise-texture"></div>

            {/* main content */}
            <div className="relative flex flex-col items-center gap-8 px-8 py-9">

                {/* name - use the same class as the hero section main text, but change the color */}
                <h2 className="font-mplus font-black text-center postcard-main text-cream! text-7xl! sm:text-8xl!">MAGALI<br/>LAPU</h2>

                {/* role */}
                <p className="font-right text-coffeebean/90 text-2xl uppercase text-center">Full Stack Engineer</p>

                {/* links */}
                <div className="flex flex-wrap justify-center gap-4 text-2xl">
                    {/* github */}
                    <motion.a href="https://github.com/magali-la" target="_blank" className="flex items-center gap-4 rounded-2xl w-fit py-2 px-6 shadow-3d-dark hover:shadow-3d-blur text-cream bg-cactus border-2 border-cream/40"
                        // motion animations for hover - scale down
                        whileHover={{ scale: 0.95 }}
                        // add mobile scale effect
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                    > 
                        <i className="bi bi-github"></i>
                        GitHub
                    </motion.a>

                    {/* linkedin */}
                    <motion.a href="https://linkedin.com/in/magalilapu" target="_blank" className="flex items-center gap-4 rounded-2xl w-fit py-2 px-6 shadow-3d-dark hover:shadow-3d-blur text-cream bg-wave border-2 border-cream/40"
                        // motion animations for hover - scale down
                        whileHover={{ scale: 0.95 }}
                        // add mobile scale effect
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                    >
                        <i className="bi bi-linkedin"></i>
                        LinkedIn
                    </motion.a>
                    
                    {/* email link */}
                    <motion.a href="mailto:magali.lapu@gmail.com" className="flex items-center gap-4 rounded-2xl w-fit py-2 px-6 shadow-3d-dark hover:shadow-3d-blur text-cream bg-pomegranate border-2 border-cream/40"
                        // motion animations for hover - scale down
                        whileHover={{ scale: 0.95 }}
                        // add mobile scale effect
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                    >
                        <i className="bi bi-envelope"></i>
                        Email
                    </motion.a>
                </div>

                {/* bottom part */}
                <div className="w-full border-t-2 border-dashed border-coffeebean/90 pt-6 flex justify-between items-center text-coffeebean">
                    <p className="">© 2026 Magali Lapu</p>
                    {/* scroll to top handler */}
                    <button className="hover:text-coffeebean hover:font-bold cursor-pointer flex items-center gap-3 text-base transition-all duration-200" onClick={() => window.scrollTo(0, 0)}>
                        <i className="bi bi-arrow-up"></i>
                        Back to top
                    </button>
                </div>
            </div>
        </footer>
    )
}