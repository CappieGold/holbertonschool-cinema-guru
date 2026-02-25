import './App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Authentication from './routes/auth/Authentication'

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userUsername, setUserUsername] = useState("")

  useEffect(() => {
    const token = localStorage.getItem('accessToken')
    axios.post('/api/auth/', {}, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
      .then((response) => {
        setIsLoggedIn(true)
        setUserUsername(response.data.username)
      })
  }, [])

  return (
    <div className="App">
      {isLoggedIn ? <Dashboard /> : <Authentication setIsLoggedIn={setIsLoggedIn} setUserUsername={setUserUsername} />}
    </div>
  )
}
