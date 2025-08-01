import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'

function App() {
  const  [players, setPlayers] = useState([])

  useEffect( () => {
    axios.get('/api/players')
    .then ( (response) => {
      setPlayers(response.data)
    })

    .catch( (error) => {
      console.log(error)
    })
  })

  return (
    <>
      <h1>Hello G</h1>
      <p>players: {players.length}</p>
      {
        players.map( (players, index) => (
          <div key={players.id}>
            <h3>{players.name}</h3>
            <p>{players.role}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
