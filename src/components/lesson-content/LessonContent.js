import React from 'react'
import './lessoncontent.css'
import Task from '../tasks/Task'
import task_icon from '../../resources/dummy/task_icon.jpg'
import dummyTasks from '../../resources/dummy/dummyTasks'

function LessonContent({ lesson, setCurrentTileId }) {
  const { title, subtitle, background, color } = lesson  
  const [tasks, setTasks] = React.useState()
  const [taskId, setTaskId] = React.useState(0)
  const [display, setDisplay] = React.useState(false)

  React.useEffect(() => {
    setTasks(dummyTasks)
  }, [])

  const clickGoBackLessons = () => {
    setTimeout(() => {
      setCurrentTileId(null)
    }, 10);
  }
  
  const clickGoBackTasks = () => {
    setTimeout(() => {
      setDisplay(false)
    }, 10);
  }

  if(tasks===undefined)return null

  return (
    <div className="lessoncontent">
      
      <div className="lessoncontent__header" style={{ background, color }}>
        <div className="lessoncontent__title">{title}</div>
        <div className="lessoncontent__subtitle">{subtitle}</div>
      </div>

      <div className="lessoncontent__tasks">
        <div className="lessoncontent__tasksheader" style={{ background: tasks[taskId].background}}>
          {tasks[taskId].title}
          <img src={task_icon} alt="" className="taskicon" />
        </div>
        {tasks.map((task, index) => {
          return <Task key={index} task={task} setTaskId={setTaskId} setDisplay={setDisplay} />
        })}
      </div>

      {display && <div className="lessoncontent__display"></div>  }
      {!display && <button className="lessoncontent-back" onClick={clickGoBackLessons}>GO BACK TO LESSONS</button>}
      {display && <button className="lessoncontent-back" onClick={clickGoBackTasks}>GO BACK TO TASKS</button>}

    </div>
  )
}

export default LessonContent

