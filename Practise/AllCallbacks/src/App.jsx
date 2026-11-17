import { useState, useEffect, useCallback } from 'react'

function App() {
  const [id, setId] = useState(1)
  const [user, setUser] = useState(null)
  const [name, setName] = useState('')

  // useCallback: a new function only when `id` changes
  const fetchUser = useCallback(() => {
    console.log('fetching user', id)
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data))
  }, [id])

  // useEffect: runs whenever fetchUser changes (so, whenever id changes)
  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Type anything'
      />
      <p>Hello {name}</p>

      <h2>User #{id}</h2>
      {user && <p>{user.name} ({user.email})</p>}

      <button onClick={() => setId((prev) => prev - 1)} disabled={id === 1}>
        Prev
      </button>
      <button onClick={() => setId((prev) => prev + 1)} disabled={id === 10}>
        Next
      </button>
    </div>
  )
}

export default App