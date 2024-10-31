import { useEffect, useState } from 'react'
import './home.scss'
import AnimatedLetters from '../AnimatedLetters/animatedLetters'
import { Link } from 'react-router-dom'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = [' ', 'M', 'a', 's', 'o', 'n']
  const jobArray = [
    '-',
    'S',
    'o',
    'f',
    't',
    'w',
    'a',
    'r',
    'e',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <div>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m </span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={20}
            />
          </h1>
          <h2>.NET Expert / Application Support / Enterprise Applications</h2>
          <Link to="/contact" className="contact-button">
            CONTACT ME
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
