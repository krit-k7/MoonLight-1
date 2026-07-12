import { useState , useEffect } from 'react'

import './App.css'

function App() {
  const [message, setMessage] = useState("");
  useEffect(()=> {
    fetch("http://20.255.60.10:4000/api/message")
    .then((res) => res.json())
    .then((data) => setMessage(data.message))

  } , [])

  return (
    <>
      <h1>Welcome To VPS Tutorial</h1>
      <h3>Data {message}</h3>
    </>
  )
}

export default App
