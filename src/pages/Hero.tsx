import { motion } from "motion/react"
import IntroOverlay from "../components/IntroOverlay";
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

    return (
        <div className="h-[40vh] min-h-[40vh] sm:h-[60vh] sm:min-h-[60vh] md:h-[50vh] md:min-h-[50vh] bg-white">
            {showIntro ? (
                <IntroOverlay onFinish={handleIntroFinish}/>
            ) : (
                <motion.div className="h-full flex flex-col items-center justify-between p-10"
                // motion fade in
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                >
                    <p className="self-start">greetings from</p>
                    <div>
                        <h1 className="text-6xl sm:text-9xl text-center">Magali Lapu</h1>
                    </div>
                    <p className="self-end">Full Stack Software Engineer</p>
                </motion.div> 
            )}
            
        </div>
    )
}