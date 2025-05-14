import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
 const plus=()=>{
  setCount(count+1)
}
 
 const minus=()=>{
  
  count>0?setCount(count-1):alert("count is already 0")
 }
  return (
    <>
      <div className="container">
        <div className="counter">{count}</div>
        <div className="button">
          <button className="plus" onClick={plus}>+</button>
          <button className="minus"onClick={minus}>-</button>
        </div>
      </div>
    </>
  )
}

export default App
