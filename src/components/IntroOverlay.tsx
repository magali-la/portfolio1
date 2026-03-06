import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

interface IntroProps {
    onFinish: () => void;
}

// svg link frames array for animation
const frames = ["/envclosed.svg", "/envopen.svg", "/envopening.svg", "/envread.svg"]

export default function IntroOverlay({ onFinish }: IntroProps) {
    // state to control which frame of the animation should display
    const [currentFrame, setCurrentFrame] = useState(0);
    // set state to fade out at component level, then call onFinish once done to show the main page once it leaves the tree
    const [isHidden, setIsHidden] = useState<boolean>(false);
    // set is hidden to true to trigger fade out animation
    useEffect(() => {
        // interval to swap frames
        const interval = setInterval(() => {
            // up the count for the frame / index of the path array
            setCurrentFrame(prevFrame => prevFrame + 1);
        }, 1000)

        const timer = setTimeout(() => {
            // trigger the exit animation
            setIsHidden(true);
        }, 4000);

        // clear the timer and interval on unmount
        return () => {
            clearInterval(interval);
            clearTimeout(timer);
        }
    }, []);

    return (
        <AnimatePresence onExitComplete={onFinish}>
            {!isHidden && (
                <motion.div 
                    className="h-full w-full bg-white flex items-center justify-center overflow-visible relative"
                    // motion fade out
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    exit={{ opacity: 0 }}
                >
                    {/* the image is going to swap every interval / add animate presence to control how each frame fades out */}
                    <AnimatePresence>
                        <motion.img
                            key={currentFrame} 
                            src={frames[currentFrame]} 
                            className="h-2/3 absolute object-bottom" 
                            alt="animation of envelope opening"
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3, ease: "linear"}}
                        />
                    </AnimatePresence>
                </motion.div>
            )}
        </AnimatePresence>
    )
}