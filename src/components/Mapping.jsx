import React from 'react'

const Mapping = () => {
    const Students = ['Abdul-Azeez', 'Olamide', 'Peter', 'Destiny']
  return (
    <div>
      {Students.map((student, idx) =>{
        return(
            <div key={idx}>
                <h1>{student}</h1>
            </div>
        )
      })
      }
    </div>
  )
    }

export default Mapping
