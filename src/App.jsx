import './App.css'
import Header from './components/Header'
import Landing from './pages/LandingPage'
import Footer from './components/Footer'
import {Routes, Route} from 'react-router-dom'
import PregnantPics from './pages/PregnantPage/index.jsx'
import NewbornPics from './pages/NewbornPage/index.jsx'
import NiverPics from './pages/NiverPage'
import About from './pages/AboutPage'
import Contact from './pages/Contact.jsx'
import Navbar from './components/navbarMobile/Navbar';

function App() {

  return (
    <>
      <Navbar />
      <Header />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/pregnant' element={<PregnantPics />} />
          <Route path='/newborn' element={<NewbornPics />} />
          <Route path='/birth' element={<NiverPics />} />
          <Route path='/about' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      <Footer />
    </>
  )
}

export default App
