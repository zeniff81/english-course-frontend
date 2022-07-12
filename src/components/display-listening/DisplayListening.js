import React from 'react'
import './displaylistening.css'
import sentencesList from '../../resources/dummy/sentencesList'
import { audioList } from './getAudioFiles'
import GroupSentences from './GroupSentences'


const DisplayListening = () => {
  const audioPlayerRef = React.createRef(null)

  const playSound = ({groupIndex, sentenceIndex}) => {
    const src = audioList[groupIndex].files[sentenceIndex];
    console.log('src', src)
    console.log('audioPlayerRef.current', audioPlayerRef.current)
     audioPlayerRef.current.src = src;
     audioPlayerRef.current.play()
  }

  return (
    <div className="display-listening">
      {<audio 
        controls 
        ref={audioPlayerRef} 
        style={{ display: 'none' }} 
      />}
      {
        sentencesList.map((item, groupIndex) => {
          return <GroupSentences
            key={groupIndex}
            groupIndex={groupIndex}
            sentences={item.sentences}
            playSound={playSound}
          />
        }
        )}

    </div>
  )
}

export default DisplayListening