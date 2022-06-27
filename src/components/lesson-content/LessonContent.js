import React from 'react'
import './lessoncontent.css'

function LessonContent({ lesson }) {
  const { title, subtitle, background, color } = lesson

  return (
    <div className="lessoncontent">
      <div className="lessoncontent__header" style={{ background, color }}>
        <div className="lessoncontent__title">{title}</div>
        <div className="lessoncontent__subtitle">{subtitle}</div>
      </div>
      <div className="lessoncontent__content" style={{background: 'purple', color: 'yellow'}}>
        This is the content
      </div>
    </div>
  )
}

export default LessonContent

