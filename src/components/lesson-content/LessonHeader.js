import React from 'react'
import './lessoncontent.css'

function LessonContent({lesson}) {
  const {title, subtitle, background, color} = lesson
  return (
    <div className="lessonheader" style={{background, color}}>
      <div className="lessonheader__title">{title}</div>
      <div className="lessonheader__subtitle">{subtitle}</div>
    </div>
  )
}

export default LessonContent