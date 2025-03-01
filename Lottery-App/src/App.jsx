import './App.css'
import Lottery from './Lottery.jsx';
import {sum} from './helper.js';

function App() {
  
let winCond = (arr) => {
  return arr.every((num)=> num===arr[0]);
}
  return (
    <div>
    <Lottery n={3} winCond={winCond}/>
    </div>
  )
}

export default App
