import React from 'react'
import "./menu.scss"
import Home from "./../../../images/icons/navigation-icon/home-icon.svg"
import insects from "./../../../images/icons/navigation-icon/insects-icon.svg"
import Drone from "./../../../images/icons/navigation-icon/drone-icon.svg"
import Map from "./../../../images/icons/navigation-icon/map-icon.svg"
import Drones from "./../../../images/icons/navigation-icon/drones-icon.svg"
import News from "./../../../images/icons/navigation-icon/news-icon.svg"
import Company from "./../../../images/icons/navigation-icon/company-icon.svg"
import Phone from "./../../../images/icons/navigation-icon/phone-icon.svg"
import WA from "./../../../images/icons/whatsapp-icon.svg"
import Telegram from "./../../../images/icons/telegram-icon.svg"
import Wechat from "./../../../images/icons/wechat-icon.svg"

export default function NavbarMenu(props) {
  const { classes } = props
  
  const navItems = [
    {
      id: 1,
      icon: Home,
      text: "Главная"
    },
    {
      id: 2,
      icon: insects,
      text: "Энтомофаги"
    },
    {
      id: 3,
      icon: Drone,
      text: "Опрыскивание"
    },
    {
      id: 4,
      icon: Map,
      text: "Картография и мониторинг"
    },
    {
      id: 5,
      icon: Drones,
      text: "Каталог продукции"
    },
    {
      id: 6,
      icon: News,
      text: "Новости"
    },
    {
      id: 7,
      icon: Company,
      text: "О компании"
    },
    {
      id: 8,
      icon: Phone,
      text: "Контакты"
    }
  ]
  return (
    <ul className={'NavbarMenu ' + classes}>
      {
        navItems.map((navItem) => {
          const {id, icon, text} = navItem
          return (
            <li className='NavbarMenu__item' key={id} >
              <a href="#!" className='NavbarMenu__link'>
                <div className="NavbarMenu__icon">
                  <img src={icon} alt={text} />
                </div>
                <div className="NavbarMenu__text">{text}</div>
              </a>
            </li>
          )
        })
      }
      <li className='NavbarMenu__item NavbarMenu__social'>
        <div className="NavbarMenu__social-wrapper">
          <a href="#!" className="NavbarMenu__social__item">
            <img src={WA} alt="What's app icon" />
          </a>
          <a href="#!" className="NavbarMenu__social__item">
            <img src={Telegram} alt="Telegram icon" />
          </a>
          <a href="#!" className="NavbarMenu__social__item">
            <img src={Wechat} alt="Wechat icon" />
          </a>
        </div>
      </li>
    </ul>
  )
}
