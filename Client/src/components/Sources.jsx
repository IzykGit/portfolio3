import { motion } from "framer-motion"
import { generateRandomAnimation } from "../functions/Animations"



const Sources = () => {

    const expandAnimation = {
        height: [0, "30rem"],
        opacity: [0, 1],
        dispaly: ["none", "flex"],
        transition: { duration: 0.5, delay: 4 }
    }

    return (
        <section className='flex flex-col text-white w-full'>
            <div className='grid grid-cols-2 w-full'>
                <motion.button
                    className="backdrop-blur-lg bg-transparent cursor-pointer hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border transition duration-200 border-blue-500 hover:border-transparent text-sm md:text-base"
                    animate={generateRandomAnimation()}
                    onClick={console.log("clicked")}>Projects</motion.button>
                <motion.button
                    className="backdrop-blur-lg bg-transparent cursor-pointer hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border transition duration-200 border-blue-500 hover:border-transparent text-sm md:text-base"
                    animate={generateRandomAnimation()}
                    onClick={console.log("clicked")}>Experience</motion.button>
            </div>
            <motion.div className="border-white w-full h-52 py-8 px-8" animate={expandAnimation}>
                <h3 className="text-2xl font-bold">Experience</h3>

                <ul className="list-disc px-12 py-6">
                    <li>
                        <div>
                            <h4 className="font-semibold">{"Tomorrow's"} AI</h4>
                            <p className="italic">October 1st - January 16th</p>
                        </div>

                        <ul>
                            <li></li>
                        </ul>


                    </li>
                </ul>
            </motion.div>
        </section>
    )
}

export default Sources