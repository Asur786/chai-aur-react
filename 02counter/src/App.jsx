import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  const actresses=[{
    id:1,
    userName:"Katrina Kaif",
    imgLink:"https://th.bing.com/th/id/OIP.dcXFLuIM8Lee8j_Yc1kejwHaKV?rs=1&pid=ImgDetMain"
  },
  {
    id:2,
    userName: "Shraddha Kapoor",
    imgLink: "https://famousbiography.in/wp-content/uploads/2020/12/Shraddha-Kapoor-Biography.jpg" 
  }
]

const listItems=actresses.map(actress=>
  <li key={actress.id}>
    <Card name={actress.userName} image={actress.imgLink} />
  </li>
)

  return (
    <>
      {/* <div className="card">
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
        </button> */}

      {/* </div> */}

      <h1 className="text-black rounded-xl bg-white p-2">Tailwind Test</h1>
      
      {listItems}

      {/** <Card/>  Now problem is what i am getting another card with same character photo and her name. Therfore props comes to exist here*/}
    </>
  )
}

export default App
