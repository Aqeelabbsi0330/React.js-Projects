import {Children, createContext , useContext} from 'react'
 const TodoContext=createContext({
    Todos:[{
        id: 1,
        todomsg:"fist todo",
        completed:false,
    }
    ],
    addTodo:(todo)=>{},
    updateTodo:(id, todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
})
export default TodoContext
export const useTodo=()=>{
    return useContext(TodoContext)
}
// export const TodoProvider=(children)=>{
//     <TodoContext.Provider>
//         {children}
//     </TodoContext.Provider>
// }
export const TodoProvider=TodoContext.Provider