import React from 'react'
import Container from '../components/container'
import Heading from '../components/heading'
import Background1 from "./../images/header/background-1.jpeg"

export default function Home() {
  return (
    <header className='section-header' style={{ backgroundImage: `url(${Background1})`, }} >
      <div className="header-wrapper">
        <Container>
          <div className="header__content">
            <Heading heading={"h1"} >
              AgroScout - беспилотные технологии для сельского хозяйства и промышлености
            </Heading>
          </div>
        </Container>
      </div>
    </header>
  )
}
