import { motion } from "motion/react"
import { useState } from "react"
import bookColor from "../assets/bookhalf.png"
import bookPink from "../assets/bookduo.png"
import stickerColor from "../assets/stickerhalf.png"
import stickerDark from "../assets/stickerduoblk.png"

export default function About() {
    // state for hover event
    const [isBookHovered, setIsBookHovered] = useState<boolean>(false);
    const [isStickerHovered, setIsStickerHovered] = useState<boolean>(false);

    return (
        <section id="about" aria-label="about section" className="scroll-mt-24">
            <h2 className="text-pomegranate text-center mb-2 font-black text-4xl">About Me</h2>
            {/* actual about card */}
            <motion.div className="bg-wave px-8 py-7 rounded-2xl shadow-3d flex flex-col gap-2 max-w-screen w-[87vw] sm:w-[85vw] md:w-[75vw] lg:w-[65vw] border-2 border-cream/80 text-cream relative overflow-clip"
            >
                {/* noise overlay in css */}
                <div className="noise-texture"></div>

                {/* deco teacher image */}
                <motion.img
                    // swap the image
                    className="w-28 sm:w-36 md:w-48 lg:w-56 self-center -mt-6"
                    src={isBookHovered ? bookColor : bookPink}
                    // hide deco images from screen readers
                    alt=""
                    aria-hidden="true"
                    whileHover={{ rotate: 5 }}
                    // tap to trigger animation on mobile
                    whileTap={{ rotate: 5}}
                    transition={{ duration: 0.5 }}
                    onMouseEnter={() => setIsBookHovered(true)}
                    onMouseLeave={() => setIsBookHovered(false)}
                />

                {/* basic info */}
                <p className="text-lg md:text-xl flex flex-row gap-4">
                    <span className="text-bubblegum">Name</span>
                    <i className="bi bi-heart-arrow"></i>
                    Magali Lapu
                </p>
                <p className="text-lg md:text-xl flex flex-row gap-4">
                    <span className="text-bubblegum">Role</span>
                    <i className="bi bi-heart-arrow"></i>
                    Full Stack Engineer
                </p>

                {/* description section */}
                <div className="flex flex-col gap-2 border-t-2 border-double border-cream/50 pt-2">
                    <p>Hi I'm <span className="text-bubblegum font-semibold">Magali Lapu</span>. I'm a full stack software engineer with a nontraditional path. After 5 years teaching in French secondary and higher ed and living in <span className="text-peach font-semibold">Lyon, France</span>, a passion for creating accessible, user-centered digital learning experiences for students led me to software engineering. I'm a Fulbright alumna and recently graduated as valedictorian of my bootcamp at Per Scholas.</p>

                    <p>I consider myself to be a <span className="text-bubblegum font-semibold">design-minded developer</span>, obsessed with the crossroads between UX and code. I'm seeking roles and collaborations where <span className="text-peach font-semibold">design</span> and <span className="text-bubblegum font-semibold"> development</span> live in the same room.</p> 
                </div>

                {/* deco image software engineer sticker */}
                <motion.img
                    // swap the image
                    className="w-28 sm:w-36 md:w-48 lg:w-56 self-center -mb-6"
                    src={isStickerHovered ? stickerColor : stickerDark}
                    // hide deco images from screen readers
                    alt=""
                    aria-hidden="true"
                    whileHover={{ rotate: -5 }}
                    whileTap={{ rotate: -5}}
                    transition={{ duration: 0.5 }}
                    onMouseEnter={() => setIsStickerHovered(true)}
                    onMouseLeave={() => setIsStickerHovered(false)}
                />
            </motion.div>
        </section>
    )
}