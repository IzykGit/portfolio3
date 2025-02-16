import { motion } from "framer-motion"
import { ThemeContext } from "../contexts/ThemeContext"
import { useContext } from "react"
import { generateRandomAnimation } from "../functions/Animations"

const HeroComponent = () => {
    const { theme } = useContext(ThemeContext)

    const name = "Lance Hemphill"
    const subText = "Software Engineer based in Columbus, OH"
    const nameArr = name.split("")
    const subTextArr = subText.split("")

    const links = [
        {
            text: "Github",
            link: "https://github.com/IzykGit"
        },
        {
            text: "LinkedIn",
            link: "https://www.linkedin.com/in/lance-hemphill-250b85218/"
        },
        {
            text: "Resume",
            link: "../../public/data/Lance Hemphill.pdf"
        }
    ]

    return (
        <section className={`${theme === "dark" ? "text-white" : "text-black"} flex flex-col gap-4 h-fit w-full mx-auto`}>
            <div className="flex flex-wrap">
                {nameArr.map((letter, i) => (
                    <motion.p
                        animate={generateRandomAnimation} key={i}
                        className="text-5xl md:text-7xl font-bold">
                        {letter === " " ? "\u00A0" : letter}
                    </motion.p>
                ))}
            </div>

            <div className="flex flex-wrap">
                {subTextArr.map((letter, i) => (
                    <motion.p
                        animate={generateRandomAnimation} key={i}
                        className="font-semibold text-lg md:text-xl">
                        {letter === " " ? "\u00A0" : letter}
                    </motion.p>
                ))}
            </div>

            <div className="flex flex-wrap gap-4">
                {links.map((link, i) => (
                    <motion.a
                        href={link.link}
                        target="_blank"
                        aria-label={link.text}
                        animate={generateRandomAnimation}
                        key={i}
                        className="backdrop-blur-lg bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border transition duration-200 border-blue-500 hover:border-transparent rounded text-sm md:text-base"
                    >
                        {link.text}
                    </motion.a>
                ))}
            </div>
        </section>
    )
}

export default HeroComponent;
