import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <h1>Chai aur react</h1>
        <h2>Your count is now: {count}</h2>
        <button onClick={() =>{
            setCount(count + 1) 
        }}>
        Add Value {count}
        </button>
        <br/>

        <button onClick={() =>{
          if(count>0){
            setCount(count - 1) //count=count-1 may be used change from const to let in usestate declaration
          } 
        }}>
          Decrease Value {count}
        </button>

      </div>
    </>
  )
}

export default App
