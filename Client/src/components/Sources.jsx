import { motion } from "framer-motion"
import { generateRandomAnimation } from "../functions/Animations"
import { useEffect, useState } from "react"



const Sources = () => {

    const [data, setData] = useState(null)

    const expandAnimation = {
        maxHeight: [0, "60rem"],
        opacity: [0, 1],
        dispaly: ["none", "flex"],
        transition: { duration: 0.5, delay: 4 }
    }

    useEffect(() => {
        const getData = async () => {
            const response = await fetch('../../public/data/Experience.json');
            const data = await response.json()

            setData(data)
            console.log(data)
        }

        getData()
    }, [])

    return (
        <section className='flex flex-col text-white w-full h-fit'>
            <div className='grid grid-cols-2 w-full'>
                <motion.button
                    className="backdrop-blur-lg bg-transparent cursor-pointer hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border transition duration-200 border-blue-500 hover:border-transparent text-sm md:text-base"
                    animate={generateRandomAnimation()}
                    onClick={console.log("clicked")}>Experience</motion.button>
                <motion.button
                    className="backdrop-blur-lg bg-transparent cursor-pointer hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border transition duration-200 border-blue-500 hover:border-transparent text-sm md:text-base"
                    animate={generateRandomAnimation()}
                    onClick={console.log("clicked")}>Projects</motion.button>
            </div>
            <motion.div className="border-white w-full h-fit py-8 sm:px-8" animate={expandAnimation}>
                <h3 className="text-2xl font-bold">{data?.heading}</h3>

                <ul className="list-disc px-6 sm:px-12 py-6">
                    {data?.jobs.map(job => (
                        <li key={job.id}>
                            <div className="mb-4">
                                <h4 className="font-semibold text-xl">{job.company}</h4>
                                <p className="italic">{job.startDate} - {job.endDate}</p>
                            </div>

                            <ul className="flex flex-col gap-2">
                                {job.points.map(point => (
                                    <li key={point.id}>- {point.text}</li>
                                ))}
                            </ul>


                        </li>
                    ))}
                </ul>
            </motion.div>
        </section>
    )
}

export default Sources