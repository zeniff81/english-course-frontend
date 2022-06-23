import React from 'react'
import ninja from "../../resources/ninja.png"

function Tile() {
  return (
    <div className="tile">
      <div className="tile__title">Lesson 1</div>
      <div className="tile__subtitle">What's your name</div>
      <img src={ninja} alt="dummy" className="tile__icon" />
    </div>
  )
}

export default Tile