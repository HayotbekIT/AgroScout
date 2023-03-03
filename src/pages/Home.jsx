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
import { productsArray } from '../db'

export default function Home() {

  const [products, setProducts] = useState([])
  useEffect(() => {
    setProducts(productsArray)
  }, [])

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
      </main>
    </div>
  )
}
