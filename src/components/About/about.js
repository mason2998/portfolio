import AnimatedLetters from '../AnimatedLetters/animatedLetters'
import './about.scss'
import { useEffect, useState } from 'react'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const titleArray = ['A', 'b', 'o', 'u', 't', ' ', 'M', 'e', '!']

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={titleArray}
            idx={10}
          />
        </h1>
        <br />
        <p className="about-para">
          Thanks for visiting my site! I hope you like it, I made this site
          originally to learn react and decided to turn it into a portfolio
          site. Below you can find some more information about me. If you're
          looking for specific skills, you can find them on the skills page on
          the navbar above!
        </p>
        <br />
        <h2>Work experience</h2>
        <p className="about-para">
          For the past 3 years I've been working at Unisys, as part of a client
          team for a major UK bank. Whilst on the team, I quickly became a
          leading SME for the ePortal Unisys product, an enterprise level
          platform designed to allow users to quickly modernise their legacy
          mainframe applications. I cemented myself as a key member of team,
          quickly being asked to become a member of the on-call support team
          responsible for 24/7 support of a critical business application.
        </p>
        <p className="about-para">
          I've got experience developing solutions throughout the whole software
          development lifecycle, managing live incidents and communicating with
          shareholders. Outside of the day-to-day I also co-manage a training
          group for the company, focussing on upskilling people in ePortal, .NET
          and live support.
        </p>
        <br />
        <h2>Hobbies and Interests</h2>
        <p className="about-para">
          <ul className="list">
            <li className="list-object">- Gym</li>
            <li className="list-object">- Cooking</li>
            <li className="list-object">- Hiking</li>
            <li className="list-object">- Mountain Biking</li>
            <li className="list-object">- Gaming</li>
          </ul>
        </p>
      </div>
    </div>
  )
}

export default About
