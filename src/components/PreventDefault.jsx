import React from 'react'

const PreventDefault = () => {
    const changeME = (event) => {
        event.PreventDefault()
        console.log('The link has beeen clicked!')
    }
  return (
    <div>
      <h1>Zainab is a pretty</h1>
      <a href="https://www.facebook.com" onClick={changeME}>Click me</a>
    </div>
  )
}

export default PreventDefault
