import About from "../components/About"
import HeroComponent from "../components/Hero"
import Sources from "../components/Sources"
import Technologies from "../components/Technologies"


const Home = () => {


    return (
        <main className='min-h-screen flex flex-col gap-6 items-center text-white'>
            <HeroComponent />
            <About />
            <Sources />
            <Technologies />
        </main>
    )
}

export default Home