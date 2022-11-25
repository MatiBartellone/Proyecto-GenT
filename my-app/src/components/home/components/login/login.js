import React from 'react';
//import {Form, Button} from 'react-bootstrap';
//import {Helmet} from 'react-helmet';
import './login.css'
import logo from './logo.png';
import {Link, Router} from 'react-router-dom'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser, faEnvelope, faLock} from '@fortawesome/free-solid-svg-icons';

import axios from 'axios';

import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';


const baseURL = 'http://localhost:8080/login';

function createPost(values) {
    // Simple POST request with a JSON body using axios
    const article = { values};
    axios.post(baseURL, article)
        .then(response => {
            console.log(response.data + " " + response.status)
            if(response.status === 200){
                alert("Login correcto");
            }else if(response.status === 250){  
                alert("Usuario incorrecto");
            }else{
                alert("Contraseña incorrecta");
            }

        });
}


function Login(props)
{   
    const {changeSlide} = props;
    
    const validateLogin = Yup.object({
        email: Yup.string()
            .required('El email es obligatorio')
            .email('El email no es válido'),

        

        password: Yup.string()
            .required('La contraseña es obligatoria')
            .min(6, 'La contraseña debe tener al menos 6 caracteres')
            .concat(Yup.string().matches(/[A-Z]/, 'La contraseña debe tener al menos una letra mayúscula'))
            .concat(Yup.string().matches(/[0-9]/, 'La contraseña debe tener al menos un número'))
            .concat(Yup.string().matches(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, 'La contraseña debe tener al menos un caracter especial')),

    });

    return (
    <>
    <Formik
        initialValues={{
            email: '',
            password: '',
        }}
        validationSchema={validateLogin}
        onSubmit={values => {
            //console.log(values);
            createPost(values);
        }}
    >
    {( {handleSubmit, handleChange, handleBlur, values, errors} ) => (
        <div className="sideContainer">
            <div className='logoContainer'> 
                <Link to='/'><img src={logo} alt="logo" className="logo"/></Link>
            </div>
            
                 
            <form onSubmit={handleSubmit} className="formulario">
            <h2>Bienvenido a Paladium Bank</h2>
                    <div>
                        <FontAwesomeIcon icon={faUser} />
                        <input
                            className='icono-placeholder'
                            type="email"
                            name="email"
                            placeholder="Email"
                            id="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.email ? <div className='error'>{errors.email}</div> : null}
                    </div>
    
    
                    <div>
                    <FontAwesomeIcon icon={faLock} />
                        <input
                            type="password"
                            name="password"
                            placeholder="Contraseña"
                            id="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.password ? <div className='error'>{errors.password}</div> : null}
                    </div>
    
    
                    <button type="submit">LogIn</button>
                </form> 
            
            <div className="footerContainer">¿No Tienes Cuenta? <Link onClick={changeSlide}>SignUp</Link></div>
        </div>
    )}
    
    </Formik>
    </>

            
    );
}

export default Login;
