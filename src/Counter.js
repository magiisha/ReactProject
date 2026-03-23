import {useState} from 'react';

function Counter() {
    let [num,setNum]= useState(34);
    function Increment(){
        setNum(num+1);
    }
    function Decrement(){
        setNum(num-1);
    }
  return (
    <div>
        <h1>{num}</h1>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
    </div>
  )
}

export default Counter