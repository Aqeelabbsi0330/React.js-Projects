import { useState } from 'react'

import './App.css'
import { useEffect } from 'react';

function App() {
   const [color, setColor] = useState("black");
   function toggle(){
    setColor((preColor)=>preColor==="black"?"white":"black")
    
   }
  useEffect(() => {
     
    let element =document.body
   element.style.background=color;
   element.style.color=color==="black"? "white":"black";
     
   }, [color])
   

  return (
    <>
      <div className="container" >
          hello
      </div>
      <button onClick={toggle}>change color</button>
     
    </>
  )
}

export default App
