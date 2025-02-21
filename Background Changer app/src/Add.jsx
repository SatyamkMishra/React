import { useState } from "react";



export default function Add(){

    let [count,setCount] = useState(0);
    let [inColor,setInColor] = useState("white");
    let [deColor,setDeColor] = useState("white");

    let increase = () =>{
        setCount((curr)=>{
            return curr+1;
        });
        setInColor("red");
        setTimeout(()=>{
            setInColor("white")
        },200);
    };
    let decrease = () =>{
        setCount((curr)=>{
            return curr==0 ? 0 : curr-1;
        });
        setDeColor("blue");
        setTimeout(()=>{
            setDeColor("white")
        },200);
    };
    return (
        <>
        <p>Count = {count}</p>
        <button onClick={increase} style={{backgroundColor : inColor}}>Increase</button>
        <br/>
        <button onClick={decrease} style={{backgroundColor : deColor}}>Decrease</button>
        </>
        
    )
}