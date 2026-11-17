import { useRef } from 'react'

function App() {
  const inputRef = useRef(null)

  return (
    <>
      <input ref={inputRef} placeholder="Type here" />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
    </>
  )
}

export default App