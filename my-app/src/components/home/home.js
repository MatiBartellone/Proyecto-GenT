import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';

import Header from './components/header/header'
import Footer from './components/footer/footer';
import Login from './components/login/login'
import Register from './components/register/register';
import ProductCard from './components/productCard/productCard';
import './home.css'

import pizza from './images/pizza.jpg'
import smartwatch from './images/smartwatch.jpg'
import zara from './images/zara.jpg'
import aerolineas from './images/aerolineas.jpg'
import cellphone from './images/cellphone.jpg'


function Home() {
  const [slide, setSlide] = useState(false);
  const [log, setLog] = useState(true);

  const animateLogIn = () => {
    setSlide(!slide);
    setLog(true);
  }
  const animateSignUp = () => {
    setSlide(!slide);
    setLog(false);
  }
  const changeSlide = () => {
    setLog(!log);
  }


  return (
    <div className='homeContainer'>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat"></link>
      <Header slideLogIn = {animateLogIn} slideSignUp = {animateSignUp} paginaSeleccionada={'home'}/>
      
      <div className='bodyContainer'>
          <div className='textoInicialContainer'>
              <h1 id='textoInicial'>Reforzamos tu posición en el ecosistema de la banca digital</h1>
              <p>(Info sobre el banco), consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
              <Link id='bttnSignUpInicio' onClick={animateSignUp}>Sign Up</Link>
              <div className='linea'></div>
          </div>
          <div className='bottomMarketContainer'>
            <h1 id='textoHomeMarket'>¡Descuentos <span className='naranja'>imperdibles</span>!</h1>
            <div className='cardsContainer'>
                <div className='masCanjeados'>los <span style={{fontWeight:'700', marginLeft:'3%'}}>mas canjeados!</span></div>
                <ProductCard imagen = {pizza} descuento={10} precio={2000} lugarDeDescuento={"la torre"}/>
                <ProductCard imagen = {smartwatch} descuento={15} precio={4000} lugarDeDescuento={"smart-watches"}/>
                <ProductCard imagen = {zara} descuento={10} precio={2000} lugarDeDescuento={"zara"}/>
            </div>
            <div className='cardsContainer'>
                <ProductCard imagen = {aerolineas} descuento={25} precio={5000} lugarDeDescuento={"aerolineas"}/>
                <ProductCard imagen = {cellphone} descuento={25} precio={1200} lugarDeDescuento={"telefonia"}/>
                <ProductCard imagen = {pizza} descuento={10} precio={2000} lugarDeDescuento={"la torre"}/>
            </div>
            <Link id='bttnVerMasMarket' to='/beneficios'>Ver Mas</Link>
            
          </div>
          <div className='footerContainerHome'>
            <Footer/>
      </div>
      </div>
      
      <div className={slide ? 'logInContainer logInContainerSlided' : 'logInContainer'}>
          <div onClick={animateLogIn} className={slide ? 'blurDiv divSlided' : 'blurDiv'}></div>
          <div className={slide ? 'logInSlide logInSlided' : 'logInSlide'}>{log ? <Login changeSlide={changeSlide}/> : <Register changeSlide={changeSlide}/>}</div>
      </div>
      
    </div>
  )
}

export default Home