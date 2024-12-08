import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/cartContext';

const CartWidget = () => {

    const {cantidadEnCarrito}= useContext(CartContext);
  return (
    <div className='container-carrito'>
        <Link to ="/carrito" className="btn btn-primary my-2 my-sm-0" type="submit">
            <i className="bi bi-bag-heart-fill"></i>
            <span className='numero-carrito'>{cantidadEnCarrito()}</span>
        </Link>
    </div>
  )
}

export default CartWidget;