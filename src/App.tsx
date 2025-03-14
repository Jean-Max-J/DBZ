import { useState } from 'react'
import './App.css'
import NavBar from './component/Navbar'
import ListPerso from './component/ListPerso'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NavBar/>
     <ListPerso/>
    </>
  )
}

export default App
