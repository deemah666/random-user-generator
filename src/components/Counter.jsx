import React, { useState } from 'react'

const Counter = () => {
    const [count, setcount] = useState(3)
    const increment = () => {

    }

  return (
    <div>
     <h1>I am counting {count} times</h1>
     <button>onClick = {increment}Increment</button>
    </div>
  )
}

export default Counter
