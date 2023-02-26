import React, { useState } from 'react'
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
import CloseMenu from "./../../images/icons/close-menu.svg"
import Phone2 from "./../../images/icons/phone-icon-2.svg"
import NavbarMenu from './menu/menu'



export default function Navigation() {
    const [stateMenu, setMenu] = useState(false)
    const SetMenuFunc = ()=>{
        setMenu(stateMenu => !stateMenu)
    }
    // console.log(stateMenu)
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
                            <Url text={"+7861 21791 18"} href={"#!"} classes="Navigation__link Navigation__link-mobile" />
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
                            <button onClick={SetMenuFunc} className="Navigation__option-item Navigation__option-menu">
                                <Image src={ stateMenu? CloseMenu :Menu } alt={"Menu icon"} />
                                <NavbarMenu classes={stateMenu ? "NavbarMenu-block": ""} />
                            </button>
                            <button className="Navigation__option-item Navigation__option-item--mobile">
                                <Image src={Phone2} alt={"Menu icon"} />
                            </button>
                        </div>

                    </div>
                </div>
            </Container>
        </nav>
    )
}
