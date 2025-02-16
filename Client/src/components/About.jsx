import { motion } from 'framer-motion'
import { randomNameAnimation } from '../functions/Animations'

const About = () => {

    const aboutHeading = "About"
    const aboutText = "A full stack developer crafting innovative, scalable software solutions with experience in modern web development frameworks."
    const aboutHeadingArr = aboutHeading.split("")
    const aboutTextArr = aboutText.split(" ")

    console.log(aboutTextArr)


    return (
        <section className='text-white flex flex-col gap-4 w-92'>
            <div className='flex'>
                {aboutHeadingArr.map((letter, i) => (
                    <motion.p
                        animate={randomNameAnimation} key={i}
                        className='text-3xl font-bold'>{letter === " " ? "\u00A0" : letter}
                    </motion.p>
                ))}
            </div>

            <div className='flex flex-wrap'>
                {aboutTextArr.map((word, wordIndex) => (
                    <div key={wordIndex} className="flex">
                        {word.split("").map((letter, letterIndex) => (
                            <motion.p
                                animate={randomNameAnimation} 
                                key={`${wordIndex}-${letterIndex}`}
                                className='text-xl'
                            >
                                {letter}
                            </motion.p>
                        ))}
                        <span className="w-2" />
                    </div>
                ))}
            </div>

        </section>
    )
}

export default About