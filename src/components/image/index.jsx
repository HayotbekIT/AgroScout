import React from 'react'
import "./image.scss"

export default function Image(props) {
    const { src, alt } = props
    return (
        <div className='Image'>
            <img src={src} alt={alt} />
        </div>
    )
}
