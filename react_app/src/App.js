import { useState, useEffect } from "react";
import styles from "./App.module.css";

function Hello(){
  function HiFn(){
    console.log("created : ) ")
    return byFn
  }
  function byFn(){
    console.log("bye : (");
  }
  useEffect(HiFn,[]);
  return <h1>Hello</h1>;
}

function App() {
  const [showing,setShowing] = useState(false);
  const onClick = () => setShowing((prev)=> !prev);
  return(
    <div>
      {showing? <Hello/>:null}
      <button onClick = {onClick}>{showing? "Hide": "Show" }</button>
      <hr/>
      <TodoList/>
    </div>
    
  )
}


function TodoList(){
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => {
    setToDo(event.target.value)
  }
  const onSubmit = (event) =>{
    event.preventDefault();
    if(toDo === ""){
      return;
    }
    setToDo("");
    setToDos(currentArray => [toDo, ...currentArray]);
    
  }
  console.log(toDos)
  return (
  <div>
    <h1>My ToDos ({toDos.length})</h1>
    <form onSubmit = {onSubmit}>
    <input 
      type = "text" 
      placeholder="Write your to do ..."
      value = {toDo}
      onChange = {onChange}/>
      <button>Add To Do</button>
    </form>
    <hr/>
    <ul>
    {toDos.map((item, index) => <li key = {index}>{item}</li>)}
    </ul>
  </div>
  )
}

export default App;

