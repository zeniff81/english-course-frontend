import React from 'react'
import './lessonheader.css'

function LessonHeader({title, subtitle, background, color}) {
  return (
    <div className="lessonheader" style={{background, color}}>
      <div className="lessonheader__title">{title}</div>
      <div className="lessonheader__subtitle">{subtitle}</div>
    </div>
  )
}

export default LessonHeader