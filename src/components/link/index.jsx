import React from 'react'
import PropTypes from "prop-types"
import "./link.scss"

export default function Url(props) {
    const { href, text,children, classes } = props
    return (
        <a href={href} className={classes}>{text || children}</a>
    )
}