import './App.css'
import { useState,useEffect } from 'react'

function App() {

  const [name,setName]  = useState('');

  

  return (
    <>
     <div>
       <h1 className="text-3xl font-bold text-center text-red-500">Heyy,please enter the name : </h1>

       <div className="flex justify-center items-center mt-5 w-50 h-12 border border-black rounded-md px-4 ">
        <input type = "text"
         className = "text-black"
         placeholder = "Enter the name"
         value = {name}
        onChange = {e => setName(e.target.value)
         }
         />
       </div>
     </div>
    </>
  )
}

export default App
