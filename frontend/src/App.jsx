import { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'
function App() {
 const [todos,setTodos]=useState([]);
 useEffect(()=>{
  fetch("http://localhost:3000/todos").then(
    async function(res){
      const json=await res.json();
      setTodos(json.todos);
    });
 },[])
 const refreshTodos = () => {
  // Fetch todos again after adding a new one
  fetch("http://localhost:3000/todos")
    .then(async (res) => {
      const json = await res.json();
      setTodos(json.todos);
    });
};

  return (
  
      <div>
       <CreateTodo refreshTodos={refreshTodos}></CreateTodo>
       <Todos todos={todos}>

       </Todos>
      </div>

    
  )
}

export default App
