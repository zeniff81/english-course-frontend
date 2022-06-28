import React from 'react'
import './lessoncontent.css'
import Task from '../tasks/Task'
import task_icon from '../../resources/dummy/task_icon.jpg'

function LessonContent({ lesson }) {
  const { title, subtitle, background, color } = lesson

  return (
    <div className="lessoncontent">
      <div className="lessoncontent__header" style={{ background, color }}>
        <div className="lessoncontent__title">{title}</div>
        <div className="lessoncontent__subtitle">{subtitle}</div>
      </div>
      <div className="lessoncontent__tasks" style={{background: 'purple', color: 'yellow'}}>
        <div className="lessoncontent__tasksheader">READING <img src={task_icon} alt="" className="taskicon" /></div>
        <Task />
        <Task />
        <Task />
      </div>
    </div>
  )
}

export default LessonContent

