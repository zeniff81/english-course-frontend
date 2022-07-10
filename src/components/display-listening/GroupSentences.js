import React from 'react'

import Sentence from './Sentence'

const GroupSentences = ({groupIndex, sentences}) => {
  console.log(`${groupIndex} - GroupSentences-sentences: ${sentences}`)

  return (
    <div className="display-listening__text">
      {sentences.map((sentence, sentenceIndex) => {
        return(
          <Sentence key={sentenceIndex} sentence={sentence} sentenceIndex={sentenceIndex} gropuIndex={groupIndex}/>
        )
      })}
    </div>
  )
}

export default GroupSentences