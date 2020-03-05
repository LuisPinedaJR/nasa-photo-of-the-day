import React, { useState } from 'react'

function Alien() {
  const [alienState, setAlienState] = useState(0)
  return (
    <div className="alien-div">
      <button
        className="alien-button"
        onClick={() => {
          setAlienState(alienState + 1)
        }}
      >
        {`👽 ${alienState}`}
      </button>
    </div>
  )
}

export default Alien
