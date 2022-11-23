import React from 'react';
//import {Form, Button} from 'react-bootstrap';
//import {Helmet} from 'react-helmet';
import './register.css'
import logo from './logo.png';
import {Link, Router} from 'react-router-dom'

import {useState} from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser, faEnvelope, faLock, faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';


import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';



function Register(props)
{    
    const {changeSlide} = props;
    const [passwordShown, setPasswordShown] = useState(false)

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
      };

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
                            placeholder=" Nombre"
                            id="nombre"
                            value={values.nombre}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.nombre ? <div className='error'>{errors.nombre}</div> : null}
                    </div>
    
                    <div>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <input
                            type="email"
                            name="email"
                            placeholder=" Correo"
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
                            type={passwordShown ? "text" : "password"}
                            name="password"
                            placeholder=" Contraseña"
                            id="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.password ? <div className='error'>{errors.password}</div> : null}
                    
                    </div>
    
                    <div className = "inputContainer">
                    <FontAwesomeIcon icon={faLock} className="candado"/>
                        <input
                            type={passwordShown ? "text" : "password"}
                            name="confirmpassword"
                            placeholder=" Confirmar Contraseña"
                            id="confirmpassword"
                            value={values.confirmpassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <button className='showPasswordBttn' onClick={togglePassword}><FontAwesomeIcon icon={passwordShown ? faEyeSlash : faEye} /></button>
                        {errors.confirmpassword ? <div className='error'>{errors.confirmpassword}</div> : null}
                    </div>

                    

                    <button type="submit" >Sign Up</button>
                </form> 
            
            <div className="footerContainer">¿Ya tienes cuenta? <Link onClick={changeSlide}>LogIn</Link></div>
        </div>
        
    )}
    
    </Formik>
    </>

            
    );
}

export default Register;

{/* <div className="sideContainer">
            <div className='logoContainer'> 
            <img src={logo} alt="logo" className="logo"/>
            </div>
            <div className="formContainer">
            <h2>Bienvenido a Paladium Bank</h2> 
        </div>
                <div className="footerContainer">ADSFASDFSADF</div>
        </div>*/}


{/* <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Ingresar email" name="email" onChange={handleChange} value={values.email} />
                    {errors.email ? <div>{errors.email}</div> : null}
                </Form.Group>
                <Form.Group controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Ingresar nombre de usuario" name="username" onChange={handleChange} value={values.username} />
                    {errors.username ? <div>{errors.username}</div> : null}
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Ingresar contraseña" name="password" onChange={handleChange} value={values.password} />
                    {errors.password ? <div>{errors.password}</div> : null}
                </Form.Group>
                <Form.Group controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirmar contraseña" name="confirmpassword" onChange={handleChange} value={values.confirmpassword} />
                    {errors.confirmpassword ? <div>{errors.confirmpassword}</div> : null}
                </Form.Group>
                <Button variant="primary" type="submit">
                    LogIn
                </Button>
            </Form> */}


{/* <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Ingresar email" name="email" onChange={handleChange} value={values.email} />
                    {errors.email ? <div>{errors.email}</div> : null}
                </Form.Group>
                <Form.Group controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Ingresar nombre de usuario" name="username" onChange={handleChange} value={values.username} />
                    {errors.username ? <div>{errors.username}</div> : null}
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Ingresar contraseña" name="password" onChange={handleChange} value={values.password} />
                    {errors.password ? <div>{errors.password}</div> : null}
                </Form.Group>
                <Form.Group controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirmar contraseña" name="confirmpassword" onChange={handleChange} value={values.confirmpassword} />
                    {errors.confirmpassword ? <div>{errors.confirmpassword}</div> : null}
                </Form.Group>
                <Button variant="primary" type="submit">
                    LogIn
                </Button>
            </Form> */}




// const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

//     const formik = useFormik({
//         initialValues: {
//             username: '',
//             password: ''
//         },
//         onSubmit: values => {
//             alert(JSON.stringify(values, null, 2));
//         },
//     });

//     return (
//         <div>
//             <Form onSubmit={handleSubmit}>
//                 <Form.Group controlId="formBasicEmail">
//                     <Form.Label>Username</Form.Label>
//                     <Form.Control type="text" placeholder="Enter username" name="username" onChange={handleChange} value={values.username} />
//                 </Form.Group>

//                 <Form.Group controlId="formBasicPassword">
//                     <Form.Label>Password</Form.Label>
//                     <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange} value={values.password} />
//                 </Form.Group>
//                 <Button variant="primary" type="submit">
//                     Submit
//                 </Button>
//             </Form>
//         </div>
//     );