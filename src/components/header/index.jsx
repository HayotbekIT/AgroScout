import React from 'react'
import { useLocation } from 'react-router-dom'
import Container from '../../components/container'
import Heading from '../../components/heading'
import Background1 from "./../../images/header/background-1.jpeg"
import DroneFlying from "./../../images/icons/drone-flying-icon.svg"
import "./header.scss"

export default function Header() {
    const HomeContentFunc = () => {
        return (
            <div className='header__content'>
                <Heading heading={"h1"} classes="header__title" >
                    AgroScout - беспилотные технологии для сельского хозяйства и промышлености
                </Heading>
                <div className="header__content-image">
                    <img src={DroneFlying} alt="Drone flying" />
                </div>
                <div className="header__content-advantage">
                    <div className="advantage__wrap">
                        <div className="advantage__title">50 000 Га</div>
                        <div className="advantage__text">ежегодной обработки</div>
                    </div>
                    <div className="advantage__wrap">
                        <div className="advantage__title">30%</div>
                        <div className="advantage__text">экономии средств</div>
                    </div>
                    <div className="advantage__wrap">
                        <div className="advantage__title">10 команд</div>
                        <div className="advantage__text">специалистов</div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <header className='section-header' style={{ backgroundImage: `url(${useLocation().pathname ? "/" && Background1 : ""})`, }} >
            <div className="header-wrapper">
                <Container>
                    {
                        useLocation().pathname ? "/" && HomeContentFunc() : ""
                    }
                </Container>
            </div>
        </header>
    )
}