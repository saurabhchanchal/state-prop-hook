
import {useState} from "react"
import './App.css'
import { Category } from './components/Category'

function App() {

 const [counter,setCounter] = useState(0);
 const handleChange = (value) => {
  if (counter >= 10) {
    return;
  }
  //  if (counter <= 0) {
  //   return;
  // }
   setCounter(counter+value)
 }
//  const handleDecrement = (value) => {
//   if(counter <= 0) {
//     return
//   }
//    setCounter(counter-value)
//  }

  const navbar = [
    {image: "https://rukminim2.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100", title: "Top Offers"},
    {image: "https://rukminim2.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100", title: "Grocery"},
    {image: "https://rukminim2.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100", title: "Mobiles"}
  ];

  return (
    <>
    <div className="nav">
    {navbar.map(el => 
      <Category image= {el.image} label= {el.title}/>
    )}
    </div>

    <div className='App'>

      <h2>Counter: {counter} </h2>

      <button onClick={() => {
        handleChange(1)
      }}>Add 1</button>
     
      <button onClick={() => {
        handleChange(-1)
      }}>substract1</button>

    </div>
    </>
  )
}

export default App
