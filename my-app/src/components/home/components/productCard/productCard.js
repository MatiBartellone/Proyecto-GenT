import React from 'react'
import './productCard.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCoins} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'

function ProductCard(props) {

  const {imagen, precio, descuento, lugarDeDescuento} = props;

  return (
    <div className='productCardContainer'>
      <Link to='/beneficios'>
        <div className='productImgContainer'>
          <img src={imagen}/>
        </div>
        <div className='productCardInfo'>
            <div className='costo'><FontAwesomeIcon icon={faCoins} style={{marginRight:'7%', color:'yellow'}}/>{precio}</div>
            <div className='linea'></div>
            <div className='descuentoContainer'>
              <div className='descuento'>{descuento}% off</div>
              <div className='lugar'>{lugarDeDescuento}</div>
            </div>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard