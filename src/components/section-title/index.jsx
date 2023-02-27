import React from 'react'
import "./section-title.scss"
import Heading from "../heading"

export default function SectionTitle(props) {
    const {subtitle, title} = props
  return (
    <div className='section-titles' >
        <Heading heading={"h2"}>
            {title}
        </Heading>
        <Heading classes={"subtitle"}>
            {subtitle}
        </Heading>
    </div>
  )
}