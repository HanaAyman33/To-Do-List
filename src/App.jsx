import { useEffect } from "react"
import ToDoList from "./ToDoList";
import Login from "./Login";

function App() {
  
  useEffect(() =>{
    document.title = 'Done';
  },[]);

  return (
    <>
    <Login/>
      {/* <ToDoList/> */}
    </>
  )
}

export default App
