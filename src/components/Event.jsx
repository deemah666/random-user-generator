import React from 'react'

const Event = () => {
    const shoot = () => {
        alert('Great shot!')
    }
  return (
    <div>
      <button onClick={shoot}>Take a shot!</button>
    </div>
  )
}

export default Event
