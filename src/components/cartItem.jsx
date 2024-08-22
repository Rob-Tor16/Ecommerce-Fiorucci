import React, { useContext } from 'react'
import { CartContext } from '../context/cartContext'
import "./cartItem.css"

const cartItem = ({producto}) => {

    const {borrarItem} = useContext(CartContext)
  return (
    <div className="carrito-items">
          <div className="carrito-item bg-white">  
              <div className="carrito-lista d-flex">
                <img className="item-imagen" width="100px"src={producto.imagen} alt={producto.titulo} />
                <p>{producto.titulo}</p>
                <p>Cantidad: {producto.cantidad}</p>
                <p>Precio : ${producto.precio}</p>
                <p > Total: ${producto.precio * producto.cantidad}</p>
                <button onClick={() => borrarItem(producto.id)} className='btn btn-danger'><span><i  className="i-eliminar bi-trash-fill"></i></span></button>
              </div>
          </div>
        </div>
  )
}

export default cartItem