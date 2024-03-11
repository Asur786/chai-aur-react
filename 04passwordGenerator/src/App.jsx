import { useCallback, useState, useEffect,useRef } from 'react'

function App() {
  const [length, setLength] = useState(5)
  const [numAllowed,setNumAllowed] = useState(false)
  const [charAllowed,setCharAllowed]= useState(false)
  const [password,setPassword]=useState("")

  const passwordRef = useRef(null)
//callback used to optimise based on dependencies. Bina isko use kiye v kaam chal sakta hai
  const passwordGenerator = useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed){
      str+="0123456789"
    }
    if(charAllowed){
      str+="(){|}?/<>#$%@!"
    }
    for (let index = 1; index <= length; index++) {
      let charindex=Math.floor(Math.random()*str.length + 1);
      pass=pass+str.charAt(charindex);
     
    }
    setPassword(pass)
  },[length,numAllowed,charAllowed,setPassword])

  // syntax is same like useCallback but this one dont need to store in variable is used to run the method on changing the dependencies.
  useEffect(()=>{
    passwordGenerator()
  },[length,numAllowed,charAllowed,passwordGenerator])


  const copyToClickboard = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <>
      <div className='max-w-md mx-auto shadow-md px-4 my-8 text-orange-500 bg-gray-600 py-3'>
        <h1 className="w-full text-4xl text-gray-200 text-center my-3">Password Generator</h1>
        <div className='flex shadow-lg overflow-hiddn mb-4'>
          <input
            id="paswrd"
            type="text"
            value={password}
            className="w-full outline-none ml-2 py-1 px-3 rounded-md placeholder:text-center"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />

          <button className='outline-none bg-blue-700 text-white px-5 py-0.5 shrink-0 rounded-md' onClick={copyToClickboard}>Copy</button>
        </div>
      

        <div className='flex text-sm gap-x-5 my-2 mx-3.5'>
          <div className=' items-center gap-x-1'>
            <input type="range" min={6} max={100} value={length} id="setRange" className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}}/>
            <label htmlFor="setRange">Length: {length}</label>
          </div>
          <div className=' items-center gap-x-1'>
            <input type="checkbox" defaultChecked={numAllowed} id="numberInput"
            onChange={()=>{
              setNumAllowed((prev)=>!prev);
            }}/>
            <label htmlFor="numberInput">Numbers</label>
          </div> 

          <div className='items-center gap-x-1'>
            <input type="checkbox" defaultChecked={charAllowed} id="characterInput"
            onChange={()=>{
              setCharAllowed((prev)=>!prev);
            }}/>
            <label htmlFor="characterInput">Characters</label>
          </div>

          
          
        </div>
      </div>
    </>
  )
}

export default App
