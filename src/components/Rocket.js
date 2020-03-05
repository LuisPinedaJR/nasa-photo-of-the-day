import React, { useState } from 'react'

function Rocket() {
  const [rocketState, setRocketState] = useState(0)
  return (
    <div className="rocket-div">
      <button
        className="rocket-button"
        onClick={() => {
          setRocketState(rocketState + 1)
        }}
      >
        {`🚀 ${rocketState}`}
      </button>
    </div>
  )
}

export default Rocket
