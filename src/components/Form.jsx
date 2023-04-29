
import React, { useState } from 'react'

const Form = () => {
    const [value, setValue] = useState("")
    const display = (event) => {
        setValue(event.target.value)
    }
  return (
    <div>
      <h2>SimpleForm</h2>
      <label htmlFor="name">Name</label><input type="text" onChange={display}/>
      <div>{value}</div>
    </div>
  )
}

export default Form
