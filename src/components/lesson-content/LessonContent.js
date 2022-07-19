import React, { useEffect, useState } from 'react'
import './lessoncontent.css'
import Task from '../tasks/Task'
import DisplayFlashcards from '../display-flashcards/DisplayFlashcards'
import DisplayListening from '../display-listening/DisplayListening'
import DisplayReading from '../display-reading/DisplayReading'

import taskList from '../tasks/tasks-list'
import TaskIcon from '../tasks/TaskIcon'

function LessonContent({ lesson, setCurrentTileId }) {
  const { title, subtitle, background, color } = lesson  
  const [tasks, setTasks] = useState()
  const [taskId, setTaskId] = useState(0)
  const [display, setDisplay] = useState(false)

  useEffect(() => {
    setTasks(taskList)
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
          <div className="lessoncontent__taskicon">
            <TaskIcon task={tasks[taskId]}/>
          </div>
        </div>
        <div className="lessonContent__tasksbody">
        {!display && tasks.map((task, index) => {
          return <Task key={index} task={task} setTaskId={setTaskId} setDisplay={setDisplay} />
        })}
        </div>
      </div>

      {display && <div className="lessoncontent__display">
        {tasks[taskId].type === 'flashcards' && <DisplayFlashcards task={tasks[taskId]} clickGoBackTasks={clickGoBackTasks} />}
        {tasks[taskId].type === 'listening' && <DisplayListening task={tasks[taskId]} clickGoBackTasks={clickGoBackTasks} />}
        {tasks[taskId].type === 'reading' && <DisplayReading task={tasks[taskId]} clickGoBackTasks={clickGoBackTasks} />}
      </div>  }

      <div className="lessoncontent__bottom-buttons">
        {!display && <button className="lessoncontent-back" onClick={clickGoBackLessons}>GO BACK TO LESSONS</button>}
        {display && <button className="lessoncontent-back" onClick={clickGoBackTasks}>GO BACK TO TASKS</button>}
      </div>

    </div>
  )
}

export default LessonContent

