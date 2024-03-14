import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import { counterContext } from './context/context'

// const countContext = createContext(0);

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <counterContext.Provider value={{count,setCount}}>
    <Navbar/>
        <button onClick={()=>{
          setCount(count+1)
        }}>
          count is {count}
        </button>
        </counterContext.Provider>
    </>
  )
}

export default App
