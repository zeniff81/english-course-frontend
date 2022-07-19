import React, { useEffect, useState } from 'react'
import './lessons.css'
import Tile from '../tile/Tile'
import LessonContent from '../lesson-content/LessonContent'
import LoadingSpinner from '../spinner/Spinner'

function Lessons({currentInfo}) {
  const [tiles, setTiles] = useState()
  const [currentTileId, setCurrentTileId] = useState(null)

  useEffect(() => {
    setTiles(currentInfo.lessons)
  }, [currentInfo])

  if(tiles === undefined) return <LoadingSpinner /> 
  
  return (
    <div className="lessons">
      { currentTileId != null && <LessonContent lesson={tiles[currentTileId]} setCurrentTileId={setCurrentTileId}/>}
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