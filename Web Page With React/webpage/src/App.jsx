import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/footer/Footer'
import Videoplayer from './Components/videoPlayer/Videoplayer'
import './App.css'

function App() {
  const [Playstate, setPlaystate] = useState(false)
 

  return (
    <>
      <Navbar/>
      <Hero/>
       <Title subTitle="Our Programs" title="What We Offer"/>
      <Programs/>
       <About setPlaystate={setPlaystate}/>
       <Title subTitle="Gallery" title="Campus Photos"/>
      <Campus/>
      <Title subTitle="Testimonials" title="What Student Says"/>
      <Testimonials/>
      <Title subTitle="Contact Us" title="Get in Touch"/>
      <Contact/>
      <Footer/>  
      <Videoplayer Playstate={Playstate} setPlaystate={setPlaystate}/>
    </>
  )
}

export default App
