import React from 'react'
import './task.css'
import TaskIcon from './TaskIcon'


const Task = ({task, setTaskId, setDisplay}) => {
  
  const { title, background, color } = task

  const clickTask = () => {
    setTaskId(task.id)
    setDisplay(true)
  }
  
  return (
    <div className="task" onClick={clickTask}>
      <div className="task__title" style={{background, color}}>{title}</div>
      <div className="task__icon">
        <TaskIcon task={task}/>
      </div>
    </div>
  )
}

export default Task