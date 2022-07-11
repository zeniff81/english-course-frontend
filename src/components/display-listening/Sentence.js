import React from 'react'
import './sentence.css'


const Sentence = ({gropuIndex, sentence, sentenceIndex,  audioPlayerRef, setAudioParams}) => {
  

  const theme = () =>{
    const arrBackgroundColorsDark = [
      '#9C640C',
      '#1A5276',
      '#117864',
      '#797D7F',
      '#212F3C']
      const arrBackgroundColorsLight = [
      '#F9EBEA',
      '#E8DAEF',
      '#D5F5E3',
      '#F9E79F',
      '#F2F3F4',
      '#D5D8DC']
      
      const selectRandomItem = (arrColors) => {
        return arrColors[Math.floor(Math.random() * arrColors.length)]
      }
  
      const DarkOrLightBg = selectRandomItem([
        arrBackgroundColorsDark,
        arrBackgroundColorsLight
      ])
      const bgColor = selectRandomItem(DarkOrLightBg)
      const textColor = DarkOrLightBg === arrBackgroundColorsDark 
      ? 'white' 
      : 'black' 

  
  
      return {bgColor, textColor}
  
  }

  const {bgColor, textColor} = theme()

  const play = () => {
    setAudioParams({
      groupIndex: gropuIndex,
      sentenceIndex: sentenceIndex      
    })
    audioPlayerRef.current.play()
  }

    return (
    <p 
          className="display-listening__text-item"
          style={{
            backgroundColor: bgColor,
            color: textColor
          }}
          onMouseEnter={null}
          onClick={play}
          >            
            {sentence}
          </p>
  )
}

export default Sentence