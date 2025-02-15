import { motion } from "framer-motion"
import { ThemeContext } from "../contexts/ThemeContext"
import { useContext } from "react"



const HeroComponent = () => {

      const { theme } = useContext(ThemeContext)

    const name = "Lance-Hemphill"
    const nameArr = name.split("")

    console.log(nameArr)

    const randomNameAnimation = () => {
        const randomX = Math.random() * (300 - (-300) + 1) + (-300);
        const randomY = Math.random() * (300 - (-300) + 1) + (-300);

        const mainDuration = 0.3;
        const randomDelayMain = Math.random() * (0.5 - (0.3) + 1) + (0.3)

        const randomDelayOpacity = Math.random() * (1 - (randomDelayMain + mainDuration) + 1) + (randomDelayMain + mainDuration)

        
        return {
            x: [ randomX, 0 ],
            y: [ randomY, 0 ],
            opacity: [1, 0, 1],
            transition: { delay: randomDelayMain, duration: mainDuration, ease: "easeIn", opacity: { duration: 0.2, delay: randomDelayOpacity } }
        }
    }


    return (
        <section className={`${theme === "dark" ? "text-white" : "text-black"} flex`}>
            {nameArr.map((letter, i) => (
                <motion.h1 animate={randomNameAnimation}  key={i} className='text-6xl font-bold'>{letter === "-" ? "\u00A0" : letter}</motion.h1>
            ))}
        </section>
    )
}

export default HeroComponent;