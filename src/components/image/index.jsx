import React from 'react'
import "./image.scss"

export default function Image(props) {
    const { src, alt, classes = "" } = props
    return (
        <div className={'Image ' + classes}>
            <img src={src} alt={alt} />
        </div>
    )
}
