import './App.css'
import {useState,useEffect} from 'react'

function App() {

  const [counter, setCounter] = useState(15);

  const addValue = () => {
    setCounter(counter+1)
    console.log('value added',counter)
  }

  const decreaseValue = () => {
    if(counter != 0){
      setCounter(counter-1)
    }
    console.log('value decreased',counter)
  }

  return (
    <>
     <h1>Learning React</h1>
     <h2>Counter Value : {counter}</h2>

     <button onClick={() => {addValue()}}>Increase value</button>
     <br/>
     <button onClick={() => {decreaseValue()}}>Decrease value</button>
    </>
  )
}

export default App
