import React from 'react'
import './displaylistening.css'
import dummyReading from '../../resources/dummy/dummyReading'

const arrBackgroundColorsDark = ['#9C640C', '#1A5276', '#117864', '#797D7F', '#212F3C']
const arrBackgroundColorsLight = ['#F9EBEA', '#E8DAEF', '#D5F5E3', '#F9E79F', '#F2F3F4', '#D5D8DC']

const selectRandomItem = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)]
}


const DisplayListening = () => {
  const [items, setItems] = React.useState([])

  React.useEffect(() => {
    setItems(dummyReading)
  }, [])

  return (
    <div className="display-reading">
      {
        items.map((item, index) => {
          
          return (
            <div key={index} className="display-reading__text">
              {item.text.map((text, index) => {
                const bgColor = selectRandomItem([arrBackgroundColorsDark, arrBackgroundColorsLight])
                const textColor = bgColor === arrBackgroundColorsDark ? '#FFFFFF' : '#000000'
                return (
                  <p
                  className='display-reading__text-item'
                  key ={index}
                    style={{
                      backgroundColor: selectRandomItem(bgColor),
                      color: textColor
                    }}>{text}</p>
                )
              })}
            </div>
          )
        }
        )}

    </div>
  )
}

export default DisplayListening