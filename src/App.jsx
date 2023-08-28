import './App.css'
import Header from './components/Header'
import Landing from './pages/LandingPage'
import Footer from './components/Footer'
import {Routes, Route} from 'react-router-dom'
import CasamPics from './pages/CasamentoPage'
import BaptismPics from './pages/BatizadoPage'
import NiverPics from './pages/NiverPage'

function App() {

  return (
    <>
      <Header />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/married' element={<CasamPics />} />
          <Route path='/baptism' element={<BaptismPics />} />
          <Route path='/birth' element={<NiverPics />} />
        </Routes>
      <Footer />
    </>
  )
}

export default App
