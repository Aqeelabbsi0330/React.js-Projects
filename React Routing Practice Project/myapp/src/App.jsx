import { Children, useState } from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact Us/Contact'
import Privacy from './Components/Privacy/Privacy'
import Github from './Components/Github/Github'
import User from './Components/User/User'
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import './App.css'


function App() {
  const [count, setCount] = useState(0)
//   const router=createBrowserRouter([{
//     path:"/",
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//     },{
//       path:"/about",
//       element:<About/>
//     },{
//       path:"/contact",
//       element:<Contact/>
//     },
//     {
//       path:"/privacy",
//       element:<Privacy/>
//     }
//   ]
// }])
  return (
    <>
    <BrowserRouter >
    <Routes>
      <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="privacy" element={<Privacy/>}/>
          <Route path="github" element={<Github/>}/>
          <Route path="User/:UserId" element={<User/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
      {/* <RouterProvider router={router}/> */}
    </>
  )
}

export default App
