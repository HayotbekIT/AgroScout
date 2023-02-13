import React from 'react'
import PropTypes from "prop-types"
import "./container.scss"


export default function Container({ children }) {
    return (
        <div className='Container'>{children}</div>
    )
}

Container.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element.isRequired
    ])
}