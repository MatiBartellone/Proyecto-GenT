import React from 'react';
//import {Form, Button} from 'react-bootstrap';
//import {Helmet} from 'react-helmet';
import './login.css'
import logo from './logo.png';
import {Link, Router} from 'react-router-dom'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser, faEnvelope, faLock} from '@fortawesome/free-solid-svg-icons';


import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';



function Login(props)
{   
    const {changeSlide} = props;
    
    const validateLogin = Yup.object({
        nombre: Yup.string()
            .required('El nombre de usuario es obligatorio')
            .min(4, 'El nombre de usuario debe tener al menos 4 caracteres')
            .max(15, 'El nombre de usuario debe tener como máximo 15 caracteres'),
        email: Yup.string()
            .required('El email es obligatorio')
            .email('El email no es válido'),

        

        password: Yup.string()
            .required('La contraseña es obligatoria')
            .min(6, 'La contraseña debe tener al menos 6 caracteres')
            .concat(Yup.string().matches(/[A-Z]/, 'La contraseña debe tener al menos una letra mayúscula'))
            .concat(Yup.string().matches(/[0-9]/, 'La contraseña debe tener al menos un número'))
            .concat(Yup.string().matches(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, 'La contraseña debe tener al menos un caracter especial')),

        confirmpassword: Yup.string()
            .required('La confirmación de la contraseña es obligatoria')
            .oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden')
    });

    return (
    <>
    <Formik
        initialValues={{
            nombre: '',
            email: '',
            password: '',
            confirmpassword: ''
        }}
        validationSchema={validateLogin}
        onSubmit={values => {
            console.log(values);
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
                            type="text"
                            name="nombre"
                            placeholder="Nombre"
                            id="nombre"
                            value={values.nombre}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.nombre ? <div className='error'>{errors.nombre}</div> : null}
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
