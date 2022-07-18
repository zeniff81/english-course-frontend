import React from 'react'
import CardActions from './card-actions'
import classes from './card.module.css'

const Card = ({card, flipped, onclick}) => {
  const [animate, setAnimate] = React.useState(false)
  const { id, image, text } = card

  const broadcastAction = action => {
    console.log('action selected:', action)
  }

  const handleClick = () => {
    setAnimate(true)
    onclick(id)

    setTimeout(() => {
      setAnimate(false)
    }, 1000)
  }

  return (
    <div
      className={`${classes.card} ${animate ? classes.heartbeat : ''}`}
      onClick={handleClick}
    >
      <div
        className={classes.cardFront}>
        <p>{flipped ? text : <img src={image} alt="front img" />}</p>
      </div>
      <CardActions broadcastAction={broadcastAction} />
    </div>)
}

export default Card