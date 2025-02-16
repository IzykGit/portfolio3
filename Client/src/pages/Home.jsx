import About from "../components/About"
import HeroComponent from "../components/Hero"
import Technologies from "../components/Technologies"


const Home = () => {


    return (
        <main className='min-h-screen flex flex-col gap-6 items-center'>
            <HeroComponent />
            <About />
            <Technologies />
        </main>
    )
}

export default Home