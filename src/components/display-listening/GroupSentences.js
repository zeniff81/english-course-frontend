import React from 'react'

import Sentence from './Sentence'

const GroupSentences = ({ groupIndex, sentences, playSound, setAudioParams }) => {

  return (
    <div className="display-listening__text">
      {sentences.map((sentence, sentenceIndex) => {
        return (
          <Sentence
            key={sentenceIndex}
            sentence={sentence}
            sentenceIndex={sentenceIndex}
            groupIndex={groupIndex}
            playSound={playSound} 
          setAudioParams = { setAudioParams } />
        )
      })}
    </div>
  )
}

export default GroupSentences