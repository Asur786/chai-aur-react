import './App.css'
import ThemeBtn from './components/ThemeBtn';
import Card from './components/Card'
import { ThemeProvider } from './contexts/theme'
import { useEffect, useState } from "react";


function App() {

  const [themeMode,setThemeMode]=useState("light")

  const lightTheme=()=>{
    setThemeMode("light")
  }
  const darkTheme=()=>{
    setThemeMode("dark")
  }

  //Actual change in theme
  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])
  return (
    
    // sirf wrap karne se kaam nii chalega value bhi pass kro na access lene ke liye.
  <ThemeProvider value={{themeMode,darkTheme,lightTheme}}> 
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>  
                        {/* theme button aur Card button dono ko un variable aur functions ka access chahiye jo context me available hai. Iske liye tags use krne padenge contextprovider se wrap krna hoga */}
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>
            </ThemeProvider>

  )
}

export default App
