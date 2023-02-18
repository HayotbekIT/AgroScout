import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../container'
import Image from '../image'
import Logo from "./../../images/logo.png"
import "./navigation.scss"
import Url from "./../link"
import Phone from "./../../images/icons/phone-icon.svg"
import Social from '../social'
import VK from "./../../images/icons/vk-icon.svg"
import Instagram from "./../../images/icons/instagram-icon.svg"
import TikTok from "./../../images/icons/tik-tok-icon.svg"
import Basket from "./../../images/icons/basket-icon.svg"
import Menu from "./../../images/icons/menu-icon.svg"



export default function Navigation() {
    return (
        <nav className="Nav">
            <Container>
                <div className="Navigation__row">
                    <div className="Navigation__left">
                        <Link to="/" className='logo'>
                            <Image src={Logo} alt={"Logo Image"} />
                        </Link>

                        <div className="Navigation__link-wrapper">
                            <Image src={Phone} alt={"Phone icon"} />
                            <Url text={"+7861 21791 18"} href={"#!"} classes="Navigation__link" />
                        </div>
                    </div>
                    <div className="Navigation__right">
                        <div className="Navigation__social">
                            <Social href={"#!"} classes={"Navigation__social-item"} src={VK} />
                            <Social href={"#!"} classes={"Navigation__social-item"} src={Instagram} />
                            <Social href={"#!"} classes={"Navigation__social-item"} src={TikTok} />
                        </div>
                        <div className="Navigation__lang">
                            <button className="Navigation__lang-item">en</button>
                            <button className="Navigation__lang-item">ru</button>
                        </div>
                        <div className="Navigation__option">
                            <button className="Navigation__option-item">
                                <Image src={Basket} alt={"Basket icon"} />
                            </button>
                            <button className="Navigation__option-item">
                                <Image src={Menu} alt={"Basket icon"} />
                            </button>
                        </div>

                    </div>
                </div>
            </Container>
        </nav>
    )
}
