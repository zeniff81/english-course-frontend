import React from 'react'

import Sentence from './Sentence'

const GroupSentences = ({ groupIndex, sentences, audioPlayerRef, setAudioParams }) => {
  console.log(`${groupIndex} - GroupSentences-sentences: ${sentences}`)

  return (
    <div className="display-listening__text">
      {sentences.map((sentence, sentenceIndex) => {
        return (
          <Sentence
            key={sentenceIndex}
            sentence={sentence}
            sentenceIndex={sentenceIndex}
            gropuIndex={groupIndex}
            audioPlayerRef={audioPlayerRef} 
          setAudioParams = { setAudioParams } />
        )
      })}
    </div>
  )
}

export default GroupSentences