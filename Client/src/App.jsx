import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Header from './components/Header'
import ThemeProvider from './contexts/Theme'
import ParticlesProvider from "./contexts/Particles"

const App = () => {
  return (
    <>
      <ThemeProvider>
      <ParticlesProvider>
      <Header />
      <div className='max-w-7xl mx-auto'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
      </ParticlesProvider>
      </ThemeProvider>
    </>
  )
}

export default App