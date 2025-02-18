import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import ThemeProvider from './contexts/Theme'
import ParticlesOne from "./components/aesthetics/ParticlesOne"
import ParticlesTwo from "./components/aesthetics/ParticlesTwo"

const App = () => {


  
  return (
    <>
      <ThemeProvider>
      <ParticlesOne />
      <ParticlesTwo />
      <div className='max-w-5xl mx-auto z-10 relative py-12 px-16'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
      </ThemeProvider>
    </>
  )
}

export default App