import React from 'react'
import classes from './displayflashcards.module.css'
import dog from '../../resources/dummy/dog.jpg'

const DisplayFlashcards = () => {
  const [cards, setCards] = React.useState([
    {
      id: 0,
      front: dog,
      back: 'dog',
      flipped: false,
      background: '#ffb553',
      color: 'black'
    },
  ])
  return (
    <div
      className={classes.displayFlashcards}>
      {cards.map(card => (
        <div
          className={classes.card}
          key={card.id}
          style={{ background: card.background, color: card.color }}>
          <div
            className={classes.cardFront}>
            <img
              src={card.front} alt="front img" />
          </div>
          <div
            className={classes.cardBack}>
            <p>{card.back}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default DisplayFlashcards