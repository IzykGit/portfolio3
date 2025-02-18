import { motion } from "framer-motion"
import { generateRandomAnimation } from "../functions/Animations"
import { useEffect, useMemo, useState } from "react"



const Sources = () => {

    const [experienceData, setExperienceData] = useState()
    const [projectData, setProjectData] = useState()

    const [data, setData] = useState(null)
    const [isOpen, setIsOpen] = useState({ value: "", open: false })

    const expandingVariants = {
        collapseAnimation: {
            maxHeight: "0rem",
            opacity: 0,
            display: "none",
            transition: { duration: 0.5 }
        },
        expandAnimation: {
            maxHeight: "160rem",
            opacity: 1,
            display: "initial",
            transition: { duration: 0.5, delay: 0.3 }
        }
    };

    const selectedAnimation = {
        opacity: [0, 1, 0],
        display: "flex",
        transition: { duration: 0.8, repeat: Infinity }
    }

    const handleOpenSet = (buttonVal) => {

        if (isOpen.value === buttonVal) {
            setIsOpen({ open: false })
        }
        else {
            setIsOpen({ value: buttonVal, open: true })

            if (buttonVal === "Experience") {
                setData(experienceData)
            }
            else if (buttonVal === "Projects") {
                setData(projectData)
            }
        }
    }

    const experienceButtonAnimation = useMemo(() => generateRandomAnimation(), [])
    const projectsButtonAnimation = useMemo(() => generateRandomAnimation(), [])



    useEffect(() => {
        const getData = async () => {
            const experience = await fetch('../../public/data/Experience.json');
            const expData = await experience.json()

            const projects = await fetch('../../public/data/Projects.json')
            const proData = await projects.json()


            setExperienceData(expData)
            setProjectData(proData)
        }

        getData()
    }, [])

    return (
        <section className='flex flex-col w-full h-fit'>
            <div className='flex'>
                <motion.button
                    className="backdrop-blur-lg bg-transparent cursor-pointer hover:bg-blue-500 text-blue-700 font-semibold
                    hover:text-white py-2 px-4 border transition duration-200 border-blue-500 hover:border-transparent text-sm md:text-base
                    flex items-center justify-center gap-2 w-46"
                    animate={experienceButtonAnimation}
                    value={"Experience"}
                    onClick={(e) => handleOpenSet(e.target.value)}>
                    Experience
                    <motion.div className="w-1 h-1 sm:w-2 sm:h-2 bg-green-400 rounded-full hidden absolute right-2" animate={(isOpen && isOpen.value === "Experience") ? selectedAnimation : {}}></motion.div>
                </motion.button>

                <motion.button
                    className="backdrop-blur-lg bg-transparent cursor-pointer hover:bg-blue-500 text-blue-700 font-semibold
                    hover:text-white py-2 px-4 border transition duration-200 border-blue-500 hover:border-transparent text-sm md:text-base
                    flex items-center justify-center gap-2 w-46"
                    animate={projectsButtonAnimation}
                    value={"Projects"}
                    onClick={(e) => handleOpenSet(e.target.value)}>
                    Projects
                    <motion.div className="w-1 h-1 sm:w-2 sm:h-2 bg-green-400 rounded-full hidden absolute right-2" animate={(isOpen && isOpen.value === "Projects") ? selectedAnimation : {}}></motion.div>
                </motion.button>
            </div>
            <motion.div className="border-white w-full h-fit pt-8 pb-4 sm:px-8" variants={expandingVariants} initial={false} animate={isOpen.open ? "expandAnimation" : "collapseAnimation"}>
                <h3 className="text-2xl font-bold">{data?.heading}</h3>

                {data?.heading === "Experience" && (
                    <ul className="list-disc px-6 sm:px-12 pt-6">
                        {data?.jobs.map(job => (
                            <li key={job.id}>
                                <div className="mb-4">
                                    <h4 className="font-semibold text-xl">{job.company}</h4>
                                    <p className="italic">{job.startDate} - {job.endDate}</p>
                                </div>

                                <ul className="flex flex-col gap-4 list-disc px-6">
                                    {job?.points.map(point => (
                                        <li key={point.id}>{point.text}</li>
                                    ))}
                                </ul>


                            </li>
                        ))}
                    </ul>
                )}


                {data?.heading === "Projects" && (
                    <ul className="list-disc px-6 sm:px-12 pt-6 flex flex-col gap-12">
                        {data?.projects.map(project => (
                            <li key={project.id}>
                                <div>
                                    <h4 className="font-semibold text-xl">{project.name}</h4>
                                </div>

                                <div className="flex flex-col gap-6 -mt-2">
                                    <div></div>
                                    <img src={project.src} alt={project.name} />
                                    <div className="flex gap-4">
                                        <a className="backdrop-blur-lg bg-transparent cursor-pointer hover:bg-blue-500 text-blue-700 font-semibold
                                        hover:text-white py-2 px-4 border transition duration-200 border-blue-500 hover:border-transparent text-sm md:text-base"
                                        aria-label="View the demo site."
                                        href={project.link}
                                        target="_blank"
                                        >
                                            Demo
                                        </a>
                                        <a className="backdrop-blur-lg bg-transparent cursor-pointer hover:bg-blue-500 text-blue-700 font-semibold
                                        hover:text-white py-2 px-4 border transition duration-200 border-blue-500 hover:border-transparent text-sm md:text-base"
                                        aria-label="View the code for the site."
                                        href={project.code}
                                        target="_blank"
                                        >
                                            Code
                                        </a>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </motion.div>



        </section>
    )
}

export default Sources