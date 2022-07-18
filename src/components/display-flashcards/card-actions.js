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
      <button className={[classes.button, classes.right].join(' ')}>
        <GrStatusGood />
      </button>
      <button className={[classes.button, classes.unknown].join(' ')}>?</button>
      <button className={[classes.button, classes.wrong].join(' ')}>
        <IoMdClose />
      </button>
    </div>
  )
}

export default CardActions