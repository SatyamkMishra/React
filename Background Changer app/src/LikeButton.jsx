import { useState } from "react";

export default function LikeButton(){

    let [isLiked,setIsLiked] = useState(true);
    let [count, setCount] = useState(0);
    let [total, setTotal] = useState(0);

    let toggleLike = () =>{
        setIsLiked(!isLiked);
        !isLiked ? setCount(count-1) : setCount(count+1);
        setTotal(total+1);
    }
    let s = {color : "red"};
    return (
        <div>
            <p onClick={toggleLike}>
            {isLiked ? 
           <i className="fa-regular fa-heart"></i> :
           <i className="fa-solid fa-heart" style={s}></i>}
           </p>
           <p> count = {count}</p>
           <p>Total = {total}</p>
        </div>
    )
}