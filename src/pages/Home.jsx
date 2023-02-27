import React from 'react'
import Container from '../components/container'
import Header from '../components/header'
import SectionTitle from '../components/section-title'

export default function Home() {
  return (
    <div>
      <Header />
      <div className="inner">
        <Container>
          <SectionTitle title={"Почему нам дверяют?"} subtitle={"Наши приемущества "} />
        </Container>
      </div>
    </div>
  )
}
