import React from 'react'
import './task.css'
import task_icon from '../../resources/dummy/task_icon.jpg'

const Task = ({task, setTaskId}) => {
  const { title, background, color } = task

  const clickTask = () => {
    setTaskId(task.id)
  }
  
  return (
    <div className="task" onClick={clickTask}>
      <div className="task__title" style={{background, color}}>{title}</div>
      <div className="task__icon">
        <img src={task_icon} alt="task icon" />
      </div>
    </div>
  )
}

export default Task