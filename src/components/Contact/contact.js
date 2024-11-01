import { Form } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters/animatedLetters'
import './contact.scss'
import { useState, useEffect } from 'react'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const conArray = ['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e', '!']
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <div className="container contact-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            strArray={conArray}
            idx={10}
            letterClass={letterClass}
          />
        </h1>
        <form className="form">
          <label className="form-label">Name</label>
          <input className="form-input" />
        </form>
      </div>
    </div>
  )
}

export default Contact
