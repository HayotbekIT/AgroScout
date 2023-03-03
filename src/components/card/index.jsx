import React from 'react'
import { useCart } from 'react-use-cart'
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
                            <img src={img} alt="Image error upload" />
                        </div>
                        <h3 className="card__default-title">{title}</h3>
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
                        <img src={img} alt="Error upload" />
                    </div>
                    <div className="card__product-desc">
                        <h3 className="card__product-title">
                            {title}
                        </h3>
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
            
        default:
            console.log("error")
            break;
    }
}
