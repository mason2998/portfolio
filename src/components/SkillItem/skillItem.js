import { useState } from 'react'
import './skillItem.scss'
import * as React from 'react'

const SkillItem = ({ skillName, skillText }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [contentHeight, setContentHeight] = useState(0)

  const contentRef = React.createRef()

  const toggleContent = () => {
    setContentHeight(isExpanded ? 0 : contentRef.current.scrollHeight)
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="skill-tab" onClick={toggleContent}>
      <div className="skill-header">
        <span>
          <p className="skill-label">{skillName}</p>
        </span>
        <span>
          <p className="skill-button">{isExpanded ? '-' : '+'}</p>
        </span>
      </div>
      <div
        ref={contentRef}
        style={{
          height: `${contentHeight}px`,
          transition: 'height 0.3s ease',
          overflow: 'hidden',
        }}
      >
        <p className="skill-text text-area">{skillText}</p>
      </div>
    </div>
  )
}

export default SkillItem
