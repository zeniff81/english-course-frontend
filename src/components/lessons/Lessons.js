import React from 'react'
import './lessons.css'
import Tile from '../tile/Tile'
import dummyTileInfo from '../../resources/dummy/dummyTileInfo'
import LessonHeader from './LessonHeader'

function Lessons() {
  const [tiles, setTiles] = React.useState([])

  React.useEffect(() => {
    setTiles(dummyTileInfo)
  }, [])

  return (
    <div className="lessons">
      <LessonHeader title="LESSON 1" subtitle="DUMMY WHATS YOUR NAME?" background="green" color="white"/>      
      {tiles.map(tile => (
        <Tile
          key={tile.id}
          title={tile.title}
          subtitle={tile.subtitle}
          icon={tile.icon}
          background={tile.background}
          color={tile.color}
        />
      ))}      
    </div>
  )
}

export default Lessons