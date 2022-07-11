import React, { useEffect, useState } from 'react'
import './displaylistening.css'
import sentencesList from '../../resources/dummy/sentencesList'
import { audioList } from './getAudioFiles'
import GroupSentences from './GroupSentences'

const arrBackgroundColorsDark = ['#9C640C', '#1A5276', '#117864', '#797D7F', '#212F3C']
const arrBackgroundColorsLight = ['#F9EBEA', '#E8DAEF', '#D5F5E3', '#F9E79F', '#F2F3F4', '#D5D8DC']

const selectRandomItem = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)]
}


const DisplayListening = () => {
  const [audioParams, setAudioParams] = useState(null)
  const audioPlayerRef = React.createRef()

  useEffect(() => {
  }, [])

  console.log('audioList', audioList)
  console.log('audioParams', audioParams)

  return (
    <div className="display-listening">
      {audioParams!= null && <audio 
        src={audioList[audioParams.gropuIndex]?.files[audioParams.sentenceIndex]} controls 
        ref={audioPlayerRef} 
        style={{ display: 'none' }} 
      />}
      {
        sentencesList.map((item, groupIndex) => {
          return <GroupSentences
            key={groupIndex}
            groupIndex={groupIndex}
            sentences={item.sentences}
            audioPlayerRef={audioPlayerRef} 
            setAudioParams={setAudioParams}
          />
        }
        )}

    </div>
  )
}

export default DisplayListening