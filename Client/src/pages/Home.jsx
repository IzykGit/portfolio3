import About from "../components/About"
import HeroComponent from "../components/Hero"


const Home = () => {


    return (
        <main className='min-h-screen py-26 flex flex-col gap-12'>
            <HeroComponent />
            <About />
        </main>
    )
}

export default Home