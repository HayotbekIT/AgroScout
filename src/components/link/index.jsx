import React from 'react'
import PropTypes from "prop-types"

export default function Url(props) {
    const { href, text,children, classes } = props
    return (
        <a href={href} className={classes}>{text || children}</a>
    )
}

Url.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element.isRequired
    ])
}