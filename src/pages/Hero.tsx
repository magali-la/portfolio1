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
        <div className="h-[65vh] sm:h-[70vh] md:h-[80vh] lg:h-[85vh] bg-white">
            {showIntro ? (
                <IntroOverlay onFinish={handleIntroFinish}/>
            ) : (
                <motion.div className="h-full flex flex-col items-center justify-between p-10 bg-rose-400 outline-[1.5rem] outline-rose-200/80 -outline-offset-[1.5rem] shadow-pink-900 shadow-2xl relative"
                // motion fade in
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
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
            )}
            
        </div>
    )
}