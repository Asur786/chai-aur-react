import React,{ useEffect } from 'react'
import {CurrencyRow} from './components'
import {useState} from 'react'

function App() {
  const [currencyOptions,setCurrencyOptions]=useState([])
  console.log(currencyOptions)

  useEffect(()=>{
    const options = {method: 'GET', headers: {accept: 'application/json'}};

fetch('https://api.fastforex.io/fetch-all?api_key=5494c872cc-930c9b3616-s9x32k', options)
  .then(response => response.json())
  .then(response => {
    setCurrencyOptions([response.base,...Object.keys(response.results)])
  })
  .catch(err => console.error(err));
  },[])

  return (
    <>
    <div className="items-center justify-center m-0 h-44 text-center text-2xl font-bold">
      <h1 className="mr-8">Convert</h1>
      <CurrencyRow currencyOptions={currencyOptions}/>
      <div className="mr-8">=</div>
      <CurrencyRow/>
    </div>
    </>
  )
}

export default App
