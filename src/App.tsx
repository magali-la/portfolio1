import { motion } from "motion/react"
import NavBar from "./components/NavBar/NavBar"
import Hero from "./pages/Hero"

export default function App() {
  
  return (
    <motion.div className="bg-pomegranate min-h-screen w-full">
      <NavBar/>

      {/* hero */}
      <Hero/>

      {/* about section */}

      {/* skills */}

      {/* projects */}

      {/* contact */}
    </motion.div>
  )
}