import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // let count = 0
  // let [value, setValue] = useState("")
  // let [value2, setValue2] = useState("")
  // console.log(value)


  // if (value.indexOf("@") === -1){
  //   console.log("It is not a email");

  // }
  // function increment() {
  //   setCount(++count)
  // }
  // console.log(count)

  // function decrement() {
  //   setCount(--count)
  // }




  return (
    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
      <input type='text' onChange={(e) => setValue(e.target.value)} />

      {/* <button onClick={decrement}>-</button>
      <h1>{count}</h1>
      <button onClick={increment}>+</button> */}
    </div>
  );
}

export default App;
