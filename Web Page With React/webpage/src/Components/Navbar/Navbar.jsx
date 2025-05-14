import React,{useState,useEffect} from 'react'
import { Link } from 'react-scroll';
import logo from '../../assets/images/logo.png'
import menu_icon from '../../assets/images/menu-icon.png'
import  './Navbar.css'
// import '../index.css'

export default function Navbar() {
  const [Dark, setDark] = useState(false)
   const [Nav, setNav] = useState(false)
   const Navbar=()=>{
     Nav? setNav(false):setNav(true)
   }
  useEffect(() => {
  
  window.addEventListener('scroll',()=>{
    window.scrollY>400? setDark(true):setDark(false);
  })
    
  }, [Dark])
  
  return (
  
    <div className='container'>
      <div className={`navbar ${Dark ? 'dark_nav':' '}`} >
        <div className="navbar_inner">
        <img src={logo} alt="logo" className='logo' />
        <ul className={`navItems ${Nav?'menu_show':''}`}>
          <li> <Link to="hero" smooth={true} duration={500} offset={0}>Home</Link></li>
          <li> <Link to="program" smooth={true} duration={500} offset={-260}>Program </Link> </li>
          <li> <Link to="about" smooth={true} duration={500} offset={-150}> About Us </Link></li>
          <li> <Link to="campus" smooth={true} duration={500} offset={-260}> Campus </Link></li>
          <li> <Link to="testimonials" smooth={true} duration={500} offset={-260}> Testimonials </Link></li>
          <li> <Link to="contact" smooth={true} duration={500} offset={-260}><button className='btn'> Contact Us </button></Link></li>
        </ul>
        <img src={menu_icon} alt=""  className='menu_icon' onClick={Navbar}/>
        </div>
      </div>
      
    </div>
  
  
  )
}
