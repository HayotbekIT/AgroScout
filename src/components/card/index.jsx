import React from 'react'
import { useCart } from 'react-use-cart'
import Heading from '../heading'
import Url from '../link'
import Image from "./../image"
import "./cards.scss"

export default function Card(props) {
    const { card, img, title, body, brand, model, price, obj } = props
    const { addItem } = useCart()

    switch (card) {
        case "card":
            return (
                <div className='card card__default'>
                    <div className="card__default-top">
                        <div className="card__default-icon">
                            <Image src={img} alt={"Error upload"} />
                        </div>
                        <Heading heading={"h3"} classes={"card__default-title"}>{title}</Heading>
                    </div>
                    <div className="card__default-text">
                        <p>{body}</p>
                    </div>
                </div>
            )

        case "product":
            return (
                <div className="card card__product">
                    <div className="card__product-imageholder">
                        <Image src={img} alt={"Error upload"} />
                    </div>
                    <div className="card__product-desc">
                        <Heading heading={"h3"} classes={"card__product-title"}>{title}</Heading>
                        <ul className='card__product-list'>
                            <li className='card__product-item'>Бренд: {brand}</li>
                            <li className='card__product-item'>Модель: {model}</li>
                        </ul>
                        <p className='card__product-price'>${price}</p>

                        <div className="card__product-buttons">
                            <button className='card__product-button' onClick={() => addItem(obj)}>Добавить в корзину</button>
                        </div>
                    </div>

                </div>
            )

        case "news-card":
            return (
                <div className='card news-card'>
                    <div className="news-card__imageholder">
                        <Image src={img} />
                    </div>
                    <div className="news-card__content">
                        <Heading heading={"h3"} classes={"news-card__title"}>{title}</Heading>
                        <div className="news-card__text">
                            {body}
                        </div>
                        <Url href={"#!"} classes={"news-card__link"}>
                            Читать полностью
                        </Url>
                    </div>
                </div>
            )

        case "news-block":
            return ("")

        default:
            console.log("error")
            break;
    }
}
