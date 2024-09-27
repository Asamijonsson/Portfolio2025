import { useState } from 'react'
import { Header } from './components/Header'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header title={'hej'} />
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>

    </>
  )
}

export default App
