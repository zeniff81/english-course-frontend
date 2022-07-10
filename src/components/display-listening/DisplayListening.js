import React, {useEffect, useState} from 'react'
import './displaylistening.css'
import sentencesList from '../../resources/dummy/sentencesList'

import GroupSentences from './GroupSentences'

const arrBackgroundColorsDark = ['#9C640C', '#1A5276', '#117864', '#797D7F', '#212F3C']
const arrBackgroundColorsLight = ['#F9EBEA', '#E8DAEF', '#D5F5E3', '#F9E79F', '#F2F3F4', '#D5D8DC']

const selectRandomItem = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)]
}


const DisplayListening = () => {
  const [audioParams, setAudioParams] = useState({})

  useEffect(() => {
  }, [])  

  return (
    <div className="display-listening">
      <audio src={audioList[audioParams.gropuIndex].files[audioParams.sentenceIndex]} controls ref={audioRef} style={{display: 'none'}}/>
      {
        sentencesList.map((item, groupIndex) => {          
          return <GroupSentences key={groupIndex} groupIndex={groupIndex} sentences={item.sentences} audioRef={audioRef}/>
        }
        )}

    </div>
  )
}

export default DisplayListening