import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './component/Nav'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import './component/compstyle/comp.css'
import './App.css'
import Footer from "./component/Footer";


const App = () => {
  return (
    <>


      <BrowserRouter>
        <Nav />
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
        </BrowserRouter>
    </>
  )
}

export default App;