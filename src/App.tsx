import { Analytics } from "@vercel/analytics/react"
import { motion } from "motion/react"
import Hero from "./pages/Hero"
import NavBar2 from "./components/NavBar/NavBar2"
import About from "./pages/About"
import Skills from "./pages/Skills"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"

export default function App() {
  
  return (
    <motion.div className="min-h-screen w-full">
      <Analytics/>
      <NavBar2/>

      {/* hero */}
      <div className="mt-24"><Hero/></div>
      
      {/* projects */}
      <div className="mt-20"><Projects/></div>

      {/* skills */}
      <div className="flex justify-center mt-20"><Skills/></div>

      {/* about section */}
      <div className="flex justify-center mt-20"><About/></div>

      {/* contact */}
      <div className="mt-20"><Contact/></div>
    </motion.div>
  )
}