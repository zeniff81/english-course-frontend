import React, { useEffect, useState } from 'react'
import classes from './displayflashcards.module.css'
import dog from '../../resources/dummy/dog.jpg'
import useFetch from '../../client/useFetch'
import Card from './card'
import CardProgress from './card-progress'
import {TbRotate360} from 'react-icons/tb'

const DisplayFlashcards = () => {
  const [invertedFlipped, setInvertedFlipped] = useState(false)
  const [cards, setCards] = useState([
    {
      id: 0,
      front: dog,
      back: 'dog',
      flipped: invertedFlipped ? true : false,
      background: '#ffb553',
      color: 'black'
    },
  ])

  const [right, setRight] = useState([])
  const [wrong, setWrong] = useState([])
  const [unknown, setUnknown] = useState([])

  const [buttonFlipped, setButtonFlipped] = useState(false)

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
    card.flipped = invertedFlipped ? true : false;
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

  const flipAll = () => {
    setInvertedFlipped(!invertedFlipped)
    setButtonFlipped(!buttonFlipped)
    
    setCards(cards.map(card => {
      card.flipped = !card.flipped
      return card
    }))

    setRight(right.map(card => {
      card.flipped = !card.flipped
      return card
    }))

    setWrong(wrong.map(card => {
      card.flipped = !card.flipped
      return card
    }))

    setUnknown(unknown.map(card => {
      card.flipped = !card.flipped
      return card
    }))
  }

  if(cards.length === 0 && wrong.length === 0 && unknown.length === 0) {
    return(
      <div className={classes.displayFlashcards}>
      <div className={classes.displayFlashcards__header}>
        <button onClick={flipAll}className={[classes.flipall, buttonFlipped && classes.flipall__pushed].join(' ')}><TbRotate360/></button>
        <CardProgress right={right.length} wrong={wrong.length} unknown={unknown.length} broadcastAction={restoreProgressDesk} />
      </div>
      <h1 className={classes.allcompleted}>All cards <b>CLEAR</b>!</h1>
      </div>
    ) 
    
  }

  return (
    <div className={classes.displayFlashcards}>
      <div className={classes.displayFlashcards__header}>
        <button onClick={flipAll}className={[classes.flipall, buttonFlipped && classes.flipall__pushed].join(' ')}><TbRotate360/></button>
        <CardProgress right={right.length} wrong={wrong.length} unknown={unknown.length} broadcastAction={restoreProgressDesk} />
      </div>
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