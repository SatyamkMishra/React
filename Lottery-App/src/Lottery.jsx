import {useState} from 'react';
import './Lottery.css';
import { genTicket, sum} from './helper';
import Ticket from './Ticket.jsx';

export default function Lottery({n=3,winCond}){
    let [ticket,setTicket] = useState(genTicket(n));

    let isWinning = winCond(ticket);

    function regenrate(){
        setTicket(genTicket(n));
    }
    return(
        <div>
        <h1>Lottery Game!</h1>
        <Ticket ticket={ticket}/>
        <br></br>
        <button onClick={regenrate}>Buy New Ticket</button>
        <h3>{isWinning && "Congratulations ,You Won!"}</h3>
        </div>
    )
}