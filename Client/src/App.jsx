import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Header from './components/Header'
import ThemeProvider from './contexts/Theme'
import ParticlesOne from "./components/ParticlesOne"
import ParticlesTwo from "./components/ParticlesTwo"

const App = () => {
  return (
    <>
      <ThemeProvider>
      <ParticlesOne />
      <ParticlesTwo />
      <Header />
      <div className='max-w-7xl mx-auto z-10 relative'>
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