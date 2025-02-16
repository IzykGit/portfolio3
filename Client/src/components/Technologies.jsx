
import { motion } from "framer-motion";
import { generateRandomAnimation } from "../functions/Animations";

const Technologies = () => {

    const technologies = [
        {
            text: "Python",
            link: "https://docs.python.org/3/",
        },
        {
            text: "Javascript",
            link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        },
        {
            text: "React",
            link: "https://react.dev/"
        },
        {
            text: "Tailwind",
            link: "https://tailwindcss.com/"
        },
        {
            text: "Tanstack Query",
            link: "https://tanstack.com/query/latest/docs/framework/react/overview"
        },
        {
            text: "Framer Motion",
            link: "https://framermotion.framer.website/"
        },
        {
            text: "Flask",
            link: "https://flask.palletsprojects.com/en/stable/"
        },
        {
            text: "Express",
            link: "https://expressjs.com/"
        },
        {
            text: "MongoDB",
            link: "https://www.mongodb.com/"
        },
        {
            text: "AWS DynamoDB",
            link: "https://aws.amazon.com/dynamodb/"
        },
        {
            text: "Postgres",
            link: "https://www.postgresql.org/"
        },
        {
            text: "Linode",
            link: "https://www.linode.com/"
        },
        {
            text: "AWS",
            link: "https://aws.amazon.com/"
        },
        {
            text: "PythonAnywhere",
            link: "https://www.pythonanywhere.com/"
        },
        {
            text: "Git",
            link: "https://docs.github.com/en"
        },
        {
            text: "Figma",
            link: "https://www.figma.com/"
        }

    ]

    const techHeading = "Technologies"
    const techHeadingArr = techHeading.split("")

    return (
        <section className='text-white flex flex-col gap-4 w-[42rem]'>
            <div className='flex'>
                {techHeadingArr.map((letter, i) => (
                    <motion.p
                        animate={generateRandomAnimation} key={i}
                        className='text-3xl font-bold'>{letter === " " ? "\u00A0" : letter}
                    </motion.p>
                ))}
            </div>

            <div className="flex flex-wrap gap-4">
                {technologies.map((tech, i) => (
                    <motion.a key={i}
                        class="backdrop-blur-lg bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border transition duration-200 border-blue-500 hover:border-transparent rounded"
                        target="_blank" href={tech.link}
                        animate={generateRandomAnimation}>{tech.text}</motion.a>
                ))}
            </div>
        </section>
    )
}

export default Technologies