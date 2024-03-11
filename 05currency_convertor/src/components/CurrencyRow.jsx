import React from 'react'

function CurrencyRow(props) {
  const {
    CurrencyOptions
  }=props
  return (
    <div>
        <input type="number" className="input border-4 rounded-md border-black"/>
            <select>
              {/* {CurrencyOptions.map(option=>(
                <option key={option} value={option}></option>
              ))} */}
              <option>Hi</option>
            </select>
    </div>
  )
}

export default CurrencyRow
