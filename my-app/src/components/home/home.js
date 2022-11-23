import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';

import Header from './components/header/header'
import Footer from './components/footer/footer';
import Login from './components/login/login'
import Register from './components/register/register';
import './home.css'


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
      <Header slideLogIn = {animateLogIn} slideSignUp = {animateSignUp}/>
      
      <div className='bodyContainer'>
          <div className='textoInicialContainer'>
              <h1 id='textoInicial'>Reforzamos tu posición en el ecosistema de la banca digital</h1>
              <p>(Info sobre el banco), consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
              <Link id='bttnSignUpInicio' onClick={animateSignUp}>Sign Up</Link>
              <div style={{ borderTop: "2px solid #fff ", marginLeft: 20, marginRight: 20}}></div>
              <Link id='bttnSignUpInicio' onClick={animateSignUp}>Sign Up</Link>
          </div>
      </div>
      
      <div className={slide ? 'logInContainer logInContainerSlided' : 'logInContainer'}>
          <div onClick={animateLogIn} className={slide ? 'blurDiv divSlided' : 'blurDiv'}></div>
          <div className={slide ? 'logInSlide logInSlided' : 'logInSlide'}>{log ? <Login changeSlide={changeSlide}/> : <Register changeSlide={changeSlide}/>}</div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home