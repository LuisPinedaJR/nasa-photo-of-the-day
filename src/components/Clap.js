import React, { useState } from 'react'

function Clap() {
  const [clapState, setClapState] = useState(0)
  return (
    <div className="clap-div">
      <button
        className="clap-button"
        onClick={() => {
          setClapState(clapState + 1)
        }}
      >
        {`👏 ${clapState}`}
      </button>
    </div>
  )
}

export default Clap
