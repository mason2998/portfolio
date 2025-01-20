import AnimatedLetters from '../AnimatedLetters/animatedLetters'
import SkillItem from '../SkillItem/skillItem'
import './skills.scss'
import { useEffect, useState } from 'react'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const titleArray = ['S', 'k', 'i', 'l', 'l', 's', '.']

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <div className="container skills-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={titleArray}
            idx={10}
          />
        </h1>
        <br />
        <SkillItem
          skillName=".NET"
          skillText="Maintaining a large scale, high avaiality .NET application has given me much experience in .NET. I ahve written code used by millions of people in the UK, ensuring that my code runs efficiently and without error. Most recently I have designed and written a multi-application suite of RESTful applications used by a major UK banking client to route and process banking transactions. Other notable experience includes: multiple bug fixes, an implementation of OAuth security, troubleshooting/diagnosis of complex issues."
        />
        <SkillItem
          skillName="Enterprise Applications"
          skillText="During my time at Unisys I have worked with many enterprise level applications. I specialise in the Unisys ePortal product that provides clients with the ability modernise legacy applications using .NET. I have also worked on the Unisys Dorado mainframe systems, writing banking applications. Throughout my time working with these systems, I have had to constantly keep performance, reliability, availability and functionality in mind. In addition to working closely with these critical systems, I also redesigned the disaster recovery process for a .NET client; successfully reducing the downtime by 50%."
        />
        <SkillItem
          skillName="Solution Design"
          skillText="Solution design is one of my main responsbilities. Being an expert in the ePortal product I have been involved in most designs over the last few years for our main client in addition to regularly helping with other clients around the world. Aside from the previously mentioned solutions, I have also designed: mutliple automation pipelines as part of CI/CD, git integration for the OS2200 mainframe, an transaction orchestration solution using .NET, a POC for Kafka streaming into ePortal and many more. Throughout all these designs I've had to have a holistic overarching view of the environment the applications will be running in. Additonally, I have produced reliable estimates and updated key stakeholders throught the design process."
        />
        <SkillItem
          skillName="Mentoring"
          skillText="When hiring new staff, I often volunteers to train new starters both in technical areas and general onboarding. I am also a co-lead for the ePortal training group that develops people's skills with ePortal. As a leader of this group, my job is to organise training sessions, write and mark assessments and track the progress of it's members."
        />
        <SkillItem
          skillName="Incident Management"
          skillText="Since 2022 I have been part of the on-call team support ePortal for our main client. During this time I have recieved mutliple high priority call outs. When called out, speed and efficency is key. I have to gain an understanding of the problem and offer potential solutions quickly. Often during these call-outs I help manage the incident call, ensuring that stakeholders are infromed and aidn in getting the required people (whether that be the network team or otherwise) on the call to get to a solution as quickly as possible. When immediate solutions are not possible, I offer temporary measures to maintain service with as minimal impact as possible. "
        />
        <SkillItem
          skillName="Other Programming Languages"
          skillText="A list of all programming languages I have experience with included: C#, COBOL, Python, Powershell, JavaScript/React, HTML/CSS. Being less experienced, but still familiar with: Fortran95, Unisys SSG, PHP and Java."
        />
      </div>
    </div>
  )
}

export default Skills
