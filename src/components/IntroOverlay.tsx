import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

interface IntroProps {
    onFinish: () => void;
}

export default function IntroOverlay({ onFinish }: IntroProps) {
    // set state to fade out at component level, then call onFinish once done to show the main page once it leaves the tree
    const [isHidden, setIsHidden] = useState<boolean>(false);
    // set is hidden to true to trigger fade out animation
    useEffect(() => {
        const timer = setTimeout(() => {
            // trigger the exit animation
            setIsHidden(true);
        }, 4000);

        // clear the time on unmount
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence onExitComplete={onFinish}>
            {!isHidden && (
                <motion.div 
                    className="h-full w-full bg-white flex items-center justify-center overflow-hidden"
                    // motion fade out
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    exit={{ opacity: 0 }}
                >
                    <h1>Test hero overlay</h1>
                </motion.div>
            )}
        </AnimatePresence>
    )
}