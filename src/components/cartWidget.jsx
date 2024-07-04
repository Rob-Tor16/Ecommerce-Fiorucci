import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const CartWidget = () => {

    const {cantidadEnCarrito}= useContext(CartContext);
  return (
    <div className='container-carrito'>
        <Link to ="/carrito" className="button d-flex gap-2" id="cartButton"> 
            <i className="bi bi-cart3"></i>
            <span className='numero-carrito'>{cantidadEnCarrito()}</span>
        </Link>
    </div>
  )
}

export default CartWidget;