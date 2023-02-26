import React from 'react'
import Image from '../image'
import Url from '../link'

export default function Social(props) {
    const {href, classes, src, alt} = props
  return (
    <div className={classes}>
        <Url href={href}>
            <Image src={src} alt={alt} />
        </Url>
    </div>
  )
}
