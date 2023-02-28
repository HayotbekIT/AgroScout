import React from 'react'
import "./cards.scss"

export default function Card(props) {
    const { card, img, title, body } = props

    switch (card) {
        case "card":
            return (
                <div className='card card__default'>
                    <div className="card__default-top">
                        <div className="card__default-icon">
                            <img src={img} alt={"Image error upload"} />
                        </div>
                        <h3 className="card__default-title">{title}</h3>
                    </div>
                    <div className="card__default-text">
                        <p>{body}</p>
                    </div>
                </div>
            )
            break;
        default:
            console.log("error")
            break;
    }
}
