import { useState, useEffect, useCallback } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState('')
  const [length, setLength] = useState(12)
  const [uppercase, setUppercase] = useState(true)
  const [lowercase, setLowercase] = useState(true)
  const [numbers, setNumbers] = useState(true)
  const [symbols, setSymbols] = useState(false)

  // useCallback: keeps the same function until one of these 5 values changes
  const generatePassword = useCallback(() => {
    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowerChars = 'abcdefghijklmnopqrstuvwxyz'
    const numberChars = '0123456789'
    const symbolChars = '!@#$%&*()_+{}[]|;:<>,./'

    let str = ''
    if (uppercase) str += upperChars
    if (lowercase) str += lowerChars
    if (numbers) str += numberChars
    if (symbols) str += symbolChars

    if (str === '') {
      setPassword('')
      return
    }

    let passw = ''
    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * str.length)
      passw += str[index]
    }
    setPassword(passw)
  }, [length, uppercase, lowercase, numbers, symbols])

  // Runs on page load, and again whenever generatePassword changes
  // (which happens when the slider or any checkbox changes)
  useEffect(() => {
    generatePassword()
  }, [generatePassword])

  const copyPassword = () => {
    if (password) navigator.clipboard.writeText(password)
  }

  return (
    <div className='wrapper'>
      <h1 className='title'>Password Generator</h1>

      {/* Output box */}
      <div className='output-box'>
        <input
          type='text'
          className='output'
          placeholder='Your password'
          readOnly
          value={password}
        />
        <button className='copy-btn' onClick={copyPassword}>
          Copy
        </button>
      </div>

      {/* Length */}
      <div className='option'>
        <label>Length: {length}</label>
        <input
          type='range'
          min='4'
          max='32'
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
        />
      </div>

      {/* Checkboxes */}
      <div className='option'>
        <label>
          <input
            type='checkbox'
            checked={uppercase}
            onChange={(e) => setUppercase(e.target.checked)}
          />
          Uppercase (A-Z)
        </label>
      </div>
      <div className='option'>
        <label>
          <input
            type='checkbox'
            checked={lowercase}
            onChange={(e) => setLowercase(e.target.checked)}
          />
          Lowercase (a-z)
        </label>
      </div>
      <div className='option'>
        <label>
          <input
            type='checkbox'
            checked={numbers}
            onChange={(e) => setNumbers(e.target.checked)}
          />
          Numbers (0-9)
        </label>
      </div>
      <div className='option'>
        <label>
          <input
            type='checkbox'
            checked={symbols}
            onChange={(e) => setSymbols(e.target.checked)}
          />
          Symbols (!@#$)
        </label>
      </div>

      {/* Generate */}
      <button className='generate-btn' onClick={generatePassword}>
        Generate Password
      </button>
    </div>
  )
}

export default App