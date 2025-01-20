import { Form } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters/animatedLetters'
import './contact.scss'
import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const conArray = ['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e', '!']
  const refForm = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_1dwt9uo',
        'template_68y21lg',
        refForm.current,
        'vAeletkM8QjaAc5JK'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

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
        <p className="contact-para">
          If you're interested in contact me about oppourtunities, employment or
          otherwise, please use the contact form below to send me an email, or
          find my contact details at the bottom of the page.
        </p>
        <div className="contact-form">
          <form ref={refForm} onSubmit={sendEmail}>
            <ul>
              <li className="half">
                <input type="text" name="name" placeholder="Name" required />
              </li>
              <li className="half">
                <input type="email" name="email" placeholder="Email" required />
              </li>
              <li>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />
              </li>
              <li>
                <textarea
                  name="message"
                  required
                  placeholder="Message"
                ></textarea>
              </li>
              <li>
                <input type="submit" value="Submit" className="flat-button" />
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
