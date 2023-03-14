import React, { useEffect, useState } from 'react'
import Card from '../components/card'
import Container from '../components/container'
import Header from '../components/header'
import SectionTitle from '../components/section-title'
import People from "./../images/icons/card/people-icon.svg"
import Tech from "./../images/icons/card/tech-icon.svg"
import Savings from "./../images/icons/card/savings-icon.svg"
import Services from "./../images/icons/card/services-icon.svg"
import Drone from "./../images/icons/card/drone-icon.svg"
import OwnService from "./../images/icons/card/own-service-icon.svg"
import Image from "./../components/image"
import ArrowDown from "./../images/icons/arrow-down-icon.svg"
import { productsArray } from '../db'
import Map from "./../images/other/map.svg"
import Bionovatic from "./../images/clients/client-logo-bionovatic-icon.svg"
import Bayer from "./../images/clients/client-logo-bayer-icon.svg"
import Corteva from "./../images/clients/client-logo-corteva-icon.svg"
import KWS from "./../images/clients/client-logo-kws-icon.svg"
import News1 from "./../images/news/1.jpeg"
import News2 from "./../images/news/2.jpeg"
import News3 from "./../images/news/3.jpeg"


export default function Home() {

  const [products, setProducts] = useState([])
  useEffect(() => {
    setProducts(productsArray)
  }, [])

  const [rotateImage, setRotateImage] = useState(false)

  const RotateImageFunc = () => {
    setRotateImage(rotateImage => !rotateImage)
  }

  return (
    <div>
      <Header />
      <main className="inner">
        <section className='advantage'>
          <Container>
            <div className="advantage__titles">
              <SectionTitle title={"Почему нам дверяют?"} subtitle={"Наши приемущества "} />
            </div>
            <div className="advantage__cards">
              <Card card={"card"} img={People} title={"Квалифицированные сотрудники"} body={"Все наши сотрудники имеют многолетний опыт работы в сфере беспилотной авиации. Нами было реализовано множество проектов различной тематики и самой различной сложности.   "} />

              <Card card={"card"} img={Tech} title={"Высокотехнологичное оборудование"} body={"Наша компания использует современное оборудование, которое обеспечивает высокое качество в выполнении поставленных задач."} />

              <Card card={"card"} img={Savings} title={"Экономия"} body={"Использование беспилотных технологий экономит вам много времени и денег. За счет отсутствия технологической колеи сохраняется до 6% урожая. Снижение расхода препаратов до 30%"} />

              <Card card={"card"} img={Services} title={"Оперативность"} body={"За рабочую смену наши специалисты способны защитить более 1000 гектар ваших полей, кустарников и деревьев."} />

              <Card card={"card"} img={Drone} title={"Собственное производство "} body={"Мы разрабатываем и производим беспилотные летательные аппараты, поэтому знаем все тонкости их работы и можем настроить их под конкретные задачи и потребности клиентов."} />

              <Card card={"card"} img={OwnService} title={"Свой сервис"} body={"Любой наш аппарат можно сдать на плановое техническое обслуживание или же в ремонт в наш собственный сервис, который гарантирует качество и оперативность выполнения работ."} />
            </div>
          </Container>
        </section>
        <section className='product'>
          <Container>
            <div className="product__titles">
              <SectionTitle title={"Наши предложения"} subtitle={"Наша продукция"} />
            </div>
            <div className="product__cards">
              {
                products.map((product, index) => {
                  const { img, title, brand, model, price, id } = product
                  return (
                    <Card brand={brand} model={model} price={price} title={title} key={id} img={img} card={"product"} obj={product} ></Card>
                  )
                })
              }
            </div>
          </Container>
        </section>
        <section className='service'>
          <Container>
            <div className="service__content">
              <h2 className="title-2 service__title">Оказываем услуги!</h2>
              <p className="service__text">
                Принимаем заявки по биологической и химической защите растений дронами, картографии и мониторингу.
              </p>
              <button className='service__button'>Оставить заявку</button>
            </div>
          </Container>
        </section>
        <section className="about-company">
          <Container>
            <SectionTitle title={"Кто мы такие"} subtitle={"О компании"} />
            <div className="about-company__content" >
              <p>
                Компания STS.center применяет высокотехнологичные агродроны и БПЛА, которые модернизированы и собраны нашими инженерами для сельского и лесного хозяйства, а также для промышленности. В СТС Центр работают опытные агрономы, энтомологи, пилоты, менеджеры и инженеры. Сегодня мы имеем один из самых современных парков дронов в России, что позволяет нам выполнять работы широкого спектра от простой аэрофотосъемки до лидарного сканирования местности и тепловизионного контроля. Внедрение беспилотных технологий в вашем бизнесе поможет сэкономить время и деньги, а также позволит получить большое преимущество перед вашими конкурентами.
              </p>
              <div className={rotateImage ? "about-company__content-block hidden" : "about-company__content-block"} onClick={RotateImageFunc} >
                <Image classes={rotateImage ? "rotate" : ""} src={ArrowDown} alt={"Error upload"} />
              </div>
            </div>
          </Container>
        </section>
        <section className='work'>
          <Container>
            <div className="work__titles">
              <SectionTitle title={"Где мы работаем"} subtitle={"Регионы присутствия"} />
            </div>
            <div className="work__row">
              <div className="work__lists">
                <ol className="work__list">
                  <li>1. Московская область</li>
                  <li>2. Ростовская область</li>
                  <li>3. Краснодарский край</li>
                  <li>4. Ставропольский край</li>
                  <li>5. Северная Осетия</li>
                  <li>6. Кабардино-Балкария</li>
                  <li>7. Пензеская область</li>
                  <li>8. Белгородская область</li>
                  <li>9. Саратовская область</li>
                  <li>10. Воронежская область</li>
                  <li>11. Волгоградская область</li>
                  <li>12. Астраханская область</li>

                </ol>
                <ol className="work__list">
                  <li>13. Самарская область</li>
                  <li>14. Липецкая область</li>
                  <li>15. Орловская область</li>
                  <li>16. Курская область</li>
                  <li>17. Ульяновская область</li>
                  <li>18. Карачаево-Черкессия</li>
                  <li>19. Брянская область</li>
                  <li>20. Республика Татарстан</li>
                  <li>21. Тамбовская область</li>
                  <li>22. Тульская область</li>
                  <li>23. Калужская область</li>
                  <li>24. Республика Крым</li>
                </ol>
              </div>
              <div className="work__imageholder">
                <Image src={Map} />
              </div>
            </div>
          </Container>
        </section>
        <section className='clients'>
          <Container>
            <SectionTitle title={"Наши клиенты "} subtitle={"Партнеры"} />
            <div className="clients__icons">
              <div className="client__icons-row">
                <div className="client__icon">
                  <Image src={Bionovatic} />
                </div>
                <div className="client__icon">
                  <Image src={Bayer} />
                </div>
                <div className="client__icon">
                  <Image src={Corteva} />
                </div>
                <div className="client__icon">
                  <Image src={KWS} />
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className='home-news'>
          <Container>
            <SectionTitle title={"Что у нас нового"} subtitle={"Новости"} />
            <div className="home-news__row">
              <Card card={"news-card"} img={News1} title={"Дроны – будущее сельского хозяйства"} body={"Новые технологии не обходят стороной и самую консервативную отрасль – сельское хозяйство. Согласно прогнозам международной общественной организации Association for Unmanned Vehicle Systems International, в скором времени агросектор станет крупнейшим потребителем дронов – беспилотных летательных аппаратов (БПЛА)."} />

              <Card card={"news-card"} img={News2} title={"Дроны – будущее сельского хозяйства"} body={"Новые технологии не обходят стороной и самую консервативную отрасль – сельское хозяйство. Согласно прогнозам международной общественной организации Association for Unmanned Vehicle Systems International, в скором времени агросектор станет крупнейшим потребителем дронов – беспилотных летательных аппаратов (БПЛА)."} />

              <Card card={"news-card"} img={News3} title={"Дроны – будущее сельского хозяйства"} body={"Новые технологии не обходят стороной и самую консервативную отрасль – сельское хозяйство. Согласно прогнозам международной общественной организации Association for Unmanned Vehicle Systems International, в скором времени агросектор станет крупнейшим потребителем дронов – беспилотных летательных аппаратов (БПЛА)."} />
            </div>
          </Container>
        </section>
      </main>
    </div>
  )
}
