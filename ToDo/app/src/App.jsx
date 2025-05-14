import './App.css'
import Navbar from './component/Navbar.jsx'
import { useState } from 'react';
function App() {
  const [Todo, setTodo] = useState("");
  const [Todos, setTodos] = useState([]);

  const HandleEdit =(editindex)=>{
    let t=Todos.filter((_,index)=>index===editindex)
    setTodo(t[0].Todo);
    setTodos(Todos.filter((item,index)=>index!==editindex))
    
  }
  const HandleDelete =(indextodelete)=>{
    setTodos(Todos.filter((item,index)=>index!==indextodelete))
  }
  const HandleAdd =()=>{
    setTodos([...Todos,{Todo}])
    setTodo("")
  }
  const HandleChange=(e)=>{
    setTodo(e.target.value)
  }
  return (
    <>
      <Navbar/>
      <div className="container">
        <div className="Todo">
        <h1>Add a To Do</h1>
        <div className="addToDo">
          <input type="text" className="ToDo-text" value={Todo} onChange={HandleChange} />
        <button className="btn addbtn"onClick={HandleAdd}>Add</button>
        </div>
        </div>
        <div className="Todos">
          <h2>Your To Do's</h2>
          {Todos.length===0 && <div className='Notodo'> NO Todos to display</div>}
          {Todos.map((item,index)=>{
            return(
          <div className="allToDos" key={index}>
            <div className="todo">{item.Todo}</div>
            <div className="buttons">
              <button className="btn" onClick={()=>HandleEdit(index)}>Edit</button>
              <button className="btn" onClick={()=>{if(confirm("are you sure to delete it"))
                {HandleDelete(index)}}}>Delete</button>
            </div>
          </div>

          )})}


        </div>
      </div>
    </>
  )
}
export default App
