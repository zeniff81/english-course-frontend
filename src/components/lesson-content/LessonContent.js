import React from 'react'
import './lessoncontent.css'
import Task from '../tasks/Task'
import task_icon from '../../resources/dummy/task_icon.jpg'

function LessonContent({ lesson, setCurrentTileId }) {
  const { title, subtitle, background, color } = lesson

  const clickGoBack = () => {
    setTimeout(() => {
      setCurrentTileId(null)
    }, 200);
  }


  return (
    <div className="lessoncontent">
      <div className="lessoncontent__header" style={{ background, color }}>
        <div className="lessoncontent__title">{title}</div>
        <div className="lessoncontent__subtitle">{subtitle}</div>
      </div>
      <div className="lessoncontent__tasks">
        <div className="lessoncontent__tasksheader">READING <img src={task_icon} alt="" className="taskicon" /></div>
        <Task />
        <Task />
        <Task />
      </div>
      <button className="lessoncontent-back" onClick={clickGoBack}>GO BACK</button>
    </div>
  )
}

export default LessonContent

