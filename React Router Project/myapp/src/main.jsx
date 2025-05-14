import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from './Layout.jsx'
import './index.css'
import Home from './Components/Home/Home.jsx'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children : [{
      path:"",
    element:<Home/>,
    
    },
  {
    path:"about",
    element: <about/>
  }]
  }
])
createRoot(document.getElementById('root')).render(

  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
