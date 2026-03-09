import { motion } from "motion/react"
import Hero from "./pages/Hero"
import NavBar2 from "./components/NavBar/NavBar2"

export default function App() {
  
  return (
    <motion.div className="min-h-screen w-full">
      <NavBar2/>

      {/* hero */}
      <div className="mt-24"><Hero/></div>

      {/* about section */}

      {/* skills */}

      {/* projects */}

      {/* contact */}
    </motion.div>
  )
}