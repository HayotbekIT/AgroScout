import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../container'
import Image from '../image'
import Logo from "./../../images/logo.png"
import "./navigation.scss"
import Url from "./../link"
import Phone from "./../../images/icons/phone-icon.svg"

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
                    <div className="Navigation__right"></div>
                </div>
            </Container>
        </nav>
    )
}
