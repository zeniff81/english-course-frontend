import React from 'react'
import classes from './cardactions.module.css'
import { GrStatusGood } from 'react-icons/gr'
import { IoMdClose } from 'react-icons/io'

const CardActions = () => {
  const handleClick = e => {
    e.stopPropagation()
  }
  return (
    <div
      className={classes.cardactions}
      onClick={handleClick}
    >
      <button
        className={classes.button}
        style={{ background: '#5bc7a5' }}
        >
        <GrStatusGood />
      </button>
      <button
        className={classes.button}
        style={{ background: '#f0d4a1' }}
        >?</button>
      <button
        className={classes.button}
        style={{ background: '#f0a3a1' }}
      >
        <IoMdClose />
      </button>
    </div>
  )
}

export default CardActions