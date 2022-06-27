import React from 'react'
import './lessons.css'
import Tile from '../tile/Tile'
import dummyTileInfo from '../../resources/dummy/dummyTileInfo'
import LessonContent from '../lesson-content/LessonContent'

function Lessons() {
  const [tiles, setTiles] = React.useState([])
  const [currentTileId, setCurrentTileId] = React.useState(null)
  
  React.useEffect(() => {
    setTiles(dummyTileInfo)
  }, [])

  return (
    <div className="lessons">
      {currentTileId !==null && <LessonContent lesson={tiles[currentTileId]}/>}
      {tiles.map(tile => (
        <div
          className='tile-container'
          onClick={() => setCurrentTileId(tile.id)}
          key={tile.id}
        >
          <Tile            
            title={tile.title}
            subtitle={tile.subtitle}
            icon={tile.icon}
            background={tile.background}
            color={tile.color}
          />
        </div>
      ))}
    </div>
  )
}

export default Lessons