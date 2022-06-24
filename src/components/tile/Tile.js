import React from 'react'
import './tile.css'

import dummyIcon from '../../resources/dummy/dummyicon.jpg'
import DummyRating from '../../resources/dummy/DummyRating'

function Tile({title, subtitle, icon, background, color}) {
  return (
    <div className="tile" style={{background, color}}>      
      <img src={dummyIcon} alt="dummy" className="tile__icon" />
      <div className="tile__title">{title}</div>
      <div className="tile__subtitle">{subtitle}</div>
      <DummyRating />
    </div>
  )
}

export default Tile