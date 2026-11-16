import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch(()=> setUsers([]))
  }, [])

  return (
    <div className='wrapper'>
      <h1 className='title'>Users</h1>
      <ul className='user-list'>
        {users.map((user) => (
          <li key={user.id} className='user-item'>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App