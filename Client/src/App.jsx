import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Header from './components/Header'
import ThemeProvider from './contexts/Theme'
import Particles from "./components/Particles"

const App = () => {
  return (
    <>
      <ThemeProvider>
      <Particles />
      <Header />
      <div className='max-w-7xl mx-auto'>
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