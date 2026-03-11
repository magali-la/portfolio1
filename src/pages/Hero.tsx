import { motion } from "motion/react"
import { useEffect, useState } from "react";

export default function Hero() {
    // state to show the intro overlay
    const [showIntro, setShowIntro] = useState<boolean | null>(null);

    // if nothing in session storage, display the intro
    useEffect(() => {
        if (!sessionStorage.getItem("introPlayed")) {
            setShowIntro(true);
        } else {
            setShowIntro(false)
        }
    }, [])

    // callback to handle the overlay animation finishing
    function handleIntroFinish() {
        // when the introo finishes, then set session state so it doesn't play again when the tab is still active even on refresh
        sessionStorage.setItem("introPlayed", "true");
        setShowIntro(false);
    }

    // guard it from not playing th right animation
    if (showIntro === null) return null;

    // define keyframes for the motion animation for card falling and opacity and rotate
    const introAnimation = {
        y: ["-110vh", "8vh", "-4vh", "1vh", "0vh", ], 
        rotate: [-8, 5, -2, 1, 0],
        opacity: [0.75, 0.85, 0.9, 0.95, 1]
    }

    return (
        <div className="h-[65vh] sm:h-[70vh] md:h-[80vh] lg:h-[85vh]">
            {/* ternary handles which animation plays */}
            <motion.div className="h-full flex flex-col items-center justify-between p-10 bg-rose-400 outline-[1.5rem] outline-rose-200/80 -outline-offset-[1.5rem] shadow-pink-900 shadow-2xl relative"
            // hero needs to display out of frame first
            initial={showIntro ? { y: "-110vh", rotate: -8, opacity: 0} : { opacity: 0 }}
            animate={showIntro ? introAnimation : { opacity: 1 }}
            // use a cubic beziar to make sharp fall that then eases out slowly like paper faalling
            transition={showIntro ? {duration: 3, ease: [.25, .61, .77, 1]} : { duration: 2, ease: "easeInOut" }}
            onAnimationComplete={() => {
                // only when the intro is true do you update sessions so this doesn't run every time
                if (showIntro) {
                    handleIntroFinish()
                }
            }}
            >
                {/* texture div */}
                <div className="postcard-texture">
                </div>
                <p className="self-start postcard-greet text-lg md:text-xl lg:text-3xl xl:text-5xl">Greetings from</p>
                <div>
                    <h1 className="text-center postcard-main" data-text="MAGALI LAPU">MAGALI<br/>LAPU</h1>
                </div>
                <p className="self-end postcard-greet text-right text-lg md:text-xl lg:text-3xl xl:text-4xl">Full Stack Software Engineer</p>
            </motion.div>    
        </div>
    )
}