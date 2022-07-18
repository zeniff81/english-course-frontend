import React from 'react'
import classes from './cardprogress.module.css'

const CardProgress = ({right, wrong, unknown}) => {
  return (
    <div className={classes.cardprogress}>
      <button className={[classes.button, classes.right].join(' ')}>
        {right.length}
      </button>
      <button className={[classes.button, classes.unknown].join(' ')}>
        {unknown.length}
      </button>
      <button className={[classes.button, classes.wrong].join(' ')}>
        {wrong.length}
      </button>
    </div>
  )
}

export default CardProgress