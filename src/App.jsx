import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import AddCard from './Components/AddToCard/AddCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Header /> */}
    <AddCard />
    </>
  )
}

export default App
