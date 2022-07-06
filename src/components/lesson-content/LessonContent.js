import React from 'react'
import './lessoncontent.css'
import Task from '../tasks/Task'
import task_icon from '../../resources/dummy/task_icon.jpg'
import dummyTasks from '../../resources/dummy/dummyTasks'

function LessonContent({ lesson, setCurrentTileId }) {
  const { title, subtitle, background, color } = lesson  
  const [tasks, setTasks] = React.useState()
  const [taskId, setTaskId] = React.useState(0)
  const [currentTask, setCurrentTask] = React.useState()

  React.useEffect(() => {
    setTasks(dummyTasks)
  }, [])

  const clickGoBack = () => {
    setTimeout(() => {
      setCurrentTileId(null)
    }, 200);
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
          return <Task key={index} task={task} setTaskId={setTaskId} />
        })}

      </div>
      <button className="lessoncontent-back" onClick={clickGoBack}>GO BACK</button>
    </div>
  )
}

export default LessonContent

