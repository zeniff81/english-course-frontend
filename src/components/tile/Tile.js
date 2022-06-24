import React from 'react'
import './tile.css'

import dummyIcon from '../../resources/dummyicon.jpg'
import DummyRating from '../../resources/DummyRating'

function Tile() {
  return (
    <div className="tile">
      <img src={dummyIcon} alt="dummy" className="tile__icon" />
      <div className="tile__title">Lesson 1</div>
      <div className="tile__subtitle">What's your name</div>
      <DummyRating />
    </div>
  )
}

export default Tile