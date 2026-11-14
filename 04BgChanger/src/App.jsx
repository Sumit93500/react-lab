import { useState } from 'react'
function App() {
const [color,setColor] = useState("green")
  return (
    <div className={`h-screen w-screen`} style={{ backgroundColor: color }}>
      <div className="flex flex-col items-center gap-4"> 
        <div className="flex gap-4 bg-white p-4 rounded-lg">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
            onClick={() => setColor("red")}
          >
            Red
          </button>

          <button
            className="bg-green-500 text-white px-4 py-2 rounded-lg"
            onClick={() => setColor("green")}
          >
            Green
          </button>

           <button
            className="bg-yellow-500 text-white px-4 py-2 rounded-lg"
            onClick={() => setColor("yellow")}
          >
            Yellow
          </button>

        </div>
      </div>
    </div>
  )
}

export default App
