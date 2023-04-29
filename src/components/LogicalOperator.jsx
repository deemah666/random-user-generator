import React from 'react'

const LogicalOperator = (props) => {
    const cars = props.car
  return (
    <div>
      {cars.lenght > 0 &&
        <h2>
            you have {cars.lenght} cars in your garage
        </h2>
     }
    </div>
  )
}

export default LogicalOperator
