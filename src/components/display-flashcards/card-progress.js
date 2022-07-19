import React from 'react'
import classes from './cardprogress.module.css'

const ACTIONS = {
  RIGHT: 'right',
  UNKNOWN: 'unknown',
  WRONG: 'wrong'
}

const CardProgress = ({right, wrong, unknown, broadcastAction}) => {
  const handleClick = (e, actionType) => {
    broadcastAction(actionType)
  }
  return (
    <div className={classes.cardprogress}>
      <button onClick={e => handleClick(e, ACTIONS.RIGHT)} className={[classes.button, classes.right].join(' ')}>
        {right}
      </button>
      <button onClick={e => handleClick(e, ACTIONS.UNKNOWN)} className={[classes.button, classes.unknown].join(' ')}>
        {unknown}
      </button>
      <button onClick={e => handleClick(e, ACTIONS.WRONG)} className={[classes.button, classes.wrong].join(' ')}>
        {wrong}
      </button>
    </div>
  )
}

export default CardProgress