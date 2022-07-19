import React from 'react'
import classes from './cardprogress.module.css'

const ACTIONS = {
  RIGHT: 'right',
  UNKNOWN: 'unknown',
  WRONG: 'wrong'
}

const CardProgress = ({ right, wrong, unknown, broadcastAction }) => {
  const handleClick = (e, actionType) => {
    broadcastAction(actionType)
  }
  return (
    <div className={classes.cardprogress}>
      <div className={classes.categorycontainer}>
        <div className={classes.label}>Right</div>
        <button onClick={e => handleClick(e, ACTIONS.RIGHT)} className={[classes.button, classes.right].join(' ')}>
          {right}
        </button>
      </div>
      <div className={classes.categorycontainer}>
        <div className={classes.label}>Unknown</div>
        <button onClick={e => handleClick(e, ACTIONS.UNKNOWN)} className={[classes.button, classes.unknown].join(' ')}>
          {unknown}
        </button>
      </div>
      <div className={classes.categorycontainer}>
        <div className={classes.label}>Wrong</div>
        <button onClick={e => handleClick(e, ACTIONS.WRONG)} className={[classes.button, classes.wrong].join(' ')}>
          {wrong}
        </button>
      </div>
    </div>
  )
}

export default CardProgress