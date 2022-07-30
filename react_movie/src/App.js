import { useState, useEffect } from "react";
import styles from "./App.module.css";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword,setKeyword] = useState("")
  const onClick = () => setValue((prev)=>prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("I run all the time");

  useEffect(()=>{
    console.log("I run only once");
  },[]);

  useEffect(()=>{
      console.log("I run when 'keyword' changes", keyword);
    },[keyword]);

  useEffect(()=>{
      console.log("I run when 'counter' changes", keyword);
    },[counter]);

  useEffect(()=>{
    console.log("I run when 'keyword & counter' changes", keyword);
  },[keyword,counter]);
  return (
    <div>
      <input 
        type = "text" 
        placeholder="Search here..." 
        onChange = {onChange}
        value = {keyword}
        />
      <h1 className = {styles.title}>{counter}</h1>
      <button onClick = {onClick}>click me</button>
    </div>
  );
}

export default App;
