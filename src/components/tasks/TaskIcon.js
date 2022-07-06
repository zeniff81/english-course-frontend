import React from 'react'
import listening_icon  from '../../resources/listening-icon.png'
import reading_icon  from '../../resources/reading-icon.png'
import flashcard_icon  from '../../resources/flashcard-icon.png'

const TaskIcon = ({task}) => {
  const [task_icon, setTaskIcon] = React.useState(listening_icon)


  React.useEffect(() => {
    if (task.type === 'listening') {
      setTaskIcon(listening_icon)
    } else if (task.type === 'reading') {
      setTaskIcon(reading_icon)
    } else if (task.type === 'flashcards') {
      setTaskIcon(flashcard_icon)
    }
  }, [task])

  return (
    <img src={task_icon} alt="task icon" />
  )
}

export default TaskIcon