import React from 'react'

const CardComponent = props => {
  return (
    <div className="card-div">
      <p className="card-p">{props.explanation}</p>
    </div>
  )
}

export default CardComponent
