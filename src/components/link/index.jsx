import React from 'react'

export default function Url(props) {
    const { href, text, classes } = props
    return (
        <a href={href} className={classes}>{text}</a>
    )
}
