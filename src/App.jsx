import { useState, React } from 'react'
import './App.css'

const todoList = () =>{
  const[todos, setTodos] = useState([]);
  const[text, setText] = useState('');
    
  const addTodo=() =>{
    if(text){
    setTodos([...todos,{text, completed : false}])
      setText('')
    }
  
  };
  const toggleTodo = index =>{
         const newTodo = [...todos]
         newTodo[index].completed = ! newTodo[index].completed
         setTodos(newTodo)
  }
  const deleteTodo = index =>{
    const newTodos = [...todos]
    newTodos.splice(index,1)
    setTodos(newTodos)
  }
  return(
    <div>
      <input placeholder ="Enter your task"  onChange={(e)=> setText(e.target.value)} value= {text} />
      <button onClick = {addTodo} >Add</button>
      <ul>
        {todos.map((todo, index) => (
           <li key={index} style={{textDecoration : todo.completed ? 'line-through' :'none' }}>
             {todo.text}
             <button onClick ={()=> toggleTodo(index)}>Toggle</button>
             <button onClick ={()=> deleteTodo(index)}>Delete</button>

           </li>
        ))}
        
      </ul>
    </div>
  )
}


  

export default todoList;
