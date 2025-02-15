import { motion } from "framer-motion"
import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext"

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const { theme } = useContext(ThemeContext)


  const rotateAndExpand = {
    rotate: "180deg",
    width: 400,
    height: "80%",
    transition: { duration: 0.4, ease: "easeInOut", width: { delay: 0.4 }, height: { delay: 0.4 }, repeatType: "reverse" }
  }

  const rotateAndCollapse = {
    rotate: "0deg",
    width: 64,
    transition: { duration: 0.4, ease: "easeInOut", rotate: { delay: 0.4, duration: 0.4 } }
  };


  const headerClicked = () => {
    setExpanded(!expanded)
    // toggleTheme()
  }

  return (
    <motion.header
      variants={{ rotateAndExpand, rotateAndCollapse }}
      animate={expanded ? "rotateAndExpand" : "rotateAndCollapse"}
      onClick={headerClicked}
      className={`border-2 ${theme === "dark" ? "bg-white" : "bg-black"} w-16 h-16 top-6 right-6 absolute rounded-xl cursor-pointer`} 
      >
    </motion.header>
  )
}

export default Header