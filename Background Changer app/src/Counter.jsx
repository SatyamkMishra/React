import { useState } from "react";

export default function Counter(){
   let [count,setCount] = useState(0);

   let increaseCount = () => {
       setCount((curr)=>{
        return curr + 1;
       });
       setCount((curr)=>{
        return curr + 1;
       });
   }
    return (
        <div>
            <h3>Count = {count}</h3>
            <button onClick={increaseCount}>Increase Count</button>
        </div>
    )
}