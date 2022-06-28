import React from 'react'
import './task.css'
import task_icon from '../../resources/dummy/task_icon.jpg'

const Task = () => {
  return (
    <div className="task">
      <div className="task__title">LISTEN</div>
      <div className="task__icon">
        <img src={task_icon} alt="task icon" />
      </div>
    </div>
  )
}

export default Task