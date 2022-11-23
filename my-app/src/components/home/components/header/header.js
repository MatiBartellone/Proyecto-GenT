import React from 'react'
import logo from './logo.png';
import './header.css'

import { useState, useEffect } from 'react';

import {Link, Router} from 'react-router-dom'

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    }
  }, [scrollDirection]);

  return scrollDirection;
};

function Header(props) {

  const scrollDirection = useScrollDirection();

  const [scroll, setScroll] = useState(false);

  const {slideLogIn, slideSignUp} = props;

  const changeClass = () => {
    setScroll(true);
  }

  return (
    <>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto"></link>
    <div onScroll={changeClass} className={`headerContainer ${scrollDirection == "down" ? 'hiddenHeader' : 'shownHeader'}`}>

        <div className='navBttnsContainer'>
            <Link to='/' id='inicioLink' className='headerLink'>Inicio</Link>
            <Link to='/' id='beneficiosLink' className='headerLink'>Beneficios</Link>
            <Link to='/' id='bancoLink' className='headerLink'>Banco</Link>
        </div>

        <div className='logoHeaderContainer'>
            <Link to='/'><img src={logo} alt="logo" className="logoHeader"/></Link>
        </div>

        <div className='accountBttnsContainer'>
            <Link onClick={slideLogIn} id='logInLink' className='headerLink'>Log in</Link>
            <Link onClick={slideSignUp} id='signUpLink' className='headerLink'>Sign up</Link>
        </div>
    </div>
    </>
  )
}

export default Header