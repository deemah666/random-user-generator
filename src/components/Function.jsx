import React from 'react'

const Function = () => {
    const shoot = (a) => {
        alert(a)
    }

  return (
    <div>
      <button onClick={()=>shoot('Goal!')}>Take a shot</button>
    </div>
  )
}

export default Function
