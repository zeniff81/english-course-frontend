import React, { useEffect } from 'react'
import classes from './displayflashcards.module.css'
import dog from '../../resources/dummy/dog.jpg'
import useFetch from '../../client/useFetch'

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

  const { data, loading, error } = useFetch('https://62d4a14b5112e98e48514aa8.mockapi.io/flashcards')

  useEffect(() => {
    if (data) {
      setCards(data)
    }
  }, [data])

  if (loading) {
    return <h1>Loading flashcards...</h1>
  }

  if (error) {
    return <h1>Error: {error.message}</h1>
  }

  const flipCard = (id) => {
    setCards(cards.map(card => {
      if (card.id === id) {
        card.flipped = !card.flipped
      }
      return card
    }))
  }

  return (
    <div
      className={classes.displayFlashcards}>
      {cards.map(card => (
        <div
          className={classes.card}
          key={card.id}
          onClick={() => flipCard(card.id)}
          >
          <div
            className={classes.cardFront}>
            {!card.flipped && <img src={card.image} alt="front img" />}
            {card.flipped && <p>{card.text}</p>}
          </div>
        </div>
      ))}
    </div>
  )
}

export default DisplayFlashcards