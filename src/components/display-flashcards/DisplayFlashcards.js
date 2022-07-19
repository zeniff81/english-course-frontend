import React, { useEffect, useState } from 'react'
import classes from './displayflashcards.module.css'
import dog from '../../resources/dummy/dog.jpg'
import useFetch from '../../client/useFetch'
import Card from './card'
import CardProgress from './card-progress'

const DisplayFlashcards = () => {
  const [cards, setCards] = useState([
    {
      id: 0,
      front: dog,
      back: 'dog',
      flipped: false,
      background: '#ffb553',
      color: 'black'
    },
  ])

  const [right, setRight] = useState([])
  const [wrong, setWrong] = useState([])
  const [unknown, setUnknown] = useState([])

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

  const moveCard = (id, action) => {
    const card = cards.find(card => card.id === id)
    card.flipped = false
    if (action === 'right') {
      setRight(right.concat(card))
    } else if (action === 'wrong') {
      setWrong(wrong.concat(card))
    } else if (action === 'unknown') {
      setUnknown(unknown.concat(card))
    }
    setCards(cards.filter(card => card.id !== id))
  }

  const restoreProgressDesk = (actionType) => {
    let tempArrCards;
    if (actionType === 'right') {
      tempArrCards = right
      setRight([])
    } else if (actionType === 'wrong') {
      tempArrCards = wrong
      setWrong([])
    } else if (actionType === 'unknown') {
      tempArrCards = unknown
      setUnknown([])
    }


     const newArrCards = [
       ...cards,
      ...tempArrCards
     ]

     setCards(newArrCards)
     
  }

  if(cards.length === 0 && wrong.length === 0 && unknown.length === 0) {
    return <h1 className={classes.allcompleted}>All cards <b>CLEAR</b>!</h1>
  }

  return (
    <div className={classes.displayFlashcards}>
      <CardProgress right={right.length} wrong={wrong.length} unknown={unknown.length} broadcastAction={restoreProgressDesk} />
      {cards.map(card => (
        <Card 
        key={card.id} 
        card={card} 
        onclick={flipCard} 
        flipped={card.flipped}
        moveCard={moveCard}
        />
      ))}
    </div>
  )
}

export default DisplayFlashcards