import { motion } from "framer-motion"
import { ThemeContext } from "../contexts/ThemeContext"
import { useContext } from "react"
import { randomNameAnimation } from "../functions/Animations"



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
        <>
            <section className={`${theme === "dark" ? "text-white" : "text-black"} flex flex-col gap-4 h-fit`}>
                <div className="flex">
                    {nameArr.map((letter, i) => (
                        <motion.p
                            animate={randomNameAnimation} key={i}
                            className='text-7xl font-bold'>{letter === " " ? "\u00A0" : letter}
                        </motion.p>
                    ))}
                </div>

                <div className="flex">
                    {subTextArr.map((letter, i) => (
                        <motion.p
                            animate={randomNameAnimation} key={i}
                            className='font-semibold text-xl'>{letter === " " ? "\u00A0" : letter}
                        </motion.p>
                    ))}
                </div>


                <div className="flex gap-6">
                    {links.map((link, i) => (
                        <motion.a
                            href={link.link}
                            target="_blank"
                            aria-label={link.text}
                            animate={randomNameAnimation} key={i}
                            className='text-sm cursor-pointer hover:scale-[1.1] trasnition duration-200 bg-[#024D84] rounded-sm p-2 w-22 flex justify-center'
                        >
                            {link.text}
                        </motion.a>
                    ))}
                </div>

            </section>
        </>
    )
}

export default HeroComponent;